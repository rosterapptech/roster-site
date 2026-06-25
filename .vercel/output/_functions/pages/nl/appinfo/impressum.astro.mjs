import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$AppInfoLayout } from '../../../chunks/AppInfoLayout_fF8mKsVs.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppInfoLayout", $$AppInfoLayout, { "lang": "nl", "path": "/appinfo/impressum", "activeTab": "impressum", "title": "Impressum \u2013 Roster App", "description": "Wettelijke kennisgeving voor de Roster iOS-app." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Impressum</h1> <p class="updated">Informatie conform § 5 DDG (Duitse Wet op Digitale Diensten)</p> <p><strong>Elias Wilkening</strong><br>Slowcraft<br>c/o Impressumservice Dein-Impressum<br>Stettiner Str. 41<br>35410 Hungen<br>Duitsland</p> <h2>Contact</h2> <p>E-mail: <a href="mailto:support@rosterapp.tech">support@rosterapp.tech</a><br>Telefoon: <a href="tel:+4915225393437">+49 152 25393437</a></p> <h2>BTW-nummer</h2> <p>BTW-identificatienummer conform § 27a Umsatzsteuergesetz:<br><strong>DE334938867</strong></p> <h2>Verantwoordelijk voor de inhoud</h2> <p><strong>Elias Wilkening</strong>, adres zoals hierboven.</p> <h2>Geschillenbeslechting</h2> <p>De Europese Commissie biedt een platform voor online geschillenbeslechting: <a href="https://ec.europa.eu/consumers/odr" rel="noopener">ec.europa.eu/consumers/odr</a>. Wij zijn niet verplicht en niet bereid deel te nemen aan geschillenbeslechtingsprocedures.</p> ` })}`;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/nl/appinfo/impressum.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/nl/appinfo/impressum.astro";
const $$url = "/nl/appinfo/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
