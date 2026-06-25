import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$AppInfoLayout } from '../../../chunks/AppInfoLayout_fF8mKsVs.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppInfoLayout", $$AppInfoLayout, { "lang": "sv", "path": "/appinfo/impressum", "activeTab": "impressum", "title": "Impressum \u2013 Roster App", "description": "Juridiskt meddelande och leverant\xF6rsidentifiering f\xF6r Roster iOS-appen." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Impressum</h1> <p class="updated">Information enligt § 5 DDG (tysk lag om digitala tjänster)</p> <p><strong>Elias Wilkening</strong><br>Slowcraft<br>c/o Impressumservice Dein-Impressum<br>Stettiner Str. 41<br>35410 Hungen<br>Tyskland</p> <h2>Kontakt</h2> <p>E-post: <a href="mailto:support@rosterapp.tech">support@rosterapp.tech</a><br>Telefon: <a href="tel:+4915225393437">+49 152 25393437</a></p> <h2>Momsregistreringsnummer</h2> <p>Momsregistreringsnummer enligt § 27a tyska mervärdesskattelagen:<br><strong>DE334938867</strong></p> <h2>Ansvarig för innehållet</h2> <p><strong>Elias Wilkening</strong>, adress som ovan.</p> <h2>Tvistlösning</h2> <p>EU-kommissionen tillhandahåller en plattform för tvistlösning online: <a href="https://ec.europa.eu/consumers/odr" rel="noopener">ec.europa.eu/consumers/odr</a>. Vi är inte skyldiga och inte villiga att delta i tvistlösningsförfaranden inför en konsumentarbitragennämnd.</p> ` })}`;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/sv/appinfo/impressum.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/sv/appinfo/impressum.astro";
const $$url = "/sv/appinfo/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
