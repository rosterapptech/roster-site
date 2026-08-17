import type { Lang } from './ui';

// Lokalisierte Slugs fuer den Polycule-Mapper. DE ohne Praefix, alle anderen
// mit /{lang} -- gleiche Konvention wie Blog und Quiz.
//
// "Polycule" bleibt in jeder Sprache stehen: der Begriff wird auch im
// deutschen, spanischen usw. Sprachgebrauch unuebersetzt benutzt und ist das,
// wonach tatsaechlich gesucht wird. Uebersetzt wird nur das Verb drumherum.
export const POLYCULE_SLUG: Record<Lang, string> = {
  de: 'polycule-map-erstellen',
  en: 'polycule-map-maker',
  nl: 'polycule-map-maken',
  es: 'crear-mapa-de-polycule',
  da: 'lav-polycule-kort',
  sv: 'gor-polycule-karta',
  pt: 'criar-mapa-de-polycule',
};

// Mit abschliessendem Slash – muss zur canonical-/Sitemap-Form passen,
// sonst zeigen interne Links auf eine Nicht-Canonical-Variante.
export function polyculePath(lang: Lang): string {
  return lang === 'de' ? `/${POLYCULE_SLUG.de}/` : `/${lang}/${POLYCULE_SLUG[lang]}/`;
}
