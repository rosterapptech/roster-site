import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_CmRuYHsA.mjs';
import { c as contact } from '../../chunks/site_BEfHvMuE.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  const lang = "sv";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/impressum", "title": "Impressum \u2013 Roster", "description": "Juridisk information och leverant\xF6rsidentifiering f\xF6r Roster-webbplatsen.", "noindex": true, "data-astro-cid-tnfclm5j": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-tnfclm5j": true })} ${maybeRenderHead()}<main class="prose container" data-astro-cid-tnfclm5j> <h1 data-astro-cid-tnfclm5j>Impressum</h1> <p class="updated" data-astro-cid-tnfclm5j>Uppgifter enligt § 5 DDG (tysk lag om digitala tjänster)</p> <p data-astro-cid-tnfclm5j> <strong data-astro-cid-tnfclm5j>${contact.name}</strong><br data-astro-cid-tnfclm5j> ${contact.company}<br data-astro-cid-tnfclm5j> ${contact.addressLine1}<br data-astro-cid-tnfclm5j> ${contact.addressLine2}<br data-astro-cid-tnfclm5j> ${contact.city}<br data-astro-cid-tnfclm5j> ${contact.country} </p> <h2 data-astro-cid-tnfclm5j>Kontakt</h2> <p data-astro-cid-tnfclm5j>
E-post: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-tnfclm5j>${contact.email}</a><br data-astro-cid-tnfclm5j>
Telefon: <a${addAttribute(`tel:${contact.phone.replace(/\s/g, "")}`, "href")} data-astro-cid-tnfclm5j>${contact.phone}</a> </p> <h2 data-astro-cid-tnfclm5j>Moms-ID</h2> <p data-astro-cid-tnfclm5j>Momsregistreringsnummer enligt § 27 a UStG:<br data-astro-cid-tnfclm5j><strong data-astro-cid-tnfclm5j>${contact.ustId}</strong></p> <h2 data-astro-cid-tnfclm5j>Ansvarig för innehåll enligt § 18 st. 2 MStV</h2> <p data-astro-cid-tnfclm5j><strong data-astro-cid-tnfclm5j>${contact.name}</strong>, adress som ovan.</p> <h2 data-astro-cid-tnfclm5j>EU:s tvistlösning</h2> <p data-astro-cid-tnfclm5j>
EU-kommissionen tillhandahåller en plattform för tvistlösning online (ODR):
<a href="https://ec.europa.eu/consumers/odr/" rel="noopener" data-astro-cid-tnfclm5j>ec.europa.eu/consumers/odr</a>.
      Vi är inte villiga eller skyldiga att delta i tvistlösningsförfaranden vid en konsumentarbitrationsnämnd.
</p> <h2 data-astro-cid-tnfclm5j>Ansvar för innehåll</h2> <p data-astro-cid-tnfclm5j>Som tjänsteleverantör ansvarar vi för vårt eget innehåll på dessa sidor i enlighet med allmän lag enligt § 7 st. 1 DDG. Vi är inte skyldiga att övervaka vidarebefordrad eller lagrad information från tredje part.</p> <h2 data-astro-cid-tnfclm5j>Upphovsrätt</h2> <p data-astro-cid-tnfclm5j>Innehåll och verk skapade av webbplatsoperatören på dessa sidor är föremål för tysk upphovsrätt. Reproduktion, redigering, distribution och all form av exploatering utanför upphovsrättens gränser kräver skriftligt medgivande från respektive upphovsperson.</p> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-tnfclm5j": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/sv/impressum.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/sv/impressum.astro";
const $$url = "/sv/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
