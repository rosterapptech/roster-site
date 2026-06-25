import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, c as $$Vio, b as $$Footer } from '../chunks/Footer_CmRuYHsA.mjs';
import { $ as $$PolyculeMap } from '../chunks/PolyculeMap_CCY3x_Jx.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const features = [
    {
      name: "Connections",
      desc: "Every relationship in one place \u2014 with type, protection status and a quick contact log.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="5" stroke="#8b5cf6" stroke-width="2"/><path d="M3 28c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/><circle cx="25" cy="11" r="4" stroke="#c4b5fd" stroke-width="1.75"/><path d="M20 26c0-3.314 2.686-6 6-6" stroke="#c4b5fd" stroke-width="1.75" stroke-linecap="round"/></svg>`
    },
    {
      name: "Polycule Map",
      desc: "Your relationship web as a living map. You at the center, every connection colour-coded by type.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="4" fill="#8b5cf6"/><circle cx="6" cy="9" r="3" stroke="#8b5cf6" stroke-width="1.75"/><circle cx="28" cy="9" r="3" stroke="#c4b5fd" stroke-width="1.75"/><circle cx="6" cy="25" r="3" stroke="#4fd6c2" stroke-width="1.75"/><circle cx="28" cy="25" r="3" stroke="#f0789f" stroke-width="1.75"/><line x1="17" y1="17" x2="6" y2="9" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="28" y2="9" stroke="#c4b5fd" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="6" y2="25" stroke="#4fd6c2" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="28" y2="25" stroke="#f0789f" stroke-width="1.5" stroke-opacity="0.6"/></svg>`
    },
    {
      name: "Wellness",
      desc: "Keep STI tests and check-ins in view \u2014 discreet, local, seen by no one but you.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 29C17 29 5 22 5 13a7 7 0 0 1 12-4.9A7 7 0 0 1 29 13c0 9-12 16-12 16z" stroke="#8b5cf6" stroke-width="2" stroke-linejoin="round"/><path d="M12 17l3 3 6-6" stroke="#c4b5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      name: "Reflection",
      desc: "A journal for jealousy, compersion and everything between. To sort, not to judge.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="5" width="16" height="24" rx="3" stroke="#8b5cf6" stroke-width="2"/><path d="M22 8h3a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-3" stroke="#c4b5fd" stroke-width="1.75"/><line x1="10" y1="11" x2="18" y2="11" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/><line x1="10" y1="16" x2="18" y2="16" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/><line x1="10" y1="21" x2="15" y2="21" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/></svg>`
    },
    {
      name: "Insights",
      desc: "Gentle patterns over cold numbers: where you invest energy, where things go quiet.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24l7-7 5 4 8-10 4 4" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="17" r="2.5" fill="#8b5cf6"/><circle cx="17" cy="21" r="2.5" fill="#c4b5fd"/><circle cx="25" cy="11" r="2.5" fill="#8b5cf6"/><line x1="5" y1="28" x2="29" y2="28" stroke="#2a2833" stroke-width="1.5"/></svg>`
    },
    {
      name: "Vio",
      desc: "Your little companion who checks in on you \u2014 gentle, casual, or brutally honest.",
      vio: true
    }
  ];
  const faqs = [
    { q: "Who is Roster for?", a: "People in polyamorous, open or otherwise ethically non-monogamous relationships who want to stay on top of things \u2014 without spreadsheets, without tracking." },
    { q: "Does Roster store my data in the cloud?", a: "No. Roster is local-first: your data lives on your device. There is no Roster backend and no tracking." },
    { q: "Do I need an account?", a: "No. Download the app and start. No sign-up, no email required." },
    { q: "What does Roster cost?", a: "The basics are free. Premium is \u20AC0.99/week, \u20AC2.99/month (with a 3-day free trial) or \u20AC29.90/year." },
    { q: "Which devices does Roster run on?", a: "Roster is a native iOS app for iPhone, built with SwiftUI. Available in German, English, Spanish, Dutch, Danish and Swedish." },
    { q: "What is Vio?", a: "Vio is your personal companion inside the app \u2014 a gentle inner voice that checks in with you daily. Sometimes light, sometimes deeper. Vio retains nothing long-term; everything stays on your device." },
    { q: "Can I export or back up my data?", a: "A manual data export is planned." }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Roster",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS",
        description: "Privacy-first app for people in polyamorous and open relationships. Organize connections, check-ins and reflections locally \u2014 no account, no tracking.",
        inLanguage: ["de", "en", "es", "nl", "da", "sv"],
        offers: [
          { "@type": "Offer", price: "0.99", priceCurrency: "EUR", name: "Weekly" },
          { "@type": "Offer", price: "2.99", priceCurrency: "EUR", name: "Monthly" },
          { "@type": "Offer", price: "29.90", priceCurrency: "EUR", name: "Yearly" }
        ],
        author: { "@type": "Organization", name: "Slowcraft" }
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/", "title": "Roster \u2013 Relationship App for Polyamory & Open Relationships", "description": "Roster is a privacy-first app for polyamorous and open relationships. Organize your connections, check-ins and reflections locally \u2014 no account, no tracking.", "schema": schema, "data-astro-cid-dhfotatx": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-dhfotatx": true })} ${maybeRenderHead()}<main data-astro-cid-dhfotatx> <section class="hero" data-astro-cid-dhfotatx> <div class="container hero-grid" data-astro-cid-dhfotatx> <div class="hero-copy" data-astro-cid-dhfotatx> <p class="eyebrow" data-astro-cid-dhfotatx>Privacy-First · iOS</p> <h1 data-astro-cid-dhfotatx>Relationships,<br data-astro-cid-dhfotatx>tended with care.</h1> <p class="lede" data-astro-cid-dhfotatx>
Roster is the app for people in polyamorous and open relationships.
            Keep your connections, check-ins and feelings in view — local on your
            device, no account, no tracking.
</p> <div class="hero-cta" data-astro-cid-dhfotatx> <a href="https://apps.apple.com/app/roster" class="btn btn-primary" data-astro-cid-dhfotatx>Get it on the App Store</a> <a href="#features" class="btn btn-ghost" data-astro-cid-dhfotatx>See features</a> </div> </div> <div class="hero-visual" data-astro-cid-dhfotatx>${renderComponent($$result2, "PolyculeMap", $$PolyculeMap, { "data-astro-cid-dhfotatx": true })}</div> </div> </section> <div class="trust" data-astro-cid-dhfotatx> <div class="container trust-row" data-astro-cid-dhfotatx> <span data-astro-cid-dhfotatx>Stored locally</span> <span data-astro-cid-dhfotatx>No tracking</span> <span data-astro-cid-dhfotatx>No account required</span> <span data-astro-cid-dhfotatx>No backend</span> </div> </div> <section id="features" data-astro-cid-dhfotatx> <div class="container" data-astro-cid-dhfotatx> <p class="eyebrow" data-astro-cid-dhfotatx>What's inside</p> <h2 data-astro-cid-dhfotatx>Five rooms, one clear head.</h2> <p class="lede" style="margin-bottom:48px" data-astro-cid-dhfotatx>Each tab in Roster takes over a part of the mental load that multiple relationships bring.</p> <div class="grid" data-astro-cid-dhfotatx> ${features.map((f) => renderTemplate`<div class="card feature" data-astro-cid-dhfotatx> ${f.vio ? renderTemplate`${renderComponent($$result2, "Vio", $$Vio, { "size": 34, "data-astro-cid-dhfotatx": true })}` : renderTemplate`<span class="feat-icon" data-astro-cid-dhfotatx>${unescapeHTML(f.icon)}</span>`} <h3 data-astro-cid-dhfotatx>${f.name}</h3> <p data-astro-cid-dhfotatx>${f.desc}</p> </div>`)} </div> </div> </section> <section id="pricing" class="pricing" data-astro-cid-dhfotatx> <div class="container" data-astro-cid-dhfotatx> <p class="eyebrow" data-astro-cid-dhfotatx>Pricing</p> <h2 data-astro-cid-dhfotatx>Fair, honest, cancellable.</h2> <p class="lede" style="margin-bottom:48px" data-astro-cid-dhfotatx>The basics are free. Premium unlocks the map, wellness, insights and more.</p> <div class="price-grid" data-astro-cid-dhfotatx> <div class="card price" data-astro-cid-dhfotatx> <span class="price-name" data-astro-cid-dhfotatx>Weekly</span> <span class="price-amount" data-astro-cid-dhfotatx>€0.99<small data-astro-cid-dhfotatx>/week</small></span> <p class="price-note" data-astro-cid-dhfotatx>To try it out.</p> </div> <div class="card price" data-astro-cid-dhfotatx> <span class="price-name" data-astro-cid-dhfotatx>Monthly</span> <span class="price-amount" data-astro-cid-dhfotatx>€2.99<small data-astro-cid-dhfotatx>/month</small></span> <p class="price-note" data-astro-cid-dhfotatx>Includes 3 days free.</p> </div> <div class="card price featured" data-astro-cid-dhfotatx> <span class="badge" data-astro-cid-dhfotatx>Popular</span> <span class="price-name" data-astro-cid-dhfotatx>Yearly</span> <span class="price-amount" data-astro-cid-dhfotatx>€29.90<small data-astro-cid-dhfotatx>/year</small></span> <p class="price-note" data-astro-cid-dhfotatx>Save over 50% vs monthly.</p> </div> </div> </div> </section> <section id="faq" data-astro-cid-dhfotatx> <div class="container faq-wrap" data-astro-cid-dhfotatx> <div data-astro-cid-dhfotatx><p class="eyebrow" data-astro-cid-dhfotatx>FAQ</p><h2 data-astro-cid-dhfotatx>Common questions</h2></div> <div class="faq-list" data-astro-cid-dhfotatx> ${faqs.map((f) => renderTemplate`<details class="card faq-item" data-astro-cid-dhfotatx> <summary data-astro-cid-dhfotatx>${f.q}</summary> <p data-astro-cid-dhfotatx>${f.a}</p> </details>`)} </div> </div> </section> <section class="closing" data-astro-cid-dhfotatx> <div class="container closing-inner" data-astro-cid-dhfotatx> ${renderComponent($$result2, "Vio", $$Vio, { "size": 48, "data-astro-cid-dhfotatx": true })} <h2 data-astro-cid-dhfotatx>Ready to clear your head?</h2> <a href="https://apps.apple.com/app/roster" class="btn btn-primary" data-astro-cid-dhfotatx>Get Roster on the App Store</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-dhfotatx": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/en/index.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
