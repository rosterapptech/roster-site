import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_CmRuYHsA.mjs';
import { c as contact } from '../../chunks/site_BEfHvMuE.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  const lang = "da";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/impressum", "title": "Impressum \u2013 Roster", "description": "Juridiske oplysninger og udbyderidentifikation for Roster-webstedet.", "noindex": true, "data-astro-cid-cfuo6bzs": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-cfuo6bzs": true })} ${maybeRenderHead()}<main class="prose container" data-astro-cid-cfuo6bzs> <h1 data-astro-cid-cfuo6bzs>Impressum</h1> <p class="updated" data-astro-cid-cfuo6bzs>Oplysninger i henhold til § 5 DDG (tysk lov om digitale tjenester)</p> <p data-astro-cid-cfuo6bzs> <strong data-astro-cid-cfuo6bzs>${contact.name}</strong><br data-astro-cid-cfuo6bzs> ${contact.company}<br data-astro-cid-cfuo6bzs> ${contact.addressLine1}<br data-astro-cid-cfuo6bzs> ${contact.addressLine2}<br data-astro-cid-cfuo6bzs> ${contact.city}<br data-astro-cid-cfuo6bzs> ${contact.country} </p> <h2 data-astro-cid-cfuo6bzs>Kontakt</h2> <p data-astro-cid-cfuo6bzs>
E-mail: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-cfuo6bzs>${contact.email}</a><br data-astro-cid-cfuo6bzs>
Telefon: <a${addAttribute(`tel:${contact.phone.replace(/\s/g, "")}`, "href")} data-astro-cid-cfuo6bzs>${contact.phone}</a> </p> <h2 data-astro-cid-cfuo6bzs>Moms-id</h2> <p data-astro-cid-cfuo6bzs>Momsregistreringsnummer i henhold til § 27 a UStG:<br data-astro-cid-cfuo6bzs><strong data-astro-cid-cfuo6bzs>${contact.ustId}</strong></p> <h2 data-astro-cid-cfuo6bzs>Ansvarlig for indholdet i henhold til § 18 stk. 2 MStV</h2> <p data-astro-cid-cfuo6bzs><strong data-astro-cid-cfuo6bzs>${contact.name}</strong>, adresse som ovenfor.</p> <h2 data-astro-cid-cfuo6bzs>EU-tvistbilæggelse</h2> <p data-astro-cid-cfuo6bzs>
Europa-Kommissionen stiller en platform til rådighed for online tvistbilæggelse (ODR):
<a href="https://ec.europa.eu/consumers/odr/" rel="noopener" data-astro-cid-cfuo6bzs>ec.europa.eu/consumers/odr</a>.
      Vi er ikke villige til eller forpligtede til at deltage i tvistbilæggelsesprocedurer ved et forbrugervoldgiftsorgan.
</p> <h2 data-astro-cid-cfuo6bzs>Ansvar for indhold</h2> <p data-astro-cid-cfuo6bzs>Som tjenesteudbyder er vi ansvarlige for vores eget indhold på disse sider i henhold til § 7 stk. 1 DDG. Vi er ikke forpligtet til at overvåge videresendt eller lagret tredjepartsindhold.</p> <h2 data-astro-cid-cfuo6bzs>Ophavsret</h2> <p data-astro-cid-cfuo6bzs>Indhold og værker skabt af sideoperatøren på disse sider er underlagt tysk ophavsret. Reproduktion, redigering, distribution og enhver form for udnyttelse uden for ophavsretlige grænser kræver skriftligt samtykke fra den pågældende forfatter.</p> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-cfuo6bzs": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/da/impressum.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/da/impressum.astro";
const $$url = "/da/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
