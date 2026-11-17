// Zentrale Quelle fuer alle App-Store-Links.
//
// Jeder Link traegt ein eigenes Kampagnen-Kuerzel (`ct`). In App Store Connect
// unter App Analytics → Akquisition → Kampagnen siehst du dann pro Kuerzel
// Seitenaufrufe, Downloads und Umsatz – ganz ohne Tracking auf der Website.
// Apple erlaubt max. 40 Zeichen pro Kuerzel.
//
// Schema der Kuerzel (siehe auch README → "App-Store-Kampagnen"):
//   b-{lang}-{translationKey}-{pos}   Blogartikel
//       pos: m = Box in der Artikelmitte, e = CTA am Artikelende,
//            s = Sticky-Leiste (iPhone), q = QR-Code (Desktop),
//            t = Link im Fliesstext, sb = Smart App Banner (Safari iOS)
//   h-{lang}            Button im Header
//   home-{lang}-{pos}   Startseite (hero, end)
//   feat-{lang}         Feature-Seiten
//   test-{lang}         Polyamorie-Test
//   map-{lang}          Polycule-Map-Generator
//   rp-{lang}           Roster-Polyamorie-Landingpage
//   sb-{lang}           Smart App Banner auf allen anderen Seiten

export const APP_STORE_ID = '6786782804';
export const APP_STORE_PROVIDER = '129111138';

/** Link ohne Kampagne – fuer strukturierte Daten (JSON-LD), nicht fuer Buttons. */
export const APP_STORE_PLAIN_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;

export function campaignToken(ct: string): string {
  return ct
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .slice(0, 40);
}

export function appStoreUrl(ct: string): string {
  return `https://apps.apple.com/app/apple-store/id${APP_STORE_ID}?pt=${APP_STORE_PROVIDER}&ct=${campaignToken(ct)}&mt=8`;
}

export type BlogCtaPos = 'm' | 'e' | 's' | 'q' | 't' | 'sb';

/** Kuerzel fuer Blogartikel: Schluessel wird so gekuerzt, dass alles in 40 Zeichen passt. */
export function blogCampaign(lang: string, key: string, pos: BlogCtaPos): string {
  const prefix = `b-${lang}-`;
  const suffix = `-${pos}`;
  const room = 40 - prefix.length - suffix.length;
  return campaignToken(prefix + key.slice(0, room).replace(/-+$/, '') + suffix);
}

/** Inhalt fuer <meta name="apple-itunes-app"> (Smart App Banner in Safari iOS). */
export function smartBannerContent(ct: string): string {
  return `app-id=${APP_STORE_ID}, affiliate-data=pt=${APP_STORE_PROVIDER}&ct=${campaignToken(ct)}`;
}
