import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** Optionaler SERP-Titel (<title>/og:title), max. 60 Zeichen, ohne Marken-Suffix. Die H1 bleibt `title`. */
    seoTitle: z.string().max(60).optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(['de', 'en', 'es', 'nl', 'da', 'sv', 'pt']).default('de'),
    translationKey: z.string().optional(),
    author: z.string().default('Slowcraft'),
    tags: z.array(z.string()).default([]),
    /** Diagramm/Vorschaubild unter /public (1600x900 PNG), erzeugt von scripts/blog-images.mjs */
    image: z.string().startsWith('/images/blog/').optional(),
    imageAlt: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { blog };
