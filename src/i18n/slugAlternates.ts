import type { Lang } from './ui';
import { withSlash } from './url';

/**
 * hreflang-Wert pro Sprache – die eine Quelle fuers gesamte Projekt.
 * Muss identisch zu HREFLANG in astro.config.mjs sein (Sitemap), sonst nennen
 * HTML und Sitemap fuer dieselbe URL verschiedene Werte.
 *
 * Bewusst ohne Laendercode: die Inhalte richten sich an alle Sprecher, nicht an
 * ein Land ("de" deckt DE/AT/CH ab, "de-DE" nur Deutschland). Einzige Ausnahme
 * ist pt-BR – das ist brasilianisches Portugiesisch, nicht europaeisches.
 */
export const HREFLANG: Record<Lang, string> = {
  de: 'de',
  en: 'en',
  nl: 'nl',
  es: 'es',
  da: 'da',
  sv: 'sv',
  pt: 'pt-BR',
};

export const LANG_ORDER: Lang[] = ['de', 'en', 'nl', 'es', 'da', 'sv', 'pt'];

/**
 * Baut hreflang-Alternates fuer Seiten mit pro Sprache uebersetztem Slug
 * (Quiz, Roster-Polyamorie-Landingpage).
 *
 * Ohne diesen Helper greift der Default in BaseLayout.astro und haengt stur
 * `/{lang}` vor den Pfad der aktuellen Sprache – bei uebersetzten Slugs zeigen
 * dann 6 von 7 hreflang-Links auf 404s (z.B. /en/roster-polyamorie/ statt
 * /en/roster-polyamory/). `path` muss die URL fuer eine Sprache liefern, also
 * z.B. quizPath oder rosterPolyPath.
 */
export function slugAlternates(
  path: (lang: Lang) => string,
  site: URL,
): { hreflang: string; href: string }[] {
  const href = (lang: Lang) => new URL(withSlash(path(lang)), site).href;

  const alternates = LANG_ORDER.map((lang) => ({
    hreflang: HREFLANG[lang],
    href: href(lang),
  }));

  // x-default → deutsche Version (gleiche Konvention wie beim Blog).
  alternates.push({ hreflang: 'x-default', href: href('de') });

  return alternates;
}
