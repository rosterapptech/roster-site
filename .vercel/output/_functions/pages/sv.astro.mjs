import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, c as $$Vio, b as $$Footer } from '../chunks/Footer_CmRuYHsA.mjs';
import { $ as $$PolyculeMap } from '../chunks/PolyculeMap_CCY3x_Jx.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "sv";
  const features = [
    {
      name: "Kopplingar",
      desc: "Alla dina relationer p\xE5 ett st\xE4lle \u2014 med typ, skyddsstatus och en snabb kontaktlogg.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="5" stroke="#8b5cf6" stroke-width="2"/><path d="M3 28c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/><circle cx="25" cy="11" r="4" stroke="#c4b5fd" stroke-width="1.75"/><path d="M20 26c0-3.314 2.686-6 6-6" stroke="#c4b5fd" stroke-width="1.75" stroke-linecap="round"/></svg>`
    },
    {
      name: "Polycule-karta",
      desc: "Ditt relationsn\xE4tverk som en levande karta. Du i mitten, alla kopplingar runt om dig, f\xE4rgkodade efter typ.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="4" fill="#8b5cf6"/><circle cx="6" cy="9" r="3" stroke="#8b5cf6" stroke-width="1.75"/><circle cx="28" cy="9" r="3" stroke="#c4b5fd" stroke-width="1.75"/><circle cx="6" cy="25" r="3" stroke="#4fd6c2" stroke-width="1.75"/><circle cx="28" cy="25" r="3" stroke="#f0789f" stroke-width="1.75"/><line x1="17" y1="17" x2="6" y2="9" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="28" y2="9" stroke="#c4b5fd" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="6" y2="25" stroke="#4fd6c2" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="28" y2="25" stroke="#f0789f" stroke-width="1.5" stroke-opacity="0.6"/></svg>`
    },
    {
      name: "V\xE4lm\xE5ende",
      desc: "H\xE5ll koll p\xE5 STI-tester och check-ins \u2014 diskret, lokalt, synligt bara f\xF6r dig.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 29C17 29 5 22 5 13a7 7 0 0 1 12-4.9A7 7 0 0 1 29 13c0 9-12 16-12 16z" stroke="#8b5cf6" stroke-width="2" stroke-linejoin="round"/><path d="M12 17l3 3 6-6" stroke="#c4b5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      name: "Reflektion",
      desc: "En dagbok f\xF6r svartsjuka, compersion och allt d\xE4remellan. F\xF6r att sortera, inte f\xF6r att d\xF6ma.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="5" width="16" height="24" rx="3" stroke="#8b5cf6" stroke-width="2"/><path d="M22 8h3a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-3" stroke="#c4b5fd" stroke-width="1.75"/><line x1="10" y1="11" x2="18" y2="11" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/><line x1="10" y1="16" x2="18" y2="16" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/><line x1="10" y1="21" x2="15" y2="21" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/></svg>`
    },
    {
      name: "Insikter",
      desc: "Mjuka m\xF6nster ist\xE4llet f\xF6r kalla siffror: var investerar du energi, var tystnar det?",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24l7-7 5 4 8-10 4 4" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="17" r="2.5" fill="#8b5cf6"/><circle cx="17" cy="21" r="2.5" fill="#c4b5fd"/><circle cx="25" cy="11" r="2.5" fill="#8b5cf6"/><line x1="5" y1="28" x2="29" y2="28" stroke="#2a2833" stroke-width="1.5"/></svg>`
    },
    {
      name: "Vio",
      desc: "Din lille f\xF6ljeslagare som fr\xE5gar hur du m\xE5r \u2014 mjukt, avslappnat eller \xE4rligt rakt p\xE5 sak.",
      vio: true
    }
  ];
  const faqs = [
    { q: "Vem \xE4r Roster till f\xF6r?", a: "F\xF6r personer i polyamor\xF6sa, \xF6ppna eller p\xE5 annat s\xE4tt etiskt icke-monogama relationer som vill beh\xE5lla \xF6verblicken \u2014 utan kalkylblad, utan sp\xE5rning." },
    { q: "Lagrar Roster mina data i molnet?", a: "Nej. Roster \xE4r local-first: dina data finns p\xE5 din enhet. Det finns ingen Roster-backend och ingen sp\xE5rning." },
    { q: "Beh\xF6ver jag ett konto?", a: "Nej. Ladda ner appen och s\xE4tt ig\xE5ng. Ingen registrering, ingen e-postadress beh\xF6vs." },
    { q: "Vad kostar Roster?", a: "Grundfunktionerna \xE4r gratis. Premium kostar 0,99 \u20AC/vecka, 2,99 \u20AC/m\xE5nad (med 3 dagars gratis provperiod) eller 29,90 \u20AC/\xE5r." },
    { q: "P\xE5 vilka enheter fungerar Roster?", a: "Roster \xE4r en native iOS-app f\xF6r iPhone, byggd med SwiftUI. Tillg\xE4nglig p\xE5 tyska, engelska, spanska, nederl\xE4ndska, danska och svenska." }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Roster",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS",
        description: "Privacy-first app f\xF6r personer i polyamor\xF6sa och \xF6ppna relationer. Organisera kopplingar, check-ins och reflektioner lokalt \u2014 inget konto, ingen sp\xE5rning.",
        inLanguage: ["de", "en", "es", "nl", "da", "sv"],
        offers: [
          { "@type": "Offer", price: "0.99", priceCurrency: "EUR", name: "Veckovis" },
          { "@type": "Offer", price: "2.99", priceCurrency: "EUR", name: "M\xE5nadsvis" },
          { "@type": "Offer", price: "29.90", priceCurrency: "EUR", name: "\xC5rsvis" }
        ],
        author: { "@type": "Organization", name: "Slowcraft" }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/", "title": "Roster \u2013 Relationsapp f\xF6r Polyamori & \xD6ppna Relationer", "description": "Roster \xE4r en privacy-first app f\xF6r polyamor\xF6sa och \xF6ppna relationer. Organisera kopplingar, check-ins och reflektioner lokalt \u2014 inget konto, ingen sp\xE5rning.", "schema": schema, "data-astro-cid-hmvnqgfe": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-hmvnqgfe": true })} ${maybeRenderHead()}<main data-astro-cid-hmvnqgfe> <section class="hero" data-astro-cid-hmvnqgfe> <div class="container hero-grid" data-astro-cid-hmvnqgfe> <div class="hero-copy" data-astro-cid-hmvnqgfe> <p class="eyebrow" data-astro-cid-hmvnqgfe>Privacy-First · iOS</p> <h1 data-astro-cid-hmvnqgfe>Relationer,<br data-astro-cid-hmvnqgfe>skötta med omsorg.</h1> <p class="lede" data-astro-cid-hmvnqgfe>
Roster är appen för personer i polyamorösa och öppna relationer.
            Håll koll på dina kopplingar, check-ins och känslor — lokalt på din
            enhet, inget konto, ingen spårning.
</p> <div class="hero-cta" data-astro-cid-hmvnqgfe> <a href="https://apps.apple.com/app/roster" class="btn btn-primary" data-astro-cid-hmvnqgfe>Hämta i App Store</a> <a href="#features" class="btn btn-ghost" data-astro-cid-hmvnqgfe>Se funktioner</a> </div> </div> <div class="hero-visual" data-astro-cid-hmvnqgfe>${renderComponent($$result2, "PolyculeMap", $$PolyculeMap, { "data-astro-cid-hmvnqgfe": true })}</div> </div> </section> <div class="trust" data-astro-cid-hmvnqgfe> <div class="container trust-row" data-astro-cid-hmvnqgfe> <span data-astro-cid-hmvnqgfe>Lagrat lokalt</span> <span data-astro-cid-hmvnqgfe>Ingen spårning</span> <span data-astro-cid-hmvnqgfe>Inget konto krävs</span> <span data-astro-cid-hmvnqgfe>Ingen backend</span> </div> </div> <section id="features" data-astro-cid-hmvnqgfe> <div class="container" data-astro-cid-hmvnqgfe> <p class="eyebrow" data-astro-cid-hmvnqgfe>Vad som ingår</p> <h2 data-astro-cid-hmvnqgfe>Fem rum, ett klart huvud.</h2> <p class="lede" style="margin-bottom:48px" data-astro-cid-hmvnqgfe>Varje flik i Roster tar över en del av den mentala börda som flera relationer medför.</p> <div class="grid" data-astro-cid-hmvnqgfe> ${features.map((f) => renderTemplate`<div class="card feature" data-astro-cid-hmvnqgfe> ${f.vio ? renderTemplate`${renderComponent($$result2, "Vio", $$Vio, { "size": 34, "data-astro-cid-hmvnqgfe": true })}` : renderTemplate`<span class="feat-icon" data-astro-cid-hmvnqgfe>${unescapeHTML(f.icon)}</span>`} <h3 data-astro-cid-hmvnqgfe>${f.name}</h3> <p data-astro-cid-hmvnqgfe>${f.desc}</p> </div>`)} </div> </div> </section> <section id="pricing" class="pricing" data-astro-cid-hmvnqgfe> <div class="container" data-astro-cid-hmvnqgfe> <p class="eyebrow" data-astro-cid-hmvnqgfe>Priser</p> <h2 data-astro-cid-hmvnqgfe>Rättvist, ärligt, uppsägbart.</h2> <p class="lede" style="margin-bottom:48px" data-astro-cid-hmvnqgfe>Grundfunktionerna är gratis. Premium låser upp kartan, välmående, insikter och mer.</p> <div class="price-grid" data-astro-cid-hmvnqgfe> <div class="card price" data-astro-cid-hmvnqgfe> <span class="price-name" data-astro-cid-hmvnqgfe>Veckovis</span> <span class="price-amount" data-astro-cid-hmvnqgfe>0,99 €<small data-astro-cid-hmvnqgfe>/vecka</small></span> <p class="price-note" data-astro-cid-hmvnqgfe>För att prova.</p> </div> <div class="card price" data-astro-cid-hmvnqgfe> <span class="price-name" data-astro-cid-hmvnqgfe>Månadsvis</span> <span class="price-amount" data-astro-cid-hmvnqgfe>2,99 €<small data-astro-cid-hmvnqgfe>/månad</small></span> <p class="price-note" data-astro-cid-hmvnqgfe>Inkl. 3 dagars gratis provperiod.</p> </div> <div class="card price featured" data-astro-cid-hmvnqgfe> <span class="badge" data-astro-cid-hmvnqgfe>Populär</span> <span class="price-name" data-astro-cid-hmvnqgfe>Årsvis</span> <span class="price-amount" data-astro-cid-hmvnqgfe>29,90 €<small data-astro-cid-hmvnqgfe>/år</small></span> <p class="price-note" data-astro-cid-hmvnqgfe>Spara över 50 % jämfört med månadsvis.</p> </div> </div> </div> </section> <section id="faq" data-astro-cid-hmvnqgfe> <div class="container faq-wrap" data-astro-cid-hmvnqgfe> <div data-astro-cid-hmvnqgfe><p class="eyebrow" data-astro-cid-hmvnqgfe>FAQ</p><h2 data-astro-cid-hmvnqgfe>Vanliga frågor</h2></div> <div class="faq-list" data-astro-cid-hmvnqgfe> ${faqs.map((f) => renderTemplate`<details class="card faq-item" data-astro-cid-hmvnqgfe> <summary data-astro-cid-hmvnqgfe>${f.q}</summary> <p data-astro-cid-hmvnqgfe>${f.a}</p> </details>`)} </div> </div> </section> <section class="closing" data-astro-cid-hmvnqgfe> <div class="container closing-inner" data-astro-cid-hmvnqgfe> ${renderComponent($$result2, "Vio", $$Vio, { "size": 48, "data-astro-cid-hmvnqgfe": true })} <h2 data-astro-cid-hmvnqgfe>Redo att få ett klart huvud?</h2> <a href="https://apps.apple.com/app/roster" class="btn btn-primary" data-astro-cid-hmvnqgfe>Roster i App Store</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-hmvnqgfe": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/sv/index.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/sv/index.astro";
const $$url = "/sv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
