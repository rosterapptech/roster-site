import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_CmRuYHsA.mjs';
import { c as contact, w as websiteFeatures } from '../../chunks/site_BEfHvMuE.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Datenschutz = createComponent(($$result, $$props, $$slots) => {
  const lang = "es";
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/datenschutz", "title": "Pol\xEDtica de privacidad \u2013 Roster", "description": "Pol\xEDtica de privacidad del sitio web de Roster. Sin rastreo, sin backend.", "noindex": true, "data-astro-cid-ipfymdy7": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-ipfymdy7": true })} ${maybeRenderHead()}<main class="prose container" data-astro-cid-ipfymdy7> <h1 data-astro-cid-ipfymdy7>Política de privacidad</h1> <p class="updated" data-astro-cid-ipfymdy7>Última actualización: ${today}</p> <h2 data-astro-cid-ipfymdy7>1. Responsable del tratamiento</h2> <p data-astro-cid-ipfymdy7> <strong data-astro-cid-ipfymdy7>${contact.name}</strong><br data-astro-cid-ipfymdy7> ${contact.company} · ${contact.addressLine1} · ${contact.addressLine2} · ${contact.city}<br data-astro-cid-ipfymdy7>
Correo electrónico: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-ipfymdy7>${contact.email}</a> </p> <h2 data-astro-cid-ipfymdy7>2. Este sitio web</h2> <p data-astro-cid-ipfymdy7>Este sitio web es la presentación de marketing de la app Roster para iOS. No se crean cuentas de usuario, no se procesan formularios y no se realiza ningún seguimiento.</p> ${renderTemplate`<h2 data-astro-cid-ipfymdy7>3. Alojamiento y registros del servidor</h2>
      <p data-astro-cid-ipfymdy7>Al visitar el sitio, el proveedor de alojamiento procesa registros técnicos del servidor (p. ej. dirección IP, marca de tiempo, página solicitada). Base jurídica: Art. 6(1)(f) RGPD.</p>`} <h2 data-astro-cid-ipfymdy7>4. Fuentes tipográficas</h2> ${renderTemplate`<p data-astro-cid-ipfymdy7>Todas las fuentes tipográficas están integradas localmente. No se accede a ninguna CDN de fuentes externa.</p>`} ${websiteFeatures.analytics} ${websiteFeatures.cookies} <h2 data-astro-cid-ipfymdy7>La app Roster</h2> <p data-astro-cid-ipfymdy7>
Roster almacena todo el contenido exclusivamente en tu dispositivo. No existe ningún backend de Roster ni transmisión de tu contenido a nosotros. La política de privacidad completa de la app está disponible en <a href="/es/appinfo/datenschutzrichtlinie" data-astro-cid-ipfymdy7>rosterapp.tech/es/appinfo/datenschutzrichtlinie</a>.
</p> <h2 data-astro-cid-ipfymdy7>Tus derechos</h2> <p data-astro-cid-ipfymdy7>Tienes los derechos establecidos en los Arts. 15–22 del RGPD: acceso, rectificación, supresión, limitación, portabilidad y oposición. Derecho a presentar una reclamación ante la autoridad de protección de datos competente (Art. 77 RGPD). Contacto: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-ipfymdy7>${contact.email}</a>.</p> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-ipfymdy7": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/es/datenschutz.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/es/datenschutz.astro";
const $$url = "/es/datenschutz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Datenschutz,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
