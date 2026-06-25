import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$AppInfoLayout } from '../../../chunks/AppInfoLayout_fF8mKsVs.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppInfoLayout", $$AppInfoLayout, { "lang": "da", "path": "/appinfo/impressum", "activeTab": "impressum", "title": "Impressum \u2013 Roster App", "description": "Juridisk meddelelse og udbyderidentifikation for Roster iOS-appen." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Impressum</h1> <p class="updated">Oplysninger i henhold til § 5 DDG (tysk lov om digitale tjenester)</p> <p><strong>Elias Wilkening</strong><br>Slowcraft<br>c/o Impressumservice Dein-Impressum<br>Stettiner Str. 41<br>35410 Hungen<br>Tyskland</p> <h2>Kontakt</h2> <p>E-mail: <a href="mailto:support@rosterapp.tech">support@rosterapp.tech</a><br>Telefon: <a href="tel:+4915225393437">+49 152 25393437</a></p> <h2>Moms-nummer</h2> <p>Momsregistreringsnummer i henhold til § 27a tysk momslov:<br><strong>DE334938867</strong></p> <h2>Ansvarlig for indholdet</h2> <p><strong>Elias Wilkening</strong>, adresse som ovenfor.</p> <h2>Tvistbilæggelse</h2> <p>EU-Kommissionen stiller en platform til onlinetvistbilæggelse til rådighed: <a href="https://ec.europa.eu/consumers/odr" rel="noopener">ec.europa.eu/consumers/odr</a>. Vi er ikke forpligtet og ikke villige til at deltage i tvistbilæggelsesprocedurer.</p> ` })}`;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/da/appinfo/impressum.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/da/appinfo/impressum.astro";
const $$url = "/da/appinfo/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
