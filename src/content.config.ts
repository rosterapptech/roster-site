import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(['de', 'en', 'es', 'nl', 'da', 'sv']).default('de'),
    translationKey: z.string().optional(),
    author: z.string().default('Slowcraft'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
