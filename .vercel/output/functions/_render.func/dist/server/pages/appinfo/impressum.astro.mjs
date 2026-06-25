import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$AppInfoLayout } from '../../chunks/AppInfoLayout_fF8mKsVs.mjs';
export { renderers } from '../../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppInfoLayout", $$AppInfoLayout, { "lang": "de", "path": "/appinfo/impressum", "activeTab": "impressum", "title": "Impressum \u2013 Roster App", "description": "Impressum und Anbieterkennzeichnung gem\xE4\xDF \xA7 5 DDG f\xFCr die Roster iOS-App." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Impressum</h1> <p class="updated">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</p> <p> <strong>Elias Wilkening</strong><br>
Slowcraft<br>
c/o Impressumservice Dein-Impressum<br>
Stettiner Str. 41<br>
35410 Hungen<br>
Deutschland
</p> <h2>Kontakt</h2> <p>
E-Mail: <a href="mailto:support@rosterapp.tech">support@rosterapp.tech</a><br>
Telefon: <a href="tel:+4915225393437">+49 152 25393437</a> </p> <h2>Umsatzsteuer</h2> <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG:<br><strong>DE334938867</strong></p> <h2>Verantwortlich für den Inhalt</h2> <p><strong>Elias Wilkening</strong>, Anschrift wie oben.</p> <h2>Streitschlichtung</h2> <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" rel="noopener">ec.europa.eu/consumers/odr</a>.</p> <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p> <h2>Haftung für Inhalte</h2> <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p> <h2>Urheberrecht</h2> <p>Die durch die Seitenbetreiber·in erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der jeweiligen Autor·in.</p> ` })}`;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/appinfo/impressum.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/appinfo/impressum.astro";
const $$url = "/appinfo/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
