import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_CmRuYHsA.mjs';
import { c as contact, w as websiteFeatures } from '../chunks/site_BEfHvMuE.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Datenschutz = createComponent(($$result, $$props, $$slots) => {
  const lang = "de";
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/datenschutz", "title": "Datenschutzerkl\xE4rung \u2013 Roster", "description": "Datenschutzerkl\xE4rung der Roster-Website. Kein Tracking, kein Backend.", "noindex": true, "data-astro-cid-7i3oie76": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-7i3oie76": true })} ${maybeRenderHead()}<main class="prose container" data-astro-cid-7i3oie76> <h1 data-astro-cid-7i3oie76>Datenschutzerklärung</h1> <p class="updated" data-astro-cid-7i3oie76>Stand: ${today}</p> <h2 data-astro-cid-7i3oie76>1. Verantwortlicher</h2> <p data-astro-cid-7i3oie76> <strong data-astro-cid-7i3oie76>${contact.name}</strong><br data-astro-cid-7i3oie76> ${contact.company} · ${contact.addressLine1} · ${contact.addressLine2} · ${contact.city}<br data-astro-cid-7i3oie76>
E-Mail: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-7i3oie76>${contact.email}</a> </p> <h2 data-astro-cid-7i3oie76>2. Diese Website</h2> <p data-astro-cid-7i3oie76>Diese Website ist die Marketing-Präsenz der Roster iOS-App. Es werden keine Nutzerkonten angelegt, keine Formulare verarbeitet und kein Tracking durchgeführt.</p> ${renderTemplate`<h2 data-astro-cid-7i3oie76>3. Hosting &amp; Server-Logs</h2>
      <p data-astro-cid-7i3oie76>
Beim Aufruf der Seite verarbeitet der Hosting-Anbieter technisch notwendige Server-Logs (z. B. IP-Adresse, Zeitstempel, abgerufene Seite) zur Auslieferung und Sicherheit. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
</p>`} <h2 data-astro-cid-7i3oie76>4. Schriftarten</h2> ${renderTemplate`<p data-astro-cid-7i3oie76>Alle Schriftarten sind lokal eingebunden. Es werden keine externen Font-CDNs aufgerufen.</p>`} ${websiteFeatures.analytics} ${websiteFeatures.cookies} ${websiteFeatures.contactForm} ${websiteFeatures.newsletter} <h2 data-astro-cid-7i3oie76>Die App Roster</h2> <p data-astro-cid-7i3oie76>
Roster speichert alle Inhalte ausschließlich lokal auf deinem Gerät. Es gibt kein Roster-Backend und keine Übertragung deiner Inhalte an uns. Die vollständige Datenschutzerklärung der App findest du unter <a href="/appinfo/datenschutzrichtlinie" data-astro-cid-7i3oie76>rosterapp.tech/appinfo/datenschutzrichtlinie</a>.
</p> <h2 data-astro-cid-7i3oie76>Deine Rechte</h2> <p data-astro-cid-7i3oie76>Dir stehen die Rechte aus Art. 15–22 DSGVO zu: Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Beschwerderecht bei der zuständigen Landesdatenschutzbehörde (Art. 77 DSGVO). Kontakt: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-7i3oie76>${contact.email}</a>.</p> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-7i3oie76": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/datenschutz.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/datenschutz.astro";
const $$url = "/datenschutz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Datenschutz,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
