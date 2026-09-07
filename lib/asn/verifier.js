import { SignedDataVerifier, Environment } from "@apple/app-store-server-library";
import { appleRootCAs } from "./appleRootCerts.js";

/**
 * SignedDataVerifier-Instanzen, modulweit gecached.
 *
 * Der Konstruktor parst vier Root-Zertifikate und legt intern einen Public-Key-Cache
 * an - das will man nicht pro Request bezahlen. Auf Vercel ueberlebt das Modul-Scope
 * den Cold Start, also profitieren alle Requests derselben Instanz davon.
 *
 * Key des Caches: `${environment}|${bundleId}`, damit Roster und Spurlos denselben
 * Endpoint teilen koennen.
 */

/** @type {Map<string, SignedDataVerifier>} */
const verifierCache = new Map();

/** Erlaubte Bundle-IDs aus APPLE_BUNDLE_IDS, einmal geparst. */
let allowedBundleIds = null;

function getAllowedBundleIds() {
  if (allowedBundleIds === null) {
    allowedBundleIds = new Set(
      (process.env.APPLE_BUNDLE_IDS || "")
        .split(",")
        .map((id) => id.trim())
        .filter(Boolean)
    );
  }
  return allowedBundleIds;
}

/**
 * Kurzname pro Bundle-ID fuer den Env-Var-Namen. Noetig, weil sich aus
 * `EliasStudios.Spurlos--Metadaten-lo-schen` sonst
 * APPLE_APP_APPLE_ID_SPURLOS_METADATEN_LO_SCHEN ergaebe.
 * Neue App ohne Eintrag hier: der abgeleitete Name unten greift.
 */
const APP_ENV_ALIAS = {
  "de.eliasstudios.roster": "ROSTER",
  "EliasStudios.Spurlos--Metadaten-lo-schen": "SPURLOS",
};

/**
 * Sucht die App-Apple-ID zu einer Bundle-ID in den Env-Vars.
 *
 * `de.eliasstudios.roster` -> APPLE_APP_APPLE_ID_ROSTER
 * (Fallbacks: letztes Bundle-ID-Segment, dann die komplette Bundle-ID)
 *
 * @param {string} bundleId
 * @returns {number | undefined}
 */
function appAppleIdFor(bundleId) {
  const sanitize = (s) => s.toUpperCase().replace(/[^A-Z0-9]+/g, "_");
  const candidates = [
    APP_ENV_ALIAS[bundleId] ? `APPLE_APP_APPLE_ID_${APP_ENV_ALIAS[bundleId]}` : null,
    `APPLE_APP_APPLE_ID_${sanitize(bundleId.split(".").pop() || "")}`,
    `APPLE_APP_APPLE_ID_${sanitize(bundleId)}`,
  ].filter(Boolean);

  for (const key of candidates) {
    const raw = process.env[key];
    if (raw === undefined || raw.trim() === "") continue;
    const parsed = Number.parseInt(raw.trim(), 10);
    if (Number.isFinite(parsed)) return parsed;
    console.error(`[asn] ${key} ist keine Zahl: ${raw}`);
  }
  return undefined;
}

/**
 * Dekodiert den JWS-Payload OHNE jede Pruefung - ausschliesslich, um Environment und
 * Bundle-ID zu ermitteln und daraus den richtigen Verifier zu waehlen.
 *
 * ACHTUNG: Das Ergebnis ist unbestaetigte Angreifer-Eingabe. Es darf niemals
 * Grundlage einer Meldung, eines Log-Eintrags oder sonstiger Verarbeitung sein.
 * Der anschliessende verifyAndDecodeNotification() liefert die einzige Wahrheit -
 * und prueft Environment und Bundle-ID selbst noch einmal gegen den Verifier.
 *
 * @param {string} signedPayload
 * @returns {{ environment?: string, bundleId?: string }}
 */
export function peekUnverifiedEnvelope(signedPayload) {
  const parts = String(signedPayload).split(".");
  if (parts.length !== 3) throw new Error("signedPayload ist kein JWS mit drei Segmenten");

  const claims = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8"));
  return {
    environment: claims?.data?.environment,
    bundleId: claims?.data?.bundleId,
  };
}

/**
 * Liefert den passenden, gecachten Verifier.
 *
 * @param {string} environment  "Sandbox" oder "Production" (aus der Vorab-Dekodierung)
 * @param {string} bundleId     Bundle-ID (aus der Vorab-Dekodierung)
 * @returns {SignedDataVerifier}
 */
export function getVerifier(environment, bundleId) {
  if (!bundleId || !getAllowedBundleIds().has(bundleId)) {
    // Nicht nur Hygiene: ohne Allowlist koennte ein Angreifer den Cache mit
    // beliebigen Bundle-IDs vollmuellen.
    throw new Error(`Unbekannte Bundle-ID: ${bundleId}`);
  }

  const env = environment === Environment.SANDBOX ? Environment.SANDBOX : Environment.PRODUCTION;
  const cacheKey = `${env}|${bundleId}`;

  let verifier = verifierCache.get(cacheKey);
  if (verifier) return verifier;

  const appAppleId = appAppleIdFor(bundleId);
  if (env === Environment.PRODUCTION && appAppleId === undefined) {
    // In Production ist appAppleId Pflicht - die Library wirft sonst beim Verifizieren.
    throw new Error(`Keine App-Apple-ID fuer ${bundleId} gesetzt (Production)`);
  }

  verifier = new SignedDataVerifier(
    appleRootCAs,
    true, // enableOnlineChecks: Sperrpruefung + Ablaufdatum gegen die echte Uhr
    env,
    bundleId,
    env === Environment.SANDBOX ? undefined : appAppleId
  );

  verifierCache.set(cacheKey, verifier);
  return verifier;
}

export { Environment };
