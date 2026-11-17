// Ersetzt in Blog-Markdown das Kampagnen-Kuerzel aller App-Store-Links durch ein
// artikelgenaues Kuerzel (b-{lang}-{translationKey}-t). So sieht man in
// App Store Connect, welcher Artikel ueber Links im Fliesstext Downloads bringt,
// ohne 70 Markdown-Dateien von Hand pflegen zu muessen.
import { visit } from 'unist-util-visit';
import { basename, extname } from 'node:path';
import { appStoreUrl, blogCampaign, APP_STORE_ID } from '../config/appStore.ts';

export default function rehypeAppStoreCampaign() {
  return (tree, file) => {
    const fm = file.data?.astro?.frontmatter ?? {};
    const path = file.path ?? file.history?.[0] ?? '';
    const key = fm.translationKey ?? basename(path, extname(path));
    const lang = fm.lang ?? 'de';
    const href = appStoreUrl(blogCampaign(lang, key, 't'));

    visit(tree, 'element', (node) => {
      if (node.tagName !== 'a') return;
      const current = node.properties?.href;
      if (typeof current === 'string' && current.includes(`apps.apple.com`) && current.includes(APP_STORE_ID)) {
        node.properties.href = href;
      }
    });
  };
}
