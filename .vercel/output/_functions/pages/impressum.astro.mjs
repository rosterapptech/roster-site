import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_CmRuYHsA.mjs';
import { c as contact } from '../chunks/site_BEfHvMuE.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  const lang = "de";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/impressum", "title": "Impressum \u2013 Roster", "description": "Impressum und Anbieterkennzeichnung gem\xE4\xDF \xA7 5 DDG f\xFCr die Roster-Website.", "noindex": true, "data-astro-cid-7dpr4qcz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-7dpr4qcz": true })} ${maybeRenderHead()}<main class="prose container" data-astro-cid-7dpr4qcz> <h1 data-astro-cid-7dpr4qcz>Impressum</h1> <p class="updated" data-astro-cid-7dpr4qcz>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</p> <p data-astro-cid-7dpr4qcz> <strong data-astro-cid-7dpr4qcz>${contact.name}</strong><br data-astro-cid-7dpr4qcz> ${contact.company}<br data-astro-cid-7dpr4qcz> ${contact.addressLine1}<br data-astro-cid-7dpr4qcz> ${contact.addressLine2}<br data-astro-cid-7dpr4qcz> ${contact.city}<br data-astro-cid-7dpr4qcz> ${contact.country} </p> <h2 data-astro-cid-7dpr4qcz>Kontakt</h2> <p data-astro-cid-7dpr4qcz>
E-Mail: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-7dpr4qcz>${contact.email}</a><br data-astro-cid-7dpr4qcz>
Telefon: <a${addAttribute(`tel:${contact.phone.replace(/\s/g, "")}`, "href")} data-astro-cid-7dpr4qcz>${contact.phone}</a> </p> <h2 data-astro-cid-7dpr4qcz>Umsatzsteuer</h2> <p data-astro-cid-7dpr4qcz>Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG:<br data-astro-cid-7dpr4qcz><strong data-astro-cid-7dpr4qcz>${contact.ustId}</strong></p> <h2 data-astro-cid-7dpr4qcz>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2> <p data-astro-cid-7dpr4qcz><strong data-astro-cid-7dpr4qcz>${contact.name}</strong>, Anschrift wie oben.</p> <h2 data-astro-cid-7dpr4qcz>EU-Streitschlichtung</h2> <p data-astro-cid-7dpr4qcz>
Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
<a href="https://ec.europa.eu/consumers/odr/" rel="noopener" data-astro-cid-7dpr4qcz>ec.europa.eu/consumers/odr</a>.
      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
</p> <h2 data-astro-cid-7dpr4qcz>Haftung für Inhalte</h2> <p data-astro-cid-7dpr4qcz>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p> <h2 data-astro-cid-7dpr4qcz>Urheberrecht</h2> <p data-astro-cid-7dpr4qcz>Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der jeweiligen Autorin.</p> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-7dpr4qcz": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/impressum.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/impressum.astro";
const $$url = "/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
