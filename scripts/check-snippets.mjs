#!/usr/bin/env node
// Snippet-Guard fuer Google-Suchergebnisse (CTR-Optimierung, siehe GSC-Auswertung 2026-11).
// Google kuerzt Titel ab ca. 60 Zeichen und Beschreibungen ab ca. 155–160 Zeichen.
//
// Fehler (Build bricht ab) – nur fuer bereits optimierte Artikel, also mit `seoTitle`:
//   - seoTitle laenger als 60 Zeichen
//   - description laenger als 160 Zeichen
// Hinweis (kein Abbruch): wie viele Artikel ohne `seoTitle` noch zu lange Snippets haben.
// Wird per "prebuild" bei jedem Build automatisch ausgefuehrt.

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BLOG_DIR = join(import.meta.dirname, '..', 'src', 'content', 'blog');
const MAX_TITLE = 60;
const MAX_DESC = 160;
const SUFFIX = ' – Roster';

function field(fm, name) {
  const m = fm.match(new RegExp(`^${name}:\\s*(.*)$`, 'm'));
  if (!m) return null;
  let v = m[1].trim();
  if (v.startsWith("'") && v.endsWith("'")) v = v.slice(1, -1).replace(/''/g, "'");
  else if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1).replace(/\\"/g, '"');
  return v;
}

const errors = [];
let unoptimizedLong = 0;
let optimized = 0;

for (const file of readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f))) {
  const raw = readFileSync(join(BLOG_DIR, file), 'utf8');
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  const seoTitle = field(fm, 'seoTitle');
  const title = field(fm, 'title') ?? '';
  const description = field(fm, 'description') ?? '';

  if (seoTitle !== null) {
    optimized++;
    if (seoTitle.length > MAX_TITLE)
      errors.push(`${file}: seoTitle hat ${seoTitle.length} Zeichen (max. ${MAX_TITLE})`);
    if (description.length > MAX_DESC)
      errors.push(`${file}: description hat ${description.length} Zeichen (max. ${MAX_DESC})`);
  } else if ((title + SUFFIX).length > MAX_TITLE || description.length > MAX_DESC) {
    unoptimizedLong++;
  }
}

if (errors.length) {
  console.error(`\n✗ check-snippets: ${errors.length} Problem(e):\n`);
  for (const e of errors) console.error(`  - ${e}`);
  console.error('');
  process.exit(1);
}

console.log(
  `✓ check-snippets: ${optimized} optimierte Artikel ok` +
    (unoptimizedLong ? ` · Hinweis: ${unoptimizedLong} Artikel ohne seoTitle mit zu langem Snippet` : '')
);
