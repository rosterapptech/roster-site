import type { APIRoute } from "astro";
import { createHash, timingSafeEqual } from "node:crypto";

import { getVerifier, peekUnverifiedEnvelope } from "../../../../lib/asn/verifier.js";
import { buildMessage } from "../../../../lib/asn/messages.js";
import { sendMessage } from "../../../../lib/asn/telegram.js";

/**
 * App Store Server Notifications V2 -> Telegram.
 *
 * Liegt als Astro Server Endpoint in src/pages/, nicht als Vercel-Function im
 * Root-`api/`-Ordner: @astrojs/vercel schreibt das Deployment komplett nach
 * Build Output API v3 (.vercel/output/config.json endet auf einen 404-Catch-All),
 * ein Root-`api/` wird dabei nicht mitgebaut.
 *
 * Node und nicht Edge: die Signaturpruefung braucht node:crypto und X.509.
 * Deshalb darf in astro.config.mjs kein edge-Runtime fuer diese Route gesetzt
 * werden - `edgeMiddleware: true` betrifft nur die Middleware, nicht _render.
 */
export const prerender = false;

/**
 * Vergleicht zwei Strings ohne Laengen- oder Inhaltsleck.
 * Der Umweg ueber SHA-256 macht beide Seiten gleich lang - timingSafeEqual wirft
 * sonst bei unterschiedlicher Laenge und verraet damit die Laenge des Secrets.
 */
function secretMatches(provided: unknown, expected: string): boolean {
  if (typeof provided !== "string" || expected === "") return false;
  const a = createHash("sha256").update(provided).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

/**
 * VerificationException der Apple-Library hat eine leere `message`; die Information
 * steckt im numerischen `status` (siehe VerificationStatus). Ohne das hier landet
 * ein kompletter Stacktrace im Log und man ist trotzdem nicht schlauer.
 */
function describeError(error: any): string {
  if (!error) return "unbekannt";
  const status = error.status !== undefined ? ` (status ${error.status})` : "";
  return `${error.message || error.name || "Fehler"}${status}`;
}

export const POST: APIRoute = async ({ params, request }) => {
  // 404 statt 401: fuer einen Scanner soll dieser Pfad schlicht nicht existieren.
  if (!secretMatches(params.secret, process.env.ASN_PATH_SECRET ?? "")) {
    return new Response(null, { status: 404 });
  }

  let signedPayload: unknown;
  try {
    signedPayload = (await request.json())?.signedPayload;
  } catch {
    return new Response(null, { status: 400 });
  }
  if (typeof signedPayload !== "string" || signedPayload === "") {
    return new Response(null, { status: 400 });
  }

  let payload: any;
  let transaction: any = null;
  let renewalInfo: any = null;
  let verifier: any;

  try {
    // Ungepruefte Vorab-Dekodierung, ausschliesslich zur Auswahl des Verifiers.
    // Alles Weitere basiert auf dem verifizierten `payload` unten.
    const envelope = peekUnverifiedEnvelope(signedPayload);
    verifier = getVerifier(envelope.environment, envelope.bundleId);
    payload = await verifier.verifyAndDecodeNotification(signedPayload);
  } catch (error) {
    // Signatur, Bundle-ID oder Environment stimmen nicht. 400 - und nichts senden.
    console.error("[asn] Verifikation fehlgeschlagen:", describeError(error));
    return new Response(null, { status: 400 });
  }

  // Ab hier gilt: was auch immer schiefgeht, Apple bekommt 200. Ein Nicht-200
  // loest stundenlange Retries aus und spuelt dieselbe Meldung mehrfach aufs Handy.
  try {
    // Beide Felder sind je nach Event-Typ optional (TEST und RENEWAL_EXTENSION/SUMMARY
    // haben gar kein `data`, Non-Consumables kein `signedRenewalInfo`).
    try {
      if (payload?.data?.signedTransactionInfo) {
        transaction = await verifier.verifyAndDecodeTransaction(payload.data.signedTransactionInfo);
      }
    } catch (error) {
      console.error("[asn] signedTransactionInfo nicht verifizierbar:", describeError(error));
    }

    try {
      if (payload?.data?.signedRenewalInfo) {
        renewalInfo = await verifier.verifyAndDecodeRenewalInfo(payload.data.signedRenewalInfo);
      }
    } catch (error) {
      console.error("[asn] signedRenewalInfo nicht verifizierbar:", describeError(error));
    }

    const isSandbox = payload?.data?.environment === "Sandbox";
    const sendSandbox = process.env.SEND_SANDBOX_EVENTS !== "false";

    if (!isSandbox || sendSandbox) {
      // Anders als bei einer (req, res)-Function laesst sich hier nicht erst 200
      // schicken und danach senden - die Response IST der Rueckgabewert. Telegram
      // wird deshalb vorher awaited, gedeckelt durch das 5-s-Timeout im Wrapper.
      // Der Fehlerfall aendert nichts am Status: unten steht immer 200.
      await sendMessage(buildMessage(payload, transaction, renewalInfo));
    }
  } catch (error) {
    // Bewusst nur console.error: kein externer Logging-Dienst, keine Payloads,
    // keine Transaction-IDs nach draussen.
    console.error("[asn] Zustellung fehlgeschlagen:", describeError(error));
  }

  return new Response(null, { status: 200 });
};

/** Alles ausser POST. */
export const ALL: APIRoute = () =>
  new Response(null, { status: 405, headers: { Allow: "POST" } });
