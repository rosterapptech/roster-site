import { defineMiddleware } from 'astro:middleware';
import { QUIZ_SLUG } from './i18n/quizPath';

const SUPPORTED = ['de', 'en', 'nl', 'es', 'da', 'sv', 'pt'] as const;
type Lang = (typeof SUPPORTED)[number];
const DEFAULT: Lang = 'de'; // Fallback für nicht unterstützte Sprachen

function detectLang(header: string | null): Lang {
  if (!header) return DEFAULT;
  for (const tag of header.split(',')) {
    const code = tag.split(';')[0].trim().slice(0, 2).toLowerCase() as Lang;
    if (SUPPORTED.includes(code)) return code;
  }
  return DEFAULT;
}

export const onRequest = defineMiddleware(async (ctx, next) => {
  const { pathname } = new URL(ctx.request.url);

  // Statische Assets überspringen
  if (pathname.startsWith('/_') || pathname.includes('.')) return next();

  // Bereits auf einer nicht-deutschen Sprachversion → nichts tun
  const nonDeLangs = SUPPORTED.filter((l) => l !== 'de');
  const alreadyLocalized = nonDeLangs.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );
  if (alreadyLocalized) return next();

  // Blog-Artikel-Slugs sind sprachspezifisch → niemals umleiten
  // (DE-Slugs existieren nicht unter /en/blog/, EN-Slugs nicht unter /blog/)
  if (pathname.match(/^\/blog\/.+/)) return next();

  // Feature-Detailseiten sind vorgerendert (statisch) → keine Sprach-Weiterleitung.
  // Verhindert zudem, dass die Middleware beim Prerender unnoetig Request-Header liest.
  if (pathname.match(/^\/features\/.+/)) return next();

  // Kompatibilitaets-Test hat sprachspezifische Slugs (wie der Blog) → niemals
  // umleiten, sonst landet z.B. ein EN-Browser auf /en/polyamorie-test (falscher
  // Slug, 404) statt /en/polyamory-test.
  // (trailingSlash: 'always' → Pfad kommt normalerweise mit Slash an,
  // die slashlose Variante wird davor schon per 308 umgeleitet.)
  if (pathname.replace(/\/$/, '') === `/${QUIZ_SLUG.de}`) return next();

  // Cookie hat Vorrang (wenn User manuell Sprache gewählt hat)
  const cookieLang = ctx.cookies.get('roster-lang')?.value as Lang | undefined;
  const lang = (cookieLang && SUPPORTED.includes(cookieLang))
    ? cookieLang
    : detectLang(ctx.request.headers.get('accept-language'));

  // Deutsch → keine Weiterleitung nötig
  if (lang === 'de') return next();

  // Zur erkannten Sprachversion weiterleiten
  const target = pathname === '/' ? `/${lang}/` : `/${lang}${pathname}`;
  return Response.redirect(new URL(target, ctx.url.origin), 302);
});
