import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$AppInfoLayout } from '../../../chunks/AppInfoLayout_fF8mKsVs.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Datenschutzrichtlinie = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppInfoLayout", $$AppInfoLayout, { "lang": "sv", "path": "/appinfo/datenschutzrichtlinie", "activeTab": "privacy", "title": "Integritetspolicy \u2013 Roster App", "description": "Integritetspolicy f\xF6r Roster iOS-appen. Lokalt lagrat, ingen sp\xE5rning, ingen backend." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Integritetspolicy</h1> <p class="updated">Uppdaterad: 23 juni 2026</p> <h2>1. Personuppgiftsansvarig</h2> <p><strong>Elias Wilkening</strong><br>Stettiner Str. 41 · 35410 Hungen · Tyskland<br>
E-post: <a href="mailto:support@rosterapp.tech">support@rosterapp.tech</a></p> <h2>2. Grundprincip: lokal behandling</h2> <p>Roster är en helt lokal app. Allt innehåll du matar in lagras uteslutande på din enhet. Det finns <strong>ingen</strong> Roster-server, ingen molnlagring från vår sida och ingen överföring av ditt innehåll till tredje part. Ingen spårning, ingen analytics.</p> <h2>3. Vilka uppgifter behandlas?</h2> <h3>3.1 Lokalt på din enhet</h3> <ul> <li>Profil: namn, pronomen, valfritt profilfoto</li> <li>Kopplingar: namn, relationstyp, anteckningar, överenskommelser, milstolpar, hälsodata, självdestruerande anteckningar, stämningsangivelser</li> <li>Reflektioner / dagboksanteckningar · App-inställningar</li> </ul> <h3>3.2 Uppgifter som behandlas av Apple</h3> <ul> <li><strong>App Store / StoreKit:</strong> Apple behandlar ditt Apple ID och betalningsuppgifter för prenumerationer. Vi tar emot endast anonymiserade bekräftelser.</li> <li><strong>Lokala aviseringar:</strong> Påminnelser utlöses lokalt — ingen serveröverföring.</li> <li><strong>PhotosPicker:</strong> Åtkomst endast till valt foto — lagras lokalt.</li> <li><strong>AVSpeech (valfritt):</strong> Talsyntes på enheten — ingen molnöverföring.</li> </ul> <h3>3.3 Uppgifter vi inte samlar in</h3> <ul><li>Platsdata · Kontakter · Mikrofoninspelningar · Annons-ID:n (IDFA) · Kraschtelemetri</li></ul> <h2>4. Rättsliga grunder</h2> <ul> <li>Art. 6.1.b GDPR (fullgörande av avtal)</li> <li>Art. 6.1.f GDPR (berättigat intresse)</li> <li>Art. 6.1.a GDPR (samtycke)</li> </ul> <h2>5. Dina rättigheter</h2> <p>Du har rättigheter enligt art. 15–22 GDPR. Eftersom alla uppgifter finns lokalt kan du utöva dessa rättigheter direkt i appen. Du har också rätt att lämna in ett klagomål till en tillsynsmyndighet (art. 77 GDPR).</p> <h2>6. Kontakt</h2> <p>Frågor: <a href="mailto:support@rosterapp.tech">support@rosterapp.tech</a></p> ` })}`;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/sv/appinfo/datenschutzrichtlinie.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/sv/appinfo/datenschutzrichtlinie.astro";
const $$url = "/sv/appinfo/datenschutzrichtlinie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Datenschutzrichtlinie,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
