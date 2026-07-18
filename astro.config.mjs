// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

const SITE = 'https://rosterapp.tech';

export default defineConfig({
  site: SITE,
  output: 'server',
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
