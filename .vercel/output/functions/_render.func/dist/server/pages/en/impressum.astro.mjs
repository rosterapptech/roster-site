import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_CmRuYHsA.mjs';
import { c as contact } from '../../chunks/site_BEfHvMuE.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/impressum", "title": "Imprint \u2013 Roster", "description": "Legal notice and provider identification for the Roster website.", "noindex": true, "data-astro-cid-2m434ahd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-2m434ahd": true })} ${maybeRenderHead()}<main class="prose container" data-astro-cid-2m434ahd> <h1 data-astro-cid-2m434ahd>Imprint</h1> <p class="updated" data-astro-cid-2m434ahd>Information according to § 5 DDG (German Digital Services Act)</p> <p data-astro-cid-2m434ahd> <strong data-astro-cid-2m434ahd>${contact.name}</strong><br data-astro-cid-2m434ahd> ${contact.company}<br data-astro-cid-2m434ahd> ${contact.addressLine1}<br data-astro-cid-2m434ahd> ${contact.addressLine2}<br data-astro-cid-2m434ahd> ${contact.city}<br data-astro-cid-2m434ahd> ${contact.country} </p> <h2 data-astro-cid-2m434ahd>Contact</h2> <p data-astro-cid-2m434ahd>
Email: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-2m434ahd>${contact.email}</a><br data-astro-cid-2m434ahd>
Phone: <a${addAttribute(`tel:${contact.phone.replace(/\s/g, "")}`, "href")} data-astro-cid-2m434ahd>${contact.phone}</a> </p> <h2 data-astro-cid-2m434ahd>VAT ID</h2> <p data-astro-cid-2m434ahd>VAT identification number pursuant to § 27 a UStG:<br data-astro-cid-2m434ahd><strong data-astro-cid-2m434ahd>${contact.ustId}</strong></p> <h2 data-astro-cid-2m434ahd>Responsible for content pursuant to § 18 para. 2 MStV</h2> <p data-astro-cid-2m434ahd><strong data-astro-cid-2m434ahd>${contact.name}</strong>, address as above.</p> <h2 data-astro-cid-2m434ahd>EU Dispute Resolution</h2> <p data-astro-cid-2m434ahd>
The European Commission provides a platform for online dispute resolution (ODR):
<a href="https://ec.europa.eu/consumers/odr/" rel="noopener" data-astro-cid-2m434ahd>ec.europa.eu/consumers/odr</a>.
      We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
</p> <h2 data-astro-cid-2m434ahd>Liability for Content</h2> <p data-astro-cid-2m434ahd>As a service provider, we are responsible for our own content on these pages in accordance with general law pursuant to § 7 para. 1 DDG. According to §§ 8 to 10 DDG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p> <h2 data-astro-cid-2m434ahd>Copyright</h2> <p data-astro-cid-2m434ahd>The content and works created by the site operator on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author.</p> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-2m434ahd": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/en/impressum.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/en/impressum.astro";
const $$url = "/en/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
