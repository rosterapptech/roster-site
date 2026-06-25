import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_CmRuYHsA.mjs';
import { c as contact, w as websiteFeatures } from '../../chunks/site_BEfHvMuE.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Datenschutz = createComponent(($$result, $$props, $$slots) => {
  const lang = "da";
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/datenschutz", "title": "Privatlivspolitik \u2013 Roster", "description": "Privatlivspolitik for Roster-webstedet. Ingen sporing, ingen backend.", "noindex": true, "data-astro-cid-567bsxcf": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-567bsxcf": true })} ${maybeRenderHead()}<main class="prose container" data-astro-cid-567bsxcf> <h1 data-astro-cid-567bsxcf>Privatlivspolitik</h1> <p class="updated" data-astro-cid-567bsxcf>Sidst opdateret: ${today}</p> <h2 data-astro-cid-567bsxcf>1. Dataansvarlig</h2> <p data-astro-cid-567bsxcf> <strong data-astro-cid-567bsxcf>${contact.name}</strong><br data-astro-cid-567bsxcf> ${contact.company} · ${contact.addressLine1} · ${contact.addressLine2} · ${contact.city}<br data-astro-cid-567bsxcf>
E-mail: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-567bsxcf>${contact.email}</a> </p> <h2 data-astro-cid-567bsxcf>2. Dette websted</h2> <p data-astro-cid-567bsxcf>Dette websted er marketingpræsentationen for Roster iOS-appen. Der oprettes ingen brugerkonti, behandles ingen formularer og udføres ingen sporing.</p> ${renderTemplate`<h2 data-astro-cid-567bsxcf>3. Hosting og serverlogfiler</h2>
      <p data-astro-cid-567bsxcf>Ved besøg behandler hostingudbyderen teknisk nødvendige serverlogfiler (f.eks. IP-adresse, tidsstempel, anmodet side). Retsgrundlag: Art. 6(1)(f) GDPR.</p>`} <h2 data-astro-cid-567bsxcf>4. Skrifttyper</h2> ${renderTemplate`<p data-astro-cid-567bsxcf>Alle skrifttyper er lokalt indlejrede. Der foretages ingen opkald til eksterne font-CDN'er.</p>`} ${websiteFeatures.analytics} ${websiteFeatures.cookies} <h2 data-astro-cid-567bsxcf>Roster-appen</h2> <p data-astro-cid-567bsxcf>
Roster gemmer alt indhold udelukkende på din enhed. Der er ingen Roster-backend og ingen overførsel af dit indhold til os. Den fulde privatlivspolitik for appen findes på <a href="/da/appinfo/datenschutzrichtlinie" data-astro-cid-567bsxcf>rosterapp.tech/da/appinfo/datenschutzrichtlinie</a>.
</p> <h2 data-astro-cid-567bsxcf>Dine rettigheder</h2> <p data-astro-cid-567bsxcf>Du har rettighederne i henhold til Art. 15–22 GDPR: indsigt, berigtigelse, sletning, begrænsning, dataportabilitet og indsigelse. Ret til at indgive klage til den kompetente databeskyttelsesmyndighed (Art. 77 GDPR). Kontakt: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-567bsxcf>${contact.email}</a>.</p> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-567bsxcf": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/da/datenschutz.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/da/datenschutz.astro";
const $$url = "/da/datenschutz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Datenschutz,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
