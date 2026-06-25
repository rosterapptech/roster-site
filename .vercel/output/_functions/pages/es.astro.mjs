import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, c as $$Vio, b as $$Footer } from '../chunks/Footer_CmRuYHsA.mjs';
import { $ as $$PolyculeMap } from '../chunks/PolyculeMap_CCY3x_Jx.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "es";
  const features = [
    {
      name: "Conexiones",
      desc: "Todas tus relaciones en un solo lugar \u2014 con tipo, estado de protecci\xF3n y un registro de contacto r\xE1pido.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="5" stroke="#8b5cf6" stroke-width="2"/><path d="M3 28c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/><circle cx="25" cy="11" r="4" stroke="#c4b5fd" stroke-width="1.75"/><path d="M20 26c0-3.314 2.686-6 6-6" stroke="#c4b5fd" stroke-width="1.75" stroke-linecap="round"/></svg>`
    },
    {
      name: "Mapa Polycule",
      desc: "Tu red de relaciones como un mapa vivo. T\xFA en el centro, todas las conexiones a tu alrededor, codificadas por tipo.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="4" fill="#8b5cf6"/><circle cx="6" cy="9" r="3" stroke="#8b5cf6" stroke-width="1.75"/><circle cx="28" cy="9" r="3" stroke="#c4b5fd" stroke-width="1.75"/><circle cx="6" cy="25" r="3" stroke="#4fd6c2" stroke-width="1.75"/><circle cx="28" cy="25" r="3" stroke="#f0789f" stroke-width="1.75"/><line x1="17" y1="17" x2="6" y2="9" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="28" y2="9" stroke="#c4b5fd" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="6" y2="25" stroke="#4fd6c2" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="28" y2="25" stroke="#f0789f" stroke-width="1.5" stroke-opacity="0.6"/></svg>`
    },
    {
      name: "Bienestar",
      desc: "Mant\xE9n el control de las pruebas de ITS y los check-ins \u2014 discreto, local, solo para tus ojos.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 29C17 29 5 22 5 13a7 7 0 0 1 12-4.9A7 7 0 0 1 29 13c0 9-12 16-12 16z" stroke="#8b5cf6" stroke-width="2" stroke-linejoin="round"/><path d="M12 17l3 3 6-6" stroke="#c4b5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      name: "Reflexi\xF3n",
      desc: "Un diario para los celos, la compersi\xF3n y todo lo que hay en medio. Para ordenar, no para juzgar.",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="5" width="16" height="24" rx="3" stroke="#8b5cf6" stroke-width="2"/><path d="M22 8h3a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-3" stroke="#c4b5fd" stroke-width="1.75"/><line x1="10" y1="11" x2="18" y2="11" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/><line x1="10" y1="16" x2="18" y2="16" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/><line x1="10" y1="21" x2="15" y2="21" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/></svg>`
    },
    {
      name: "Perspectivas",
      desc: "Patrones suaves en lugar de n\xFAmeros fr\xEDos: \xBFd\xF3nde inviertes energ\xEDa, d\xF3nde se hace el silencio?",
      icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24l7-7 5 4 8-10 4 4" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="17" r="2.5" fill="#8b5cf6"/><circle cx="17" cy="21" r="2.5" fill="#c4b5fd"/><circle cx="25" cy="11" r="2.5" fill="#8b5cf6"/><line x1="5" y1="28" x2="29" y2="28" stroke="#2a2833" stroke-width="1.5"/></svg>`
    },
    {
      name: "Vio",
      desc: "Tu peque\xF1o compa\xF1ero que te pregunta c\xF3mo est\xE1s \u2014 suave, relajado o brutalmente honesto.",
      vio: true
    }
  ];
  const faqs = [
    { q: "\xBFPara qui\xE9n es Roster?", a: "Para personas en relaciones poliamorosas, abiertas o de cualquier otro tipo \xE9ticamente no mon\xF3gamas que quieren mantener una visi\xF3n general \u2014 sin hojas de c\xE1lculo, sin rastreo." },
    { q: "\xBFGuarda Roster mis datos en la nube?", a: "No. Roster es local-first: tus datos viven en tu dispositivo. No hay backend de Roster ni rastreo." },
    { q: "\xBFNecesito una cuenta?", a: "No. Descarga la app y empieza. Sin registro, sin correo electr\xF3nico necesario." },
    { q: "\xBFCu\xE1nto cuesta Roster?", a: "Lo b\xE1sico es gratis. Premium cuesta 0,99 \u20AC/semana, 2,99 \u20AC/mes (con 3 d\xEDas gratis) o 29,90 \u20AC/a\xF1o." },
    { q: "\xBFEn qu\xE9 dispositivos funciona Roster?", a: "Roster es una app nativa de iOS para iPhone, desarrollada con SwiftUI. Disponible en alem\xE1n, ingl\xE9s, espa\xF1ol, neerland\xE9s, dan\xE9s y sueco." }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Roster",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS",
        description: "App privacy-first para personas en relaciones poliamorosas y abiertas. Organiza conexiones, check-ins y reflexiones localmente \u2014 sin cuenta, sin rastreo.",
        inLanguage: ["de", "en", "es", "nl", "da", "sv"],
        offers: [
          { "@type": "Offer", price: "0.99", priceCurrency: "EUR", name: "Semanal" },
          { "@type": "Offer", price: "2.99", priceCurrency: "EUR", name: "Mensual" },
          { "@type": "Offer", price: "29.90", priceCurrency: "EUR", name: "Anual" }
        ],
        author: { "@type": "Organization", name: "Slowcraft" }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/", "title": "Roster \u2013 App de Relaciones para Poliamor y Relaciones Abiertas", "description": "Roster es una app privacy-first para relaciones poliamorosas y abiertas. Organiza conexiones, check-ins y reflexiones localmente \u2014 sin cuenta, sin rastreo.", "schema": schema, "data-astro-cid-7pewbour": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-7pewbour": true })} ${maybeRenderHead()}<main data-astro-cid-7pewbour> <section class="hero" data-astro-cid-7pewbour> <div class="container hero-grid" data-astro-cid-7pewbour> <div class="hero-copy" data-astro-cid-7pewbour> <p class="eyebrow" data-astro-cid-7pewbour>Privacy-First · iOS</p> <h1 data-astro-cid-7pewbour>Relaciones,<br data-astro-cid-7pewbour>gestionadas con cuidado.</h1> <p class="lede" data-astro-cid-7pewbour>
Roster es la app para personas en relaciones poliamorosas y abiertas.
            Mantén el control de tus conexiones, check-ins y sentimientos — local
            en tu dispositivo, sin cuenta, sin rastreo.
</p> <div class="hero-cta" data-astro-cid-7pewbour> <a href="https://apps.apple.com/app/roster" class="btn btn-primary" data-astro-cid-7pewbour>Descargar en App Store</a> <a href="#features" class="btn btn-ghost" data-astro-cid-7pewbour>Ver funciones</a> </div> </div> <div class="hero-visual" data-astro-cid-7pewbour>${renderComponent($$result2, "PolyculeMap", $$PolyculeMap, { "data-astro-cid-7pewbour": true })}</div> </div> </section> <div class="trust" data-astro-cid-7pewbour> <div class="container trust-row" data-astro-cid-7pewbour> <span data-astro-cid-7pewbour>Almacenado localmente</span> <span data-astro-cid-7pewbour>Sin rastreo</span> <span data-astro-cid-7pewbour>Sin cuenta necesaria</span> <span data-astro-cid-7pewbour>Sin backend</span> </div> </div> <section id="features" data-astro-cid-7pewbour> <div class="container" data-astro-cid-7pewbour> <p class="eyebrow" data-astro-cid-7pewbour>Qué hay dentro</p> <h2 data-astro-cid-7pewbour>Cinco espacios, una mente despejada.</h2> <p class="lede" style="margin-bottom:48px" data-astro-cid-7pewbour>Cada pestaña de Roster asume una parte de la carga mental que conllevan múltiples relaciones.</p> <div class="grid" data-astro-cid-7pewbour> ${features.map((f) => renderTemplate`<div class="card feature" data-astro-cid-7pewbour> ${f.vio ? renderTemplate`${renderComponent($$result2, "Vio", $$Vio, { "size": 34, "data-astro-cid-7pewbour": true })}` : renderTemplate`<span class="feat-icon" data-astro-cid-7pewbour>${unescapeHTML(f.icon)}</span>`} <h3 data-astro-cid-7pewbour>${f.name}</h3> <p data-astro-cid-7pewbour>${f.desc}</p> </div>`)} </div> </div> </section> <section id="pricing" class="pricing" data-astro-cid-7pewbour> <div class="container" data-astro-cid-7pewbour> <p class="eyebrow" data-astro-cid-7pewbour>Precios</p> <h2 data-astro-cid-7pewbour>Justo, honesto, cancelable.</h2> <p class="lede" style="margin-bottom:48px" data-astro-cid-7pewbour>Lo básico es gratis. Premium desbloquea el mapa, bienestar, perspectivas y más.</p> <div class="price-grid" data-astro-cid-7pewbour> <div class="card price" data-astro-cid-7pewbour> <span class="price-name" data-astro-cid-7pewbour>Semanal</span> <span class="price-amount" data-astro-cid-7pewbour>0,99 €<small data-astro-cid-7pewbour>/semana</small></span> <p class="price-note" data-astro-cid-7pewbour>Para probarlo.</p> </div> <div class="card price" data-astro-cid-7pewbour> <span class="price-name" data-astro-cid-7pewbour>Mensual</span> <span class="price-amount" data-astro-cid-7pewbour>2,99 €<small data-astro-cid-7pewbour>/mes</small></span> <p class="price-note" data-astro-cid-7pewbour>Incluye 3 días gratis.</p> </div> <div class="card price featured" data-astro-cid-7pewbour> <span class="badge" data-astro-cid-7pewbour>Popular</span> <span class="price-name" data-astro-cid-7pewbour>Anual</span> <span class="price-amount" data-astro-cid-7pewbour>29,90 €<small data-astro-cid-7pewbour>/año</small></span> <p class="price-note" data-astro-cid-7pewbour>Ahorra más del 50% frente al mensual.</p> </div> </div> </div> </section> <section id="faq" data-astro-cid-7pewbour> <div class="container faq-wrap" data-astro-cid-7pewbour> <div data-astro-cid-7pewbour><p class="eyebrow" data-astro-cid-7pewbour>FAQ</p><h2 data-astro-cid-7pewbour>Preguntas frecuentes</h2></div> <div class="faq-list" data-astro-cid-7pewbour> ${faqs.map((f) => renderTemplate`<details class="card faq-item" data-astro-cid-7pewbour> <summary data-astro-cid-7pewbour>${f.q}</summary> <p data-astro-cid-7pewbour>${f.a}</p> </details>`)} </div> </div> </section> <section class="closing" data-astro-cid-7pewbour> <div class="container closing-inner" data-astro-cid-7pewbour> ${renderComponent($$result2, "Vio", $$Vio, { "size": 48, "data-astro-cid-7pewbour": true })} <h2 data-astro-cid-7pewbour>¿Listo para despejar tu mente?</h2> <a href="https://apps.apple.com/app/roster" class="btn btn-primary" data-astro-cid-7pewbour>Roster en el App Store</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-7pewbour": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/es/index.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
