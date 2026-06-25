import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$AppInfoLayout } from '../../chunks/AppInfoLayout_fF8mKsVs.mjs';
export { renderers } from '../../renderers.mjs';

const $$Datenschutzrichtlinie = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppInfoLayout", $$AppInfoLayout, { "lang": "de", "path": "/appinfo/datenschutzrichtlinie", "activeTab": "privacy", "title": "Datenschutzerkl\xE4rung \u2013 Roster App", "description": "Datenschutzerkl\xE4rung der Roster iOS-App. Local-first, kein Tracking, kein Backend. Stand: 23. Juni 2026." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Datenschutzerklärung</h1> <p class="updated">Stand: 23. Juni 2026</p> <h2>1. Verantwortlicher</h2> <p> <strong>Elias Wilkening</strong><br>
c/o Impressumservice Dein-Impressum · Stettiner Str. 41 · 35410 Hungen · Deutschland<br>
E-Mail: <a href="mailto:support@rosterapp.tech">support@rosterapp.tech</a> ·
    Telefon: <a href="tel:+4915225393437">+49 152 25393437</a> </p> <h2>2. Grundsatz: Lokale Verarbeitung</h2> <p>Roster ist eine vollständig lokale App. Sämtliche Inhalte werden ausschließlich auf deinem Gerät gespeichert. Es gibt <strong>keinen</strong> Roster-Server, keine Cloud-Speicherung durch uns und keine Übertragung deiner Inhalte an Dritte. Kein Tracking, keine Analytics.</p> <h2>3. Welche Daten werden verarbeitet?</h2> <h3>3.1 Lokal auf deinem Gerät</h3> <ul> <li>Profil: Name, Pronomen, optionales Profilfoto</li> <li>Verbindungen: Name, Beziehungstyp, Notizen, Vereinbarungen, Meilensteine, Health-Daten, Burn-after-Read-Notizen, Stimmungsangaben</li> <li>Reflexionen / Journal-Einträge</li> <li>App-Einstellungen</li> </ul> <h3>3.2 Daten, die Apple verarbeitet</h3> <ul> <li><strong>App Store / StoreKit:</strong> Apple verarbeitet Apple-ID und Zahlungsdaten bei Abonnements. Wir erhalten nur anonymisierte Abo-Bestätigungen.</li> <li><strong>Lokale Benachrichtigungen:</strong> Erinnerungen werden lokal ausgelöst, keine Serverübertragung.</li> <li><strong>PhotosPicker:</strong> Zugriff nur auf gewähltes Foto, kein Zugriff auf die gesamte Mediathek.</li> <li><strong>AVSpeech (optional):</strong> Geräteseitige Sprachsynthese, keine Cloud-Übertragung.</li> </ul> <h3>3.3 Nicht erhobene Daten</h3> <ul> <li>Standortdaten · Adressbuch · Mikrofon · Werbe-IDs (IDFA) · Crash-Telemetrie</li> </ul> <h2>4. Rechtsgrundlagen</h2> <ul> <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li> <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li> <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung – z. B. Benachrichtigungen)</li> </ul> <h2>5. Speicherdauer</h2> <p>Daten verbleiben auf deinem Gerät bis zur Deinstallation. Burn-after-Read-Notizen löschen sich automatisch nach gewählter Lebenszeit (1 Stunde bis 1 Monat).</p> <h2>6. Weitergabe an Dritte</h2> <p>Keine Weitergabe und keine Übermittlung in Drittländer.</p> <h2>7. Deine Rechte</h2> <p>Dir stehen die Rechte aus Art. 15–22 DSGVO zu (Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch). Da alle Daten lokal liegen, kannst du diese Rechte direkt in der App ausüben. Beschwerderecht bei der zuständigen Landesdatenschutzbehörde (Art. 77 DSGVO).</p> <h2>8. Sicherheit</h2> <p>Roster nutzt die iOS-eigene Geräteverschlüsselung (Data Protection). Wir empfehlen, dein Gerät mit Code/Face-ID/Touch-ID zu sichern.</p> <h2>9. Kontakt &amp; Änderungen</h2> <p>Fragen: <a href="mailto:support@rosterapp.tech">support@rosterapp.tech</a>. Aktuelle Version stets unter <a href="https://rosterapp.tech/appinfo/datenschutzrichtlinie">rosterapp.tech/appinfo/datenschutzrichtlinie</a>.</p> ` })}`;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/appinfo/datenschutzrichtlinie.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/appinfo/datenschutzrichtlinie.astro";
const $$url = "/appinfo/datenschutzrichtlinie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Datenschutzrichtlinie,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
