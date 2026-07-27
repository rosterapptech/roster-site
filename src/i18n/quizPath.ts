import type { Lang } from './ui';

// Lokalisierte Slugs fuer den Kompatibilitaets-Test. DE ohne Praefix,
// alle anderen mit /{lang} -- gleiche Konvention wie beim Blog.
export const QUIZ_SLUG: Record<Lang, string> = {
  de: 'polyamorie-test',
  en: 'polyamory-test',
  nl: 'polyamorie-test',
  es: 'test-de-poliamor',
  da: 'polyamori-test',
  sv: 'polyamori-test',
  pt: 'teste-de-poliamoria',
};

// Mit abschliessendem Slash – muss zur canonical-/Sitemap-Form passen,
// sonst zeigen interne Links auf eine Nicht-Canonical-Variante.
export function quizPath(lang: Lang): string {
  return lang === 'de' ? `/${QUIZ_SLUG.de}/` : `/${lang}/${QUIZ_SLUG[lang]}/`;
}
