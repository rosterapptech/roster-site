import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$AppInfoLayout } from '../../../chunks/AppInfoLayout_fF8mKsVs.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Datenschutzrichtlinie = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppInfoLayout", $$AppInfoLayout, { "lang": "da", "path": "/appinfo/datenschutzrichtlinie", "activeTab": "privacy", "title": "Privatlivspolitik \u2013 Roster App", "description": "Privatlivspolitik for Roster iOS-appen. Lokalt gemt, ingen sporing, ingen backend." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Privatlivspolitik</h1> <p class="updated">Opdateret: 23. juni 2026</p> <h2>1. Dataansvarlig</h2> <p><strong>Elias Wilkening</strong><br>Stettiner Str. 41 · 35410 Hungen · Tyskland<br>
E-mail: <a href="mailto:support@rosterapp.tech">support@rosterapp.tech</a></p> <h2>2. Kerneprincipper: lokal behandling</h2> <p>Roster er en fuldt lokal app. Alt indhold gemmes udelukkende på din enhed. Der er <strong>ingen</strong> Roster-server, ingen cloud-lagring fra os og ingen overførsel af dit indhold til tredjeparter. Ingen sporing, ingen analytics.</p> <h2>3. Hvilke data behandles?</h2> <h3>3.1 Lokalt på din enhed</h3> <ul> <li>Profil: navn, pronomener, valgfrit profilbillede</li> <li>Forbindelser: navn, relationstype, noter, aftaler, milepæle, sundhedsdata, selvdestruerende noter, stemningsangivelser</li> <li>Refleksioner / dagbogsindlæg · App-indstillinger</li> </ul> <h3>3.2 Data behandlet af Apple</h3> <ul> <li><strong>App Store / StoreKit:</strong> Apple behandler dit Apple ID og betalingsdata ved abonnementer. Vi modtager kun anonymiserede bekræftelser.</li> <li><strong>Lokale notifikationer:</strong> Påmindelser udløses lokalt — ingen serveroverførsel.</li> <li><strong>PhotosPicker:</strong> Kun adgang til det valgte billede — gemt lokalt.</li> <li><strong>AVSpeech (valgfrit):</strong> Talesyntese på enheden — ingen cloud-overførsel.</li> </ul> <h3>3.3 Data vi ikke indsamler</h3> <ul><li>Placeringsdata · Kontakter · Mikrofonoptagelser · Reklame-ID'er (IDFA) · Nedbrudstelemtri</li></ul> <h2>4. Retsgrundlag</h2> <ul> <li>Art. 6, stk. 1, litra b GDPR (opfyldelse af kontrakt)</li> <li>Art. 6, stk. 1, litra f GDPR (legitime interesser)</li> <li>Art. 6, stk. 1, litra a GDPR (samtykke)</li> </ul> <h2>5. Dine rettigheder</h2> <p>Du har rettigheder i henhold til art. 15–22 GDPR. Da alle data ligger lokalt, kan du udøve disse rettigheder direkte i appen. Du har også ret til at klage til en tilsynsmyndighed (art. 77 GDPR).</p> <h2>6. Kontakt</h2> <p>Spørgsmål: <a href="mailto:support@rosterapp.tech">support@rosterapp.tech</a></p> ` })}`;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/da/appinfo/datenschutzrichtlinie.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/da/appinfo/datenschutzrichtlinie.astro";
const $$url = "/da/appinfo/datenschutzrichtlinie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Datenschutzrichtlinie,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
