import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$AppInfoLayout } from '../../../chunks/AppInfoLayout_fF8mKsVs.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppInfoLayout", $$AppInfoLayout, { "lang": "en", "path": "/appinfo/impressum", "activeTab": "impressum", "title": "Imprint \u2013 Roster App", "description": "Legal notice and provider identification for the Roster iOS app." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Imprint</h1> <p class="updated">Information pursuant to § 5 DDG (German Digital Services Act)</p> <p> <strong>Elias Wilkening</strong><br>
Slowcraft<br>
c/o Impressumservice Dein-Impressum<br>
Stettiner Str. 41<br>
35410 Hungen<br>
Germany
</p> <h2>Contact</h2> <p>
Email: <a href="mailto:support@rosterapp.tech">support@rosterapp.tech</a><br>
Phone: <a href="tel:+4915225393437">+49 152 25393437</a> </p> <h2>VAT ID</h2> <p>VAT identification number pursuant to § 27a German VAT Act:<br><strong>DE334938867</strong></p> <h2>Responsible for content</h2> <p><strong>Elias Wilkening</strong>, address as above.</p> <h2>Dispute resolution</h2> <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" rel="noopener">ec.europa.eu/consumers/odr</a>.</p> <p>We are not obliged or willing to participate in dispute resolution proceedings before a consumer arbitration board.</p> <h2>Liability for content</h2> <p>As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 DDG under general law. According to §§ 8 to 10 DDG, however, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p> <h2>Copyright</h2> <p>The content and works created by the site operator on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of use beyond the limits of copyright law require the written consent of the respective author.</p> ` })}`;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/en/appinfo/impressum.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/en/appinfo/impressum.astro";
const $$url = "/en/appinfo/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
