import { b as createAstro, c as createComponent, d as addAttribute, a as renderTemplate, u as unescapeHTML, q as renderSlot, v as renderHead, m as maybeRenderHead, r as renderComponent } from './astro/server_DwLGwedF.mjs';
import 'piccolore';
import 'clsx';
/* empty css                       */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://rosterapp.tech");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    lang = "de",
    path = "/",
    schema,
    noindex = false
  } = Astro2.props;
  const site = Astro2.site ?? new URL("https://roster-app.de");
  const canonical = new URL(lang === "de" ? path : `/${lang}${path}`, site).href;
  const alternates = [
    { hreflang: "de", href: new URL(path, site).href },
    { hreflang: "en", href: new URL(`/en${path}`, site).href },
    { hreflang: "nl", href: new URL(`/nl${path}`, site).href },
    { hreflang: "es", href: new URL(`/es${path}`, site).href },
    { hreflang: "da", href: new URL(`/da${path}`, site).href },
    { hreflang: "sv", href: new URL(`/sv${path}`, site).href },
    { hreflang: "x-default", href: new URL(path, site).href }
  ];
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonical, "href")}>${noindex && renderTemplate`<meta name="robots" content="noindex, follow">`}${alternates.map((a) => renderTemplate`<link rel="alternate"${addAttribute(a.hreflang, "hreflang")}${addAttribute(a.href, "href")}>`)}<!-- Open Graph / Social --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:image"${addAttribute(new URL("/og.png", site).href, "content")}><meta property="og:locale"${addAttribute(lang === "de" ? "de_DE" : "en_US", "content")}><meta name="twitter:card" content="summary_large_image"><!-- JSON-LD: macht die Seite fuer KI-Systeme maschinenlesbar -->${schema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)))}${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/eliaswilkening/Desktop/roster-site/src/layouts/BaseLayout.astro", void 0);

const $$Astro$2 = createAstro("https://rosterapp.tech");
const $$Vio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Vio;
  const { size = 28 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="vio"${addAttribute(`--vio-size:${size}px`, "style")} aria-hidden="true" data-astro-cid-avcfsf4b> <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" data-astro-cid-avcfsf4b> <path d="M32 56C32 56 6 40 6 22C6 13 13 7 21 7C26 7 30 9 32 13C34 9 38 7 43 7C51 7 58 13 58 22C58 40 32 56 32 56Z" fill="var(--purple)" data-astro-cid-avcfsf4b></path> <circle cx="24" cy="26" r="4.2" fill="#fff" data-astro-cid-avcfsf4b></circle> <circle cx="40" cy="26" r="4.2" fill="#fff" data-astro-cid-avcfsf4b></circle> <circle cx="25" cy="27" r="2" fill="#1b1a22" data-astro-cid-avcfsf4b></circle> <circle cx="41" cy="27" r="2" fill="#1b1a22" data-astro-cid-avcfsf4b></circle> </svg> </span> `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/components/Vio.astro", void 0);

const defaultLang = "de";
const ui = {
  de: {
    "nav.features": "Funktionen",
    "nav.pricing": "Preise",
    "nav.blog": "Blog",
    "nav.cta": "Im App Store laden",
    "footer.tagline": "Beziehungen, mit Sorgfalt geführt.",
    "footer.legal": "Rechtliches",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",
    "footer.madeby": "Ein Projekt von Slowcraft.",
    "footer.privacy": "Lokal gespeichert. Kein Tracking. Kein Konto nötig.",
    "footer.language": "Sprache",
    "footer.app": "App",
    "footer.app.agb": "AGB",
    "footer.app.privacy": "Datenschutzerklärung",
    "blog.back": "← Alle Artikel",
    "blog.readmore": "Weiterlesen →",
    "blog.headline": "Aus dem Maschinenraum.",
    "blog.lede": "Klartext zu Nicht-Monogamie, Beziehungspflege und warum eine ruhige App manchmal mehr hilft als ein gutes Gespräch."
  },
  en: {
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.blog": "Blog",
    "nav.cta": "Get it on the App Store",
    "footer.tagline": "Relationships, tended with care.",
    "footer.legal": "Legal",
    "footer.impressum": "Imprint",
    "footer.datenschutz": "Privacy",
    "footer.madeby": "A project by Slowcraft.",
    "footer.privacy": "Stored on device. No tracking. No account required.",
    "footer.language": "Language",
    "footer.app": "App",
    "footer.app.agb": "Terms",
    "footer.app.privacy": "Privacy Policy",
    "blog.back": "← All articles",
    "blog.readmore": "Read more →",
    "blog.headline": "From the engine room.",
    "blog.lede": "Straight talk on non-monogamy, relationship care, and why a quiet app sometimes helps more than a good conversation."
  },
  nl: {
    "nav.features": "Functies",
    "nav.pricing": "Prijzen",
    "nav.blog": "Blog",
    "nav.cta": "Download in de App Store",
    "footer.tagline": "Relaties, zorgvuldig bijgehouden.",
    "footer.legal": "Juridisch",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Privacy",
    "footer.madeby": "Een project van Slowcraft.",
    "footer.privacy": "Lokaal opgeslagen. Geen tracking. Geen account nodig.",
    "footer.language": "Taal",
    "footer.app": "App",
    "footer.app.agb": "Voorwaarden",
    "footer.app.privacy": "Privacybeleid",
    "blog.back": "← Alle artikelen",
    "blog.readmore": "Lees verder →",
    "blog.headline": "Uit de machinekamer.",
    "blog.lede": "Duidelijke taal over niet-monogamie, relatiebeheer en waarom een rustige app soms meer helpt dan een goed gesprek."
  },
  es: {
    "nav.features": "Funciones",
    "nav.pricing": "Precios",
    "nav.blog": "Blog",
    "nav.cta": "Descargar en App Store",
    "footer.tagline": "Relaciones, gestionadas con cuidado.",
    "footer.legal": "Legal",
    "footer.impressum": "Aviso legal",
    "footer.datenschutz": "Privacidad",
    "footer.madeby": "Un proyecto de Slowcraft.",
    "footer.privacy": "Almacenado localmente. Sin rastreo. Sin cuenta necesaria.",
    "footer.language": "Idioma",
    "footer.app": "App",
    "footer.app.agb": "Términos",
    "footer.app.privacy": "Política de privacidad",
    "blog.back": "← Todos los artículos",
    "blog.readmore": "Leer más →",
    "blog.headline": "Desde las entrañas.",
    "blog.lede": "Texto claro sobre no monogamia, cuidado de las relaciones y por qué una app tranquila a veces ayuda más que una buena conversación."
  },
  da: {
    "nav.features": "Funktioner",
    "nav.pricing": "Priser",
    "nav.blog": "Blog",
    "nav.cta": "Hent i App Store",
    "footer.tagline": "Relationer, plejet med omsorg.",
    "footer.legal": "Juridisk",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Privatliv",
    "footer.madeby": "Et projekt af Slowcraft.",
    "footer.privacy": "Gemt lokalt. Ingen sporing. Ingen konto nødvendig.",
    "footer.language": "Sprog",
    "footer.app": "App",
    "footer.app.agb": "Vilkår",
    "footer.app.privacy": "Privatlivspolitik",
    "blog.back": "← Alle artikler",
    "blog.readmore": "Læs mere →",
    "blog.headline": "Fra maskinrummet.",
    "blog.lede": "Klar tale om ikke-monogami, relationspleje og hvorfor en rolig app nogle gange hjælper mere end en god samtale."
  },
  sv: {
    "nav.features": "Funktioner",
    "nav.pricing": "Priser",
    "nav.blog": "Blogg",
    "nav.cta": "Hämta i App Store",
    "footer.tagline": "Relationer, skötta med omsorg.",
    "footer.legal": "Juridik",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Integritet",
    "footer.madeby": "Ett projekt av Slowcraft.",
    "footer.privacy": "Lagrat lokalt. Ingen spårning. Inget konto krävs.",
    "footer.language": "Språk",
    "footer.app": "App",
    "footer.app.agb": "Villkor",
    "footer.app.privacy": "Integritetspolicy",
    "blog.back": "← Alla artiklar",
    "blog.readmore": "Läs mer →",
    "blog.headline": "Från maskinrummet.",
    "blog.lede": "Klarspråk om icke-monogami, relationsvård och varför en lugn app ibland hjälper mer än ett bra samtal."
  }
};
function t(lang) {
  return function(key) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

const $$Astro$1 = createAstro("https://rosterapp.tech");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { lang = "de" } = Astro2.props;
  const tr = t(lang);
  const base = lang === "de" ? "" : `/${lang}`;
  return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-3ef6ksr2> <div class="container bar" data-astro-cid-3ef6ksr2> <a${addAttribute(`${base}/`, "href")} class="brand" aria-label="Roster Startseite" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Vio", $$Vio, { "size": 26, "data-astro-cid-3ef6ksr2": true })} <span class="wordmark" data-astro-cid-3ef6ksr2>Roster</span> </a> <nav class="nav" aria-label="Hauptnavigation" data-astro-cid-3ef6ksr2> <a${addAttribute(`${base}/#features`, "href")} data-astro-cid-3ef6ksr2>${tr("nav.features")}</a> <a${addAttribute(`${base}/#pricing`, "href")} data-astro-cid-3ef6ksr2>${tr("nav.pricing")}</a> <a${addAttribute(`${base}/blog`, "href")} data-astro-cid-3ef6ksr2>${tr("nav.blog")}</a> </nav> <a href="https://apps.apple.com/app/roster" class="btn btn-primary header-cta" rel="noopener" data-astro-cid-3ef6ksr2>${tr("nav.cta")}</a> </div> </header> `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://rosterapp.tech");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang = "de" } = Astro2.props;
  const tr = t(lang);
  const base = lang === "de" ? "" : `/${lang}`;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="top" data-astro-cid-sz7xmlte> <div class="brandcol" data-astro-cid-sz7xmlte> <div class="brandrow" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Vio", $$Vio, { "size": 24, "data-astro-cid-sz7xmlte": true })} <span class="wordmark" data-astro-cid-sz7xmlte>Roster</span> </div> <p class="tagline" data-astro-cid-sz7xmlte>${tr("footer.tagline")}</p> <p class="privacy" data-astro-cid-sz7xmlte>${tr("footer.privacy")}</p> </div> <nav class="links"${addAttribute(tr("footer.legal"), "aria-label")} data-astro-cid-sz7xmlte> <span class="lbl" data-astro-cid-sz7xmlte>${tr("footer.legal")}</span> <a${addAttribute(`${base}/impressum`, "href")} data-astro-cid-sz7xmlte>${tr("footer.impressum")}</a> <a${addAttribute(`${base}/datenschutz`, "href")} data-astro-cid-sz7xmlte>${tr("footer.datenschutz")}</a> </nav> <nav class="links"${addAttribute(tr("footer.app"), "aria-label")} data-astro-cid-sz7xmlte> <span class="lbl" data-astro-cid-sz7xmlte>${tr("footer.app")}</span> <a${addAttribute(`${base}/appinfo/impressum`, "href")} data-astro-cid-sz7xmlte>${tr("footer.impressum")}</a> <a${addAttribute(`${base}/appinfo/agb`, "href")} data-astro-cid-sz7xmlte>${tr("footer.app.agb")}</a> <a${addAttribute(`${base}/appinfo/datenschutzrichtlinie`, "href")} data-astro-cid-sz7xmlte>${tr("footer.app.privacy")}</a> </nav> <nav class="links" aria-label="Sprache / Language" data-astro-cid-sz7xmlte> <span class="lbl" data-astro-cid-sz7xmlte>${tr("footer.language")}</span> <a href="/" data-astro-cid-sz7xmlte>Deutsch</a> <a href="/en/" data-astro-cid-sz7xmlte>English</a> <a href="/nl/" data-astro-cid-sz7xmlte>Nederlands</a> <a href="/es/" data-astro-cid-sz7xmlte>Español</a> <a href="/da/" data-astro-cid-sz7xmlte>Dansk</a> <a href="/sv/" data-astro-cid-sz7xmlte>Svenska</a> </nav> </div> <div class="bottom" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>© ${year} Slowcraft</span> <span data-astro-cid-sz7xmlte>${tr("footer.madeby")}</span> </div> </div> </footer> `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b, $$Vio as c, t };
