// Texte fuer die App-Store-CTAs in Blogartikeln (ArticleCtas.astro).
// Die Ueberschrift haengt vom Thema des Artikels ab (Cluster ueber translationKey),
// damit der CTA zum gerade gelesenen Inhalt passt statt immer gleich zu klingen.
// Alle Aussagen muessen zur echten App passen (siehe config/features.ts):
// Basis kostenlos, Premium mit Abo, alles lokal, kein Konto.
import type { Lang } from './ui';

export type CtaCluster = 'map' | 'feelings' | 'organize' | 'health' | 'privacy' | 'general';

const CLUSTER_KEYS: Record<Exclude<CtaCluster, 'general'>, string[]> = {
  map: [
    'what-is-a-polycule', 'throuple-triad', 'polyfidelity', 'metamour-relationships',
    'hinge-polyamory', 'kitchen-table-vs-parallel-polyamory', 'mono-poly-relationships',
    'polysaturation', 'introducing-a-new-partner', 'relationship-dashboard-tools',
    'hierarchical-vs-nonhierarchical-polyamory', 'nesting-partner-explained',
    'solo-polyamory', 'unicorn-hunting-polyamory', 'veto-power-polyamory',
  ],
  feelings: [
    'jealousy-polyamory', 'compersion-learning', 'nre-balance', 'attachment-styles-polyamory',
    'love-languages-polyamory', 'conflict-polyamory', 'breakups-polyamory',
    'vibe-check-relationships', 'am-i-polyamorous', 'opening-up-convincing-partner',
  ],
  organize: [
    'managing-multiple-relationships', 'scheduling-multiple-relationships',
    'google-calendar-vs-poly-app', 'check-ins-polyamory', 'long-distance-polyamory',
    'polyamory-holidays', 'roster-dating-guide', 'dating-tracker-vs-polyamory-app',
    'app-for-polyamory-organizing', 'finances-in-polyamory', 'what-is-a-dating-roster',
    'dating-apps-polyamory', 'polyamory-rules-agreements', 'polyamory-parenting',
  ],
  health: ['safer-sex-polyamory', 'sti-tracking-poly-wellness'],
  privacy: [
    'polyamory-privacy', 'dont-ask-dont-tell-polyamory', 'coming-out-polyamorous',
    'coming-out-to-parents-polyamory', 'disclosing-polyamory-dating',
  ],
};

export function ctaCluster(key: string): CtaCluster {
  for (const [cluster, keys] of Object.entries(CLUSTER_KEYS)) {
    if (keys.includes(key)) return cluster as CtaCluster;
  }
  return 'general';
}

interface CtaCopy {
  eyebrow: string;
  button: string;
  buttonShort: string;
  bullets: [string, string, string];
  androidNote: string;
  androidTest: string;
  androidMap: string;
  desktopNote: string;
  sticky: string;
  close: string;
  clusters: Record<CtaCluster, { title: string; text: string }>;
}

export const CTA_COPY: Record<Lang, CtaCopy> = {
  de: {
    eyebrow: 'Roster für iPhone',
    button: 'Kostenlos im App Store laden',
    buttonShort: 'Laden',
    bullets: ['Basis kostenlos', 'Lokal auf deinem Gerät', 'Kein Konto nötig'],
    androidNote: 'Roster gibt es bisher nur für iPhone.',
    androidTest: 'Mach stattdessen den kostenlosen Polyamorie-Test →',
    androidMap: 'Zeichne dein Polycule kostenlos im Browser →',
    desktopNote: 'Roster läuft auf dem iPhone – öffne diese Seite einfach auf deinem Handy.',
    sticky: 'Roster: deine Beziehungen, ruhig organisiert',
    close: 'Schließen',
    clusters: {
      map: { title: 'Sieh dein Polycule auf einen Blick', text: 'Roster zeigt alle deine Verbindungen und Metamours als Karte – und merkt sich, wer gerade Aufmerksamkeit braucht.' },
      feelings: { title: 'Gefühle sortieren statt grübeln', text: 'Im Reflexions-Journal von Roster hältst du Eifersucht, Compersion und alles dazwischen fest – privat, nur auf deinem Gerät.' },
      organize: { title: 'Mehrere Beziehungen, ein ruhiger Überblick', text: 'Roster bündelt deine Verbindungen, Check-ins und diskrete Erinnerungen in einer App – ohne Konto und ohne Cloud.' },
      health: { title: 'STI-Tests und Check-ins diskret im Blick', text: 'Roster hält deine Tests und Check-ins übersichtlich fest – lokal auf deinem iPhone, ohne dass jemand anderes sie sieht.' },
      privacy: { title: 'Deine Beziehungen bleiben deine Sache', text: 'Roster speichert alles lokal auf deinem Gerät: kein Konto, kein Tracking, keine Cloud.' },
      general: { title: 'Bereit, den Kopf frei zu kriegen?', text: 'Roster ist die ruhige App für polyamore und offene Beziehungen – lokal auf deinem iPhone, ohne Konto.' },
    },
  },
  en: {
    eyebrow: 'Roster for iPhone',
    button: 'Download free on the App Store',
    buttonShort: 'Get',
    bullets: ['Free basic version', 'Stored on your device', 'No account needed'],
    androidNote: 'Roster is currently available for iPhone only.',
    androidTest: 'Take the free polyamory quiz instead →',
    androidMap: 'Draw your polycule for free in your browser →',
    desktopNote: 'Roster runs on iPhone – just open this page on your phone.',
    sticky: 'Roster: your relationships, calmly organised',
    close: 'Close',
    clusters: {
      map: { title: 'See your polycule at a glance', text: 'Roster shows all your connections and metamours as a map – and notices who could use some attention right now.' },
      feelings: { title: 'Sort your feelings instead of spiralling', text: 'Roster’s reflection journal is a private place for jealousy, compersion and everything in between – stored only on your device.' },
      organize: { title: 'Several relationships, one calm overview', text: 'Roster brings your connections, check-ins and discreet reminders together in one app – no account, no cloud.' },
      health: { title: 'STI tests and check-ins, discreetly tracked', text: 'Roster keeps your tests and check-ins organised – locally on your iPhone, where nobody else can see them.' },
      privacy: { title: 'Your relationships stay your business', text: 'Roster stores everything locally on your device: no account, no tracking, no cloud.' },
      general: { title: 'Ready to clear your head?', text: 'Roster is the calm app for polyamorous and open relationships – local on your iPhone, no account needed.' },
    },
  },
  nl: {
    eyebrow: 'Roster voor iPhone',
    button: 'Gratis downloaden in de App Store',
    buttonShort: 'Download',
    bullets: ['Basisversie gratis', 'Lokaal op je toestel', 'Geen account nodig'],
    androidNote: 'Roster is voorlopig alleen beschikbaar voor iPhone.',
    androidTest: 'Doe in plaats daarvan de gratis polyamorie-test →',
    androidMap: 'Teken je polycule gratis in je browser →',
    desktopNote: 'Roster werkt op de iPhone – open deze pagina gewoon op je telefoon.',
    sticky: 'Roster: je relaties, rustig georganiseerd',
    close: 'Sluiten',
    clusters: {
      map: { title: 'Zie je polycule in één oogopslag', text: 'Roster toont al je verbindingen en metamours als kaart – en merkt op wie nu wat aandacht kan gebruiken.' },
      feelings: { title: 'Gevoelens ordenen in plaats van piekeren', text: 'In het reflectiedagboek van Roster leg je jaloezie, compersion en alles daartussen vast – privé, alleen op je toestel.' },
      organize: { title: 'Meerdere relaties, één rustig overzicht', text: 'Roster bundelt je verbindingen, check-ins en discrete herinneringen in één app – zonder account en zonder cloud.' },
      health: { title: 'Soa-tests en check-ins discreet in beeld', text: 'Roster houdt je tests en check-ins overzichtelijk bij – lokaal op je iPhone, zonder dat iemand anders ze ziet.' },
      privacy: { title: 'Je relaties blijven jouw zaak', text: 'Roster bewaart alles lokaal op je toestel: geen account, geen tracking, geen cloud.' },
      general: { title: 'Klaar om je hoofd leeg te maken?', text: 'Roster is de rustige app voor polyamore en open relaties – lokaal op je iPhone, zonder account.' },
    },
  },
  es: {
    eyebrow: 'Roster para iPhone',
    button: 'Descargar gratis en App Store',
    buttonShort: 'Descargar',
    bullets: ['Versión básica gratis', 'Guardado en tu dispositivo', 'Sin cuenta'],
    androidNote: 'Por ahora, Roster solo está disponible para iPhone.',
    androidTest: 'Haz el test de poliamor gratuito →',
    androidMap: 'Dibuja tu polycule gratis en el navegador →',
    desktopNote: 'Roster funciona en iPhone: abre esta página en tu móvil.',
    sticky: 'Roster: tus relaciones, organizadas con calma',
    close: 'Cerrar',
    clusters: {
      map: { title: 'Ve tu polycule de un vistazo', text: 'Roster muestra todas tus conexiones y metamours en un mapa, y detecta quién necesita un poco de atención ahora.' },
      feelings: { title: 'Ordena tus emociones en lugar de darles vueltas', text: 'En el diario de reflexión de Roster anotas celos, compersión y todo lo que hay entre medias: en privado, solo en tu dispositivo.' },
      organize: { title: 'Varias relaciones, una visión tranquila', text: 'Roster reúne tus conexiones, check-ins y recordatorios discretos en una sola app, sin cuenta y sin nube.' },
      health: { title: 'Pruebas de ITS y check-ins, con discreción', text: 'Roster mantiene tus pruebas y check-ins organizados, en local en tu iPhone y sin que nadie más los vea.' },
      privacy: { title: 'Tus relaciones son asunto tuyo', text: 'Roster guarda todo en local en tu dispositivo: sin cuenta, sin rastreo, sin nube.' },
      general: { title: '¿Listo para despejar tu cabeza?', text: 'Roster es la app tranquila para relaciones poliamorosas y abiertas: en local en tu iPhone, sin cuenta.' },
    },
  },
  da: {
    eyebrow: 'Roster til iPhone',
    button: 'Hent gratis i App Store',
    buttonShort: 'Hent',
    bullets: ['Basisversion gratis', 'Gemt lokalt på din enhed', 'Ingen konto nødvendig'],
    androidNote: 'Roster findes indtil videre kun til iPhone.',
    androidTest: 'Tag den gratis polyamori-test i stedet →',
    androidMap: 'Tegn dit polycule gratis i browseren →',
    desktopNote: 'Roster kører på iPhone – åbn bare denne side på din telefon.',
    sticky: 'Roster: dine relationer, roligt organiseret',
    close: 'Luk',
    clusters: {
      map: { title: 'Se dit polycule med ét blik', text: 'Roster viser alle dine forbindelser og metamours som et kort – og lægger mærke til, hvem der trænger til opmærksomhed lige nu.' },
      feelings: { title: 'Sortér følelserne i stedet for at gruble', text: 'I Rosters refleksionsdagbog skriver du jalousi, compersion og alt derimellem ned – privat og kun på din enhed.' },
      organize: { title: 'Flere relationer, ét roligt overblik', text: 'Roster samler dine forbindelser, check-ins og diskrete påmindelser i én app – uden konto og uden cloud.' },
      health: { title: 'Kønssygdomstest og check-ins diskret i fokus', text: 'Roster holder styr på dine test og check-ins – lokalt på din iPhone, uden at andre kan se dem.' },
      privacy: { title: 'Dine relationer er din sag', text: 'Roster gemmer alt lokalt på din enhed: ingen konto, ingen tracking, ingen cloud.' },
      general: { title: 'Klar til at få ro i hovedet?', text: 'Roster er den rolige app til polyamorøse og åbne forhold – lokalt på din iPhone, uden konto.' },
    },
  },
  sv: {
    eyebrow: 'Roster för iPhone',
    button: 'Hämta gratis i App Store',
    buttonShort: 'Hämta',
    bullets: ['Basversion gratis', 'Sparas lokalt på din enhet', 'Inget konto behövs'],
    androidNote: 'Roster finns än så länge bara för iPhone.',
    androidTest: 'Gör det kostnadsfria polyamoritestet i stället →',
    androidMap: 'Rita ditt polycule gratis i webbläsaren →',
    desktopNote: 'Roster körs på iPhone – öppna bara den här sidan i mobilen.',
    sticky: 'Roster: dina relationer, lugnt organiserade',
    close: 'Stäng',
    clusters: {
      map: { title: 'Se ditt polycule med en blick', text: 'Roster visar alla dina relationer och metamours som en karta – och märker vem som behöver lite uppmärksamhet just nu.' },
      feelings: { title: 'Sortera känslorna i stället för att älta', text: 'I Rosters reflektionsdagbok skriver du ner svartsjuka, compersion och allt däremellan – privat och bara på din enhet.' },
      organize: { title: 'Flera relationer, en lugn överblick', text: 'Roster samlar dina relationer, check-ins och diskreta påminnelser i en app – utan konto och utan moln.' },
      health: { title: 'STI-tester och check-ins, diskret i fokus', text: 'Roster håller ordning på dina tester och check-ins – lokalt på din iPhone, utan att någon annan ser dem.' },
      privacy: { title: 'Dina relationer är din sak', text: 'Roster sparar allt lokalt på din enhet: inget konto, ingen spårning, inget moln.' },
      general: { title: 'Redo att göra huvudet ledigt?', text: 'Roster är den lugna appen för polyamorösa och öppna relationer – lokalt på din iPhone, utan konto.' },
    },
  },
  pt: {
    eyebrow: 'Roster para iPhone',
    button: 'Baixar grátis na App Store',
    buttonShort: 'Baixar',
    bullets: ['Versão básica grátis', 'Salvo no seu aparelho', 'Sem conta'],
    androidNote: 'Por enquanto, o Roster está disponível só para iPhone.',
    androidTest: 'Faça o teste de poliamoria gratuito →',
    androidMap: 'Desenhe seu polycule grátis no navegador →',
    desktopNote: 'O Roster funciona no iPhone – abra esta página no seu celular.',
    sticky: 'Roster: seus relacionamentos, organizados com calma',
    close: 'Fechar',
    clusters: {
      map: { title: 'Veja seu polycule de relance', text: 'O Roster mostra todas as suas conexões e metamours em um mapa – e percebe quem está precisando de atenção agora.' },
      feelings: { title: 'Organize seus sentimentos em vez de ruminar', text: 'No diário de reflexão do Roster você registra ciúme, compersão e tudo o que fica no meio – em privado, só no seu aparelho.' },
      organize: { title: 'Vários relacionamentos, uma visão tranquila', text: 'O Roster reúne suas conexões, check-ins e lembretes discretos em um só app – sem conta e sem nuvem.' },
      health: { title: 'Testes de IST e check-ins com discrição', text: 'O Roster mantém seus testes e check-ins organizados – localmente no seu iPhone, sem que mais ninguém veja.' },
      privacy: { title: 'Seus relacionamentos são assunto seu', text: 'O Roster guarda tudo localmente no seu aparelho: sem conta, sem rastreamento, sem nuvem.' },
      general: { title: 'Pronto para tirar um peso da cabeça?', text: 'O Roster é o app tranquilo para relacionamentos poliamorosos e abertos – local no seu iPhone, sem conta.' },
    },
  },
};
