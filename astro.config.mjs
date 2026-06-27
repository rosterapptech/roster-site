// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

const SITE = 'https://rosterapp.tech';

export default defineConfig({
  site: SITE,
  output: 'server',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'nl', 'es', 'da', 'sv'],
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
        },
      },
    }),
    mdx(),
  ],
});
