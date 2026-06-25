import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_CmRuYHsA.mjs';
import { c as contact } from '../../chunks/site_BEfHvMuE.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  const lang = "es";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/impressum", "title": "Aviso legal \u2013 Roster", "description": "Aviso legal e identificaci\xF3n del proveedor para el sitio web de Roster.", "noindex": true, "data-astro-cid-z2syiacx": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-z2syiacx": true })} ${maybeRenderHead()}<main class="prose container" data-astro-cid-z2syiacx> <h1 data-astro-cid-z2syiacx>Aviso legal</h1> <p class="updated" data-astro-cid-z2syiacx>Información conforme al § 5 DDG (Ley alemana de servicios digitales)</p> <p data-astro-cid-z2syiacx> <strong data-astro-cid-z2syiacx>${contact.name}</strong><br data-astro-cid-z2syiacx> ${contact.company}<br data-astro-cid-z2syiacx> ${contact.addressLine1}<br data-astro-cid-z2syiacx> ${contact.addressLine2}<br data-astro-cid-z2syiacx> ${contact.city}<br data-astro-cid-z2syiacx> ${contact.country} </p> <h2 data-astro-cid-z2syiacx>Contacto</h2> <p data-astro-cid-z2syiacx>
Correo electrónico: <a${addAttribute(`mailto:${contact.email}`, "href")} data-astro-cid-z2syiacx>${contact.email}</a><br data-astro-cid-z2syiacx>
Teléfono: <a${addAttribute(`tel:${contact.phone.replace(/\s/g, "")}`, "href")} data-astro-cid-z2syiacx>${contact.phone}</a> </p> <h2 data-astro-cid-z2syiacx>NIF/IVA</h2> <p data-astro-cid-z2syiacx>Número de identificación fiscal conforme al § 27 a UStG:<br data-astro-cid-z2syiacx><strong data-astro-cid-z2syiacx>${contact.ustId}</strong></p> <h2 data-astro-cid-z2syiacx>Responsable del contenido conforme al § 18 párr. 2 MStV</h2> <p data-astro-cid-z2syiacx><strong data-astro-cid-z2syiacx>${contact.name}</strong>, dirección como arriba.</p> <h2 data-astro-cid-z2syiacx>Resolución de disputas en la UE</h2> <p data-astro-cid-z2syiacx>
La Comisión Europea ofrece una plataforma para la resolución de litigios en línea (ODR):
<a href="https://ec.europa.eu/consumers/odr/" rel="noopener" data-astro-cid-z2syiacx>ec.europa.eu/consumers/odr</a>.
      No estamos dispuestos ni obligados a participar en procedimientos de resolución de disputas ante una junta de arbitraje de consumidores.
</p> <h2 data-astro-cid-z2syiacx>Responsabilidad por los contenidos</h2> <p data-astro-cid-z2syiacx>Como proveedor de servicios, somos responsables de nuestros propios contenidos en estas páginas de acuerdo con la legislación general conforme al § 7 párr. 1 DDG. No estamos obligados a supervisar información de terceros transmitida o almacenada.</p> <h2 data-astro-cid-z2syiacx>Derechos de autor</h2> <p data-astro-cid-z2syiacx>Los contenidos y obras creados por el operador del sitio en estas páginas están sujetos a la ley alemana de derechos de autor. La reproducción, edición, distribución y cualquier tipo de explotación fuera de los límites de la ley de derechos de autor requieren el consentimiento escrito del autor correspondiente.</p> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-z2syiacx": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/es/impressum.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/es/impressum.astro";
const $$url = "/es/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
