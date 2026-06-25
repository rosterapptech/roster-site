import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_CmRuYHsA.mjs';
import { c as contact, w as websiteFeatures } from '../../chunks/site_BEfHvMuE.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Datenschutz = createComponent(($$result, $$props, $$slots) => {
  const lang = "nl";
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/datenschutz", "title": "Privacybeleid \u2013 Roster", "description": "Privacybeleid voor de Roster-website. Geen tracking, geen backend.", "noindex": true, "data-astro-cid-lh2vs6i5": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-lh2vs6i5": true })} ${maybeRenderHead()}<main class="prose container" data-astro-cid-lh2vs6i5> <h1 data-astro-cid-lh2vs6i5>Privacybeleid</h1> <p class="updated" data-astro-cid-lh2vs6i5>Bijgewerkt: ${today}</p> <h2 data-astro-cid-lh2vs6i5>1. Verwerkingsverantwoordelijke</h2> <p data-astro-cid-lh2vs6i5> <strong data-astro-cid-lh2vs6i5>${contact.name}</strong><br data-astro-cid-lh2vs6i5> ${contact.company} · ${contact.addressLine1} · ${contact.addressLine2} · ${contact.city}<br data-astro-cid-lh2vs6i5>
E-mail: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-lh2vs6i5>${contact.email}</a> </p> <h2 data-astro-cid-lh2vs6i5>2. Deze website</h2> <p data-astro-cid-lh2vs6i5>Deze website is de marketingpresentatie van de Roster iOS-app. Er worden geen gebruikersaccounts aangemaakt, geen formulieren verwerkt en geen tracking uitgevoerd.</p> ${renderTemplate`<h2 data-astro-cid-lh2vs6i5>3. Hosting &amp; serverlogboeken</h2>
      <p data-astro-cid-lh2vs6i5>Bij een bezoek verwerkt de hostingprovider technisch noodzakelijke serverlogboeken (bijv. IP-adres, tijdstempel, opgevraagde pagina). Rechtsgrondslag: Art. 6 lid 1 sub f AVG.</p>`} <h2 data-astro-cid-lh2vs6i5>4. Lettertypen</h2> ${renderTemplate`<p data-astro-cid-lh2vs6i5>Alle lettertypen zijn lokaal ingebonden. Er worden geen externe font-CDN's aangesproken.</p>`} ${websiteFeatures.analytics} ${websiteFeatures.cookies} <h2 data-astro-cid-lh2vs6i5>De Roster-app</h2> <p data-astro-cid-lh2vs6i5>
Roster slaat alle inhoud uitsluitend op uw apparaat op. Er is geen Roster-backend en geen overdracht van uw inhoud aan ons. Het volledige privacybeleid van de app is beschikbaar op <a href="/nl/appinfo/datenschutzrichtlinie" data-astro-cid-lh2vs6i5>rosterapp.tech/nl/appinfo/datenschutzrichtlinie</a>.
</p> <h2 data-astro-cid-lh2vs6i5>Uw rechten</h2> <p data-astro-cid-lh2vs6i5>U heeft de rechten op grond van Art. 15–22 AVG: inzage, rectificatie, verwijdering, beperking, gegevensoverdraagbaarheid en bezwaar. Klachtrecht bij de bevoegde gegevensbeschermingsautoriteit (Art. 77 AVG). Contact: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-lh2vs6i5>${contact.email}</a>.</p> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-lh2vs6i5": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/nl/datenschutz.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/nl/datenschutz.astro";
const $$url = "/nl/datenschutz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Datenschutz,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
