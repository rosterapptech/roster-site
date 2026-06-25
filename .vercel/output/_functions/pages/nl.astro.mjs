import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, c as $$Vio, b as $$Footer } from '../chunks/Footer_CmRuYHsA.mjs';
import { $ as $$PolyculeMap } from '../chunks/PolyculeMap_CCY3x_Jx.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "nl";
  const features = [
    {
      name: "Verbindingen",
      desc: "Alle relaties op \xE9\xE9n plek \u2014 met type, beschermingsstatus en een snelle contactlog.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="5" stroke="#8b5cf6" stroke-width="2"/><path d="M3 28c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/><circle cx="25" cy="11" r="4" stroke="#c4b5fd" stroke-width="1.75"/><path d="M20 26c0-3.314 2.686-6 6-6" stroke="#c4b5fd" stroke-width="1.75" stroke-linecap="round"/></svg>`
    },
    {
      name: "Polycule Map",
      desc: "Jouw relatienetwerk als een levende kaart. Jij in het midden, alle verbindingen eromheen, op type ingekleurd.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="4" fill="#8b5cf6"/><circle cx="6" cy="9" r="3" stroke="#8b5cf6" stroke-width="1.75"/><circle cx="28" cy="9" r="3" stroke="#c4b5fd" stroke-width="1.75"/><circle cx="6" cy="25" r="3" stroke="#4fd6c2" stroke-width="1.75"/><circle cx="28" cy="25" r="3" stroke="#f0789f" stroke-width="1.75"/><line x1="17" y1="17" x2="6" y2="9" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="28" y2="9" stroke="#c4b5fd" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="6" y2="25" stroke="#4fd6c2" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="28" y2="25" stroke="#f0789f" stroke-width="1.5" stroke-opacity="0.6"/></svg>`
    },
    {
      name: "Wellness",
      desc: "Houd soa-tests en check-ins bij \u2014 discreet, lokaal, alleen voor jouw ogen.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 29C17 29 5 22 5 13a7 7 0 0 1 12-4.9A7 7 0 0 1 29 13c0 9-12 16-12 16z" stroke="#8b5cf6" stroke-width="2" stroke-linejoin="round"/><path d="M12 17l3 3 6-6" stroke="#c4b5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      name: "Reflectie",
      desc: "Een dagboek voor jaloezie, compersie en alles daartussenin. Om te ordenen, niet te oordelen.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="5" width="16" height="24" rx="3" stroke="#8b5cf6" stroke-width="2"/><path d="M22 8h3a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-3" stroke="#c4b5fd" stroke-width="1.75"/><line x1="10" y1="11" x2="18" y2="11" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/><line x1="10" y1="16" x2="18" y2="16" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/><line x1="10" y1="21" x2="15" y2="21" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/></svg>`
    },
    {
      name: "Inzichten",
      desc: "Zachte patronen in plaats van koude cijfers: waar investeer je energie, waar wordt het stil?",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24l7-7 5 4 8-10 4 4" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="17" r="2.5" fill="#8b5cf6"/><circle cx="17" cy="21" r="2.5" fill="#c4b5fd"/><circle cx="25" cy="11" r="2.5" fill="#8b5cf6"/><line x1="5" y1="28" x2="29" y2="28" stroke="#2a2833" stroke-width="1.5"/></svg>`
    },
    {
      name: "Vio",
      desc: "Jouw kleine metgezel die vraagt hoe het gaat \u2014 zacht, luchtig of verrassend eerlijk.",
      vio: true
    }
  ];
  const faqs = [
    { q: "Voor wie is Roster gemaakt?", a: "Voor mensen in polyamoreuze, open of anderszins consensueel niet-monogame relaties die het overzicht willen bewaren \u2014 zonder spreadsheets, zonder tracking." },
    { q: "Slaat Roster mijn gegevens op in de cloud?", a: "Nee. Roster is local-first: jouw gegevens staan op jouw apparaat. Er is geen Roster-backend en geen tracking." },
    { q: "Heb ik een account nodig?", a: "Nee. Download de app en begin. Geen registratie, geen e-mail vereist." },
    { q: "Wat kost Roster?", a: "De basis is gratis. Premium kost \u20AC0,99/week, \u20AC2,99/maand (met 3 dagen gratis) of \u20AC29,90/jaar." },
    { q: "Op welke apparaten werkt Roster?", a: "Roster is een native iOS-app voor iPhone, gebouwd met SwiftUI. Beschikbaar in het Duits, Engels, Spaans, Nederlands, Deens en Zweeds." }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Roster",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS",
        description: "Privacy-first app voor mensen in polyamoreuze en open relaties. Beheer verbindingen, check-ins en reflecties lokaal \u2014 geen account, geen tracking.",
        inLanguage: ["de", "en", "es", "nl", "da", "sv"],
        offers: [
          { "@type": "Offer", price: "0.99", priceCurrency: "EUR", name: "Wekelijks" },
          { "@type": "Offer", price: "2.99", priceCurrency: "EUR", name: "Maandelijks" },
          { "@type": "Offer", price: "29.90", priceCurrency: "EUR", name: "Jaarlijks" }
        ],
        author: { "@type": "Organization", name: "Slowcraft" }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/", "title": "Roster \u2013 Relatie-app voor Polyamorie & Open Relaties", "description": "Roster is een privacy-first app voor polyamoreuze en open relaties. Beheer verbindingen, check-ins en reflecties lokaal \u2014 geen account, geen tracking.", "schema": schema, "data-astro-cid-3mmb6uvp": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-3mmb6uvp": true })} ${maybeRenderHead()}<main data-astro-cid-3mmb6uvp> <section class="hero" data-astro-cid-3mmb6uvp> <div class="container hero-grid" data-astro-cid-3mmb6uvp> <div class="hero-copy" data-astro-cid-3mmb6uvp> <p class="eyebrow" data-astro-cid-3mmb6uvp>Privacy-First · iOS</p> <h1 data-astro-cid-3mmb6uvp>Relaties,<br data-astro-cid-3mmb6uvp>zorgvuldig bijgehouden.</h1> <p class="lede" data-astro-cid-3mmb6uvp>
Roster is de app voor mensen in polyamoreuze en open relaties.
            Houd verbindingen, check-ins en gevoelens bij — lokaal op jouw
            apparaat, geen account, geen tracking.
</p> <div class="hero-cta" data-astro-cid-3mmb6uvp> <a href="https://apps.apple.com/app/roster" class="btn btn-primary" data-astro-cid-3mmb6uvp>Download in de App Store</a> <a href="#features" class="btn btn-ghost" data-astro-cid-3mmb6uvp>Functies bekijken</a> </div> </div> <div class="hero-visual" data-astro-cid-3mmb6uvp>${renderComponent($$result2, "PolyculeMap", $$PolyculeMap, { "data-astro-cid-3mmb6uvp": true })}</div> </div> </section> <div class="trust" data-astro-cid-3mmb6uvp> <div class="container trust-row" data-astro-cid-3mmb6uvp> <span data-astro-cid-3mmb6uvp>Lokaal opgeslagen</span> <span data-astro-cid-3mmb6uvp>Geen tracking</span> <span data-astro-cid-3mmb6uvp>Geen account nodig</span> <span data-astro-cid-3mmb6uvp>Geen backend</span> </div> </div> <section id="features" data-astro-cid-3mmb6uvp> <div class="container" data-astro-cid-3mmb6uvp> <p class="eyebrow" data-astro-cid-3mmb6uvp>Wat erin zit</p> <h2 data-astro-cid-3mmb6uvp>Vijf ruimtes, één helder hoofd.</h2> <p class="lede" style="margin-bottom:48px" data-astro-cid-3mmb6uvp>Elk tabblad in Roster neemt een deel van de mentale last van meerdere relaties over.</p> <div class="grid" data-astro-cid-3mmb6uvp> ${features.map((f) => renderTemplate`<div class="card feature" data-astro-cid-3mmb6uvp> ${f.vio ? renderTemplate`${renderComponent($$result2, "Vio", $$Vio, { "size": 34, "data-astro-cid-3mmb6uvp": true })}` : renderTemplate`<span class="feat-icon" data-astro-cid-3mmb6uvp>${unescapeHTML(f.icon)}</span>`} <h3 data-astro-cid-3mmb6uvp>${f.name}</h3> <p data-astro-cid-3mmb6uvp>${f.desc}</p> </div>`)} </div> </div> </section> <section id="pricing" class="pricing" data-astro-cid-3mmb6uvp> <div class="container" data-astro-cid-3mmb6uvp> <p class="eyebrow" data-astro-cid-3mmb6uvp>Prijzen</p> <h2 data-astro-cid-3mmb6uvp>Eerlijk, transparant, opzegbaar.</h2> <p class="lede" style="margin-bottom:48px" data-astro-cid-3mmb6uvp>De basis is gratis. Premium ontgrendelt kaart, wellness, inzichten en meer.</p> <div class="price-grid" data-astro-cid-3mmb6uvp> <div class="card price" data-astro-cid-3mmb6uvp> <span class="price-name" data-astro-cid-3mmb6uvp>Wekelijks</span> <span class="price-amount" data-astro-cid-3mmb6uvp>€0,99<small data-astro-cid-3mmb6uvp>/week</small></span> <p class="price-note" data-astro-cid-3mmb6uvp>Om te proberen.</p> </div> <div class="card price" data-astro-cid-3mmb6uvp> <span class="price-name" data-astro-cid-3mmb6uvp>Maandelijks</span> <span class="price-amount" data-astro-cid-3mmb6uvp>€2,99<small data-astro-cid-3mmb6uvp>/maand</small></span> <p class="price-note" data-astro-cid-3mmb6uvp>Inclusief 3 dagen gratis.</p> </div> <div class="card price featured" data-astro-cid-3mmb6uvp> <span class="badge" data-astro-cid-3mmb6uvp>Populair</span> <span class="price-name" data-astro-cid-3mmb6uvp>Jaarlijks</span> <span class="price-amount" data-astro-cid-3mmb6uvp>€29,90<small data-astro-cid-3mmb6uvp>/jaar</small></span> <p class="price-note" data-astro-cid-3mmb6uvp>Bespaar meer dan 50% t.o.v. maandelijks.</p> </div> </div> </div> </section> <section id="faq" data-astro-cid-3mmb6uvp> <div class="container faq-wrap" data-astro-cid-3mmb6uvp> <div data-astro-cid-3mmb6uvp><p class="eyebrow" data-astro-cid-3mmb6uvp>FAQ</p><h2 data-astro-cid-3mmb6uvp>Veelgestelde vragen</h2></div> <div class="faq-list" data-astro-cid-3mmb6uvp> ${faqs.map((f) => renderTemplate`<details class="card faq-item" data-astro-cid-3mmb6uvp> <summary data-astro-cid-3mmb6uvp>${f.q}</summary> <p data-astro-cid-3mmb6uvp>${f.a}</p> </details>`)} </div> </div> </section> <section class="closing" data-astro-cid-3mmb6uvp> <div class="container closing-inner" data-astro-cid-3mmb6uvp> ${renderComponent($$result2, "Vio", $$Vio, { "size": 48, "data-astro-cid-3mmb6uvp": true })} <h2 data-astro-cid-3mmb6uvp>Klaar om je hoofd leeg te maken?</h2> <a href="https://apps.apple.com/app/roster" class="btn btn-primary" data-astro-cid-3mmb6uvp>Roster in de App Store</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-3mmb6uvp": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/nl/index.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/nl/index.astro";
const $$url = "/nl";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
