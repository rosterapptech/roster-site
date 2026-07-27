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

// Mit abschliessendem Slash – muss zur canonical-/Sitemap-Form passen,
// sonst zeigen interne Links auf eine Nicht-Canonical-Variante.
export function rosterPolyPath(lang: Lang): string {
  return lang === 'de' ? `/${ROSTER_POLY_SLUG.de}/` : `/${lang}/${ROSTER_POLY_SLUG[lang]}/`;
}
