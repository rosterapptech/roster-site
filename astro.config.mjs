// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

const SITE = 'https://rosterapp.tech';

// lastmod pro Pfad aus dem Blog-Frontmatter (updatedDate vor pubDate).
// Blog-Index und Homepage jeder Sprache erben das Datum des neuesten Posts,
// da beide dessen Inhalte listen. Alle anderen Seiten bekommen bewusst kein
// lastmod – ein Fake-Datum (z.B. Buildzeit) würde Google das Signal entwerten.
function buildLastmodMap() {
  /** @type {Map<string, string>} */
  const map = new Map();
  /** @type {Record<string, string>} */
  const newestPerLang = {};
  for (const file of readdirSync('./src/content/blog')) {
    if (!/\.(md|mdx)$/.test(file)) continue;
    const fm = readFileSync(`./src/content/blog/${file}`, 'utf8').split('---')[1] ?? '';
    const date =
      fm.match(/^updatedDate:\s*'?(\d{4}-\d{2}-\d{2})'?/m)?.[1] ??
      fm.match(/^pubDate:\s*'?(\d{4}-\d{2}-\d{2})'?/m)?.[1];
    if (!date) continue;
    const lang = fm.match(/^lang:\s*'?(\w+)'?/m)?.[1] ?? 'de';
    const prefix = lang === 'de' ? '' : `/${lang}`;
    map.set(`${prefix}/blog/${file.replace(/\.(md|mdx)$/, '')}/`, date);
    if (!newestPerLang[lang] || date > newestPerLang[lang]) newestPerLang[lang] = date;
  }
  for (const [lang, date] of Object.entries(newestPerLang)) {
    const prefix = lang === 'de' ? '' : `/${lang}`;
    map.set(`${prefix}/blog/`, date);
    map.set(lang === 'de' ? '/' : `/${lang}/`, date);
  }
  return map;
}

const LASTMOD = buildLastmodMap();

export default defineConfig({
  site: SITE,
  output: 'server',
  // Jede Seite ist unter genau EINER URL erreichbar (mit abschliessendem Slash).
  // Der Vercel-Adapter uebernimmt das in die Build-Output-Config, wodurch
  // /blog/foo per 308 auf /blog/foo/ umgeleitet wird. Ohne diese Einstellung
  // liefert Vercel beide Varianten mit 200 aus – Google crawlt dann doppelt so
  // viele URLs wie es Seiten gibt und halbiert damit das Crawl-Budget.
  trailingSlash: 'always',
  // edgeMiddleware: Middleware laeuft auch fuer prerenderte/statische Seiten
  // (sonst wuerde die Spracherkennung fuer die deutschen Hauptseiten nicht
  // mehr greifen, sobald diese statisch ausgeliefert werden).
  adapter: vercel({ edgeMiddleware: true }),
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'nl', 'es', 'da', 'sv', 'pt'],
    routing: 'manual',
  },
  integrations: [
    sitemap({
      // Rechtsseiten sind auf noindex – nicht ins Sitemap aufnehmen,
      // sonst widerspruechliche Signale (crawl me + don't index me).
      filter: (page) =>
        !/\/(datenschutz|impressum)\/?$/.test(page) &&
        !page.includes('/appinfo/'),
      serialize(item) {
        const lastmod = LASTMOD.get(new URL(item.url).pathname);
        if (lastmod) item.lastmod = new Date(lastmod).toISOString();
        return item;
      },
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
          nl: 'nl-NL',
          es: 'es-ES',
          da: 'da-DK',
          sv: 'sv-SE',
          pt: 'pt-BR',
        },
      },
    }),
    mdx(),
  ],
});
