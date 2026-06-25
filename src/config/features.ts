export type FeatureSlug = 'connections' | 'polycule-map' | 'wellness' | 'reflection' | 'insights' | 'vio';
export type Lang = 'de' | 'en' | 'nl' | 'es' | 'da' | 'sv';

export const featureSlugs: FeatureSlug[] = [
  'connections', 'polycule-map', 'wellness', 'reflection', 'insights', 'vio',
];

export interface FeatureContent {
  name: string;
  shortDesc: string;
  longDesc: string;
  vio?: true;
  icon?: string;
}

const iconConnections = `<svg width="48" height="48" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="5" stroke="#8b5cf6" stroke-width="2"/><path d="M3 28c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/><circle cx="25" cy="11" r="4" stroke="#c4b5fd" stroke-width="1.75"/><path d="M20 26c0-3.314 2.686-6 6-6" stroke="#c4b5fd" stroke-width="1.75" stroke-linecap="round"/></svg>`;
const iconPolyculeMap = `<svg width="48" height="48" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="4" fill="#8b5cf6"/><circle cx="6" cy="9" r="3" stroke="#8b5cf6" stroke-width="1.75"/><circle cx="28" cy="9" r="3" stroke="#c4b5fd" stroke-width="1.75"/><circle cx="6" cy="25" r="3" stroke="#4fd6c2" stroke-width="1.75"/><circle cx="28" cy="25" r="3" stroke="#f0789f" stroke-width="1.75"/><line x1="17" y1="17" x2="6" y2="9" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="28" y2="9" stroke="#c4b5fd" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="6" y2="25" stroke="#4fd6c2" stroke-width="1.5" stroke-opacity="0.6"/><line x1="17" y1="17" x2="28" y2="25" stroke="#f0789f" stroke-width="1.5" stroke-opacity="0.6"/></svg>`;
const iconWellness = `<svg width="48" height="48" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 29C17 29 5 22 5 13a7 7 0 0 1 12-4.9A7 7 0 0 1 29 13c0 9-12 16-12 16z" stroke="#8b5cf6" stroke-width="2" stroke-linejoin="round"/><path d="M12 17l3 3 6-6" stroke="#c4b5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const iconReflection = `<svg width="48" height="48" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="5" width="16" height="24" rx="3" stroke="#8b5cf6" stroke-width="2"/><path d="M22 8h3a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-3" stroke="#c4b5fd" stroke-width="1.75"/><line x1="10" y1="11" x2="18" y2="11" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/><line x1="10" y1="16" x2="18" y2="16" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/><line x1="10" y1="21" x2="15" y2="21" stroke="#8b5cf6" stroke-width="1.75" stroke-linecap="round"/></svg>`;
const iconInsights = `<svg width="48" height="48" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24l7-7 5 4 8-10 4 4" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="17" r="2.5" fill="#8b5cf6"/><circle cx="17" cy="21" r="2.5" fill="#c4b5fd"/><circle cx="25" cy="11" r="2.5" fill="#8b5cf6"/><line x1="5" y1="28" x2="29" y2="28" stroke="#2a2833" stroke-width="1.5"/></svg>`;

export const featureScreenshots: Record<FeatureSlug, string> = {
  connections: '/roster-screenshots/Verbindungen.PNG',
  'polycule-map': '/roster-screenshots/Polycule map.PNG',
  wellness: '/roster-screenshots/wellness.PNG',
  reflection: '/roster-screenshots/reflexion.PNG',
  insights: '/roster-screenshots/Insights.PNG',
  vio: '/roster-screenshots/Vio.PNG',
};

export const featureIcons: Record<FeatureSlug, string | null> = {
  connections: iconConnections,
  'polycule-map': iconPolyculeMap,
  wellness: iconWellness,
  reflection: iconReflection,
  insights: iconInsights,
  vio: null,
};

export const featureData: Record<Lang, Record<FeatureSlug, FeatureContent>> = {
  de: {
    connections: {
      name: 'Verbindungen',
      shortDesc: 'Alle deine Beziehungen an einem Ort – mit Beziehungstyp, Schutzstatus und einem schnellen Kontakt-Log.',
      longDesc: 'Alle wichtigen Menschen an einem Ort. Für jede Verbindung hinterlegst du Beziehungstyp, Safer-Sex-Status und kurze Notizen nach Treffen – alles lokal auf deinem Gerät, nichts in der Cloud.',
      icon: iconConnections,
    },
    'polycule-map': {
      name: 'Polycule Map',
      shortDesc: 'Dein Beziehungsnetz als lebendige Karte. Du im Zentrum, alle Verbindungen drumherum, nach Typ farbcodiert.',
      longDesc: 'Sieh dein Netz auf einen Blick. Die Polycule Map visualisiert alle deine Verbindungen als interaktive Karte – du im Zentrum, deine Partner·innen und Metamours drumherum, farblich nach Beziehungstyp unterschieden.',
      icon: iconPolyculeMap,
    },
    wellness: {
      name: 'Wellness',
      shortDesc: 'Behalte STI-Tests und Check-ins im Blick – diskret, lokal, ohne dass es jemand außer dir sieht.',
      longDesc: 'Diskrete Gesundheits-Notizen für verantwortungsvolle Beziehungsführung. Du kannst STI-Tests, Safer-Sex-Gespräche und Health-Check-ins eintragen – verschlüsselt auf deinem Gerät, unsichtbar für alle außer dir.',
      icon: iconWellness,
    },
    reflection: {
      name: 'Reflexion',
      shortDesc: 'Ein Journal für Eifersucht, Compersion und alles dazwischen. Zum Sortieren, nicht zum Bewerten.',
      longDesc: 'Ein Journal für alles, was du nicht sofort in Worte fassen kannst. Eifersucht, Compersion, Verwirrung – hier darf es einfach da sein, ohne Bewertung und ohne Algorithmus.',
      icon: iconReflection,
    },
    insights: {
      name: 'Insights',
      shortDesc: 'Sanfte Muster statt kalter Zahlen: Wo investierst du Energie, wo wird es gerade still?',
      longDesc: 'Weiche Muster statt harter Zahlen. Insights zeigt dir, wo du zuletzt Energie investiert hast und wo es ruhiger wurde – kein Scoring, keine Bewertung, nur ehrliche Beobachtungen.',
      icon: iconInsights,
    },
    vio: {
      name: 'Vio',
      shortDesc: 'Dein kleiner Begleiter, der nachfragt wie es dir geht – mal sanft, mal locker, mal schonungslos ehrlich.',
      longDesc: 'Vio ist deine KI-Begleitfigur, die täglich kurz nachfragt, wie es dir geht. Der Ton passt sich an: manchmal locker, manchmal nachdenklich tief. Alles bleibt auf deinem Gerät – Vio erinnert sich an nichts.',
      vio: true,
    },
  },
  en: {
    connections: {
      name: 'Connections',
      shortDesc: 'Every relationship in one place — with type, protection status and a quick contact log.',
      longDesc: 'Every important person, in one place. For each connection you can set a relationship type, safer-sex status and quick contact notes — all local on your device, nothing in the cloud.',
      icon: iconConnections,
    },
    'polycule-map': {
      name: 'Polycule Map',
      shortDesc: 'Your relationship web as a living map. You at the centre, every connection colour-coded by type.',
      longDesc: 'See your network at a glance. The Polycule Map renders all your connections as an interactive graph — you at the centre, partners and metamours around you, colour-coded by relationship type.',
      icon: iconPolyculeMap,
    },
    wellness: {
      name: 'Wellness',
      shortDesc: 'Keep STI tests and check-ins in view — discreet, local, seen by no one but you.',
      longDesc: 'Discreet health notes for responsible relationship care. Log STI tests, safer-sex conversations and check-ins — encrypted on your device, invisible to everyone but you.',
      icon: iconWellness,
    },
    reflection: {
      name: 'Reflection',
      shortDesc: 'A journal for jealousy, compersion and everything between. To sort, not to judge.',
      longDesc: 'A journal for everything you can\'t put into words just yet. Jealousy, compersion, confusion — let it all be here without judgement and without an algorithm sorting it for you.',
      icon: iconReflection,
    },
    insights: {
      name: 'Insights',
      shortDesc: 'Gentle patterns over cold numbers: where you invest energy, where things go quiet.',
      longDesc: 'Soft patterns instead of hard numbers. Insights shows where you\'ve been investing energy lately and where things have grown quieter — no scoring, no ratings, just honest observations.',
      icon: iconInsights,
    },
    vio: {
      name: 'Vio',
      shortDesc: 'Your little companion who checks in on you — gentle, casual, or brutally honest.',
      longDesc: 'Vio is your AI companion who checks in with you every day. The tone adapts: sometimes breezy, sometimes deeper. Everything stays on your device — Vio remembers nothing.',
      vio: true,
    },
  },
  nl: {
    connections: {
      name: 'Verbindingen',
      shortDesc: 'Al je relaties op één plek – met relatietype, beschermingsstatus en een snelle contactlog.',
      longDesc: 'Alle belangrijke mensen op één plek. Voor elke verbinding stel je het relatietype, veiligheidsstatus en korte notities in — alles lokaal op je apparaat, niets in de cloud.',
      icon: iconConnections,
    },
    'polycule-map': {
      name: 'Polycule Map',
      shortDesc: 'Je relatienetwerk als een levende kaart. Jij in het centrum, alle verbindingen eromheen, kleurgecodeerd.',
      longDesc: 'Zie je netwerk in één oogopslag. De Polycule Map toont al je verbindingen als een interactieve grafiek — jij in het centrum, partners en metamours eromheen, kleurgecodeerd op relatietype.',
      icon: iconPolyculeMap,
    },
    wellness: {
      name: 'Wellness',
      shortDesc: 'Houd soa-tests en check-ins bij – discreet, lokaal, onzichtbaar voor iedereen behalve jij.',
      longDesc: 'Discrete gezondheidsnotities voor verantwoorde relatievoering. Leg soa-tests, safer-sex-gesprekken en check-ins vast — versleuteld op je apparaat, onzichtbaar voor iedereen behalve jij.',
      icon: iconWellness,
    },
    reflection: {
      name: 'Reflectie',
      shortDesc: 'Een dagboek voor jaloezie, compersion en alles daartussenin. Om te sorteren, niet om te oordelen.',
      longDesc: 'Een dagboek voor alles wat je nog niet onder woorden kunt brengen. Jaloezie, compersion, verwarring — laat het er allemaal zijn, zonder oordeel en zonder algoritme.',
      icon: iconReflection,
    },
    insights: {
      name: 'Inzichten',
      shortDesc: 'Zachte patronen in plaats van koude cijfers: waar investeer je energie, waar wordt het stil?',
      longDesc: 'Zachte patronen in plaats van harde cijfers. Inzichten laat zien waar je energie naartoe gaat en waar het stiller is geworden — geen scores, geen beoordelingen, alleen eerlijke observaties.',
      icon: iconInsights,
    },
    vio: {
      name: 'Vio',
      shortDesc: 'Je kleine metgezel die vraagt hoe het gaat – soms zacht, soms luchtig, soms brutaal eerlijk.',
      longDesc: 'Vio is je AI-metgezel die elke dag even vraagt hoe het gaat. De toon past zich aan: soms luchtig, soms dieper. Alles blijft op je apparaat — Vio onthoudt niets.',
      vio: true,
    },
  },
  es: {
    connections: {
      name: 'Conexiones',
      shortDesc: 'Todas tus relaciones en un solo lugar – con tipo, estado de protección y un registro rápido.',
      longDesc: 'Todas las personas importantes en un solo lugar. Para cada conexión puedes establecer tipo de relación, estado de sexo seguro y notas rápidas — todo local en tu dispositivo, nada en la nube.',
      icon: iconConnections,
    },
    'polycule-map': {
      name: 'Mapa Polycule',
      shortDesc: 'Tu red de relaciones como un mapa vivo. Tú en el centro, todas las conexiones a tu alrededor.',
      longDesc: 'Ve tu red de un vistazo. El Mapa Polycule muestra todas tus conexiones como un grafo interactivo — tú en el centro, parejas y metamors a tu alrededor, con código de colores por tipo de relación.',
      icon: iconPolyculeMap,
    },
    wellness: {
      name: 'Bienestar',
      shortDesc: 'Mantén los controles de ITS y check-ins a la vista – discreto, local, invisible para todos menos tú.',
      longDesc: 'Notas de salud discretas para relaciones responsables. Registra pruebas de ITS, conversaciones de sexo seguro y check-ins — cifrado en tu dispositivo, invisible para todos menos tú.',
      icon: iconWellness,
    },
    reflection: {
      name: 'Reflexión',
      shortDesc: 'Un diario para los celos, la compersión y todo lo que hay en medio. Para ordenar, no para juzgar.',
      longDesc: 'Un diario para todo lo que no puedes poner en palabras todavía. Celos, compersión, confusión — deja que todo esté aquí, sin juicios y sin que un algoritmo lo clasifique por ti.',
      icon: iconReflection,
    },
    insights: {
      name: 'Perspectivas',
      shortDesc: 'Patrones suaves en lugar de números fríos: ¿dónde inviertes energía, dónde se hace el silencio?',
      longDesc: 'Patrones suaves en lugar de números fríos. Perspectivas te muestra dónde has estado invirtiendo energía y dónde las cosas se han calmado — sin puntuaciones, solo observaciones honestas.',
      icon: iconInsights,
    },
    vio: {
      name: 'Vio',
      shortDesc: 'Tu pequeño compañero que pregunta cómo estás – a veces suave, a veces casual, a veces brutalmente honesto.',
      longDesc: 'Vio es tu compañero de IA que se registra contigo cada día. El tono se adapta: a veces ligero, a veces más profundo. Todo se queda en tu dispositivo — Vio no recuerda nada.',
      vio: true,
    },
  },
  da: {
    connections: {
      name: 'Forbindelser',
      shortDesc: 'Alle dine relationer ét sted – med relationstype, beskyttelsesstatus og en hurtig kontaktlog.',
      longDesc: 'Alle vigtige mennesker ét sted. For hver forbindelse kan du angive relationstype, safer-sex-status og hurtige noter — alt lokalt på din enhed, intet i skyen.',
      icon: iconConnections,
    },
    'polycule-map': {
      name: 'Polycule Map',
      shortDesc: 'Dit relationenetværk som et levende kort. Du i centrum, alle forbindelser rundt om dig, farvekodede.',
      longDesc: 'Se dit netværk på et øjeblik. Polycule Map viser alle dine forbindelser som en interaktiv graf — dig i centrum, partnere og metamours rundt om dig, farvekodede efter relationstype.',
      icon: iconPolyculeMap,
    },
    wellness: {
      name: 'Velvære',
      shortDesc: 'Hold styr på STI-tests og check-ins – diskret, lokalt, usynligt for alle andre end dig.',
      longDesc: 'Diskrete sundhedsnotater til ansvarlig relationspleje. Log STI-tests, safer-sex-samtaler og check-ins — krypteret på din enhed, usynligt for alle andre end dig.',
      icon: iconWellness,
    },
    reflection: {
      name: 'Refleksion',
      shortDesc: 'En dagbog til jalousi, compersion og alt derimellem. Til at sortere, ikke til at bedømme.',
      longDesc: 'En dagbog til alt, du ikke kan sætte ord på endnu. Jalousi, compersion, forvirring — lad det alt sammen bare være her, uden dom og uden algoritme.',
      icon: iconReflection,
    },
    insights: {
      name: 'Indsigt',
      shortDesc: 'Bløde mønstre frem for kolde tal: Hvor investerer du energi, hvor bliver det stille?',
      longDesc: 'Bløde mønstre frem for kolde tal. Indsigt viser dig, hvor du har investeret energi, og hvor det er blevet roligere — ingen scorer, kun ærlige observationer.',
      icon: iconInsights,
    },
    vio: {
      name: 'Vio',
      shortDesc: 'Din lille følgesvend, der spørger hvordan du har det – nogle gange blidt, nogle gange brutalt ærligt.',
      longDesc: 'Vio er din AI-følgesvend, der checker ind med dig hver dag. Tonen tilpasser sig: nogle gange let, nogle gange dybere. Alt forbliver på din enhed — Vio husker ingenting.',
      vio: true,
    },
  },
  sv: {
    connections: {
      name: 'Kopplingar',
      shortDesc: 'Alla dina relationer på ett ställe – med relationstyp, skyddsstatus och en snabb kontaktlogg.',
      longDesc: 'Alla viktiga personer på ett ställe. För varje koppling kan du ange relationstyp, safer sex-status och snabba anteckningar — allt lokalt på din enhet, inget i molnet.',
      icon: iconConnections,
    },
    'polycule-map': {
      name: 'Polycule-karta',
      shortDesc: 'Ditt relationsnätverk som en levande karta. Du i centrum, alla kopplingar runt om dig, färgkodade.',
      longDesc: 'Se ditt nätverk på ett ögonblick. Polycule-kartan visar alla dina kopplingar som en interaktiv graf — du i centrum, partners och metamours runt om dig, färgkodade efter relationstyp.',
      icon: iconPolyculeMap,
    },
    wellness: {
      name: 'Välmående',
      shortDesc: 'Ha koll på STI-tester och incheckarningar – diskret, lokalt, osynligt för alla utom dig.',
      longDesc: 'Diskreta hälsoanteckningar för ansvarsfull relationshantering. Logga STI-tester, safer sex-samtal och incheckarningar — krypterat på din enhet, osynligt för alla utom dig.',
      icon: iconWellness,
    },
    reflection: {
      name: 'Reflektion',
      shortDesc: 'En dagbok för svartsjuka, compersion och allt däremellan. För att sortera, inte för att döma.',
      longDesc: 'En dagbok för allt du ännu inte kan sätta ord på. Svartsjuka, compersion, förvirring — låt allt vara här, utan domar och utan algoritm.',
      icon: iconReflection,
    },
    insights: {
      name: 'Insikter',
      shortDesc: 'Mjuka mönster istället för kalla siffror: Var investerar du energi, var blir det tyst?',
      longDesc: 'Mjuka mönster istället för kalla siffror. Insikter visar var du har investerat energi och var det blivit tystare — inga poäng, bara ärliga observationer.',
      icon: iconInsights,
    },
    vio: {
      name: 'Vio',
      shortDesc: 'Din lille följeslagare som frågar hur det går – ibland mjuk, ibland lättsam, ibland brutalt ärlig.',
      longDesc: 'Vio är din AI-följeslagare som checkar in med dig varje dag. Tonen anpassar sig: ibland lättsam, ibland djupare. Allt stannar på din enhet — Vio minns ingenting.',
      vio: true,
    },
  },
};
