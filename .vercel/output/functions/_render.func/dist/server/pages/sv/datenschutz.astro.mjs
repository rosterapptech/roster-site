import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_CmRuYHsA.mjs';
import { c as contact, w as websiteFeatures } from '../../chunks/site_BEfHvMuE.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Datenschutz = createComponent(($$result, $$props, $$slots) => {
  const lang = "sv";
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("sv-SE", { day: "numeric", month: "long", year: "numeric" });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/datenschutz", "title": "Integritetspolicy \u2013 Roster", "description": "Integritetspolicy f\xF6r Roster-webbplatsen. Ingen sp\xE5rning, ingen backend.", "noindex": true, "data-astro-cid-ugjzdmjp": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-ugjzdmjp": true })} ${maybeRenderHead()}<main class="prose container" data-astro-cid-ugjzdmjp> <h1 data-astro-cid-ugjzdmjp>Integritetspolicy</h1> <p class="updated" data-astro-cid-ugjzdmjp>Senast uppdaterad: ${today}</p> <h2 data-astro-cid-ugjzdmjp>1. Personuppgiftsansvarig</h2> <p data-astro-cid-ugjzdmjp> <strong data-astro-cid-ugjzdmjp>${contact.name}</strong><br data-astro-cid-ugjzdmjp> ${contact.company} · ${contact.addressLine1} · ${contact.addressLine2} · ${contact.city}<br data-astro-cid-ugjzdmjp>
E-post: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-ugjzdmjp>${contact.email}</a> </p> <h2 data-astro-cid-ugjzdmjp>2. Denna webbplats</h2> <p data-astro-cid-ugjzdmjp>Denna webbplats är marknadsföringspresentationen för Roster iOS-appen. Inga användarkonton skapas, inga formulär behandlas och ingen spårning utförs.</p> ${renderTemplate`<h2 data-astro-cid-ugjzdmjp>3. Hosting och serverloggar</h2>
      <p data-astro-cid-ugjzdmjp>Vid besök behandlar hostingleverantören tekniskt nödvändiga serverloggar (t.ex. IP-adress, tidsstämpel, begärd sida). Rättslig grund: Art. 6(1)(f) GDPR.</p>`} <h2 data-astro-cid-ugjzdmjp>4. Typsnitt</h2> ${renderTemplate`<p data-astro-cid-ugjzdmjp>Alla typsnitt är lokalt inbäddade. Inga externa font-CDN anropas.</p>`} ${websiteFeatures.analytics} ${websiteFeatures.cookies} <h2 data-astro-cid-ugjzdmjp>Roster-appen</h2> <p data-astro-cid-ugjzdmjp>
Roster lagrar allt innehåll uteslutande på din enhet. Det finns ingen Roster-backend och ingen överföring av ditt innehåll till oss. Den fullständiga integritetspolicyn för appen finns på <a href="/sv/appinfo/datenschutzrichtlinie" data-astro-cid-ugjzdmjp>rosterapp.tech/sv/appinfo/datenschutzrichtlinie</a>.
</p> <h2 data-astro-cid-ugjzdmjp>Dina rättigheter</h2> <p data-astro-cid-ugjzdmjp>Du har rättigheterna enligt Art. 15–22 GDPR: tillgång, rättelse, radering, begränsning, dataportabilitet och invändning. Rätt att lämna klagomål till behörig dataskyddsmyndighet (Art. 77 GDPR). Kontakt: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-ugjzdmjp>${contact.email}</a>.</p> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-ugjzdmjp": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/sv/datenschutz.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/sv/datenschutz.astro";
const $$url = "/sv/datenschutz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Datenschutz,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
