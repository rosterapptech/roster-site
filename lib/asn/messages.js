import { escapeHtml } from "./telegram.js";
import { lookupCreator } from "./creators.js";

/**
 * Event -> deutscher Meldungstext (Telegram, parse_mode "HTML").
 *
 * Alle dynamischen Werte laufen durch escapeHtml(). Reine Layout-Tags (<b>, <i>)
 * werden hier bewusst roh gesetzt.
 */

// ---------------------------------------------------------------------------
// Stammdaten
// ---------------------------------------------------------------------------

/**
 * Bundle-ID -> App-Name.
 * Werte aus den Xcode-Projekten (PRODUCT_BUNDLE_IDENTIFIER). Spurlos hat eine
 * historisch gewachsene Bundle-ID — `de.eliasstudios.spurlos` ist dort nur die
 * App-Group, nicht die Bundle-ID der App.
 */
const APP_NAMES = {
  "de.eliasstudios.roster": "Roster",
  "EliasStudios.Spurlos--Metadaten-lo-schen": "Spurlos",
};

/** Produkt-ID -> Klartext. Werte aus den .storekit-Configs beider Apps. */
const PRODUCT_NAMES = {
  "de.eliasstudios.roster.premium.weekly": "Wochenabo",
  "de.eliasstudios.roster.premium.monthly": "Monatsabo",
  "de.eliasstudios.roster.premium.yearly": "Jahresabo",
  "de.eliasstudios.spurlos.pro": "Spurlos Pro",
};

/**
 * offerType -> Klartext. Wichtig, um Creator-Redemptions (3) von Intro-Trials (1)
 * unterscheiden zu können — beide kommen als OFFER_REDEEMED bzw. mit offerIdentifier.
 */
const OFFER_TYPES = {
  1: "Intro-Angebot / Trial",
  2: "Promotional Offer",
  3: "Offer Code",
  4: "Win-Back-Angebot",
  5: "Retention Offer",
};

/** expirationIntent im renewalInfo */
const EXPIRATION_INTENTS = {
  1: "Kunde hat gekündigt",
  2: "Zahlungsproblem",
  3: "Preiserhöhung abgelehnt",
  4: "Produkt nicht mehr verfügbar",
  5: "sonstiger Grund",
};

/** Storefronts als ISO-3166-alpha-3. Nur die üblichen Verdächtigen, Rest bleibt roh. */
const STOREFRONTS = {
  DEU: "Deutschland", AUT: "Österreich", CHE: "Schweiz", USA: "USA",
  GBR: "Großbritannien", FRA: "Frankreich", ITA: "Italien", ESP: "Spanien",
  NLD: "Niederlande", BEL: "Belgien", POL: "Polen", CZE: "Tschechien",
  DNK: "Dänemark", SWE: "Schweden", NOR: "Norwegen", FIN: "Finnland",
  CAN: "Kanada", AUS: "Australien", NZL: "Neuseeland", JPN: "Japan",
  BRA: "Brasilien", IND: "Indien", MEX: "Mexiko", TUR: "Türkei",
};

// ---------------------------------------------------------------------------
// Formatierung
// ---------------------------------------------------------------------------

/**
 * Apple liefert Preise als Integer in Milli-Einheiten: 39,99 € == 39990.
 * Ältere Transaktionen haben weder price noch currency — dann lieber nichts zeigen
 * als „0,00 €“.
 *
 * @param {number | undefined} price     Milli-Einheiten
 * @param {string | undefined} currency  ISO-4217
 * @returns {string | null}
 */
function formatPrice(price, currency) {
  if (typeof price !== "number" || !Number.isFinite(price)) return null;
  if (!currency) return null;
  try {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency,
    }).format(price / 1000);
  } catch {
    // Unbekannter Währungscode — Intl wirft, wir behelfen uns.
    return `${(price / 1000).toFixed(2).replace(".", ",")} ${currency}`;
  }
}

/**
 * @param {number | undefined} ms  UNIX-Zeit in Millisekunden
 * @returns {string | null}
 */
function formatDate(ms) {
  if (typeof ms !== "number" || !Number.isFinite(ms)) return null;
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeZone: "Europe/Berlin",
  }).format(new Date(ms));
}

/** @param {number | undefined} ms */
function formatDateTime(ms) {
  if (typeof ms !== "number" || !Number.isFinite(ms)) return null;
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Berlin",
  }).format(new Date(ms));
}

function appName(bundleId) {
  return APP_NAMES[bundleId] || bundleId || "Unbekannte App";
}

function productName(productId) {
  return PRODUCT_NAMES[productId] || productId || null;
}

function storefrontName(storefront) {
  if (!storefront) return null;
  return STOREFRONTS[storefront] || storefront;
}

/**
 * Die Kontextzeilen, die praktisch jede Meldung braucht:
 * „Roster · Jahresabo“ / „39,99 € · Deutschland“
 *
 * @param {object} payload
 * @param {object | null} transaction
 * @returns {string[]}
 */
function contextLines(payload, transaction) {
  const lines = [];

  const bundleId = transaction?.bundleId || payload?.data?.bundleId;
  const product = productName(transaction?.productId);
  lines.push(
    product
      ? `${escapeHtml(appName(bundleId))} · ${escapeHtml(product)}`
      : escapeHtml(appName(bundleId))
  );

  const price = formatPrice(transaction?.price, transaction?.currency);
  const country = storefrontName(transaction?.storefront);
  const second = [price, country].filter(Boolean).map(escapeHtml);
  if (second.length) lines.push(second.join(" · "));

  return lines;
}

/** Hängt eine „Label: Wert“-Zeile an, wenn der Wert existiert. */
function pushIf(lines, label, value, { bold = false } = {}) {
  if (value === null || value === undefined || value === "") return;
  const safe = escapeHtml(value);
  lines.push(`${label}: ${bold ? `<b>${safe}</b>` : safe}`);
}

// ---------------------------------------------------------------------------
// Sonderfall: Offer-Codes / Bounty-Tracking
// ---------------------------------------------------------------------------

/**
 * @param {object | null} transaction
 * @returns {string[]}
 */
function offerLines(transaction) {
  const lines = [];
  const offerType = transaction?.offerType;
  const offerIdentifier = transaction?.offerIdentifier;

  const creator = lookupCreator(offerIdentifier);
  if (creator) {
    lines.push(`Creator: <b>${escapeHtml(creator.creator)}</b>`);
  } else if (offerIdentifier) {
    // Kein Mapping? Trotzdem ausgeben — sonst ist die Bounty unsichtbar.
    lines.push(`Offer: <code>${escapeHtml(offerIdentifier)}</code> <i>(kein Creator hinterlegt)</i>`);
  }

  if (offerType !== undefined && offerType !== null) {
    lines.push(`Art: ${escapeHtml(OFFER_TYPES[offerType] || `offerType ${offerType}`)}`);
  }

  return lines;
}

/** @param {object | null} transaction */
function bountyLine(transaction) {
  const creator = lookupCreator(transaction?.offerIdentifier);
  if (!creator) return null;
  const amount = formatPrice(creator.bounty * 1000, creator.currency);
  return `→ Bounty fällig: <b>${escapeHtml(amount || `${creator.bounty} ${creator.currency}`)}</b>`;
}

// ---------------------------------------------------------------------------
// Hauptfunktion
// ---------------------------------------------------------------------------

/**
 * Baut den Meldungstext.
 *
 * @param {object} payload       verifizierter ResponseBodyV2DecodedPayload
 * @param {object | null} transaction   verifizierter JWSTransactionDecodedPayload (optional)
 * @param {object | null} renewalInfo   verifizierter JWSRenewalInfoDecodedPayload (optional)
 * @returns {string}
 */
export function buildMessage(payload, transaction, renewalInfo) {
  const type = payload?.notificationType;
  // Apple nennt die Subtypes AUTO_RENEW_DISABLED/ENABLED; die Kurzformen ON/OFF
  // aus der Doku-Tabelle werden hier als Alias mitgenommen.
  const subtype = payload?.subtype;

  const lines = [];
  const ctx = () => lines.push(...contextLines(payload, transaction));

  switch (type) {
    // ---- Neuabschluss ----------------------------------------------------
    case "SUBSCRIBED": {
      if (subtype === "RESUBSCRIBE") {
        lines.push("🔄 <b>Rückkehrer — Abo reaktiviert</b>", "");
        ctx();
      } else {
        lines.push("🎉 <b>Neues Abo</b>", "");
        ctx();
      }
      const offer = offerLines(transaction);
      if (offer.length) lines.push("", ...offer);
      pushIf(lines, "Läuft bis", formatDate(transaction?.expiresDate));
      break;
    }

    // ---- Verlängerung ----------------------------------------------------
    case "DID_RENEW": {
      lines.push(
        subtype === "BILLING_RECOVERY"
          ? "✅ <b>Zahlung nachgeholt — Abo gerettet</b>"
          : "✅ <b>Verlängert</b>",
        ""
      );
      ctx();
      pushIf(lines, "Nächste Verlängerung", formatDate(renewalInfo?.renewalDate ?? transaction?.expiresDate));
      break;
    }

    // ---- Kündigung / Rücknahme -------------------------------------------
    case "DID_CHANGE_RENEWAL_STATUS": {
      if (subtype === "AUTO_RENEW_DISABLED" || subtype === "AUTO_RENEW_OFF") {
        // Der wichtigste Event überhaupt: die Kündigung, Wochen bevor sie in
        // irgendeinem Report auftaucht. Ablaufdatum gehört deshalb nach oben.
        const until = formatDate(renewalInfo?.renewalDate ?? transaction?.expiresDate);
        lines.push("⚠️ <b>GEKÜNDIGT</b>", "");
        ctx();
        lines.push("");
        lines.push(
          until
            ? `Läuft noch bis: <b>${escapeHtml(until)}</b>`
            : "<i>Ablaufdatum nicht im Payload enthalten</i>"
        );
      } else if (subtype === "AUTO_RENEW_ENABLED" || subtype === "AUTO_RENEW_ON") {
        lines.push("💚 <b>Kündigung zurückgenommen</b>", "");
        ctx();
        pushIf(lines, "Verlängert wieder am", formatDate(renewalInfo?.renewalDate));
      } else {
        lines.push("🔔 <b>Verlängerungsstatus geändert</b>", "");
        ctx();
        pushIf(lines, "Subtype", subtype || "—");
      }
      break;
    }

    // ---- Produktwechsel --------------------------------------------------
    case "DID_CHANGE_RENEWAL_PREF": {
      if (subtype === "UPGRADE") {
        lines.push("⬆️ <b>Upgrade</b>", "");
        ctx();
      } else if (subtype === "DOWNGRADE") {
        lines.push("⬇️ <b>Downgrade ab nächster Periode</b>", "");
        ctx();
      } else {
        lines.push("🔀 <b>Abo-Wechsel</b>", "");
        ctx();
      }
      const next = productName(renewalInfo?.autoRenewProductId);
      if (next) pushIf(lines, "Ab nächster Periode", next);
      pushIf(lines, "Wirksam ab", formatDate(renewalInfo?.renewalDate));
      break;
    }

    // ---- Zahlung fehlgeschlagen ------------------------------------------
    case "DID_FAIL_TO_RENEW": {
      if (subtype === "GRACE_PERIOD") {
        lines.push("💳 <b>Zahlung fehlgeschlagen — Grace Period, noch rettbar</b>", "");
        ctx();
        pushIf(lines, "Grace Period bis", formatDate(renewalInfo?.gracePeriodExpiresDate), { bold: true });
      } else {
        lines.push("💳 <b>Zahlung fehlgeschlagen — Billing Retry</b>", "");
        ctx();
        lines.push("<i>Apple versucht es die nächsten Tage erneut.</i>");
      }
      break;
    }

    // ---- Abo beendet -----------------------------------------------------
    case "EXPIRED": {
      if (subtype === "VOLUNTARY") {
        lines.push("👋 <b>Abo beendet</b> (freiwillig)", "");
      } else if (subtype === "BILLING_RETRY") {
        lines.push("❌ <b>Abo beendet — Zahlung endgültig fehlgeschlagen</b>", "");
      } else if (subtype === "PRICE_INCREASE") {
        lines.push("❌ <b>Abo beendet — Preiserhöhung abgelehnt</b>", "");
      } else if (subtype === "PRODUCT_NOT_FOR_SALE") {
        lines.push("❌ <b>Abo beendet — Produkt nicht mehr im Verkauf</b>", "");
      } else {
        lines.push("❌ <b>Abo beendet</b>", "");
      }
      ctx();
      const intent = EXPIRATION_INTENTS[renewalInfo?.expirationIntent];
      pushIf(lines, "Grund", intent);
      pushIf(lines, "Beendet am", formatDate(transaction?.expiresDate));
      break;
    }

    // ---- Offer-Code ------------------------------------------------------
    case "OFFER_REDEEMED": {
      lines.push("🎟️ <b>Offer-Code eingelöst</b>", "");
      const offer = offerLines(transaction);
      if (offer.length) lines.push(...offer);
      lines.push(...contextLines(payload, transaction));
      const bounty = bountyLine(transaction);
      if (bounty) lines.push("", bounty);
      pushIf(lines, "Läuft bis", formatDate(transaction?.expiresDate));
      break;
    }

    // ---- Geld zurück -----------------------------------------------------
    case "REFUND": {
      lines.push("💸 <b>Refund</b>", "");
      ctx();
      pushIf(lines, "Erstattet am", formatDate(transaction?.revocationDate));
      if (transaction?.revocationReason === 1) {
        pushIf(lines, "Grund", "App-Problem (Apple: Issue mit der App)");
      } else if (transaction?.revocationReason === 0) {
        pushIf(lines, "Grund", "anderer Grund (kein App-Problem)");
      }
      break;
    }

    case "REFUND_DECLINED": {
      lines.push("🛡️ <b>Refund abgelehnt</b>", "");
      ctx();
      break;
    }

    case "REFUND_REVERSED": {
      lines.push("↩️ <b>Refund rückgängig gemacht</b> — Umsatz zurück", "");
      ctx();
      break;
    }

    // ---- Apple fragt nach ------------------------------------------------
    case "CONSUMPTION_REQUEST": {
      lines.push("⏰ <b>Apple fragt Nutzungsdaten an</b>", "");
      ctx();
      lines.push(
        "",
        "<b>Innerhalb von 12 Stunden antworten</b> — sonst wertet Apple das als Zustimmung zum Refund.",
        "→ App Store Server API: <code>PUT /inApps/v1/transactions/consumption/{transactionId}</code>"
      );
      pushIf(lines, "Transaktion", transaction?.transactionId);
      break;
    }

    // ---- Preiserhöhung ---------------------------------------------------
    case "PRICE_INCREASE": {
      const consented = renewalInfo?.priceIncreaseStatus === 1;
      lines.push(
        consented
          ? "📈 <b>Preiserhöhung — Zustimmung erteilt</b>"
          : "📈 <b>Preiserhöhung — Zustimmung ausstehend</b>",
        ""
      );
      ctx();
      const newPrice = formatPrice(renewalInfo?.renewalPrice, renewalInfo?.currency);
      pushIf(lines, "Neuer Preis", newPrice);
      pushIf(lines, "Wirksam ab", formatDate(renewalInfo?.renewalDate));
      break;
    }

    // ---- Laufzeitverlängerung --------------------------------------------
    case "RENEWAL_EXTENDED": {
      lines.push("📅 <b>Laufzeit verlängert</b>", "");
      ctx();
      pushIf(lines, "Neues Ablaufdatum", formatDate(renewalInfo?.renewalDate ?? transaction?.expiresDate));
      break;
    }

    case "RENEWAL_EXTENSION": {
      // Massenverlängerung: hier steckt die Info in payload.summary, nicht in data.
      if (subtype === "SUMMARY") {
        lines.push("📅 <b>Massen-Verlängerung abgeschlossen</b>", "");
        pushIf(lines, "App", appName(payload?.summary?.bundleId));
        pushIf(lines, "Erfolgreich", payload?.summary?.succeededCount);
        pushIf(lines, "Fehlgeschlagen", payload?.summary?.failedCount);
      } else if (subtype === "FAILURE") {
        lines.push("⚠️ <b>Verlängerung fehlgeschlagen</b>", "");
        ctx();
      } else {
        lines.push("📅 <b>Verlängerung läuft</b>", "");
        ctx();
      }
      break;
    }

    // ---- Test ------------------------------------------------------------
    case "TEST": {
      lines.push("🧪 <b>Testbenachrichtigung — Endpoint funktioniert</b>");
      pushIf(lines, "Umgebung", payload?.data?.environment || "—");
      pushIf(lines, "Signiert", formatDateTime(payload?.signedDate));
      break;
    }

    // ---- Alles andere ----------------------------------------------------
    default: {
      // Nichts verschlucken: lieber eine hässliche Meldung als gar keine.
      lines.push("❓ <b>Unbekanntes Event</b>", "");
      lines.push(`Typ: <code>${escapeHtml(type || "—")}</code>`);
      if (subtype) lines.push(`Subtype: <code>${escapeHtml(subtype)}</code>`);
      lines.push("");
      ctx();
      break;
    }
  }

  // Sandbox deutlich markieren, damit Testläufe nicht als Umsatz durchgehen.
  const environment = payload?.data?.environment || transaction?.environment;
  if (environment === "Sandbox") {
    lines.push("", "<i>— Sandbox —</i>");
  }

  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}
