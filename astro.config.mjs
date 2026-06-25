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
