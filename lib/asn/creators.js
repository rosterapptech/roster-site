/**
 * Bounty-Tracking fuer Offer-Codes.
 *
 * Bei OFFER_REDEEMED liefert Apple in `transaction.offerIdentifier` den
 * REFERENZNAMEN des Offers aus App Store Connect - nicht den individuellen Code,
 * den der Nutzer eingetippt hat. Wer also pro Creator ein eigenes Offer anlegt,
 * bekommt hier gratis die Zuordnung.
 *
 * Konvention: pro Creator ein Offer mit dem Referenznamen unten als Key.
 * Neuer Creator = neuer Eintrag hier + Deploy. Kein Datenbank-Zwang in v1.
 *
 * @type {Record<string, { creator: string, bounty: number, currency?: string }>}
 */
export const creators = {
  // Beispiele - anpassen. Key = Referenzname des Offers in App Store Connect.
  // "roster_nina_ig":   { creator: "nina_ig",   bounty: 10 },
  // "roster_tom_yt":    { creator: "tom_yt",    bounty: 15 },
  // "spurlos_nina_ig":  { creator: "nina_ig",   bounty: 5  },
};

/**
 * Schlaegt den Creator zu einem Offer-Identifier nach.
 *
 * @param {string | undefined} offerIdentifier
 * @returns {{ creator: string, bounty: number, currency: string } | null}
 */
export function lookupCreator(offerIdentifier) {
  if (!offerIdentifier) return null;
  const entry = creators[offerIdentifier];
  if (!entry) return null;
  return {
    creator: entry.creator,
    bounty: entry.bounty,
    currency: entry.currency || "EUR",
  };
}
