import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, c as $$Vio, b as $$Footer } from '../chunks/Footer_CmRuYHsA.mjs';
import { $ as $$PolyculeMap } from '../chunks/PolyculeMap_CCY3x_Jx.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "da";
  const features = [
    {
      name: "Forbindelser",
      desc: "Alle dine relationer \xE9t sted \u2014 med type, beskyttelsesstatus og en hurtig kontaktlog.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="5" stroke="#8b5cf6" stroke-width="2"/><path d="M3 28c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/><circle cx="25" cy="11" r="4" stroke="#c4b5fd" stroke-width="1.75"/><path d="M20 26c0-3.314 2.686-6 6-6" stroke="#c4b5fd" stroke-width="1.75" stroke-linecap="round"/></svg>`
    },
    {
      name: "Polycule Map",
      desc: "Dit relationelle netv\xE6rk som et levende kort. Du i midten, alle forbindelser rundt om dig, farvekodet efter type.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="4" fill="#8b5cf6"/><circle cx="6" cy="9" r="3" stroke="#8b5cf6" stroke-width="1.75"/><circle cx="28" cy="9" r="3" stroke="#c4b5fd" stroke-width="1.75"/><circle cx="6" cy="25" r="3" stroke="#4fd6c2" stroke-width="1.75"/><circle cx="28" cy="25" r="3" stroke="#f0789f" stroke-width="1.75"/><line x1="17" y1="17" x2="6" y2="9" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="28" y2="9" stroke="#c4b5fd" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="6" y2="25" stroke="#4fd6c2" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="28" y2="25" stroke="#f0789f" stroke-width="1.5" stroke-opacity="0.6"/></svg>`
    },
    {
      name: "Velv\xE6re",
      desc: "Hold styr p\xE5 STI-tests og check-ins \u2014 diskret, lokalt, kun synligt for dig.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 29C17 29 5 22 5 13a7 7 0 0 1 12-4.9A7 7 0 0 1 29 13c0 9-12 16-12 16z" stroke="#8b5cf6" stroke-width="2" stroke-linejoin="round"/><path d="M12 17l3 3 6-6" stroke="#c4b5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      name: "Refleksion",
      desc: "En dagbog til jalousi, compersion og alt derimellem. Til at sortere, ikke til at d\xF8mme.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="5" width="16" height="24" rx="3" stroke="#8b5cf6" stroke-width="2"/><path d="M22 8h3a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-3" stroke="#c4b5fd" stroke-width="1.75"/><line x1="10" y1="11" x2="18" y2="11" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/><line x1="10" y1="16" x2="18" y2="16" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/><line x1="10" y1="21" x2="15" y2="21" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/></svg>`
    },
    {
      name: "Indsigt",
      desc: "Blide m\xF8nstre frem for kolde tal: Hvor investerer du energi, og hvor bliver det stille?",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24l7-7 5 4 8-10 4 4" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="17" r="2.5" fill="#8b5cf6"/><circle cx="17" cy="21" r="2.5" fill="#c4b5fd"/><circle cx="25" cy="11" r="2.5" fill="#8b5cf6"/><line x1="5" y1="28" x2="29" y2="28" stroke="#2a2833" stroke-width="1.5"/></svg>`
    },
    {
      name: "Vio",
      desc: "Din lille ledsager, der sp\xF8rger hvordan du har det \u2014 blidt, afslappet eller rystende \xE6rligt.",
      vio: true
    }
  ];
  const faqs = [
    { q: "Hvem er Roster til?", a: "Til mennesker i polyamor\xF8se, \xE5bne eller p\xE5 anden m\xE5de etisk ikke-monogame forhold, der vil bevare overblikket \u2014 uden regneark, uden sporing." },
    { q: "Gemmer Roster mine data i skyen?", a: "Nej. Roster er local-first: Dine data ligger p\xE5 din enhed. Der er ingen Roster-backend og ingen sporing." },
    { q: "Har jeg brug for en konto?", a: "Nej. Download appen og kom i gang. Ingen registrering, ingen e-mail n\xF8dvendig." },
    { q: "Hvad koster Roster?", a: "Basis er gratis. Premium koster 0,99 \u20AC/uge, 2,99 \u20AC/m\xE5ned (med 3 dages gratis pr\xF8ve) eller 29,90 \u20AC/\xE5r." },
    { q: "P\xE5 hvilke enheder k\xF8rer Roster?", a: "Roster er en native iOS-app til iPhone, bygget med SwiftUI. Tilg\xE6ngelig p\xE5 tysk, engelsk, spansk, nederlandsk, dansk og svensk." }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Roster",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS",
        description: "Privacy-first app til mennesker i polyamor\xF8se og \xE5bne forhold. Organiser forbindelser, check-ins og refleksioner lokalt \u2014 ingen konto, ingen sporing.",
        inLanguage: ["de", "en", "es", "nl", "da", "sv"],
        offers: [
          { "@type": "Offer", price: "0.99", priceCurrency: "EUR", name: "Ugentlig" },
          { "@type": "Offer", price: "2.99", priceCurrency: "EUR", name: "M\xE5nedlig" },
          { "@type": "Offer", price: "29.90", priceCurrency: "EUR", name: "\xC5rlig" }
        ],
        author: { "@type": "Organization", name: "Slowcraft" }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/", "title": "Roster \u2013 Relationsapp til Polyamori & \xC5bne Forhold", "description": "Roster er en privacy-first app til polyamor\xF8se og \xE5bne forhold. Organiser forbindelser, check-ins og refleksioner lokalt \u2014 ingen konto, ingen sporing.", "schema": schema, "data-astro-cid-5c7so2vk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-5c7so2vk": true })} ${maybeRenderHead()}<main data-astro-cid-5c7so2vk> <section class="hero" data-astro-cid-5c7so2vk> <div class="container hero-grid" data-astro-cid-5c7so2vk> <div class="hero-copy" data-astro-cid-5c7so2vk> <p class="eyebrow" data-astro-cid-5c7so2vk>Privacy-First · iOS</p> <h1 data-astro-cid-5c7so2vk>Relationer,<br data-astro-cid-5c7so2vk>plejet med omsorg.</h1> <p class="lede" data-astro-cid-5c7so2vk>
Roster er appen til mennesker i polyamorøse og åbne forhold.
            Hold styr på dine forbindelser, check-ins og følelser — lokalt på
            din enhed, ingen konto, ingen sporing.
</p> <div class="hero-cta" data-astro-cid-5c7so2vk> <a href="https://apps.apple.com/app/roster" class="btn btn-primary" data-astro-cid-5c7so2vk>Hent i App Store</a> <a href="#features" class="btn btn-ghost" data-astro-cid-5c7so2vk>Se funktioner</a> </div> </div> <div class="hero-visual" data-astro-cid-5c7so2vk>${renderComponent($$result2, "PolyculeMap", $$PolyculeMap, { "data-astro-cid-5c7so2vk": true })}</div> </div> </section> <div class="trust" data-astro-cid-5c7so2vk> <div class="container trust-row" data-astro-cid-5c7so2vk> <span data-astro-cid-5c7so2vk>Gemt lokalt</span> <span data-astro-cid-5c7so2vk>Ingen sporing</span> <span data-astro-cid-5c7so2vk>Ingen konto nødvendig</span> <span data-astro-cid-5c7so2vk>Ingen backend</span> </div> </div> <section id="features" data-astro-cid-5c7so2vk> <div class="container" data-astro-cid-5c7so2vk> <p class="eyebrow" data-astro-cid-5c7so2vk>Hvad er der i</p> <h2 data-astro-cid-5c7so2vk>Fem rum, ét klart hoved.</h2> <p class="lede" style="margin-bottom:48px" data-astro-cid-5c7so2vk>Hver fane i Roster overtager en del af den mentale byrde, som flere relationer medfører.</p> <div class="grid" data-astro-cid-5c7so2vk> ${features.map((f) => renderTemplate`<div class="card feature" data-astro-cid-5c7so2vk> ${f.vio ? renderTemplate`${renderComponent($$result2, "Vio", $$Vio, { "size": 34, "data-astro-cid-5c7so2vk": true })}` : renderTemplate`<span class="feat-icon" data-astro-cid-5c7so2vk>${unescapeHTML(f.icon)}</span>`} <h3 data-astro-cid-5c7so2vk>${f.name}</h3> <p data-astro-cid-5c7so2vk>${f.desc}</p> </div>`)} </div> </div> </section> <section id="pricing" class="pricing" data-astro-cid-5c7so2vk> <div class="container" data-astro-cid-5c7so2vk> <p class="eyebrow" data-astro-cid-5c7so2vk>Priser</p> <h2 data-astro-cid-5c7so2vk>Fair, ærlig, opsigelig.</h2> <p class="lede" style="margin-bottom:48px" data-astro-cid-5c7so2vk>Basis er gratis. Premium låser op for kort, velvære, indsigt og mere.</p> <div class="price-grid" data-astro-cid-5c7so2vk> <div class="card price" data-astro-cid-5c7so2vk> <span class="price-name" data-astro-cid-5c7so2vk>Ugentlig</span> <span class="price-amount" data-astro-cid-5c7so2vk>0,99 €<small data-astro-cid-5c7so2vk>/uge</small></span> <p class="price-note" data-astro-cid-5c7so2vk>Til at prøve af.</p> </div> <div class="card price" data-astro-cid-5c7so2vk> <span class="price-name" data-astro-cid-5c7so2vk>Månedlig</span> <span class="price-amount" data-astro-cid-5c7so2vk>2,99 €<small data-astro-cid-5c7so2vk>/måned</small></span> <p class="price-note" data-astro-cid-5c7so2vk>Inkl. 3 dages gratis prøve.</p> </div> <div class="card price featured" data-astro-cid-5c7so2vk> <span class="badge" data-astro-cid-5c7so2vk>Populær</span> <span class="price-name" data-astro-cid-5c7so2vk>Årlig</span> <span class="price-amount" data-astro-cid-5c7so2vk>29,90 €<small data-astro-cid-5c7so2vk>/år</small></span> <p class="price-note" data-astro-cid-5c7so2vk>Spar over 50 % ift. månedlig.</p> </div> </div> </div> </section> <section id="faq" data-astro-cid-5c7so2vk> <div class="container faq-wrap" data-astro-cid-5c7so2vk> <div data-astro-cid-5c7so2vk><p class="eyebrow" data-astro-cid-5c7so2vk>FAQ</p><h2 data-astro-cid-5c7so2vk>Ofte stillede spørgsmål</h2></div> <div class="faq-list" data-astro-cid-5c7so2vk> ${faqs.map((f) => renderTemplate`<details class="card faq-item" data-astro-cid-5c7so2vk> <summary data-astro-cid-5c7so2vk>${f.q}</summary> <p data-astro-cid-5c7so2vk>${f.a}</p> </details>`)} </div> </div> </section> <section class="closing" data-astro-cid-5c7so2vk> <div class="container closing-inner" data-astro-cid-5c7so2vk> ${renderComponent($$result2, "Vio", $$Vio, { "size": 48, "data-astro-cid-5c7so2vk": true })} <h2 data-astro-cid-5c7so2vk>Klar til at få et klart hoved?</h2> <a href="https://apps.apple.com/app/roster" class="btn btn-primary" data-astro-cid-5c7so2vk>Roster i App Store</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-5c7so2vk": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/da/index.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/da/index.astro";
const $$url = "/da";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
