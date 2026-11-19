#!/usr/bin/env node
// Erzeugt Erklär-Diagramme (1600x900 PNG + 1200x675 WebP) für ausgewählte Blogartikel in allen 7 Sprachen
// und trägt `image` + `imageAlt` ins Frontmatter der passenden Artikel ein.
//
//   node scripts/blog-images.mjs            alle Diagramme erzeugen + Frontmatter setzen
//   node scripts/blog-images.mjs --sheet    zusätzlich Kontaktbögen pro Sprache (Temp-Ordner oder SHEET_DIR)
//
// Dateiname = Artikel-Slug (z. B. /images/blog/was-ist-ein-polycule.png), damit die
// Google-Bildersuche einen sprechenden, lokalisierten Namen sieht.
// Bilder sind bewusst sprachneutral aufgebaut (Knoten A, B, C …), nur Beschriftungen
// werden übersetzt. Rendering via sharp (librsvg) mit Systemschrift Avenir Next.
//
// Messhinweis: Die Auswahl ist 6 Artikel mit seoTitle + 6 ohne (Kontrollgruppe),
// damit die CTR-Auswertung im Dezember 2026 nicht einseitig verzerrt wird.
import sharp from 'sharp';
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const ROOT = new URL('..', import.meta.url).pathname;
const BLOG = join(ROOT, 'src/content/blog');
const OUT = join(ROOT, 'public/images/blog');
const LANGS = ['de', 'en', 'nl', 'es', 'da', 'sv', 'pt'];
const W = 1600;
const H = 900;
const FONT = "'Avenir Next', 'Helvetica Neue', Arial, sans-serif";

const C = {
  bg: '#131217', surface: '#1b1a22', border: '#2a2833',
  purple: '#8b5cf6', deep: '#534ab7', lavender: '#c4b5fd',
  rose: '#f0789f', teal: '#4fd6c2', amber: '#f5b971', sky: '#7cc4fa',
  text: '#f4f2fb', muted: '#9b96ab', dim: '#6b6678',
};
const NODE_COLORS = [C.purple, C.rose, C.teal, C.amber, C.sky, C.lavender];

// ---------- SVG-Helfer ----------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/** grobe Breitenschätzung für Avenir Next, damit lange Übersetzungen nicht überlaufen */
const fit = (text, size, maxW, weight = 400) => {
  const k = weight >= 600 ? 0.6 : 0.55;
  const w = [...text].length * size * k;
  return w > maxW ? Math.floor((maxW / w) * size) : size;
};
const text = (x, y, s, { size = 30, fill = C.text, weight = 400, anchor = 'middle', maxW = 9999 } = {}) =>
  `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${fit(s, size, maxW, weight)}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(s)}</text>`;

const EDGE = {
  love: { stroke: C.rose, w: 8 },
  strong: { stroke: C.rose, w: 16 },
  weak: { stroke: C.rose, w: 4, op: 0.75 },
  meta: { stroke: C.lavender, w: 5, dash: '2 14' },
  casual: { stroke: C.teal, w: 6, dash: '18 14' },
  none: { stroke: C.dim, w: 4, dash: '10 12' },
};
const edgeAttrs = (type) => {
  const e = EDGE[type];
  return `stroke="${e.stroke}" stroke-width="${e.w}" stroke-linecap="round" fill="none"${e.dash ? ` stroke-dasharray="${e.dash}"` : ''}${e.op ? ` opacity="${e.op}"` : ''}`;
};
const line = (a, b, type = 'love') => `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" ${edgeAttrs(type)}/>`;
const P = (x, y, label, color, r = 44) => ({ x, y, label, color, r });
const node = (n) =>
  `<circle cx="${n.x}" cy="${n.y}" r="${n.r}" fill="${n.color}" stroke="${C.bg}" stroke-width="7"/>` +
  (n.label ? text(n.x, n.y + n.r * 0.36, n.label, { size: Math.round(n.r * 0.9), fill: C.bg, weight: 700, maxW: n.r * 1.6 }) : '');

const house = (cx, top, w, h, roof = 120) => {
  const l = cx - w / 2, r = cx + w / 2, base = top + roof;
  return `<path d="M${l - 26},${base + 6} L${cx},${top} L${r + 26},${base + 6}" fill="none" stroke="${C.lavender}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>` +
    `<rect x="${l}" y="${base}" width="${w}" height="${h}" rx="18" fill="${C.surface}" stroke="${C.lavender}" stroke-width="6"/>`;
};

function frame(title, body, legend = []) {
  let lx = 96;
  const leg = legend.map(([type, label]) => {
    const x = lx;
    lx += 74 + [...label].length * 30 * 0.55 + 48;
    return `<line x1="${x}" y1="838" x2="${x + 54}" y2="838" ${edgeAttrs(type)}/>` +
      text(x + 70, 849, label, { size: 30, fill: C.muted, anchor: 'start' });
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="75%">
      <stop offset="0%" stop-color="${C.purple}" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="${C.purple}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="spectrum" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stop-color="${C.dim}"/>
      <stop offset="25%" stop-color="${C.deep}"/>
      <stop offset="55%" stop-color="${C.purple}"/>
      <stop offset="80%" stop-color="${C.rose}"/>
      <stop offset="100%" stop-color="${C.teal}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${C.bg}"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${text(96, 132, title, { size: 58, weight: 600, anchor: 'start', maxW: W - 192 })}
  ${body}
  ${leg}
  <circle cx="${W - 330}" cy="838" r="9" fill="${C.purple}"/>
  ${text(W - 96, 849, 'rosterapp.tech', { size: 30, fill: C.dim, anchor: 'end' })}
</svg>`;
}

const divider = `<line x1="800" y1="230" x2="800" y2="760" stroke="${C.border}" stroke-width="3"/>`;
const captions = (cx, cap, sub, maxW = 680) =>
  text(cx, 708, cap, { size: 48, weight: 600, maxW }) + text(cx, 764, sub, { size: 34, fill: C.muted, maxW });

// ---------- Übersetzungen (geteilt) ----------
const LEGEND = {
  de: { love: 'Liebesbeziehung', casual: 'Sex / Dates', meta: 'Metamours (kein Paar)' },
  en: { love: 'Romantic relationship', casual: 'Sex / dates', meta: 'Metamours (not together)' },
  nl: { love: 'Liefdesrelatie', casual: 'Seks / dates', meta: 'Metamours (geen relatie)' },
  es: { love: 'Relación amorosa', casual: 'Sexo / citas', meta: 'Metamours (sin relación)' },
  da: { love: 'Kærlighedsforhold', casual: 'Sex / dates', meta: 'Metamours (ikke sammen)' },
  sv: { love: 'Kärleksrelation', casual: 'Sex / dejter', meta: 'Metamours (inte ihop)' },
  pt: { love: 'Relação amorosa', casual: 'Sexo / encontros', meta: 'Metamours (sem relação)' },
};

// ---------- Diagramme ----------
const DIAGRAMS = {
  // ===== Testgruppe (Artikel mit seoTitle) =====
  'what-is-a-polycule': {
    t: {
      de: { title: 'Polycule-Formen im Überblick', p: [['V', 'eine Person in der Mitte'], ['Triade', 'alle drei zusammen'], ['Quad', 'vier Menschen'], ['Netzwerk', 'viele Verbindungen']], alt: 'Diagramm der vier häufigsten Polycule-Formen: V, Triade, Quad und Netzwerk' },
      en: { title: 'Common polycule shapes', p: [['V', 'one person in the middle'], ['Triad', 'all three together'], ['Quad', 'four people'], ['Network', 'many connections']], alt: 'Diagram of the four most common polycule shapes: V, triad, quad and network' },
      nl: { title: 'Polycule-vormen in één oogopslag', p: [['V', 'één persoon in het midden'], ['Triade', 'alle drie samen'], ['Quad', 'vier mensen'], ['Netwerk', 'veel verbindingen']], alt: 'Diagram van de vier meest voorkomende polycule-vormen: V, triade, quad en netwerk' },
      es: { title: 'Formas de polycule de un vistazo', p: [['V', 'una en el centro'], ['Tríada', 'los tres juntos'], ['Quad', 'cuatro personas'], ['Red', 'muchas conexiones']], alt: 'Diagrama de las cuatro formas de polycule más comunes: V, tríada, quad y red' },
      da: { title: 'Polycule-former i overblik', p: [['V', 'én person i midten'], ['Triade', 'alle tre sammen'], ['Quad', 'fire personer'], ['Netværk', 'mange forbindelser']], alt: 'Diagram over de fire mest almindelige polycule-former: V, triade, quad og netværk' },
      sv: { title: 'Polycule-former i överblick', p: [['V', 'en person i mitten'], ['Triad', 'alla tre tillsammans'], ['Quad', 'fyra personer'], ['Nätverk', 'många kopplingar']], alt: 'Diagram över de fyra vanligaste polycule-formerna: V, triad, quad och nätverk' },
      pt: { title: 'Formatos de polycule em resumo', p: [['V', 'uma pessoa no centro'], ['Tríade', 'os três juntos'], ['Quad', 'quatro pessoas'], ['Rede', 'muitas conexões']], alt: 'Diagrama dos quatro formatos de polycule mais comuns: V, tríade, quad e rede' },
    },
    draw(L, G) {
      const xs = [250, 616, 983, 1350];
      const r = 36;
      const [c0, c1, c2, c3] = xs;
      const v = [P(c0 - 95, 380, 'A', C.purple, r), P(c0, 560, 'B', C.rose, r), P(c0 + 95, 380, 'C', C.teal, r)];
      const tri = [P(c1, 370, 'A', C.purple, r), P(c1 - 105, 555, 'B', C.rose, r), P(c1 + 105, 555, 'C', C.teal, r)];
      const q = [P(c2 - 90, 375, 'A', C.purple, r), P(c2 + 90, 375, 'B', C.rose, r), P(c2 + 90, 555, 'C', C.teal, r), P(c2 - 90, 555, 'D', C.amber, r)];
      const n = [P(c3 - 120, 420, 'A', C.purple, r), P(c3 - 20, 335, 'B', C.rose, r), P(c3 + 115, 395, 'C', C.teal, r), P(c3 + 70, 550, 'D', C.amber, r), P(c3 - 90, 565, 'E', C.sky, r)];
      const edges = [
        line(v[0], v[1]), line(v[2], v[1]), line(v[0], v[2], 'meta'),
        line(tri[0], tri[1]), line(tri[1], tri[2]), line(tri[2], tri[0]),
        line(q[0], q[1]), line(q[1], q[2]), line(q[2], q[3]), line(q[3], q[0]),
        line(n[0], n[1]), line(n[1], n[2]), line(n[2], n[3]), line(n[1], n[3]), line(n[0], n[4]),
      ].join('');
      const caps = xs.map((x, i) =>
        text(x, 700, L.p[i][0], { size: 46, weight: 600, maxW: 340 }) + text(x, 750, L.p[i][1], { size: 31, fill: C.muted, maxW: 345 })).join('');
      return frame(L.title, edges + [...v, ...tri, ...q, ...n].map(node).join('') + caps, [['love', G.love], ['meta', G.meta]]);
    },
  },

  'throuple-triad': {
    t: {
      de: { title: 'Throuple oder V-Beziehung?', l: ['Throuple / Triade', 'alle drei sind zusammen'], r: ['V-Beziehung', 'A und C sind Metamours'], alt: 'Vergleich: In einem Throuple sind alle drei miteinander zusammen, in einer V-Beziehung ist nur eine Person mit beiden anderen zusammen' },
      en: { title: 'Throuple or V relationship?', l: ['Throuple / triad', 'all three are together'], r: ['V relationship', 'A and C are metamours'], alt: 'Comparison: in a throuple all three people are together, in a V relationship only one person is with both others' },
      nl: { title: 'Throuple of V-relatie?', l: ['Throuple / triade', 'alle drie hebben een relatie'], r: ['V-relatie', 'A en C zijn metamours'], alt: 'Vergelijking: in een throuple hebben alle drie een relatie met elkaar, in een V-relatie heeft alleen één persoon een relatie met de andere twee' },
      es: { title: '¿Throuple o relación en V?', l: ['Throuple / tríada', 'los tres están juntos'], r: ['Relación en V', 'A y C son metamours'], alt: 'Comparación: en un throuple las tres personas están juntas; en una relación en V solo una persona está con las otras dos' },
      da: { title: 'Throuple eller V-forhold?', l: ['Throuple / triade', 'alle tre er sammen'], r: ['V-forhold', 'A og C er metamours'], alt: 'Sammenligning: I en throuple er alle tre sammen med hinanden, i et V-forhold er kun én person sammen med begge de andre' },
      sv: { title: 'Throuple eller V-relation?', l: ['Throuple / triad', 'alla tre är tillsammans'], r: ['V-relation', 'A och C är metamours'], alt: 'Jämförelse: i en throuple är alla tre tillsammans, i en V-relation är bara en person tillsammans med båda de andra' },
      pt: { title: 'Throuple ou relação em V?', l: ['Throuple / tríade', 'os três estão juntos'], r: ['Relação em V', 'A e C são metamours'], alt: 'Comparação: em um throuple as três pessoas estão juntas; em uma relação em V só uma pessoa está com as outras duas' },
    },
    draw(L, G) {
      const r = 50;
      const a = [P(430, 320, 'A', C.purple, r), P(280, 580, 'B', C.rose, r), P(580, 580, 'C', C.teal, r)];
      const b = [P(1020, 320, 'A', C.purple, r), P(1170, 580, 'B', C.rose, r), P(1320, 320, 'C', C.teal, r)];
      const body = divider +
        line(a[0], a[1]) + line(a[1], a[2]) + line(a[2], a[0]) +
        line(b[0], b[1]) + line(b[2], b[1]) + line(b[0], b[2], 'meta') +
        [...a, ...b].map(node).join('') + captions(430, ...L.l) + captions(1170, ...L.r);
      return frame(L.title, body, [['love', G.love], ['meta', G.meta]]);
    },
  },

  'nesting-partner-explained': {
    t: {
      de: { title: 'Nesting Partner: wer mit wem wohnt', h: ['Nesting Partner', 'wohnen zusammen'], o: ['weitere Beziehung', 'eigenes Zuhause'], alt: 'Diagramm: Zwei Nesting Partner leben gemeinsam in einem Zuhause, weitere Beziehungen wohnen jeweils woanders' },
      en: { title: 'Nesting partners: who lives with whom', h: ['Nesting partners', 'live together'], o: ['Other partner', 'own home'], alt: 'Diagram: two nesting partners share a home, while other partners live elsewhere' },
      nl: { title: 'Nesting partners: wie woont met wie', h: ['Nesting partners', 'wonen samen'], o: ['Andere partner', 'eigen huis'], alt: 'Diagram: twee nesting partners delen een huis, andere partners wonen elders' },
      es: { title: 'Nesting partners: quién vive con quién', h: ['Nesting partners', 'viven juntos'], o: ['Otra relación', 'casa propia'], alt: 'Diagrama: dos nesting partners comparten casa y las demás parejas viven en otro lugar' },
      da: { title: 'Nesting partnere: hvem bor med hvem', h: ['Nesting partnere', 'bor sammen'], o: ['Anden partner', 'eget hjem'], alt: 'Diagram: to nesting partnere deler hjem, mens andre partnere bor et andet sted' },
      sv: { title: 'Nesting partners: vem bor med vem', h: ['Nesting partners', 'bor tillsammans'], o: ['Annan partner', 'eget hem'], alt: 'Diagram: två nesting partners delar hem, medan andra partner bor någon annanstans' },
      pt: { title: 'Nesting partners: quem mora com quem', h: ['Nesting partners', 'moram juntos'], o: ['Outra relação', 'casa própria'], alt: 'Diagrama: dois nesting partners dividem a casa, enquanto as outras relações moram em outro lugar' },
    },
    draw(L, G) {
      const A = P(680, 560, 'A', C.purple, 52), B = P(920, 560, 'B', C.rose, 52);
      const D = P(260, 470, 'D', C.amber, 48), Cn = P(1340, 470, 'C', C.teal, 48);
      const body =
        line(A, D) + line(B, Cn) +
        house(800, 205, 560, 340, 150) +
        line(A, B, 'strong') +
        text(800, 452, L.h[0], { size: 42, weight: 600, fill: C.lavender, maxW: 520 }) +
        text(800, 672, L.h[1], { size: 34, fill: C.muted, maxW: 520 }) +
        [A, B, D, Cn].map(node).join('') +
        text(260, 570, L.o[0], { size: 36, weight: 600, maxW: 400 }) + text(260, 616, L.o[1], { size: 32, fill: C.muted, maxW: 400 }) +
        text(1340, 570, L.o[0], { size: 36, weight: 600, maxW: 400 }) + text(1340, 616, L.o[1], { size: 32, fill: C.muted, maxW: 400 });
      return frame(L.title, body, [['love', G.love]]);
    },
  },

  'ethical-non-monogamy': {
    t: {
      de: { title: 'Formen der ethischen Nicht-Monogamie', f: ['Monogamie', 'Monogamish', 'Offene Beziehung', 'Swinging', 'Polyamorie', 'Beziehungsanarchie'], enm: 'Ethische Nicht-Monogamie (ENM)', alt: 'Übersicht: Monogamie im Vergleich zu den Formen ethischer Nicht-Monogamie – Monogamish, offene Beziehung, Swinging, Polyamorie und Beziehungsanarchie' },
      en: { title: 'Forms of ethical non-monogamy', f: ['Monogamy', 'Monogamish', 'Open relationship', 'Swinging', 'Polyamory', 'Relationship anarchy'], enm: 'Ethical non-monogamy (ENM)', alt: 'Overview: monogamy compared with the forms of ethical non-monogamy – monogamish, open relationship, swinging, polyamory and relationship anarchy' },
      nl: { title: 'Vormen van ethische non-monogamie', f: ['Monogamie', 'Monogamish', 'Open relatie', 'Swingen', 'Polyamorie', 'Relatieanarchie'], enm: 'Ethische non-monogamie (ENM)', alt: 'Overzicht: monogamie vergeleken met de vormen van ethische non-monogamie – monogamish, open relatie, swingen, polyamorie en relatieanarchie' },
      es: { title: 'Formas de no monogamia ética', f: ['Monogamia', 'Monogamish', 'Relación abierta', 'Swinging', 'Poliamor', 'Anarquía relacional'], enm: 'No monogamia ética (ENM)', alt: 'Resumen: la monogamia comparada con las formas de no monogamia ética – monogamish, relación abierta, swinging, poliamor y anarquía relacional' },
      da: { title: 'Former for etisk ikke-monogami', f: ['Monogami', 'Monogamish', 'Åbent forhold', 'Swinging', 'Polyamori', 'Relationsanarki'], enm: 'Etisk ikke-monogami (ENM)', alt: 'Overblik: monogami sammenlignet med formerne for etisk ikke-monogami – monogamish, åbent forhold, swinging, polyamori og relationsanarki' },
      sv: { title: 'Former av etisk icke-monogami', f: ['Monogami', 'Monogamish', 'Öppet förhållande', 'Swinging', 'Polyamori', 'Relationsanarki'], enm: 'Etisk icke-monogami (ENM)', alt: 'Översikt: monogami jämfört med formerna av etisk icke-monogami – monogamish, öppet förhållande, swinging, polyamori och relationsanarki' },
      pt: { title: 'Formas de não monogamia ética', f: ['Monogamia', 'Monogamish', 'Relacionamento aberto', 'Swing', 'Poliamoria', 'Anarquia relacional'], enm: 'Não monogamia ética (ENM)', alt: 'Resumo: a monogamia comparada com as formas de não monogamia ética – monogamish, relacionamento aberto, swing, poliamoria e anarquia relacional' },
    },
    draw(L) {
      const x0 = 150, x1 = 1450, y = 500;
      const xs = L.f.map((_, i) => x0 + (i * (x1 - x0)) / 5);
      const cols = [C.dim, C.deep, C.purple, C.rose, C.rose, C.teal];
      let body = `<rect x="${x0}" y="${y - 8}" width="${x1 - x0}" height="16" rx="8" fill="url(#spectrum)"/>`;
      // ENM-Klammer über den Formen 1–5
      const bx0 = xs[1] - 40, bx1 = x1 + 20, by = 300;
      body += `<path d="M${bx0},${by + 26} L${bx0},${by} L${bx1},${by} L${bx1},${by + 26}" fill="none" stroke="${C.lavender}" stroke-width="4" stroke-linejoin="round"/>` +
        text((bx0 + bx1) / 2, by - 22, L.enm, { size: 40, weight: 600, fill: C.lavender, maxW: bx1 - bx0 });
      xs.forEach((x, i) => {
        body += `<circle cx="${x}" cy="${y}" r="24" fill="${cols[i]}" stroke="${C.bg}" stroke-width="7"/>`;
        const above = i % 2 === 0;
        const anchor = i === 0 ? 'start' : i === 5 ? 'end' : 'middle';
        const ax = i === 0 ? x - 24 : i === 5 ? x + 24 : x;
        body += text(ax, above ? y - 56 : y + 90, L.f[i], { size: 40, weight: 600, anchor, maxW: 500 });
      });
      return frame(L.title, body);
    },
  },

  'polyamory-vs-open-relationship': {
    t: {
      de: { title: 'Offene Beziehung vs. Polyamorie', l: ['Offene Beziehung', 'Liebe zu zweit, Sex auch mit anderen'], r: ['Polyamorie', 'Liebesbeziehungen mit mehreren'], alt: 'Vergleich: In einer offenen Beziehung bleibt die Liebe beim Paar und Sex ist auch mit anderen möglich, bei Polyamorie gibt es Liebesbeziehungen zu mehreren Menschen' },
      en: { title: 'Open relationship vs. polyamory', l: ['Open relationship', 'love as a couple, sex with others too'], r: ['Polyamory', 'romantic relationships with several people'], alt: 'Comparison: in an open relationship love stays within the couple while sex with others is allowed, polyamory means romantic relationships with several people' },
      nl: { title: 'Open relatie vs. polyamorie', l: ['Open relatie', "liefde met z'n tweeën, seks ook met anderen"], r: ['Polyamorie', 'liefdesrelaties met meerdere mensen'], alt: 'Vergelijking: in een open relatie blijft de liefde bij het stel en is seks met anderen mogelijk, bij polyamorie zijn er liefdesrelaties met meerdere mensen' },
      es: { title: 'Relación abierta vs. poliamor', l: ['Relación abierta', 'amor en pareja, sexo también fuera'], r: ['Poliamor', 'relaciones amorosas con varias personas'], alt: 'Comparación: en una relación abierta el amor se queda en la pareja y se permite el sexo con otras personas; en el poliamor hay relaciones amorosas con varias personas' },
      da: { title: 'Åbent forhold vs. polyamori', l: ['Åbent forhold', 'kærlighed i parret, sex også med andre'], r: ['Polyamori', 'kærlighedsforhold med flere'], alt: 'Sammenligning: I et åbent forhold bliver kærligheden i parret, og sex med andre er tilladt, i polyamori er der kærlighedsforhold med flere mennesker' },
      sv: { title: 'Öppet förhållande vs. polyamori', l: ['Öppet förhållande', 'kärlek i paret, sex även med andra'], r: ['Polyamori', 'kärleksrelationer med flera'], alt: 'Jämförelse: i ett öppet förhållande stannar kärleken i paret och sex med andra är tillåtet, i polyamori finns kärleksrelationer med flera personer' },
      pt: { title: 'Relacionamento aberto vs. poliamoria', l: ['Relacionamento aberto', 'amor a dois, sexo também fora'], r: ['Poliamoria', 'relações amorosas com várias pessoas'], alt: 'Comparação: no relacionamento aberto o amor fica no casal e o sexo com outras pessoas é permitido; na poliamoria há relações amorosas com várias pessoas' },
    },
    draw(L, G) {
      const r = 46;
      const mk = (cx) => [P(cx - 115, 380, 'A', C.purple, r), P(cx + 115, 380, 'B', C.rose, r), P(cx - 200, 590, 'C', C.teal, r), P(cx + 200, 590, 'D', C.amber, r)];
      const a = mk(430), b = mk(1170);
      const body = divider +
        line(a[0], a[1], 'strong') + line(a[0], a[2], 'casual') + line(a[1], a[3], 'casual') +
        line(b[0], b[1]) + line(b[0], b[2]) + line(b[1], b[3]) +
        [...a, ...b].map(node).join('') + captions(430, ...L.l) + captions(1170, ...L.r);
      return frame(L.title, body, [['love', G.love], ['casual', G.casual]]);
    },
  },

  polyfidelity: {
    t: {
      de: { title: 'Polyfidelität: eine geschlossene Gruppe', g: 'Beziehungen nur innerhalb der Gruppe', o: 'keine neuen Partner', alt: 'Diagramm: Vier Menschen bilden eine geschlossene polyfidele Gruppe, neue Partner von außen kommen nicht dazu' },
      en: { title: 'Polyfidelity: a closed group', g: 'relationships only within the group', o: 'no new partners', alt: 'Diagram: four people form a closed polyfidelitous group, with no new partners from outside' },
      nl: { title: 'Polyfideliteit: een gesloten groep', g: 'relaties alleen binnen de groep', o: 'geen nieuwe partners', alt: 'Diagram: vier mensen vormen een gesloten polyfidele groep, zonder nieuwe partners van buitenaf' },
      es: { title: 'Polifidelidad: un grupo cerrado', g: 'relaciones solo dentro del grupo', o: 'sin parejas nuevas', alt: 'Diagrama: cuatro personas forman un grupo polifiel cerrado, sin parejas nuevas de fuera' },
      da: { title: 'Polyfidelitet: en lukket gruppe', g: 'forhold kun inden for gruppen', o: 'ingen nye partnere', alt: 'Diagram: fire personer danner en lukket polyfidel gruppe uden nye partnere udefra' },
      sv: { title: 'Polyfidelitet: en sluten grupp', g: 'relationer bara inom gruppen', o: 'inga nya partner', alt: 'Diagram: fyra personer bildar en sluten polyfidel grupp utan nya partner utifrån' },
      pt: { title: 'Polifidelidade: um grupo fechado', g: 'relações só dentro do grupo', o: 'sem novos parceiros', alt: 'Diagrama: quatro pessoas formam um grupo polifiel fechado, sem novos parceiros de fora' },
    },
    draw(L, G) {
      const cx = 660, cy = 455, r = 46;
      const q = [P(cx - 105, cy - 100, 'A', C.purple, r), P(cx + 105, cy - 100, 'B', C.rose, r), P(cx + 105, cy + 100, 'C', C.teal, r), P(cx - 105, cy + 100, 'D', C.amber, r)];
      const E = P(1250, cy, '?', C.dim, 46);
      const mx = 1060;
      const body =
        `<circle cx="${cx}" cy="${cy}" r="235" fill="${C.purple}" fill-opacity="0.07" stroke="${C.lavender}" stroke-width="5" stroke-dasharray="20 12"/>` +
        line(q[0], q[1]) + line(q[1], q[2]) + line(q[2], q[3]) + line(q[3], q[0]) + line(q[0], q[2]) + line(q[1], q[3]) +
        line({ x: cx + 250, y: cy }, { x: E.x - 60, y: cy }, 'none') +
        `<path d="M${mx - 22},${cy - 22} L${mx + 22},${cy + 22} M${mx + 22},${cy - 22} L${mx - 22},${cy + 22}" stroke="${C.rose}" stroke-width="9" stroke-linecap="round"/>` +
        [...q, E].map(node).join('') +
        text(cx, 748, L.g, { size: 38, weight: 600, fill: C.lavender, maxW: 640 }) +
        text(E.x, cy + 104, L.o, { size: 34, fill: C.muted, maxW: 420 });
      return frame(L.title, body, [['love', G.love]]);
    },
  },

  // ===== Kontrollgruppe (Artikel ohne seoTitle) =====
  'hierarchical-vs-nonhierarchical-polyamory': {
    t: {
      de: { title: 'Hierarchisch vs. nicht-hierarchisch', l: ['Hierarchisch', 'eine Beziehung hat Vorrang'], r: ['Nicht-hierarchisch', 'keine steht über der anderen'], pri: 'Primär', sec: 'Sekundär', eq: 'gleichrangig', alt: 'Vergleich: Bei hierarchischer Polyamorie gibt es eine Primärbeziehung und Sekundärbeziehungen, bei nicht-hierarchischer Polyamorie sind alle Beziehungen gleichrangig' },
      en: { title: 'Hierarchical vs. non-hierarchical', l: ['Hierarchical', 'one relationship comes first'], r: ['Non-hierarchical', 'no relationship ranks higher'], pri: 'Primary', sec: 'Secondary', eq: 'equal', alt: 'Comparison: hierarchical polyamory has a primary relationship and secondary relationships, non-hierarchical polyamory treats all relationships as equals' },
      nl: { title: 'Hiërarchisch vs. niet-hiërarchisch', l: ['Hiërarchisch', 'één relatie gaat voor'], r: ['Niet-hiërarchisch', 'geen relatie staat hoger'], pri: 'Primair', sec: 'Secundair', eq: 'gelijkwaardig', alt: 'Vergelijking: bij hiërarchische polyamorie is er een primaire relatie en zijn er secundaire relaties, bij niet-hiërarchische polyamorie zijn alle relaties gelijkwaardig' },
      es: { title: 'Jerárquica vs. no jerárquica', l: ['Jerárquica', 'una relación tiene prioridad'], r: ['No jerárquica', 'ninguna está por encima'], pri: 'Primaria', sec: 'Secundaria', eq: 'iguales', alt: 'Comparación: en el poliamor jerárquico hay una relación primaria y relaciones secundarias; en el no jerárquico todas las relaciones son iguales' },
      da: { title: 'Hierarkisk vs. ikke-hierarkisk', l: ['Hierarkisk', 'ét forhold kommer først'], r: ['Ikke-hierarkisk', 'intet forhold står over et andet'], pri: 'Primær', sec: 'Sekundær', eq: 'ligeværdige', alt: 'Sammenligning: I hierarkisk polyamori er der et primært forhold og sekundære forhold, i ikke-hierarkisk polyamori er alle forhold ligeværdige' },
      sv: { title: 'Hierarkisk vs. icke-hierarkisk', l: ['Hierarkisk', 'en relation går först'], r: ['Icke-hierarkisk', 'ingen relation står över en annan'], pri: 'Primär', sec: 'Sekundär', eq: 'jämlika', alt: 'Jämförelse: i hierarkisk polyamori finns en primär relation och sekundära relationer, i icke-hierarkisk polyamori är alla relationer jämlika' },
      pt: { title: 'Hierárquica vs. não hierárquica', l: ['Hierárquica', 'uma relação tem prioridade'], r: ['Não hierárquica', 'nenhuma fica acima da outra'], pri: 'Primária', sec: 'Secundária', eq: 'iguais', alt: 'Comparação: na poliamoria hierárquica existe uma relação primária e relações secundárias; na não hierárquica todas as relações são iguais' },
    },
    draw(L, G) {
      const r = 48;
      const mk = (cx) => [P(cx, 320, 'A', C.purple, r), P(cx - 160, 570, 'B', C.rose, r), P(cx + 160, 570, 'C', C.teal, r)];
      const a = mk(430), b = mk(1170);
      const body = divider +
        line(a[0], a[1], 'strong') + line(a[0], a[2], 'weak') +
        line(b[0], b[1]) + line(b[0], b[2]) +
        [...a, ...b].map(node).join('') +
        text(430 - 105, 455, L.pri, { size: 36, weight: 600, fill: C.lavender, anchor: 'end', maxW: 230 }) +
        text(430 + 105, 455, L.sec, { size: 36, fill: C.muted, anchor: 'start', maxW: 230 }) +
        text(1170, 582, L.eq, { size: 32, fill: C.lavender, maxW: 210 }) +
        captions(430, ...L.l) + captions(1170, ...L.r);
      return frame(L.title, body, [['love', G.love]]);
    },
  },

  'kitchen-table-vs-parallel-polyamory': {
    t: {
      de: { title: 'Kitchen Table vs. Parallel-Polyamorie', l: ['Kitchen Table', 'alle kennen sich'], r: ['Parallel', 'Beziehungen laufen getrennt'], alt: 'Vergleich: Bei Kitchen-Table-Polyamorie kennen sich alle und sitzen an einem Tisch, bei Parallel-Polyamorie laufen die Beziehungen getrennt' },
      en: { title: 'Kitchen table vs. parallel polyamory', l: ['Kitchen table', 'everyone knows each other'], r: ['Parallel', 'relationships stay separate'], alt: 'Comparison: in kitchen table polyamory everyone knows each other and shares a table, in parallel polyamory the relationships stay separate' },
      nl: { title: 'Kitchen table vs. parallelle polyamorie', l: ['Kitchen table', 'iedereen kent elkaar'], r: ['Parallel', 'relaties blijven gescheiden'], alt: 'Vergelijking: bij kitchen table polyamorie kent iedereen elkaar en zit iedereen aan één tafel, bij parallelle polyamorie blijven de relaties gescheiden' },
      es: { title: 'Kitchen table vs. poliamor paralelo', l: ['Kitchen table', 'todos se conocen'], r: ['Paralelo', 'las relaciones van por separado'], alt: 'Comparación: en el poliamor kitchen table todas las personas se conocen y comparten mesa; en el poliamor paralelo las relaciones van por separado' },
      da: { title: 'Kitchen table vs. parallel polyamori', l: ['Kitchen table', 'alle kender hinanden'], r: ['Parallel', 'forholdene holdes adskilt'], alt: 'Sammenligning: I kitchen table-polyamori kender alle hinanden og sidder ved samme bord, i parallel polyamori holdes forholdene adskilt' },
      sv: { title: 'Kitchen table vs. parallell polyamori', l: ['Kitchen table', 'alla känner varandra'], r: ['Parallell', 'relationerna hålls isär'], alt: 'Jämförelse: i kitchen table-polyamori känner alla varandra och sitter vid samma bord, i parallell polyamori hålls relationerna isär' },
      pt: { title: 'Kitchen table vs. poliamoria paralela', l: ['Kitchen table', 'todos se conhecem'], r: ['Paralela', 'as relações ficam separadas'], alt: 'Comparação: na poliamoria kitchen table todos se conhecem e dividem a mesma mesa; na poliamoria paralela as relações ficam separadas' },
    },
    draw(L, G) {
      const r = 42, cx = 430, cy = 450;
      const k = [P(cx, cy - 150, 'A', C.purple, r), P(cx + 225, cy, 'B', C.rose, r), P(cx, cy + 150, 'C', C.teal, r), P(cx - 225, cy, 'D', C.amber, r)];
      const table = `<ellipse cx="${cx}" cy="${cy}" rx="150" ry="85" fill="${C.surface}" stroke="${C.border}" stroke-width="4"/>`;
      const px = 1170;
      const hub = P(px, 600, 'A', C.purple, r);
      const parts = [P(px - 220, 330, 'B', C.rose, r), P(px, 300, 'C', C.teal, r), P(px + 220, 330, 'D', C.amber, r)];
      const bubbles = parts.map((p) => `<rect x="${p.x - 78}" y="${p.y - 78}" width="156" height="156" rx="28" fill="${C.surface}" stroke="${C.border}" stroke-width="3"/>`).join('');
      const body = divider + table +
        line(k[0], k[1]) + line(k[1], k[2]) + line(k[0], k[3]) +
        line(k[2], k[3], 'meta') + line(k[0], k[2], 'meta') + line(k[1], k[3], 'meta') +
        parts.map((p) => line(hub, p)).join('') + bubbles +
        [...k, hub, ...parts].map(node).join('') +
        captions(430, ...L.l) + captions(1170, ...L.r);
      return frame(L.title, body, [['love', G.love], ['meta', G.meta]]);
    },
  },

  'metamour-relationships': {
    t: {
      de: { title: 'Was ist ein Metamour?', n: ['Du', 'Dein Partner', 'Partner deines Partners'], m: ['Metamours', 'kein Paar, aber verbunden'], alt: 'Diagramm: Du, dein Partner und dessen weiterer Partner – du und der Partner deines Partners seid Metamours' },
      en: { title: 'What is a metamour?', n: ['You', 'Your partner', "Your partner's partner"], m: ['Metamours', 'not a couple, but connected'], alt: "Diagram: you, your partner and your partner's other partner – you and your partner's partner are metamours" },
      nl: { title: 'Wat is een metamour?', n: ['Jij', 'Je partner', 'Partner van je partner'], m: ['Metamours', 'geen stel, wel verbonden'], alt: 'Diagram: jij, je partner en de andere partner van je partner – jij en de partner van je partner zijn metamours' },
      es: { title: '¿Qué es un metamour?', n: ['Tú', 'Tu pareja', 'Pareja de tu pareja'], m: ['Metamours', 'no son pareja, pero están conectados'], alt: 'Diagrama: tú, tu pareja y la otra pareja de tu pareja; tú y la pareja de tu pareja son metamours' },
      da: { title: 'Hvad er en metamour?', n: ['Dig', 'Din partner', 'Din partners partner'], m: ['Metamours', 'ikke et par, men forbundet'], alt: 'Diagram: dig, din partner og din partners anden partner – du og din partners partner er metamours' },
      sv: { title: 'Vad är en metamour?', n: ['Du', 'Din partner', 'Din partners partner'], m: ['Metamours', 'inte ett par, men sammankopplade'], alt: 'Diagram: du, din partner och din partners andra partner – du och din partners partner är metamours' },
      pt: { title: 'O que é um metamour?', n: ['Você', 'Seu parceiro', 'Parceiro do seu parceiro'], m: ['Metamours', 'não são um casal, mas estão ligados'], alt: 'Diagrama: você, seu parceiro e o outro parceiro do seu parceiro – você e o parceiro do seu parceiro são metamours' },
    },
    draw(L, G) {
      const r = 60;
      const n = [P(380, 430, 'A', C.purple, r), P(800, 430, 'B', C.rose, r), P(1220, 430, 'C', C.teal, r)];
      const body =
        line(n[0], n[1]) + line(n[1], n[2]) +
        `<path d="M${n[0].x},${n[0].y + 70} Q800,${n[0].y + 330} ${n[2].x},${n[2].y + 70}" ${edgeAttrs('meta')}/>` +
        n.map(node).join('') +
        n.map((p, i) => text(p.x, 330, L.n[i], { size: 40, weight: 600, maxW: 410 })).join('') +
        text(800, 690, L.m[0], { size: 46, weight: 600, fill: C.lavender, maxW: 700 }) +
        text(800, 744, L.m[1], { size: 34, fill: C.muted, maxW: 700 });
      return frame(L.title, body, [['love', G.love], ['meta', G.meta]]);
    },
  },

  'mono-poly-relationships': {
    t: {
      de: { title: 'So sieht eine Mono-Poly-Beziehung aus', mono: ['Mono', 'eine Beziehung'], poly: ['Poly', 'mehrere Beziehungen'], alt: 'Diagramm: Eine monogame Person ist mit einer polyamoren Person zusammen, die noch weitere Partner hat' },
      en: { title: 'What a mono-poly relationship looks like', mono: ['Mono', 'one relationship'], poly: ['Poly', 'several relationships'], alt: 'Diagram: a monogamous person is with a polyamorous partner who also has other partners' },
      nl: { title: 'Zo ziet een mono-poly relatie eruit', mono: ['Mono', 'één relatie'], poly: ['Poly', 'meerdere relaties'], alt: 'Diagram: een monogame persoon heeft een relatie met een polyamoreuze partner die ook andere partners heeft' },
      es: { title: 'Así es una relación mono-poli', mono: ['Mono', 'una relación'], poly: ['Poli', 'varias relaciones'], alt: 'Diagrama: una persona monógama está con una pareja poliamorosa que también tiene otras parejas' },
      da: { title: 'Sådan ser et mono-poly-forhold ud', mono: ['Mono', 'ét forhold'], poly: ['Poly', 'flere forhold'], alt: 'Diagram: en monogam person er sammen med en polyamorøs partner, som også har andre partnere' },
      sv: { title: 'Så ser en mono-poly-relation ut', mono: ['Mono', 'en relation'], poly: ['Poly', 'flera relationer'], alt: 'Diagram: en monogam person är tillsammans med en polyamorös partner som också har andra partner' },
      pt: { title: 'Como é um relacionamento mono-poli', mono: ['Mono', 'um relacionamento'], poly: ['Poli', 'vários relacionamentos'], alt: 'Diagrama: uma pessoa monogâmica está com um parceiro poliamoroso que também tem outros parceiros' },
    },
    draw(L, G) {
      const A = P(420, 470, 'A', C.sky, 60), B = P(840, 470, 'B', C.rose, 60);
      const Cn = P(1260, 320, 'C', C.teal, 48), D = P(1260, 620, 'D', C.amber, 48);
      const body =
        line(A, B, 'strong') + line(B, Cn) + line(B, D) + line(A, Cn, 'meta') + line(A, D, 'meta') +
        [A, B, Cn, D].map(node).join('') +
        text(A.x, 596, L.mono[0], { size: 46, weight: 600 }) + text(A.x, 646, L.mono[1], { size: 34, fill: C.muted, maxW: 380 }) +
        text(B.x, 596, L.poly[0], { size: 46, weight: 600 }) + text(B.x, 646, L.poly[1], { size: 34, fill: C.muted, maxW: 380 });
      return frame(L.title, body, [['love', G.love], ['meta', G.meta]]);
    },
  },

  'solo-polyamory': {
    t: {
      de: { title: 'Solo-Polyamorie auf einen Blick', you: 'Du', home: 'eigenes Zuhause', sub: 'mehrere Beziehungen, kein Nesting Partner', alt: 'Diagramm: Bei Solo-Polyamorie lebst du in deinem eigenen Zuhause und hast mehrere Beziehungen ohne Nesting Partner' },
      en: { title: 'Solo polyamory at a glance', you: 'You', home: 'your own home', sub: 'several relationships, no nesting partner', alt: 'Diagram: in solo polyamory you keep your own home and have several relationships without a nesting partner' },
      nl: { title: 'Solo-polyamorie in één oogopslag', you: 'Jij', home: 'eigen huis', sub: 'meerdere relaties, geen nesting partner', alt: 'Diagram: bij solo-polyamorie woon je in je eigen huis en heb je meerdere relaties zonder nesting partner' },
      es: { title: 'Solo-poliamor de un vistazo', you: 'Tú', home: 'casa propia', sub: 'varias relaciones, sin nesting partner', alt: 'Diagrama: en el solo-poliamor vives en tu propia casa y tienes varias relaciones sin nesting partner' },
      da: { title: 'Solo-polyamori i overblik', you: 'Du', home: 'eget hjem', sub: 'flere forhold, ingen nesting partner', alt: 'Diagram: I solo-polyamori bor du i dit eget hjem og har flere forhold uden en nesting partner' },
      sv: { title: 'Solo-polyamori i överblick', you: 'Du', home: 'eget hem', sub: 'flera relationer, ingen nesting partner', alt: 'Diagram: i solo-polyamori bor du i ditt eget hem och har flera relationer utan nesting partner' },
      pt: { title: 'Solo-poliamoria em resumo', you: 'Você', home: 'casa própria', sub: 'vários relacionamentos, sem nesting partner', alt: 'Diagrama: na solo-poliamoria você mora na sua própria casa e tem vários relacionamentos sem nesting partner' },
    },
    draw(L, G) {
      const A = P(800, 500, L.you, C.purple, 62);
      const ps = [P(330, 300, 'B', C.rose, 46), P(1270, 300, 'C', C.teal, 46), P(330, 640, 'D', C.amber, 46), P(1270, 640, 'E', C.sky, 46)];
      const body =
        ps.map((p) => line(A, p)).join('') +
        house(800, 280, 240, 190, 110) +
        node(A) +
        ps.map(node).join('') +
        text(800, 630, L.home, { size: 34, fill: C.lavender, maxW: 420 }) +
        text(800, 752, L.sub, { size: 40, weight: 600, maxW: 1000 });
      return frame(L.title, body, [['love', G.love]]);
    },
  },

  'swinging-vs-polyamory': {
    t: {
      de: { title: 'Swingen vs. Polyamorie', l: ['Swingen', 'Paare gemeinsam, vor allem Sex'], r: ['Polyamorie', 'eigene Liebesbeziehungen'], alt: 'Vergleich: Beim Swingen treffen sich Paare gemeinsam mit anderen Paaren, meist für Sex, bei Polyamorie führen Menschen eigenständige Liebesbeziehungen mit mehreren Partnern' },
      en: { title: 'Swinging vs. polyamory', l: ['Swinging', 'couples together, mostly sex'], r: ['Polyamory', 'separate romantic relationships'], alt: 'Comparison: in swinging, couples meet other couples together, mostly for sex; in polyamory people have their own romantic relationships with several partners' },
      nl: { title: 'Swingen vs. polyamorie', l: ['Swingen', 'stellen samen, vooral seks'], r: ['Polyamorie', 'eigen liefdesrelaties'], alt: 'Vergelijking: bij swingen ontmoeten stellen samen andere stellen, meestal voor seks, bij polyamorie hebben mensen eigen liefdesrelaties met meerdere partners' },
      es: { title: 'Swinging vs. poliamor', l: ['Swinging', 'parejas juntas, sobre todo sexo'], r: ['Poliamor', 'relaciones amorosas propias'], alt: 'Comparación: en el swinging las parejas se encuentran juntas con otras parejas, sobre todo para el sexo; en el poliamor cada persona tiene sus propias relaciones amorosas' },
      da: { title: 'Swinger vs. polyamori', l: ['Swinger', 'par sammen, mest sex'], r: ['Polyamori', 'egne kærlighedsforhold'], alt: 'Sammenligning: Som swingere mødes par sammen med andre par, mest for sex, i polyamori har man egne kærlighedsforhold med flere partnere' },
      sv: { title: 'Swinger vs. polyamori', l: ['Swinger', 'par tillsammans, mest sex'], r: ['Polyamori', 'egna kärleksrelationer'], alt: 'Jämförelse: som swingers träffar par andra par tillsammans, mest för sex, i polyamori har man egna kärleksrelationer med flera partner' },
      pt: { title: 'Swing vs. poliamoria', l: ['Swing', 'casais juntos, principalmente sexo'], r: ['Poliamoria', 'relações amorosas próprias'], alt: 'Comparação: no swing os casais encontram outros casais juntos, principalmente para sexo; na poliamoria cada pessoa tem relações amorosas próprias com vários parceiros' },
    },
    draw(L, G) {
      const r = 46;
      const mk = (cx) => [P(cx - 115, 360, 'A', C.purple, r), P(cx + 115, 360, 'B', C.rose, r), P(cx - 115, 590, 'C', C.teal, r), P(cx + 115, 590, 'D', C.amber, r)];
      const a = mk(430), b = mk(1170);
      const pair = (p, q) => `<rect x="${p.x - 80}" y="${p.y - 74}" width="${q.x - p.x + 160}" height="148" rx="74" fill="${C.surface}" stroke="${C.border}" stroke-width="3"/>`;
      const body = divider +
        pair(a[0], a[1]) + pair(a[2], a[3]) +
        line(a[0], a[1], 'strong') + line(a[2], a[3], 'strong') + line(a[0], a[2], 'casual') + line(a[1], a[3], 'casual') +
        line(b[0], b[1]) + line(b[0], b[2]) + line(b[1], b[3]) +
        [...a, ...b].map(node).join('') + captions(430, ...L.l) + captions(1170, ...L.r);
      return frame(L.title, body, [['love', G.love], ['casual', G.casual]]);
    },
  },
};

// ---------- Artikel finden + Frontmatter setzen ----------
function articles() {
  const map = {};
  for (const f of readdirSync(BLOG)) {
    if (!/\.mdx?$/.test(f)) continue;
    const src = readFileSync(join(BLOG, f), 'utf8');
    const key = src.match(/^translationKey:\s*['"]?([^'"\n]+)/m)?.[1];
    const lang = src.match(/^lang:\s*['"]?([a-z]+)/m)?.[1];
    if (key && lang) (map[key] ??= {})[lang] = { file: join(BLOG, f), slug: f.replace(/\.mdx?$/, '').toLowerCase(), src };
  }
  return map;
}

const yamlStr = (s) => `'${String(s).replace(/'/g, "''")}'`;
function setFrontmatter(src, image, alt) {
  const end = src.indexOf('\n---', 3);
  let fm = src.slice(0, end).replace(/^image:.*\n/m, '').replace(/^imageAlt:.*\n/m, '');
  const rest = src.slice(end);
  const ins = `image: ${yamlStr(image)}\nimageAlt: ${yamlStr(alt)}\n`;
  fm = /^pubDate:/m.test(fm) ? fm.replace(/^pubDate:/m, `${ins}pubDate:`) : `${fm}\n${ins.trimEnd()}`;
  return fm + rest;
}

mkdirSync(OUT, { recursive: true });
const all = articles();
const sheet = process.argv.includes('--sheet');
const sheetTiles = Object.fromEntries(LANGS.map((l) => [l, []]));
let count = 0, bytes = 0;

for (const [key, d] of Object.entries(DIAGRAMS)) {
  for (const lang of LANGS) {
    const art = all[key]?.[lang];
    if (!art) throw new Error(`Kein Artikel für ${key}/${lang}`);
    const L = d.t[lang];
    if (!L) throw new Error(`Keine Texte für ${key}/${lang}`);
    const svg = d.draw(L, LEGEND[lang]);
    const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9, adaptiveFiltering: true }).toBuffer();
    writeFileSync(join(OUT, `${art.slug}.png`), png);
    // WebP für die Anzeige im Artikel (leichter fürs LCP); PNG bleibt für og:image/Schema
    await sharp(Buffer.from(svg)).resize(1200, 675).webp({ quality: 82, effort: 6 }).toFile(join(OUT, `${art.slug}.webp`));
    writeFileSync(art.file, setFrontmatter(art.src, `/images/blog/${art.slug}.png`, L.alt));
    count++; bytes += png.length;
    if (sheet) sheetTiles[lang].push(png);
  }
}
console.log(`${count} Diagramme erzeugt, Ø ${Math.round(bytes / count / 1024)} KB → public/images/blog/`);

if (sheet) {
  const dir = process.env.SHEET_DIR ?? join(tmpdir(), 'roster-blog-sheets');
  mkdirSync(dir, { recursive: true });
  for (const lang of LANGS) {
    const tw = 800, th = 450, cols = 3;
    const tiles = await Promise.all(sheetTiles[lang].map((b) => sharp(b).resize(tw, th).toBuffer()));
    const rows = Math.ceil(tiles.length / cols);
    await sharp({ create: { width: tw * cols, height: th * rows, channels: 3, background: '#000' } })
      .composite(tiles.map((input, i) => ({ input, left: (i % cols) * tw, top: Math.floor(i / cols) * th })))
      .png().toFile(join(dir, `sheet-${lang}.png`));
  }
  console.log(`Kontaktbögen → ${dir}`);
}
