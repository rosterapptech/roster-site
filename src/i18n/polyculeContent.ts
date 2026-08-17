import type { Lang } from './ui';
import type { PolyculeStudioStrings } from '../components/PolyculeStudio.astro';

/**
 * Inhalte der Polycule-Mapper-Seiten – alle 7 Sprachen an einem Ort.
 *
 * Abweichung vom Quiz-Muster (dort liegt der Text in der jeweiligen Seite):
 * Der Mapper braucht ~90 uebersetzte Strings pro Sprache. Verteilt auf 7
 * Seitendateien faellt sofort auf, wenn eine Aenderung nur in 5 davon landet.
 * Als Record<Lang, ...> erzwingt TypeScript die Vollstaendigkeit.
 */
export interface PolyculeContent {
  title: string;
  description: string;
  breadcrumb: string;
  h1: string;
  lede: string;
  studio: PolyculeStudioStrings;
  stepsTitle: string;
  steps: { title: string; text: string }[];
  formsTitle: string;
  formsIntro: string;
  forms: { name: string; text: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  relatedTitle: string;
  related: { slug: string; title: string }[];
}

export const POLYCULE_CONTENT: Record<Lang, PolyculeContent> = {
  de: {
    title: 'Polycule Map erstellen – kostenloser Polycule-Generator | Roster',
    description:
      'Zeichne deine Polycule online: Personen anlegen, Beziehungstypen wählen, als Bild exportieren. Kostenlos, ohne Konto – alles bleibt in deinem Browser.',
    breadcrumb: 'Polycule Map erstellen',
    h1: 'Polycule Map erstellen',
    lede:
      'Zieh deine Beziehungslandkarte in ein paar Minuten zusammen: Personen, Verbindungen, Beziehungstypen. Kostenlos, ohne Konto – und ohne dass ein einziger Name deinen Browser verlässt.',
    studio: {
      addPerson: '+ Person',
      connect: 'Verbinden',
      tidy: 'Anordnen',
      undo: 'Rückgängig',
      reset: 'Neu anfangen',
      resetConfirm: 'Karte zurücksetzen? Nicht exportierte Änderungen gehen verloren.',
      templates: 'Vorlagen',
      templateList: [
        { id: 'vee', label: 'V (Vee)' },
        { id: 'triad', label: 'Triade' },
        { id: 'quad', label: 'Quad' },
        { id: 'chain', label: 'Kette (N)' },
        { id: 'hierarchy', label: 'Hierarchisch' },
        { id: 'network', label: 'Netz / Beziehungsanarchie' },
      ],
      exportLabel: 'Export',
      exportPng: 'Als PNG speichern',
      exportSvg: 'Als SVG speichern',
      saveFile: 'Als Datei sichern (.json)',
      loadFile: 'Datei laden …',
      loadError: 'Diese Datei konnte nicht gelesen werden.',
      personName: 'Name',
      personColor: 'Farbe',
      deletePerson: 'Person entfernen',
      linkType: 'Art der Verbindung',
      linkTypeList: [
        { id: 'romantic', label: 'Romantisch', desc: 'Liebesbeziehung, fest oder offen' },
        { id: 'sexual', label: 'Sexuell', desc: 'Sexuelle Verbindung ohne romantischen Anspruch' },
        { id: 'platonic', label: 'Platonisch / QPR', desc: 'Enge Bindung ohne Romantik' },
        { id: 'nesting', label: 'Nesting', desc: 'Gemeinsamer Haushalt, geteilter Alltag' },
        { id: 'comet', label: 'Comet', desc: 'Selten, aber intensiv – mit langen Abständen' },
        { id: 'metamour', label: 'Metamour', desc: 'Partner:in deiner Partner:in' },
        { id: 'past', label: 'Vergangen', desc: 'Ex oder ruhende Verbindung, die noch zählt' },
      ],
      linkLabel: 'Notiz an der Linie',
      linkLabelPlaceholder: 'z. B. seit 2023',
      deleteLink: 'Verbindung löschen',
      legend: 'Legende',
      hintIdle: 'Tippe auf eine Person oder eine Linie, um sie zu bearbeiten. Ziehen verschiebt.',
      hintPerson: 'Person ausgewählt – Name und Farbe ändern oder mit jemandem verbinden.',
      hintConnect: 'Jetzt die zweite Person antippen.',
      hintLink: 'Verbindung ausgewählt – Art und Notiz lassen sich ändern.',
      youLabel: 'Du',
      newPersonName: 'Neu',
      unsavedWarning: 'Deine Karte wird nicht gespeichert. Seite wirklich verlassen?',
      canvasLabel: 'Zeichenfläche der Polycule Map',
      noscript:
        'Der Editor braucht JavaScript. Die Karte wird komplett in deinem Browser gezeichnet – es wird nichts an einen Server gesendet.',
      privacyNote:
        'Kein Konto, keine Cookies, kein Server: Namen und Verbindungen bleiben in diesem Browser-Tab und werden nirgendwo gespeichert. Beim Schließen ist alles weg – sichere deine Karte vorher als Bild oder Datei.',
    },
    stepsTitle: 'In vier Schritten zur eigenen Karte',
    steps: [
      { title: 'Vorlage wählen', text: 'Starte mit einer typischen Form – V, Triade, Quad – oder fang bei null an.' },
      { title: 'Personen anlegen', text: 'Namen oder Spitznamen eintragen, jeder Person eine Farbe geben.' },
      { title: 'Verbindungen ziehen', text: 'Zwei Personen antippen, Beziehungstyp wählen, bei Bedarf eine Notiz anhängen.' },
      { title: 'Anordnen und exportieren', text: 'Ein Klick auf „Anordnen“ räumt das Bild auf. Danach als PNG, SVG oder Datei sichern.' },
    ],
    formsTitle: 'Die häufigsten Polycule-Formen',
    formsIntro:
      'Jede Polycule sieht anders aus – aber ein paar Grundformen tauchen immer wieder auf. Jede davon liegt im Editor als Vorlage bereit.',
    forms: [
      { name: 'V (Vee)', text: 'Eine Person hat zwei Beziehungen, die beiden anderen sind nicht miteinander zusammen. Sie sind Metamours – die häufigste Form überhaupt.' },
      { name: 'Triade', text: 'Drei Menschen, die alle miteinander in Beziehung stehen. Wird auch Throuple genannt.' },
      { name: 'Quad', text: 'Vier Personen mit Verbindungen im Kreis – oft entstanden, weil zwei Paare sich überkreuz verliebt haben.' },
      { name: 'Kette (N)', text: 'A ist mit B zusammen, B mit C, C mit D. Ein Netz, das sich nach außen fortsetzt, ohne dass sich alle kennen.' },
      { name: 'Hierarchisch', text: 'Eine Beziehung hat Vorrang – häufig die, in der zusammengewohnt wird. Andere sind bewusst anders gewichtet.' },
      { name: 'Netz / Beziehungsanarchie', text: 'Keine feste Rangfolge, dafür viele unterschiedliche Verbindungsarten. Freundschaft, Romantik und Alltag liegen nebeneinander statt übereinander.' },
    ],
    faqTitle: 'Häufige Fragen',
    faq: [
      {
        q: 'Was ist eine Polycule Map?',
        a: 'Eine Polycule Map ist die zeichnerische Darstellung eines Beziehungsnetzes: Jede Person ist ein Punkt, jede Beziehung eine Linie. Sie hilft dabei, ein Netz zu erklären, das sich in Worten schnell verheddert – etwa gegenüber neuen Partner:innen oder Therapeut:innen.',
      },
      {
        q: 'Ist der Polycule Mapper kostenlos?',
        a: 'Ja, vollständig. Kein Konto, keine Testphase, keine Funktion hinter einer Bezahlschranke. Auch der Export als Bild ist frei.',
      },
      {
        q: 'Werden meine Eingaben gespeichert oder übertragen?',
        a: 'Nein. Der Editor läuft ausschließlich in deinem Browser. Es gibt keinen Server, der die Namen entgegennimmt, keine Cookies und keine Speicherung auf deinem Gerät. Wenn du den Tab schließt, ist die Karte weg.',
      },
      {
        q: 'Kann ich später an meiner Karte weiterarbeiten?',
        a: 'Ja – über „Als Datei sichern“ lädst du eine kleine .json-Datei herunter, die nur bei dir liegt. Über „Datei laden“ holst du sie später wieder in den Editor.',
      },
      {
        q: 'Welche Beziehungstypen kann ich darstellen?',
        a: 'Sieben Linienarten: romantisch, sexuell, platonisch/queerplatonisch, Nesting, Comet, Metamour und vergangene Verbindungen. Zusätzlich lässt sich an jede Linie eine kurze Notiz schreiben, etwa „seit 2023“ oder „nur Fernbeziehung“.',
      },
      {
        q: 'Funktioniert das auf dem Handy?',
        a: 'Ja. Personen lassen sich mit dem Finger verschieben, alles andere läuft über Antippen. Der Export funktioniert auf dem Handy genauso wie am Rechner.',
      },
      {
        q: 'Darf ich meine Karte öffentlich teilen?',
        a: 'Technisch ja – aber auf dem Bild stehen andere Menschen. Nicht jede Person ist geoutet, und eine Polycule Map kann viel über Beziehungsleben verraten. Frag vorher, ob es für alle in Ordnung ist, und nutze im Zweifel Initialen statt voller Namen.',
      },
    ],
    ctaEyebrow: 'Und danach?',
    ctaTitle: 'Eine Karte ist ein Standbild.',
    ctaText:
      'Sie zeigt dein Netz, wie es heute aussieht. Roster hilft dir, es auch morgen im Blick zu behalten: Termine, Check-ins und Notizen zu jeder Person – ruhig, lokal und ohne Konto auf deinem iPhone.',
    ctaButton: 'Roster im App Store laden',
    relatedTitle: 'Mehr zum Thema',
    related: [
      { slug: 'was-ist-ein-polycule', title: 'Was ist ein Polycule? Beziehungsformen, Beispiele und wie du den Überblick behältst' },
      { slug: 'throuple-triade', title: 'Throuple & Triade: Beziehungen zu dritt einfach erklärt' },
      { slug: 'hierarchische-vs-nicht-hierarchische-polyamorie', title: 'Hierarchische vs. nicht-hierarchische Polyamorie: Zwei Modelle im Vergleich' },
    ],
  },

  en: {
    title: 'Polycule Map Maker – Free Polycule Generator | Roster',
    description:
      'Draw your polycule online: add people, pick relationship types, export as an image. Free, no account – everything stays in your browser.',
    breadcrumb: 'Polycule map maker',
    h1: 'Polycule map maker',
    lede:
      'Put your relationship map together in a few minutes: people, connections, relationship types. Free, no account – and not a single name leaves your browser.',
    studio: {
      addPerson: '+ Person',
      connect: 'Connect',
      tidy: 'Arrange',
      undo: 'Undo',
      reset: 'Start over',
      resetConfirm: 'Reset the map? Any changes you have not exported will be lost.',
      templates: 'Templates',
      templateList: [
        { id: 'vee', label: 'V (Vee)' },
        { id: 'triad', label: 'Triad' },
        { id: 'quad', label: 'Quad' },
        { id: 'chain', label: 'Chain (N)' },
        { id: 'hierarchy', label: 'Hierarchical' },
        { id: 'network', label: 'Network / relationship anarchy' },
      ],
      exportLabel: 'Export',
      exportPng: 'Save as PNG',
      exportSvg: 'Save as SVG',
      saveFile: 'Save to file (.json)',
      loadFile: 'Load file …',
      loadError: 'This file could not be read.',
      personName: 'Name',
      personColor: 'Colour',
      deletePerson: 'Remove person',
      linkType: 'Type of connection',
      linkTypeList: [
        { id: 'romantic', label: 'Romantic', desc: 'A love relationship, open or committed' },
        { id: 'sexual', label: 'Sexual', desc: 'A sexual connection without romantic claim' },
        { id: 'platonic', label: 'Platonic / QPR', desc: 'A close bond without romance' },
        { id: 'nesting', label: 'Nesting', desc: 'Shared home, shared everyday life' },
        { id: 'comet', label: 'Comet', desc: 'Rare but intense, with long gaps in between' },
        { id: 'metamour', label: 'Metamour', desc: "Your partner's partner" },
        { id: 'past', label: 'Past', desc: 'An ex or dormant connection that still counts' },
      ],
      linkLabel: 'Note on the line',
      linkLabelPlaceholder: 'e.g. since 2023',
      deleteLink: 'Delete connection',
      legend: 'Legend',
      hintIdle: 'Tap a person or a line to edit it. Drag to move people around.',
      hintPerson: 'Person selected – change name and colour, or connect them to someone.',
      hintConnect: 'Now tap the second person.',
      hintLink: 'Connection selected – you can change its type and note.',
      youLabel: 'You',
      newPersonName: 'New',
      unsavedWarning: 'Your map is not saved anywhere. Leave this page?',
      canvasLabel: 'Polycule map canvas',
      noscript:
        'The editor needs JavaScript. The map is drawn entirely in your browser – nothing is sent to a server.',
      privacyNote:
        'No account, no cookies, no server: names and connections stay in this browser tab and are never stored. Close it and everything is gone – save your map as an image or file first.',
    },
    stepsTitle: 'Four steps to your own map',
    steps: [
      { title: 'Pick a template', text: 'Start from a common shape – V, triad, quad – or begin with a blank canvas.' },
      { title: 'Add people', text: 'Enter names or nicknames and give each person a colour.' },
      { title: 'Draw connections', text: 'Tap two people, choose the relationship type, add a short note if you like.' },
      { title: 'Arrange and export', text: 'One tap on “Arrange” tidies the layout. Then save it as PNG, SVG or a file.' },
    ],
    formsTitle: 'The most common polycule shapes',
    formsIntro:
      'Every polycule looks different, but a handful of basic shapes keep coming up. Each one is available as a template in the editor.',
    forms: [
      { name: 'V (Vee)', text: 'One person has two relationships while the other two are not together. They are metamours – the most common shape there is.' },
      { name: 'Triad', text: 'Three people who are all in a relationship with each other. Also called a throuple.' },
      { name: 'Quad', text: 'Four people connected in a circle – often the result of two couples falling for each other crosswise.' },
      { name: 'Chain (N)', text: 'A is with B, B with C, C with D. A network that keeps extending outwards without everyone knowing each other.' },
      { name: 'Hierarchical', text: 'One relationship takes precedence, often the one sharing a home. Others are deliberately weighted differently.' },
      { name: 'Network / relationship anarchy', text: 'No fixed ranking, but many different kinds of connection. Friendship, romance and everyday life sit side by side rather than stacked.' },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'What is a polycule map?',
        a: 'A polycule map is a drawing of a relationship network: every person is a dot, every relationship a line. It helps explain a network that gets tangled fast in words – to a new partner, for instance, or a therapist.',
      },
      {
        q: 'Is the polycule map maker free?',
        a: 'Completely. No account, no trial, nothing behind a paywall. Exporting your map as an image is free too.',
      },
      {
        q: 'Is anything I type saved or uploaded?',
        a: 'No. The editor runs entirely in your browser. There is no server receiving the names, no cookies and no storage on your device. Close the tab and the map is gone.',
      },
      {
        q: 'Can I come back to my map later?',
        a: 'Yes – “Save to file” downloads a small .json file that only exists on your device. “Load file” brings it back into the editor whenever you want.',
      },
      {
        q: 'Which relationship types can I show?',
        a: 'Seven line styles: romantic, sexual, platonic/queerplatonic, nesting, comet, metamour and past connections. You can also add a short note to any line, such as “since 2023” or “long distance only”.',
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. Drag people with your finger; everything else works by tapping. Exporting works the same on mobile as on a desktop.',
      },
      {
        q: 'Can I share my map publicly?',
        a: 'Technically yes – but other people are on that image. Not everyone is out, and a polycule map can reveal a lot about someone’s relationships. Ask the people involved first, and use initials instead of full names when in doubt.',
      },
    ],
    ctaEyebrow: 'What comes next?',
    ctaTitle: 'A map is a still frame.',
    ctaText:
      'It shows your network as it looks today. Roster helps you keep track of it tomorrow too: dates, check-ins and notes for every person – calm, local and account-free on your iPhone.',
    ctaButton: 'Get Roster on the App Store',
    relatedTitle: 'More on this',
    related: [
      { slug: 'what-is-a-polycule', title: 'What Is a Polycule? Relationship Structures, Examples and How to Stay Organised' },
      { slug: 'throuple-triad', title: 'Throuple & Triad: Three-Person Relationships Explained Simply' },
      { slug: 'hierarchical-vs-non-hierarchical-polyamory', title: 'Hierarchical vs. Non-Hierarchical Polyamory: Two Models Compared' },
    ],
  },

  nl: {
    title: 'Polycule map maken – gratis polycule-generator | Roster',
    description:
      'Teken je polycule online: personen toevoegen, relatietypes kiezen, exporteren als afbeelding. Gratis, zonder account – alles blijft in je browser.',
    breadcrumb: 'Polycule map maken',
    h1: 'Polycule map maken',
    lede:
      'Zet je relatiekaart in een paar minuten in elkaar: personen, verbindingen, relatietypes. Gratis, zonder account – en geen enkele naam verlaat je browser.',
    studio: {
      addPerson: '+ Persoon',
      connect: 'Verbinden',
      tidy: 'Ordenen',
      undo: 'Ongedaan maken',
      reset: 'Opnieuw beginnen',
      resetConfirm: 'Kaart resetten? Niet-geëxporteerde wijzigingen gaan verloren.',
      templates: 'Sjablonen',
      templateList: [
        { id: 'vee', label: 'V (vee)' },
        { id: 'triad', label: 'Triade' },
        { id: 'quad', label: 'Quad' },
        { id: 'chain', label: 'Ketting (N)' },
        { id: 'hierarchy', label: 'Hiërarchisch' },
        { id: 'network', label: 'Netwerk / relatieanarchie' },
      ],
      exportLabel: 'Export',
      exportPng: 'Opslaan als PNG',
      exportSvg: 'Opslaan als SVG',
      saveFile: 'Opslaan als bestand (.json)',
      loadFile: 'Bestand laden …',
      loadError: 'Dit bestand kon niet worden gelezen.',
      personName: 'Naam',
      personColor: 'Kleur',
      deletePerson: 'Persoon verwijderen',
      linkType: 'Soort verbinding',
      linkTypeList: [
        { id: 'romantic', label: 'Romantisch', desc: 'Liefdesrelatie, open of vast' },
        { id: 'sexual', label: 'Seksueel', desc: 'Seksuele verbinding zonder romantische aanspraak' },
        { id: 'platonic', label: 'Platonisch / QPR', desc: 'Hechte band zonder romantiek' },
        { id: 'nesting', label: 'Nesting', desc: 'Gedeeld huishouden, gedeeld dagelijks leven' },
        { id: 'comet', label: 'Comet', desc: 'Zelden maar intens, met lange tussenpozen' },
        { id: 'metamour', label: 'Metamour', desc: 'De partner van je partner' },
        { id: 'past', label: 'Verleden', desc: 'Ex of sluimerende band die nog meetelt' },
      ],
      linkLabel: 'Notitie bij de lijn',
      linkLabelPlaceholder: 'bijv. sinds 2023',
      deleteLink: 'Verbinding verwijderen',
      legend: 'Legenda',
      hintIdle: 'Tik op een persoon of lijn om die te bewerken. Slepen verplaatst.',
      hintPerson: 'Persoon geselecteerd – naam en kleur aanpassen of met iemand verbinden.',
      hintConnect: 'Tik nu op de tweede persoon.',
      hintLink: 'Verbinding geselecteerd – soort en notitie zijn aanpasbaar.',
      youLabel: 'Jij',
      newPersonName: 'Nieuw',
      unsavedWarning: 'Je kaart wordt nergens opgeslagen. Pagina echt verlaten?',
      canvasLabel: 'Tekenvlak van de polycule map',
      noscript:
        'De editor heeft JavaScript nodig. De kaart wordt volledig in je browser getekend – er gaat niets naar een server.',
      privacyNote:
        'Geen account, geen cookies, geen server: namen en verbindingen blijven in dit browsertabblad en worden nergens opgeslagen. Sluit je het tabblad, dan is alles weg – sla je kaart eerst op als afbeelding of bestand.',
    },
    stepsTitle: 'In vier stappen naar je eigen kaart',
    steps: [
      { title: 'Kies een sjabloon', text: 'Begin met een bekende vorm – V, triade, quad – of start met een leeg vlak.' },
      { title: 'Voeg personen toe', text: 'Vul namen of bijnamen in en geef iedereen een eigen kleur.' },
      { title: 'Trek verbindingen', text: 'Tik twee personen aan, kies het relatietype en voeg eventueel een notitie toe.' },
      { title: 'Ordenen en exporteren', text: 'Eén tik op “Ordenen” maakt het beeld netjes. Sla het daarna op als PNG, SVG of bestand.' },
    ],
    formsTitle: 'De meest voorkomende polycule-vormen',
    formsIntro:
      'Elke polycule ziet er anders uit, maar een handvol basisvormen keert steeds terug. Elke vorm staat als sjabloon klaar in de editor.',
    forms: [
      { name: 'V (vee)', text: 'Eén persoon heeft twee relaties, de andere twee hebben niets met elkaar. Zij zijn metamours – veruit de meest voorkomende vorm.' },
      { name: 'Triade', text: 'Drie mensen die allemaal een relatie met elkaar hebben. Ook throuple genoemd.' },
      { name: 'Quad', text: 'Vier personen in een kring verbonden – vaak ontstaan doordat twee stellen kruislings verliefd werden.' },
      { name: 'Ketting (N)', text: 'A is met B, B met C, C met D. Een netwerk dat zich naar buiten uitstrekt zonder dat iedereen elkaar kent.' },
      { name: 'Hiërarchisch', text: 'Eén relatie krijgt voorrang, vaak die waarin wordt samengewoond. Andere wegen bewust anders.' },
      { name: 'Netwerk / relatieanarchie', text: 'Geen vaste rangorde, wel veel verschillende soorten verbindingen. Vriendschap, romantiek en dagelijks leven staan naast elkaar in plaats van boven elkaar.' },
    ],
    faqTitle: 'Veelgestelde vragen',
    faq: [
      {
        q: 'Wat is een polycule map?',
        a: 'Een polycule map is de tekening van een relatienetwerk: elke persoon is een punt, elke relatie een lijn. Het helpt om een netwerk uit te leggen dat in woorden snel in de knoop raakt – bijvoorbeeld aan een nieuwe partner of een therapeut.',
      },
      {
        q: 'Is de polycule mapper gratis?',
        a: 'Volledig. Geen account, geen proefperiode, niets achter een betaalmuur. Ook het exporteren als afbeelding is gratis.',
      },
      {
        q: 'Wordt wat ik invul opgeslagen of verstuurd?',
        a: 'Nee. De editor draait volledig in je browser. Er is geen server die de namen ontvangt, geen cookies en geen opslag op je apparaat. Sluit je het tabblad, dan is de kaart weg.',
      },
      {
        q: 'Kan ik later verder werken aan mijn kaart?',
        a: 'Ja – met “Opslaan als bestand” download je een klein .json-bestand dat alleen bij jou staat. Met “Bestand laden” haal je het later weer in de editor.',
      },
      {
        q: 'Welke relatietypes kan ik weergeven?',
        a: 'Zeven lijnsoorten: romantisch, seksueel, platonisch/queerplatonisch, nesting, comet, metamour en verbindingen uit het verleden. Bij elke lijn kun je bovendien een korte notitie zetten, zoals “sinds 2023” of “alleen op afstand”.',
      },
      {
        q: 'Werkt het op een telefoon?',
        a: 'Ja. Personen verplaats je met je vinger, de rest gaat met tikken. Exporteren werkt op mobiel net zo goed als op de computer.',
      },
      {
        q: 'Mag ik mijn kaart openbaar delen?',
        a: 'Technisch wel – maar er staan andere mensen op die afbeelding. Niet iedereen is uit de kast, en een polycule map verraadt veel over iemands relatieleven. Vraag het eerst aan de betrokkenen en gebruik bij twijfel initialen in plaats van volledige namen.',
      },
    ],
    ctaEyebrow: 'En daarna?',
    ctaTitle: 'Een kaart is een stilstaand beeld.',
    ctaText:
      'Ze laat je netwerk zien zoals het vandaag is. Roster helpt je het ook morgen te overzien: afspraken, check-ins en notities per persoon – rustig, lokaal en zonder account op je iPhone.',
    ctaButton: 'Roster downloaden in de App Store',
    relatedTitle: 'Meer hierover',
    related: [
      { slug: 'wat-is-een-polycule', title: 'Wat is een polycule? Relatievormen, voorbeelden en hoe je het overzicht bewaart' },
      { slug: 'throuple-triade-nl', title: 'Throuple & triade: relaties met drie personen eenvoudig uitgelegd' },
      { slug: 'hierarchische-vs-niet-hierarchische-polyamorie', title: 'Hiërarchische vs. niet-hiërarchische polyamorie: twee modellen vergeleken' },
    ],
  },

  es: {
    title: 'Crear un mapa de polycule – generador gratuito | Roster',
    description:
      'Dibuja tu polycule online: añade personas, elige tipos de relación y exporta la imagen. Gratis, sin cuenta – todo se queda en tu navegador.',
    breadcrumb: 'Crear un mapa de polycule',
    h1: 'Crear un mapa de polycule',
    lede:
      'Monta el mapa de tus relaciones en unos minutos: personas, conexiones y tipos de vínculo. Gratis, sin cuenta – y sin que un solo nombre salga de tu navegador.',
    studio: {
      addPerson: '+ Persona',
      connect: 'Conectar',
      tidy: 'Ordenar',
      undo: 'Deshacer',
      reset: 'Empezar de nuevo',
      resetConfirm: '¿Reiniciar el mapa? Se perderán los cambios que no hayas exportado.',
      templates: 'Plantillas',
      templateList: [
        { id: 'vee', label: 'V (vee)' },
        { id: 'triad', label: 'Tríada' },
        { id: 'quad', label: 'Cuarteto' },
        { id: 'chain', label: 'Cadena (N)' },
        { id: 'hierarchy', label: 'Jerárquico' },
        { id: 'network', label: 'Red / anarquía relacional' },
      ],
      exportLabel: 'Exportar',
      exportPng: 'Guardar como PNG',
      exportSvg: 'Guardar como SVG',
      saveFile: 'Guardar en archivo (.json)',
      loadFile: 'Cargar archivo …',
      loadError: 'No se ha podido leer este archivo.',
      personName: 'Nombre',
      personColor: 'Color',
      deletePerson: 'Eliminar persona',
      linkType: 'Tipo de conexión',
      linkTypeList: [
        { id: 'romantic', label: 'Romántica', desc: 'Relación de amor, abierta o estable' },
        { id: 'sexual', label: 'Sexual', desc: 'Vínculo sexual sin pretensión romántica' },
        { id: 'platonic', label: 'Platónica / QPR', desc: 'Vínculo estrecho sin romance' },
        { id: 'nesting', label: 'Nesting', desc: 'Hogar compartido, día a día compartido' },
        { id: 'comet', label: 'Comet', desc: 'Poco frecuente pero intensa, con largas pausas' },
        { id: 'metamour', label: 'Metamour', desc: 'La pareja de tu pareja' },
        { id: 'past', label: 'Pasada', desc: 'Ex o vínculo latente que sigue contando' },
      ],
      linkLabel: 'Nota en la línea',
      linkLabelPlaceholder: 'p. ej. desde 2023',
      deleteLink: 'Eliminar conexión',
      legend: 'Leyenda',
      hintIdle: 'Toca una persona o una línea para editarla. Arrastra para mover.',
      hintPerson: 'Persona seleccionada: cambia nombre y color o conéctala con alguien.',
      hintConnect: 'Ahora toca la segunda persona.',
      hintLink: 'Conexión seleccionada: puedes cambiar su tipo y su nota.',
      youLabel: 'Tú',
      newPersonName: 'Nueva',
      unsavedWarning: 'Tu mapa no se guarda en ningún sitio. ¿Salir de la página?',
      canvasLabel: 'Lienzo del mapa de polycule',
      noscript:
        'El editor necesita JavaScript. El mapa se dibuja íntegramente en tu navegador: no se envía nada a ningún servidor.',
      privacyNote:
        'Sin cuenta, sin cookies, sin servidor: los nombres y las conexiones se quedan en esta pestaña y no se guardan en ningún sitio. Al cerrarla desaparece todo, así que guarda antes tu mapa como imagen o archivo.',
    },
    stepsTitle: 'Tu mapa en cuatro pasos',
    steps: [
      { title: 'Elige una plantilla', text: 'Empieza por una forma habitual – V, tríada, cuarteto – o parte de un lienzo vacío.' },
      { title: 'Añade personas', text: 'Escribe nombres o apodos y da un color a cada persona.' },
      { title: 'Traza conexiones', text: 'Toca dos personas, elige el tipo de relación y añade una nota si quieres.' },
      { title: 'Ordena y exporta', text: 'Un toque en «Ordenar» limpia la composición. Después guárdalo como PNG, SVG o archivo.' },
    ],
    formsTitle: 'Las formas de polycule más habituales',
    formsIntro:
      'Cada polycule es distinta, pero unas pocas formas básicas se repiten una y otra vez. Todas están disponibles como plantilla en el editor.',
    forms: [
      { name: 'V (vee)', text: 'Una persona tiene dos relaciones y las otras dos no están juntas. Son metamours: la forma más común de todas.' },
      { name: 'Tríada', text: 'Tres personas que mantienen una relación entre sí. También se le llama throuple.' },
      { name: 'Cuarteto', text: 'Cuatro personas conectadas en círculo, a menudo porque dos parejas se enamoraron de forma cruzada.' },
      { name: 'Cadena (N)', text: 'A está con B, B con C, C con D. Una red que se extiende hacia fuera sin que todo el mundo se conozca.' },
      { name: 'Jerárquico', text: 'Una relación tiene prioridad, con frecuencia aquella en la que se convive. Las demás se ponderan de forma deliberadamente distinta.' },
      { name: 'Red / anarquía relacional', text: 'Sin jerarquía fija, pero con muchos tipos de vínculo. Amistad, romance y vida cotidiana conviven en lugar de apilarse.' },
    ],
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Qué es un mapa de polycule?',
        a: 'Un mapa de polycule es la representación dibujada de una red de relaciones: cada persona es un punto y cada relación una línea. Sirve para explicar una red que en palabras se enreda enseguida, por ejemplo ante una nueva pareja o en terapia.',
      },
      {
        q: '¿El generador de mapas de polycule es gratuito?',
        a: 'Completamente. Sin cuenta, sin periodo de prueba y sin funciones de pago. Exportar el mapa como imagen también es gratis.',
      },
      {
        q: '¿Se guarda o se envía lo que escribo?',
        a: 'No. El editor funciona por completo en tu navegador. No hay ningún servidor que reciba los nombres, ni cookies, ni almacenamiento en tu dispositivo. Si cierras la pestaña, el mapa desaparece.',
      },
      {
        q: '¿Puedo seguir con mi mapa más adelante?',
        a: 'Sí: con «Guardar en archivo» descargas un pequeño archivo .json que solo está en tu dispositivo. Con «Cargar archivo» lo devuelves al editor cuando quieras.',
      },
      {
        q: '¿Qué tipos de relación puedo representar?',
        a: 'Siete estilos de línea: romántica, sexual, platónica/queerplatónica, nesting, comet, metamour y vínculos pasados. Además puedes añadir una nota breve a cada línea, como «desde 2023» o «solo a distancia».',
      },
      {
        q: '¿Funciona en el móvil?',
        a: 'Sí. Las personas se arrastran con el dedo y el resto funciona tocando. La exportación funciona igual en el móvil que en el ordenador.',
      },
      {
        q: '¿Puedo compartir mi mapa públicamente?',
        a: 'Técnicamente sí, pero en esa imagen aparecen otras personas. No todo el mundo está fuera del armario y un mapa de polycule revela mucho sobre la vida relacional de alguien. Pregunta antes a quienes salen en él y, ante la duda, usa iniciales en lugar de nombres completos.',
      },
    ],
    ctaEyebrow: '¿Y después?',
    ctaTitle: 'Un mapa es una foto fija.',
    ctaText:
      'Muestra tu red tal como es hoy. Roster te ayuda a no perderla de vista mañana: citas, check-ins y notas de cada persona, con calma, en local y sin cuenta en tu iPhone.',
    ctaButton: 'Descargar Roster en la App Store',
    relatedTitle: 'Más sobre el tema',
    related: [
      { slug: 'que-es-un-polycule', title: '¿Qué es un polycule? Estructuras de relación, ejemplos y cómo mantener el control' },
      { slug: 'throuple-triada', title: 'Throuple y tríada: relaciones de tres personas explicadas de forma sencilla' },
      { slug: 'poliamoria-jerarquica-vs-no-jerarquica', title: 'Poliamoría jerárquica vs. no jerárquica: dos modelos comparados' },
    ],
  },

  da: {
    title: 'Lav et polycule-kort – gratis polycule-generator | Roster',
    description:
      'Tegn dit polycule online: tilføj personer, vælg relationstyper, eksportér som billede. Gratis, uden konto – alt bliver i din browser.',
    breadcrumb: 'Lav et polycule-kort',
    h1: 'Lav et polycule-kort',
    lede:
      'Sæt dit relationskort sammen på få minutter: personer, forbindelser og relationstyper. Gratis, uden konto – og uden at et eneste navn forlader din browser.',
    studio: {
      addPerson: '+ Person',
      connect: 'Forbind',
      tidy: 'Arrangér',
      undo: 'Fortryd',
      reset: 'Start forfra',
      resetConfirm: 'Nulstil kortet? Ændringer, du ikke har eksporteret, går tabt.',
      templates: 'Skabeloner',
      templateList: [
        { id: 'vee', label: 'V (vee)' },
        { id: 'triad', label: 'Triade' },
        { id: 'quad', label: 'Quad' },
        { id: 'chain', label: 'Kæde (N)' },
        { id: 'hierarchy', label: 'Hierarkisk' },
        { id: 'network', label: 'Netværk / relationsanarki' },
      ],
      exportLabel: 'Eksport',
      exportPng: 'Gem som PNG',
      exportSvg: 'Gem som SVG',
      saveFile: 'Gem som fil (.json)',
      loadFile: 'Indlæs fil …',
      loadError: 'Denne fil kunne ikke læses.',
      personName: 'Navn',
      personColor: 'Farve',
      deletePerson: 'Fjern person',
      linkType: 'Type forbindelse',
      linkTypeList: [
        { id: 'romantic', label: 'Romantisk', desc: 'Kærlighedsforhold, åbent eller fast' },
        { id: 'sexual', label: 'Seksuel', desc: 'Seksuel forbindelse uden romantisk krav' },
        { id: 'platonic', label: 'Platonisk / QPR', desc: 'Tæt bånd uden romantik' },
        { id: 'nesting', label: 'Nesting', desc: 'Fælles hjem, fælles hverdag' },
        { id: 'comet', label: 'Comet', desc: 'Sjælden, men intens – med lange mellemrum' },
        { id: 'metamour', label: 'Metamour', desc: 'Din partners partner' },
        { id: 'past', label: 'Tidligere', desc: 'Eks eller hvilende bånd, der stadig tæller' },
      ],
      linkLabel: 'Note på linjen',
      linkLabelPlaceholder: 'f.eks. siden 2023',
      deleteLink: 'Slet forbindelse',
      legend: 'Signaturforklaring',
      hintIdle: 'Tryk på en person eller en linje for at redigere. Træk for at flytte.',
      hintPerson: 'Person valgt – skift navn og farve, eller forbind til en anden.',
      hintConnect: 'Tryk nu på person nummer to.',
      hintLink: 'Forbindelse valgt – type og note kan ændres.',
      youLabel: 'Dig',
      newPersonName: 'Ny',
      unsavedWarning: 'Dit kort bliver ikke gemt. Vil du virkelig forlade siden?',
      canvasLabel: 'Tegneflade til polycule-kortet',
      noscript:
        'Editoren kræver JavaScript. Kortet tegnes udelukkende i din browser – der sendes intet til en server.',
      privacyNote:
        'Ingen konto, ingen cookies, ingen server: navne og forbindelser bliver i denne browserfane og gemmes ingen steder. Lukker du fanen, er alt væk – gem dit kort som billede eller fil først.',
    },
    stepsTitle: 'Dit eget kort i fire trin',
    steps: [
      { title: 'Vælg en skabelon', text: 'Start med en almindelig form – V, triade, quad – eller begynd på en blank flade.' },
      { title: 'Tilføj personer', text: 'Skriv navne eller kælenavne, og giv hver person sin egen farve.' },
      { title: 'Træk forbindelser', text: 'Tryk på to personer, vælg relationstypen, og tilføj en note hvis du vil.' },
      { title: 'Arrangér og eksportér', text: 'Ét tryk på “Arrangér” rydder op i billedet. Gem det derefter som PNG, SVG eller fil.' },
    ],
    formsTitle: 'De mest almindelige polycule-former',
    formsIntro:
      'Hver polycule ser forskellig ud, men nogle få grundformer går igen. Alle ligger klar som skabelon i editoren.',
    forms: [
      { name: 'V (vee)', text: 'Én person har to forhold, mens de to andre ikke er sammen. De er metamours – den klart mest udbredte form.' },
      { name: 'Triade', text: 'Tre mennesker, der alle har et forhold til hinanden. Kaldes også et throuple.' },
      { name: 'Quad', text: 'Fire personer forbundet i en ring – opstår ofte, når to par forelsker sig på kryds.' },
      { name: 'Kæde (N)', text: 'A er sammen med B, B med C, C med D. Et netværk, der fortsætter udad, uden at alle kender hinanden.' },
      { name: 'Hierarkisk', text: 'Ét forhold har forrang, ofte det man bor sammen i. De øvrige vægtes bevidst anderledes.' },
      { name: 'Netværk / relationsanarki', text: 'Ingen fast rangorden, men mange forskellige slags forbindelser. Venskab, romantik og hverdag ligger side om side i stedet for oven på hinanden.' },
    ],
    faqTitle: 'Ofte stillede spørgsmål',
    faq: [
      {
        q: 'Hvad er et polycule-kort?',
        a: 'Et polycule-kort er en tegning af et relationsnetværk: hver person er en prik, hvert forhold en linje. Det hjælper med at forklare et netværk, der hurtigt bliver rodet i ord – for eksempel over for en ny partner eller en terapeut.',
      },
      {
        q: 'Er polycule-generatoren gratis?',
        a: 'Fuldstændig. Ingen konto, ingen prøveperiode, intet bag en betalingsmur. Eksport som billede er også gratis.',
      },
      {
        q: 'Bliver det, jeg skriver, gemt eller sendt?',
        a: 'Nej. Editoren kører udelukkende i din browser. Der er ingen server, der modtager navnene, ingen cookies og ingen lagring på din enhed. Lukker du fanen, er kortet væk.',
      },
      {
        q: 'Kan jeg arbejde videre på kortet senere?',
        a: 'Ja – med “Gem som fil” henter du en lille .json-fil, der kun ligger hos dig. Med “Indlæs fil” henter du den tilbage i editoren, når du vil.',
      },
      {
        q: 'Hvilke relationstyper kan jeg vise?',
        a: 'Syv linjetyper: romantisk, seksuel, platonisk/queerplatonisk, nesting, comet, metamour og tidligere forbindelser. Derudover kan du sætte en kort note på hver linje, f.eks. “siden 2023” eller “kun på afstand”.',
      },
      {
        q: 'Virker det på mobilen?',
        a: 'Ja. Personer flytter du med fingeren, resten sker med tryk. Eksporten fungerer lige så godt på mobil som på computer.',
      },
      {
        q: 'Må jeg dele mit kort offentligt?',
        a: 'Teknisk set ja – men der er andre mennesker på billedet. Ikke alle er sprunget ud, og et polycule-kort afslører meget om nogens relationsliv. Spørg de involverede først, og brug initialer i stedet for fulde navne, hvis du er i tvivl.',
      },
    ],
    ctaEyebrow: 'Og bagefter?',
    ctaTitle: 'Et kort er et frosset øjeblik.',
    ctaText:
      'Det viser dit netværk, som det ser ud i dag. Roster hjælper dig med at bevare overblikket i morgen også: aftaler, check-ins og noter til hver person – roligt, lokalt og uden konto på din iPhone.',
    ctaButton: 'Hent Roster i App Store',
    relatedTitle: 'Mere om emnet',
    related: [
      { slug: 'hvad-er-et-polycule', title: 'Hvad er et polycule? Relationsformer, eksempler og hvordan du bevarer overblikket' },
      { slug: 'throuple-triade-da', title: 'Throuple & triade: Forhold mellem tre personer forklaret enkelt' },
      { slug: 'hierarkisk-vs-ikke-hierarkisk-polyamori', title: 'Hierarkisk vs. ikke-hierarkisk polyamori: To modeller sammenlignet' },
    ],
  },

  sv: {
    title: 'Gör en polycule-karta – gratis polycule-generator | Roster',
    description:
      'Rita din polycule online: lägg till personer, välj relationstyper, exportera som bild. Gratis, utan konto – allt stannar i din webbläsare.',
    breadcrumb: 'Gör en polycule-karta',
    h1: 'Gör en polycule-karta',
    lede:
      'Sätt ihop din relationskarta på några minuter: personer, kopplingar och relationstyper. Gratis, utan konto – och utan att ett enda namn lämnar din webbläsare.',
    studio: {
      addPerson: '+ Person',
      connect: 'Koppla',
      tidy: 'Arrangera',
      undo: 'Ångra',
      reset: 'Börja om',
      resetConfirm: 'Nollställa kartan? Ändringar du inte exporterat går förlorade.',
      templates: 'Mallar',
      templateList: [
        { id: 'vee', label: 'V (vee)' },
        { id: 'triad', label: 'Triad' },
        { id: 'quad', label: 'Quad' },
        { id: 'chain', label: 'Kedja (N)' },
        { id: 'hierarchy', label: 'Hierarkisk' },
        { id: 'network', label: 'Nätverk / relationsanarki' },
      ],
      exportLabel: 'Export',
      exportPng: 'Spara som PNG',
      exportSvg: 'Spara som SVG',
      saveFile: 'Spara som fil (.json)',
      loadFile: 'Läs in fil …',
      loadError: 'Filen kunde inte läsas.',
      personName: 'Namn',
      personColor: 'Färg',
      deletePerson: 'Ta bort person',
      linkType: 'Typ av koppling',
      linkTypeList: [
        { id: 'romantic', label: 'Romantisk', desc: 'Kärleksrelation, öppen eller fast' },
        { id: 'sexual', label: 'Sexuell', desc: 'Sexuell koppling utan romantiska anspråk' },
        { id: 'platonic', label: 'Platonisk / QPR', desc: 'Nära band utan romantik' },
        { id: 'nesting', label: 'Nesting', desc: 'Delat hem, delad vardag' },
        { id: 'comet', label: 'Comet', desc: 'Sällan men intensivt – med långa mellanrum' },
        { id: 'metamour', label: 'Metamour', desc: 'Din partners partner' },
        { id: 'past', label: 'Tidigare', desc: 'Ex eller vilande band som fortfarande räknas' },
      ],
      linkLabel: 'Notering på linjen',
      linkLabelPlaceholder: 't.ex. sedan 2023',
      deleteLink: 'Ta bort koppling',
      legend: 'Teckenförklaring',
      hintIdle: 'Tryck på en person eller en linje för att redigera. Dra för att flytta.',
      hintPerson: 'Person vald – ändra namn och färg, eller koppla ihop med någon.',
      hintConnect: 'Tryck nu på den andra personen.',
      hintLink: 'Koppling vald – typ och notering går att ändra.',
      youLabel: 'Du',
      newPersonName: 'Ny',
      unsavedWarning: 'Din karta sparas ingenstans. Vill du lämna sidan?',
      canvasLabel: 'Rityta för polycule-kartan',
      noscript:
        'Redigeraren kräver JavaScript. Kartan ritas helt i din webbläsare – ingenting skickas till någon server.',
      privacyNote:
        'Inget konto, inga kakor, ingen server: namn och kopplingar stannar i den här fliken och sparas ingenstans. Stänger du fliken är allt borta – spara kartan som bild eller fil först.',
    },
    stepsTitle: 'Din egen karta i fyra steg',
    steps: [
      { title: 'Välj en mall', text: 'Börja med en vanlig form – V, triad, quad – eller utgå från en tom yta.' },
      { title: 'Lägg till personer', text: 'Skriv namn eller smeknamn och ge varje person en egen färg.' },
      { title: 'Dra kopplingar', text: 'Tryck på två personer, välj relationstyp och lägg till en notering om du vill.' },
      { title: 'Arrangera och exportera', text: 'Ett tryck på ”Arrangera” städar upp bilden. Spara den sedan som PNG, SVG eller fil.' },
    ],
    formsTitle: 'De vanligaste polycule-formerna',
    formsIntro:
      'Varje polycule ser olika ut, men ett fåtal grundformer återkommer. Alla finns som mall i redigeraren.',
    forms: [
      { name: 'V (vee)', text: 'En person har två relationer medan de andra två inte är ihop. De är metamours – den överlägset vanligaste formen.' },
      { name: 'Triad', text: 'Tre personer som alla har en relation med varandra. Kallas även throuple.' },
      { name: 'Quad', text: 'Fyra personer sammankopplade i en ring – uppstår ofta när två par blir förälskade på kors.' },
      { name: 'Kedja (N)', text: 'A är med B, B med C, C med D. Ett nätverk som fortsätter utåt utan att alla känner varandra.' },
      { name: 'Hierarkisk', text: 'En relation har företräde, ofta den man bor tillsammans i. Övriga viktas medvetet annorlunda.' },
      { name: 'Nätverk / relationsanarki', text: 'Ingen fast rangordning, men många olika sorters kopplingar. Vänskap, romantik och vardag ligger bredvid varandra i stället för ovanpå.' },
    ],
    faqTitle: 'Vanliga frågor',
    faq: [
      {
        q: 'Vad är en polycule-karta?',
        a: 'En polycule-karta är en ritning av ett relationsnätverk: varje person är en punkt, varje relation en linje. Den hjälper till att förklara ett nätverk som lätt trasslar till sig i ord – till exempel för en ny partner eller en terapeut.',
      },
      {
        q: 'Är polycule-generatorn gratis?',
        a: 'Helt och hållet. Inget konto, ingen provperiod, inget bakom en betalvägg. Att exportera kartan som bild är också gratis.',
      },
      {
        q: 'Sparas eller skickas det jag skriver?',
        a: 'Nej. Redigeraren körs helt i din webbläsare. Det finns ingen server som tar emot namnen, inga kakor och ingen lagring på din enhet. Stänger du fliken är kartan borta.',
      },
      {
        q: 'Kan jag fortsätta med kartan senare?',
        a: 'Ja – med ”Spara som fil” laddar du ner en liten .json-fil som bara finns hos dig. Med ”Läs in fil” hämtar du tillbaka den till redigeraren när du vill.',
      },
      {
        q: 'Vilka relationstyper kan jag visa?',
        a: 'Sju linjetyper: romantisk, sexuell, platonisk/queerplatonisk, nesting, comet, metamour och tidigare kopplingar. Dessutom kan du sätta en kort notering på varje linje, som ”sedan 2023” eller ”bara på distans”.',
      },
      {
        q: 'Fungerar det i mobilen?',
        a: 'Ja. Personer flyttar du med fingret, resten sker med tryck. Exporten fungerar lika bra i mobilen som på datorn.',
      },
      {
        q: 'Får jag dela min karta offentligt?',
        a: 'Tekniskt sett ja – men det står andra människor på bilden. Alla är inte öppna med sina relationer, och en polycule-karta avslöjar mycket om någons relationsliv. Fråga de inblandade först och använd initialer i stället för fullständiga namn om du tvekar.',
      },
    ],
    ctaEyebrow: 'Och sedan?',
    ctaTitle: 'En karta är en stillbild.',
    ctaText:
      'Den visar ditt nätverk som det ser ut i dag. Roster hjälper dig att ha koll även i morgon: dejter, check-ins och anteckningar för varje person – lugnt, lokalt och utan konto på din iPhone.',
    ctaButton: 'Hämta Roster i App Store',
    relatedTitle: 'Mer om ämnet',
    related: [
      { slug: 'vad-ar-ett-polycule', title: 'Vad är ett polycule? Relationsformer, exempel och hur du behåller överblicken' },
      { slug: 'throuple-triad-sv', title: 'Throuple & triad: relationer mellan tre personer förklarat enkelt' },
      { slug: 'hierarkisk-vs-icke-hierarkisk-polyamori', title: 'Hierarkisk vs. icke-hierarkisk polyamori: Två modeller jämförda' },
    ],
  },

  pt: {
    title: 'Criar um mapa de polycule – gerador gratuito | Roster',
    description:
      'Desenhe seu polycule online: adicione pessoas, escolha tipos de relação e exporte como imagem. Grátis, sem conta – tudo fica no seu navegador.',
    breadcrumb: 'Criar um mapa de polycule',
    h1: 'Criar um mapa de polycule',
    lede:
      'Monte o mapa das suas relações em poucos minutos: pessoas, conexões e tipos de vínculo. Grátis, sem conta – e sem que um único nome saia do seu navegador.',
    studio: {
      addPerson: '+ Pessoa',
      connect: 'Conectar',
      tidy: 'Organizar',
      undo: 'Desfazer',
      reset: 'Começar de novo',
      resetConfirm: 'Reiniciar o mapa? As alterações que você não exportou serão perdidas.',
      templates: 'Modelos',
      templateList: [
        { id: 'vee', label: 'V (vee)' },
        { id: 'triad', label: 'Tríade' },
        { id: 'quad', label: 'Quad' },
        { id: 'chain', label: 'Corrente (N)' },
        { id: 'hierarchy', label: 'Hierárquico' },
        { id: 'network', label: 'Rede / anarquia relacional' },
      ],
      exportLabel: 'Exportar',
      exportPng: 'Salvar como PNG',
      exportSvg: 'Salvar como SVG',
      saveFile: 'Salvar em arquivo (.json)',
      loadFile: 'Carregar arquivo …',
      loadError: 'Não foi possível ler este arquivo.',
      personName: 'Nome',
      personColor: 'Cor',
      deletePerson: 'Remover pessoa',
      linkType: 'Tipo de conexão',
      linkTypeList: [
        { id: 'romantic', label: 'Romântica', desc: 'Relação de amor, aberta ou firme' },
        { id: 'sexual', label: 'Sexual', desc: 'Vínculo sexual sem pretensão romântica' },
        { id: 'platonic', label: 'Platônica / QPR', desc: 'Vínculo próximo sem romance' },
        { id: 'nesting', label: 'Nesting', desc: 'Casa compartilhada, rotina compartilhada' },
        { id: 'comet', label: 'Comet', desc: 'Raro mas intenso – com longos intervalos' },
        { id: 'metamour', label: 'Metamour', desc: 'A pessoa parceira da sua parceria' },
        { id: 'past', label: 'Passada', desc: 'Ex ou vínculo adormecido que ainda conta' },
      ],
      linkLabel: 'Nota na linha',
      linkLabelPlaceholder: 'ex.: desde 2023',
      deleteLink: 'Excluir conexão',
      legend: 'Legenda',
      hintIdle: 'Toque em uma pessoa ou linha para editar. Arraste para mover.',
      hintPerson: 'Pessoa selecionada – mude nome e cor ou conecte-a a alguém.',
      hintConnect: 'Agora toque na segunda pessoa.',
      hintLink: 'Conexão selecionada – dá para mudar o tipo e a nota.',
      youLabel: 'Você',
      newPersonName: 'Nova',
      unsavedWarning: 'Seu mapa não é salvo em lugar nenhum. Sair da página?',
      canvasLabel: 'Área de desenho do mapa de polycule',
      noscript:
        'O editor precisa de JavaScript. O mapa é desenhado inteiramente no seu navegador – nada é enviado a um servidor.',
      privacyNote:
        'Sem conta, sem cookies, sem servidor: nomes e conexões ficam nesta aba e não são guardados em lugar nenhum. Ao fechar, tudo desaparece – salve seu mapa como imagem ou arquivo antes.',
    },
    stepsTitle: 'Seu mapa em quatro passos',
    steps: [
      { title: 'Escolha um modelo', text: 'Comece por uma forma comum – V, tríade, quad – ou parta de uma tela vazia.' },
      { title: 'Adicione pessoas', text: 'Escreva nomes ou apelidos e dê uma cor a cada pessoa.' },
      { title: 'Trace conexões', text: 'Toque em duas pessoas, escolha o tipo de relação e acrescente uma nota se quiser.' },
      { title: 'Organize e exporte', text: 'Um toque em “Organizar” arruma a composição. Depois salve como PNG, SVG ou arquivo.' },
    ],
    formsTitle: 'As formas de polycule mais comuns',
    formsIntro:
      'Cada polycule é diferente, mas algumas formas básicas se repetem sempre. Todas estão prontas como modelo no editor.',
    forms: [
      { name: 'V (vee)', text: 'Uma pessoa tem duas relações enquanto as outras duas não estão juntas. Elas são metamours – de longe a forma mais comum.' },
      { name: 'Tríade', text: 'Três pessoas que se relacionam entre si. Também chamada de throuple.' },
      { name: 'Quad', text: 'Quatro pessoas conectadas em círculo – muitas vezes porque dois casais se apaixonaram de forma cruzada.' },
      { name: 'Corrente (N)', text: 'A está com B, B com C, C com D. Uma rede que se estende para fora sem que todo mundo se conheça.' },
      { name: 'Hierárquico', text: 'Uma relação tem prioridade, com frequência aquela em que se mora junto. As outras têm peso deliberadamente diferente.' },
      { name: 'Rede / anarquia relacional', text: 'Sem hierarquia fixa, mas com muitos tipos de vínculo. Amizade, romance e rotina ficam lado a lado em vez de empilhados.' },
    ],
    faqTitle: 'Perguntas frequentes',
    faq: [
      {
        q: 'O que é um mapa de polycule?',
        a: 'Um mapa de polycule é o desenho de uma rede de relações: cada pessoa é um ponto e cada relação é uma linha. Ele ajuda a explicar uma rede que em palavras se embaraça rápido – para uma nova parceria, por exemplo, ou em terapia.',
      },
      {
        q: 'O gerador de mapas de polycule é gratuito?',
        a: 'Totalmente. Sem conta, sem período de teste, nada atrás de um paywall. Exportar o mapa como imagem também é grátis.',
      },
      {
        q: 'O que eu escrevo é salvo ou enviado?',
        a: 'Não. O editor funciona inteiramente no seu navegador. Não há servidor recebendo os nomes, nem cookies, nem armazenamento no seu aparelho. Se fechar a aba, o mapa some.',
      },
      {
        q: 'Posso continuar meu mapa depois?',
        a: 'Sim – em “Salvar em arquivo” você baixa um pequeno arquivo .json que fica só com você. Em “Carregar arquivo” ele volta para o editor quando quiser.',
      },
      {
        q: 'Que tipos de relação posso representar?',
        a: 'Sete estilos de linha: romântica, sexual, platônica/queerplatônica, nesting, comet, metamour e vínculos passados. Além disso, dá para escrever uma nota curta em cada linha, como “desde 2023” ou “só a distância”.',
      },
      {
        q: 'Funciona no celular?',
        a: 'Sim. As pessoas você arrasta com o dedo, o resto funciona com toques. A exportação funciona igual no celular e no computador.',
      },
      {
        q: 'Posso compartilhar meu mapa publicamente?',
        a: 'Tecnicamente sim – mas há outras pessoas nessa imagem. Nem todo mundo está fora do armário, e um mapa de polycule revela muito sobre a vida afetiva de alguém. Pergunte antes a quem aparece nele e, na dúvida, use iniciais em vez de nomes completos.',
      },
    ],
    ctaEyebrow: 'E depois?',
    ctaTitle: 'Um mapa é um quadro parado.',
    ctaText:
      'Ele mostra sua rede como ela está hoje. O Roster ajuda você a continuar enxergando amanhã: encontros, check-ins e notas de cada pessoa – com calma, local e sem conta no seu iPhone.',
    ctaButton: 'Baixar o Roster na App Store',
    relatedTitle: 'Mais sobre o tema',
    related: [
      { slug: 'o-que-e-um-polycule', title: 'O que é um polycule? Estruturas de relacionamento, exemplos e como manter o controle' },
      { slug: 'throuple-triade-pt', title: 'Throuple e tríade: relacionamentos de três pessoas explicados de forma simples' },
      { slug: 'anarquia-relacional-vs-poliamoria-pt', title: 'Anarquia relacional vs. poliamoria: qual é a diferença?' },
    ],
  },
};
