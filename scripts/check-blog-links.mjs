#!/usr/bin/env node
// Verhindert eine Regression des Blog-Link-Prefix-Bugs (siehe Commit 2f10bf0):
// DE-Artikel verlinken andere Artikel als /blog/{slug} (ohne Praefix),
// alle anderen Sprachen muessen /{lang}/blog/{slug} verwenden.
// Wird per "prebuild" bei jedem Build automatisch ausgefuehrt.

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BLOG_DIR = join(import.meta.dirname, '..', 'src', 'content', 'blog');
const LANGS = ['de', 'en', 'nl', 'es', 'da', 'sv', 'pt'];

function frontmatterLang(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const fm = match?.[1] ?? '';
  const langMatch = fm.match(/^lang:\s*['"]?([a-z]{2})['"]?\s*$/m);
  return langMatch?.[1] ?? null;
}

function findLinkIssues(raw, lang) {
  const issues = [];
  // Markdown-Links auf /blog/... oder /{lang}/blog/... (mit oder ohne Slash,
  // damit auch die fehlerhafte slashlose Variante erkannt wird).
  const linkRe = /]\((\/(?:[a-z]{2}\/)?blog\/[a-z0-9-]+\/?)\)/g;
  let m;
  while ((m = linkRe.exec(raw))) {
    const target = m[1];
    const prefixMatch = target.match(/^\/([a-z]{2})\/blog\//);
    const targetLang = prefixMatch ? prefixMatch[1] : 'de';
    if (targetLang !== lang) {
      issues.push({
        target,
        expected: lang === 'de' ? '/blog/{slug}/' : `/${lang}/blog/{slug}/`,
        reason: 'falsches Sprachpraefix',
      });
    }
    // Ohne abschliessenden Slash zeigt der Link auf die Nicht-Canonical-Variante.
    // Vercel leitet dann per 308 um – unnoetiger Redirect-Hop fuer Googlebot.
    if (!target.endsWith('/')) {
      issues.push({
        target,
        expected: `${target}/`,
        reason: 'fehlender abschliessender Slash (canonical-Form)',
      });
    }
  }
  return issues;
}

const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
let errorCount = 0;

for (const file of files) {
  const path = join(BLOG_DIR, file);
  const raw = readFileSync(path, 'utf-8');
  const lang = frontmatterLang(raw);

  if (!lang || !LANGS.includes(lang)) {
    console.error(`✗ ${file}: fehlendes oder unbekanntes "lang"-Frontmatter-Feld`);
    errorCount++;
    continue;
  }

  const issues = findLinkIssues(raw, lang);
  for (const issue of issues) {
    console.error(
      `✗ ${file} (lang: ${lang}): interner Link "${issue.target}" – ${issue.reason}, erwartet: ${issue.expected}`,
    );
    errorCount++;
  }
}

if (errorCount > 0) {
  console.error(`\n${errorCount} fehlerhafte(r) Blog-Link(s) gefunden. Siehe [[feedback-blog-link-prefix]]-Regel.`);
  process.exit(1);
}

console.log(`✓ Blog-Link-Praefixe geprueft: ${files.length} Dateien, keine Fehler.`);
