import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$AppInfoLayout } from '../../../chunks/AppInfoLayout_fF8mKsVs.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppInfoLayout", $$AppInfoLayout, { "lang": "es", "path": "/appinfo/impressum", "activeTab": "impressum", "title": "Aviso legal \u2013 Roster App", "description": "Aviso legal e identificaci\xF3n del proveedor de la app iOS Roster." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Aviso legal</h1> <p class="updated">Información conforme al § 5 DDG (Ley alemana de Servicios Digitales)</p> <p><strong>Elias Wilkening</strong><br>Slowcraft<br>c/o Impressumservice Dein-Impressum<br>Stettiner Str. 41<br>35410 Hungen<br>Alemania</p> <h2>Contacto</h2> <p>Correo electrónico: <a href="mailto:support@rosterapp.tech">support@rosterapp.tech</a><br>Teléfono: <a href="tel:+4915225393437">+49 152 25393437</a></p> <h2>NIF/IVA</h2> <p>Número de identificación fiscal conforme al § 27a de la Ley del IVA alemana:<br><strong>DE334938867</strong></p> <h2>Responsable del contenido</h2> <p><strong>Elias Wilkening</strong>, dirección como arriba.</p> <h2>Resolución de disputas</h2> <p>La Comisión Europea ofrece una plataforma de resolución de litigios en línea: <a href="https://ec.europa.eu/consumers/odr" rel="noopener">ec.europa.eu/consumers/odr</a>. No estamos obligados ni dispuestos a participar en procedimientos de resolución de disputas ante una junta de arbitraje de consumidores.</p> ` })}`;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/es/appinfo/impressum.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/es/appinfo/impressum.astro";
const $$url = "/es/appinfo/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
