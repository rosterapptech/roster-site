import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_CmRuYHsA.mjs';
import { c as contact, w as websiteFeatures } from '../../chunks/site_BEfHvMuE.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Datenschutz = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/datenschutz", "title": "Privacy Policy \u2013 Roster", "description": "Privacy policy for the Roster website. No tracking, no backend.", "noindex": true, "data-astro-cid-ooic25pa": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-ooic25pa": true })} ${maybeRenderHead()}<main class="prose container" data-astro-cid-ooic25pa> <h1 data-astro-cid-ooic25pa>Privacy Policy</h1> <p class="updated" data-astro-cid-ooic25pa>Last updated: ${today}</p> <h2 data-astro-cid-ooic25pa>1. Controller</h2> <p data-astro-cid-ooic25pa> <strong data-astro-cid-ooic25pa>${contact.name}</strong><br data-astro-cid-ooic25pa> ${contact.company} · ${contact.addressLine1} · ${contact.addressLine2} · ${contact.city}<br data-astro-cid-ooic25pa>
Email: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-ooic25pa>${contact.email}</a> </p> <h2 data-astro-cid-ooic25pa>2. This Website</h2> <p data-astro-cid-ooic25pa>This website is the marketing presence for the Roster iOS app. No user accounts are created, no forms are processed, and no tracking is performed.</p> ${renderTemplate`<h2 data-astro-cid-ooic25pa>3. Hosting &amp; Server Logs</h2>
      <p data-astro-cid-ooic25pa>When you visit this website, the hosting provider processes technically necessary server logs (e.g. IP address, timestamp, requested page) for delivery and security purposes. Legal basis: Art. 6(1)(f) GDPR.</p>`} <h2 data-astro-cid-ooic25pa>4. Fonts</h2> ${renderTemplate`<p data-astro-cid-ooic25pa>All fonts are self-hosted. No external font CDNs are called.</p>`} ${websiteFeatures.analytics} ${websiteFeatures.cookies} ${websiteFeatures.contactForm} ${websiteFeatures.newsletter} <h2 data-astro-cid-ooic25pa>The Roster App</h2> <p data-astro-cid-ooic25pa>
Roster stores all content exclusively on your device. There is no Roster backend and no transmission of your content to us. The full app privacy policy is available at <a href="/en/appinfo/datenschutzrichtlinie" data-astro-cid-ooic25pa>rosterapp.tech/en/appinfo/datenschutzrichtlinie</a>.
</p> <h2 data-astro-cid-ooic25pa>Your Rights</h2> <p data-astro-cid-ooic25pa>You have the rights under Art. 15–22 GDPR: access, rectification, erasure, restriction, data portability, and objection. You also have the right to lodge a complaint with your national data protection authority (Art. 77 GDPR). Contact: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-ooic25pa>${contact.email}</a>.</p> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-ooic25pa": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/en/datenschutz.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/en/datenschutz.astro";
const $$url = "/en/datenschutz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Datenschutz,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
