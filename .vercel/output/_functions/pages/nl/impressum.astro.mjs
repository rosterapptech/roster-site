import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_CmRuYHsA.mjs';
import { c as contact } from '../../chunks/site_BEfHvMuE.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  const lang = "nl";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/impressum", "title": "Impressum \u2013 Roster", "description": "Wettelijke informatie en aanbiederidentificatie voor de Roster-website.", "noindex": true, "data-astro-cid-bu2lcboq": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-bu2lcboq": true })} ${maybeRenderHead()}<main class="prose container" data-astro-cid-bu2lcboq> <h1 data-astro-cid-bu2lcboq>Impressum</h1> <p class="updated" data-astro-cid-bu2lcboq>Gegevens conform § 5 DDG (Duitse Wet Digitale Diensten)</p> <p data-astro-cid-bu2lcboq> <strong data-astro-cid-bu2lcboq>${contact.name}</strong><br data-astro-cid-bu2lcboq> ${contact.company}<br data-astro-cid-bu2lcboq> ${contact.addressLine1}<br data-astro-cid-bu2lcboq> ${contact.addressLine2}<br data-astro-cid-bu2lcboq> ${contact.city}<br data-astro-cid-bu2lcboq> ${contact.country} </p> <h2 data-astro-cid-bu2lcboq>Contact</h2> <p data-astro-cid-bu2lcboq>
E-mail: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-bu2lcboq>${contact.email}</a><br data-astro-cid-bu2lcboq>
Telefoon: <a${addAttribute(`tel:${contact.phone.replace(/\s/g, "")}`, "href")} data-astro-cid-bu2lcboq>${contact.phone}</a> </p> <h2 data-astro-cid-bu2lcboq>BTW-identificatienummer</h2> <p data-astro-cid-bu2lcboq>BTW-identificatienummer conform § 27 a UStG:<br data-astro-cid-bu2lcboq><strong data-astro-cid-bu2lcboq>${contact.ustId}</strong></p> <h2 data-astro-cid-bu2lcboq>Verantwoordelijk voor de inhoud conform § 18 lid 2 MStV</h2> <p data-astro-cid-bu2lcboq><strong data-astro-cid-bu2lcboq>${contact.name}</strong>, adres zoals hierboven.</p> <h2 data-astro-cid-bu2lcboq>EU-geschillenbeslechting</h2> <p data-astro-cid-bu2lcboq>
De Europese Commissie biedt een platform voor online geschillenbeslechting (ODR):
<a href="https://ec.europa.eu/consumers/odr/" rel="noopener" data-astro-cid-bu2lcboq>ec.europa.eu/consumers/odr</a>.
      Wij zijn niet bereid of verplicht deel te nemen aan geschillenbeslechtingsprocedures voor een consumentenarbitragecommissie.
</p> <h2 data-astro-cid-bu2lcboq>Aansprakelijkheid voor inhoud</h2> <p data-astro-cid-bu2lcboq>Als dienstverlener zijn wij conform § 7 lid 1 DDG verantwoordelijk voor onze eigen inhoud op deze pagina's. Wij zijn niet verplicht om doorgezonden of opgeslagen informatie van derden te controleren.</p> <h2 data-astro-cid-bu2lcboq>Auteursrecht</h2> <p data-astro-cid-bu2lcboq>De door de sitebeheerder gemaakte inhoud en werken op deze pagina's zijn onderworpen aan het Duitse auteursrecht. Reproductie, bewerking, verspreiding en elke vorm van exploitatie buiten de grenzen van het auteursrecht vereisen de schriftelijke toestemming van de betreffende auteur.</p> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-bu2lcboq": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/nl/impressum.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/nl/impressum.astro";
const $$url = "/nl/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
