import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, c as $$Vio, b as $$Footer } from '../chunks/Footer_CmRuYHsA.mjs';
import { $ as $$PolyculeMap } from '../chunks/PolyculeMap_CCY3x_Jx.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "de";
  const features = [
    {
      name: "Verbindungen",
      desc: "Alle deine Beziehungen an einem Ort \u2013 mit Beziehungstyp, Schutzstatus und einem schnellen Kontakt-Log.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="13" r="5" stroke="#8b5cf6" stroke-width="2"/>
      <path d="M3 28c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/>
      <circle cx="25" cy="11" r="4" stroke="#c4b5fd" stroke-width="1.75"/>
      <path d="M20 26c0-3.314 2.686-6 6-6" stroke="#c4b5fd" stroke-width="1.75" stroke-linecap="round"/>
    </svg>`
    },
    {
      name: "Polycule Map",
      desc: "Dein Beziehungsnetz als lebendige Karte. Du im Zentrum, alle Verbindungen drumherum, nach Typ farbcodiert.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="17" r="4" fill="#8b5cf6"/>
      <circle cx="6" cy="9" r="3" stroke="#8b5cf6" stroke-width="1.75"/>
      <circle cx="28" cy="9" r="3" stroke="#c4b5fd" stroke-width="1.75"/>
      <circle cx="6" cy="25" r="3" stroke="#4fd6c2" stroke-width="1.75"/>
      <circle cx="28" cy="25" r="3" stroke="#f0789f" stroke-width="1.75"/>
      <line x1="17" y1="17" x2="6" y2="9" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.6"/>
      <line x1="17" y1="17" x2="28" y2="9" stroke="#c4b5fd" stroke-width="1.5" stroke-opacity="0.6"/>
      <line x1="17" y1="17" x2="6" y2="25" stroke="#4fd6c2" stroke-width="1.5" stroke-opacity="0.6"/>
      <line x1="17" y1="17" x2="28" y2="25" stroke="#f0789f" stroke-width="1.5" stroke-opacity="0.6"/>
    </svg>`
    },
    {
      name: "Wellness",
      desc: "Behalte STI-Tests und Check-ins im Blick \u2013 diskret, lokal, ohne dass es jemand au\xDFer dir sieht.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 29C17 29 5 22 5 13a7 7 0 0 1 12-4.9A7 7 0 0 1 29 13c0 9-12 16-12 16z" stroke="#8b5cf6" stroke-width="2" stroke-linejoin="round"/>
      <path d="M12 17l3 3 6-6" stroke="#c4b5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
    },
    {
      name: "Reflexion",
      desc: "Ein Journal f\xFCr Eifersucht, Compersion und alles dazwischen. Zum Sortieren, nicht zum Bewerten.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="5" width="16" height="24" rx="3" stroke="#8b5cf6" stroke-width="2"/>
      <path d="M22 8h3a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-3" stroke="#c4b5fd" stroke-width="1.75"/>
      <line x1="10" y1="11" x2="18" y2="11" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/>
      <line x1="10" y1="16" x2="18" y2="16" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/>
      <line x1="10" y1="21" x2="15" y2="21" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/>
    </svg>`
    },
    {
      name: "Insights",
      desc: "Sanfte Muster statt kalter Zahlen: Wo investierst du Energie, wo wird es gerade still?",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 24l7-7 5 4 8-10 4 4" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="12" cy="17" r="2.5" fill="#8b5cf6"/>
      <circle cx="17" cy="21" r="2.5" fill="#c4b5fd"/>
      <circle cx="25" cy="11" r="2.5" fill="#8b5cf6"/>
      <line x1="5" y1="28" x2="29" y2="28" stroke="#2a2833" stroke-width="1.5"/>
    </svg>`
    },
    {
      name: "Vio",
      desc: "Dein kleiner Begleiter, der nachfragt wie es dir geht \u2013 mal sanft, mal locker, mal schonungslos ehrlich.",
      vio: true
    }
  ];
  const faqs = [
    {
      q: "F\xFCr wen ist Roster gemacht?",
      a: "F\xFCr Menschen in polyamoren, offenen oder anderweitig einvernehmlich nicht-monogamen Beziehungen, die den \xDCberblick behalten wollen \u2013 ohne Tabellen, ohne Tracking."
    },
    {
      q: "Speichert Roster meine Daten in der Cloud?",
      a: "Nein. Roster ist local-first: Deine Daten liegen auf deinem Ger\xE4t. Es gibt kein Roster-Backend und kein Tracking."
    },
    {
      q: "Brauche ich ein Konto?",
      a: "Nein. Du l\xE4dst die App und legst los. Keine Registrierung, keine E-Mail n\xF6tig."
    },
    {
      q: "Was kostet Roster?",
      a: "Die Basis ist kostenlos nutzbar. Premium gibt es f\xFCr 0,99 \u20AC pro Woche, 2,99 \u20AC pro Monat (mit 3 Tagen gratis) oder 29,90 \u20AC pro Jahr."
    },
    {
      q: "Auf welchen Ger\xE4ten l\xE4uft Roster?",
      a: "Roster ist eine native iOS-App f\xFCr iPhone, gebaut mit SwiftUI. Verf\xFCgbar auf Deutsch, Englisch, Spanisch, Niederl\xE4ndisch, D\xE4nisch und Schwedisch."
    },
    {
      q: "Was ist Vio?",
      a: "Vio ist dein pers\xF6nlicher Begleiter in der App \u2013 eine Art sanfter innerer Stimme, die dich t\xE4glich fragt, wie es dir geht. Mal locker, mal tiefer gehend. Vio merkt sich nichts dauerhaft, alles bleibt auf deinem Ger\xE4t."
    },
    {
      q: "Kann ich meine Daten exportieren oder sichern?",
      a: "Ein manueller Datenexport ist in Planung."
    },
    {
      q: "Gibt es eine Android-Version?",
      a: "Aktuell nicht \u2013 Roster ist eine native iOS-App. Ob und wann Android kommt, ist noch offen. Trag dich auf der Warteliste ein, wenn du benachrichtigt werden m\xF6chtest."
    },
    {
      q: "Was ist der Unterschied zwischen Free und Premium?",
      a: "Die kostenlose Version enth\xE4lt bis zu 3 Verbindungen, das Journal und Vio als t\xE4glichen Begleiter. Premium schaltet unbegrenzte Verbindungen, Fotos, Polycule Map, Wellness, Insights, Vibe-Radar, Meilensteine, Burn-after-Read-Notizen und die vollst\xE4ndige Vio-Funktionalit\xE4t frei."
    },
    {
      q: "Ist Roster sicher f\xFCr sensitive Inhalte wie Beziehungsstatus oder Health-Daten?",
      a: "Ja. Roster speichert alles lokal in der App-Sandbox und nutzt die iOS-eigene Ger\xE4teverschl\xFCsselung (Data Protection). Niemand au\xDFer dir kann auf diese Daten zugreifen \u2013 kein Roster-Backend, kein Tracking, kein Cloud-Upload durch uns."
    }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Roster",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS",
        description: "Privacy-First-App f\xFCr Menschen in polyamoren und offenen Beziehungen. Organisiere Verbindungen, Check-ins und Reflexionen lokal auf dem Ger\xE4t \u2013 ohne Konto, ohne Tracking.",
        inLanguage: ["de", "en", "es", "nl", "da", "sv"],
        offers: [
          { "@type": "Offer", price: "0.99", priceCurrency: "EUR", name: "W\xF6chentlich" },
          { "@type": "Offer", price: "2.99", priceCurrency: "EUR", name: "Monatlich" },
          { "@type": "Offer", price: "29.90", priceCurrency: "EUR", name: "J\xE4hrlich" }
        ],
        author: { "@type": "Organization", name: "Slowcraft" }
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/", "title": "Roster \u2013 Beziehungs-App f\xFCr Polyamorie & offene Beziehungen", "description": "Roster ist eine Privacy-First-App f\xFCr polyamore und offene Beziehungen. Organisiere deine Verbindungen, Check-ins und Reflexionen lokal \u2013 ohne Konto, ohne Tracking.", "schema": schema, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <!-- HERO --> <section class="hero" data-astro-cid-j7pv25f6> <div class="container hero-grid" data-astro-cid-j7pv25f6> <div class="hero-copy" data-astro-cid-j7pv25f6> <p class="eyebrow" data-astro-cid-j7pv25f6>Privacy-First · iOS</p> <h1 data-astro-cid-j7pv25f6>Beziehungen,<br data-astro-cid-j7pv25f6>mit Sorgfalt geführt.</h1> <p class="lede" data-astro-cid-j7pv25f6>
Roster ist die App für Menschen in polyamoren und offenen
            Beziehungen. Behalte deine Verbindungen, Check-ins und Gefühle im
            Blick – lokal auf deinem Gerät, ohne Konto und ohne Tracking.
</p> <div class="hero-cta" data-astro-cid-j7pv25f6> <a href="https://apps.apple.com/app/roster" class="btn btn-primary" data-astro-cid-j7pv25f6>Im App Store laden</a> <a href="#features" class="btn btn-ghost" data-astro-cid-j7pv25f6>Funktionen ansehen</a> </div> </div> <div class="hero-visual" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "PolyculeMap", $$PolyculeMap, { "data-astro-cid-j7pv25f6": true })} </div> </div> </section> <!-- TRUST --> <div class="trust" data-astro-cid-j7pv25f6> <div class="container trust-row" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Lokal gespeichert</span> <span data-astro-cid-j7pv25f6>Kein Tracking</span> <span data-astro-cid-j7pv25f6>Kein Konto nötig</span> <span data-astro-cid-j7pv25f6>Kein Backend</span> </div> </div> <!-- FEATURES --> <section id="features" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <p class="eyebrow" data-astro-cid-j7pv25f6>Was drin ist</p> <h2 data-astro-cid-j7pv25f6>Fünf Räume, ein klarer Kopf.</h2> <p class="lede" style="margin-bottom:48px" data-astro-cid-j7pv25f6>
Jeder Tab in Roster übernimmt einen Teil der mentalen Last, die
          mehrere Beziehungen mit sich bringen.
</p> <div class="grid" data-astro-cid-j7pv25f6> ${features.map((f) => renderTemplate`<div class="card feature" data-astro-cid-j7pv25f6> ${f.vio ? renderTemplate`${renderComponent($$result2, "Vio", $$Vio, { "size": 34, "data-astro-cid-j7pv25f6": true })}` : renderTemplate`<span class="feat-icon" data-astro-cid-j7pv25f6>${unescapeHTML(f.icon)}</span>`} <h3 data-astro-cid-j7pv25f6>${f.name}</h3> <p data-astro-cid-j7pv25f6>${f.desc}</p> </div>`)} </div> </div> </section> <!-- PRICING --> <section id="pricing" class="pricing" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <p class="eyebrow" data-astro-cid-j7pv25f6>Preise</p> <h2 data-astro-cid-j7pv25f6>Fair, ehrlich, kündbar.</h2> <p class="lede" style="margin-bottom:48px" data-astro-cid-j7pv25f6>
Die Basis ist kostenlos. Premium schaltet Karte, Wellness, Insights und
          mehr frei.
</p> <div class="price-grid" data-astro-cid-j7pv25f6> <div class="card price" data-astro-cid-j7pv25f6> <span class="price-name" data-astro-cid-j7pv25f6>Wöchentlich</span> <span class="price-amount" data-astro-cid-j7pv25f6>0,99 €<small data-astro-cid-j7pv25f6>/Woche</small></span> <p class="price-note" data-astro-cid-j7pv25f6>Zum Reinschnuppern.</p> </div> <div class="card price" data-astro-cid-j7pv25f6> <span class="price-name" data-astro-cid-j7pv25f6>Monatlich</span> <span class="price-amount" data-astro-cid-j7pv25f6>2,99 €<small data-astro-cid-j7pv25f6>/Monat</small></span> <p class="price-note" data-astro-cid-j7pv25f6>Inklusive 3 Tage gratis.</p> </div> <div class="card price featured" data-astro-cid-j7pv25f6> <span class="badge" data-astro-cid-j7pv25f6>Beliebt</span> <span class="price-name" data-astro-cid-j7pv25f6>Jährlich</span> <span class="price-amount" data-astro-cid-j7pv25f6>29,90 €<small data-astro-cid-j7pv25f6>/Jahr</small></span> <p class="price-note" data-astro-cid-j7pv25f6>Spare über 50 % gegenüber monatlich.</p> </div> </div> </div> </section> <!-- FAQ --> <section id="faq" data-astro-cid-j7pv25f6> <div class="container faq-wrap" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <p class="eyebrow" data-astro-cid-j7pv25f6>FAQ</p> <h2 data-astro-cid-j7pv25f6>Häufige Fragen</h2> </div> <div class="faq-list" data-astro-cid-j7pv25f6> ${faqs.map((f) => renderTemplate`<details class="card faq-item" data-astro-cid-j7pv25f6> <summary data-astro-cid-j7pv25f6>${f.q}</summary> <p data-astro-cid-j7pv25f6>${f.a}</p> </details>`)} </div> </div> </section> <!-- CLOSING CTA --> <section class="closing" data-astro-cid-j7pv25f6> <div class="container closing-inner" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Vio", $$Vio, { "size": 48, "data-astro-cid-j7pv25f6": true })} <h2 data-astro-cid-j7pv25f6>Bereit, den Kopf frei zu kriegen?</h2> <a href="https://apps.apple.com/app/roster" class="btn btn-primary" data-astro-cid-j7pv25f6>Roster im App Store laden</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/index.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
