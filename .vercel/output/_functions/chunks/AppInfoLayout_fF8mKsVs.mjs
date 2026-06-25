import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, q as renderSlot } from './astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_CmRuYHsA.mjs';
/* empty css                       */

const $$Astro = createAstro("https://rosterapp.tech");
const $$AppInfoLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AppInfoLayout;
  const { lang, title, description, path, activeTab } = Astro2.props;
  const base = lang === "de" ? "" : `/${lang}`;
  const tabs = [
    { key: "privacy", href: `${base}/appinfo/datenschutzrichtlinie`, label: { de: "Datenschutz", en: "Privacy", nl: "Privacy", es: "Privacidad", da: "Privatliv", sv: "Integritet" } },
    { key: "terms", href: `${base}/appinfo/agb`, label: { de: "AGB", en: "Terms", nl: "Voorwaarden", es: "Condiciones", da: "Vilk\xE5r", sv: "Villkor" } },
    { key: "impressum", href: `${base}/appinfo/impressum`, label: { de: "Impressum", en: "Imprint", nl: "Impressum", es: "Aviso legal", da: "Impressum", sv: "Impressum" } }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": path, "title": title, "description": description, "noindex": true, "data-astro-cid-qdm4idox": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-qdm4idox": true })} ${maybeRenderHead()}<main class="prose container" data-astro-cid-qdm4idox> <nav class="page-tabs" aria-label="Legal pages" data-astro-cid-qdm4idox> ${tabs.map((tab) => renderTemplate`<a${addAttribute(tab.href, "href")}${addAttribute(activeTab === tab.key ? "active" : "", "class")} data-astro-cid-qdm4idox> ${tab.label[lang]} </a>`)} </nav> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-qdm4idox": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/layouts/AppInfoLayout.astro", void 0);

export { $$AppInfoLayout as $ };
