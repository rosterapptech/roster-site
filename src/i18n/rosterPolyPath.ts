import type { Lang } from './ui';

// Marken+Keyword-Landingpage ("Roster Polyamorie" / "Roster polyamory" / "Roster ENM").
// DE ohne Praefix, alle anderen mit /{lang} -- gleiche Konvention wie Blog & Quiz.
export const ROSTER_POLY_SLUG: Record<Lang, string> = {
  de: 'roster-polyamorie',
  en: 'roster-polyamory',
  nl: 'roster-polyamorie',
  es: 'roster-poliamor',
  da: 'roster-polyamori',
  sv: 'roster-polyamori',
  pt: 'roster-poliamoria',
};

export function rosterPolyPath(lang: Lang): string {
  return lang === 'de' ? `/${ROSTER_POLY_SLUG.de}` : `/${lang}/${ROSTER_POLY_SLUG[lang]}`;
}
