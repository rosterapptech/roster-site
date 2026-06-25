import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BHoDcQiB.mjs';
import { manifest } from './manifest_BHyy2csr.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/appinfo/agb.astro.mjs');
const _page2 = () => import('./pages/appinfo/datenschutzrichtlinie.astro.mjs');
const _page3 = () => import('./pages/appinfo/impressum.astro.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/da/appinfo/agb.astro.mjs');
const _page7 = () => import('./pages/da/appinfo/datenschutzrichtlinie.astro.mjs');
const _page8 = () => import('./pages/da/appinfo/impressum.astro.mjs');
const _page9 = () => import('./pages/da/blog/_slug_.astro.mjs');
const _page10 = () => import('./pages/da/blog.astro.mjs');
const _page11 = () => import('./pages/da/datenschutz.astro.mjs');
const _page12 = () => import('./pages/da/impressum.astro.mjs');
const _page13 = () => import('./pages/da.astro.mjs');
const _page14 = () => import('./pages/datenschutz.astro.mjs');
const _page15 = () => import('./pages/en/appinfo/agb.astro.mjs');
const _page16 = () => import('./pages/en/appinfo/datenschutzrichtlinie.astro.mjs');
const _page17 = () => import('./pages/en/appinfo/impressum.astro.mjs');
const _page18 = () => import('./pages/en/blog/_slug_.astro.mjs');
const _page19 = () => import('./pages/en/blog.astro.mjs');
const _page20 = () => import('./pages/en/datenschutz.astro.mjs');
const _page21 = () => import('./pages/en/impressum.astro.mjs');
const _page22 = () => import('./pages/en.astro.mjs');
const _page23 = () => import('./pages/es/appinfo/agb.astro.mjs');
const _page24 = () => import('./pages/es/appinfo/datenschutzrichtlinie.astro.mjs');
const _page25 = () => import('./pages/es/appinfo/impressum.astro.mjs');
const _page26 = () => import('./pages/es/blog/_slug_.astro.mjs');
const _page27 = () => import('./pages/es/blog.astro.mjs');
const _page28 = () => import('./pages/es/datenschutz.astro.mjs');
const _page29 = () => import('./pages/es/impressum.astro.mjs');
const _page30 = () => import('./pages/es.astro.mjs');
const _page31 = () => import('./pages/impressum.astro.mjs');
const _page32 = () => import('./pages/nl/appinfo/agb.astro.mjs');
const _page33 = () => import('./pages/nl/appinfo/datenschutzrichtlinie.astro.mjs');
const _page34 = () => import('./pages/nl/appinfo/impressum.astro.mjs');
const _page35 = () => import('./pages/nl/blog/_slug_.astro.mjs');
const _page36 = () => import('./pages/nl/blog.astro.mjs');
const _page37 = () => import('./pages/nl/datenschutz.astro.mjs');
const _page38 = () => import('./pages/nl/impressum.astro.mjs');
const _page39 = () => import('./pages/nl.astro.mjs');
const _page40 = () => import('./pages/sv/appinfo/agb.astro.mjs');
const _page41 = () => import('./pages/sv/appinfo/datenschutzrichtlinie.astro.mjs');
const _page42 = () => import('./pages/sv/appinfo/impressum.astro.mjs');
const _page43 = () => import('./pages/sv/blog/_slug_.astro.mjs');
const _page44 = () => import('./pages/sv/blog.astro.mjs');
const _page45 = () => import('./pages/sv/datenschutz.astro.mjs');
const _page46 = () => import('./pages/sv/impressum.astro.mjs');
const _page47 = () => import('./pages/sv.astro.mjs');
const _page48 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/appinfo/agb.astro", _page1],
    ["src/pages/appinfo/datenschutzrichtlinie.astro", _page2],
    ["src/pages/appinfo/impressum.astro", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/da/appinfo/agb.astro", _page6],
    ["src/pages/da/appinfo/datenschutzrichtlinie.astro", _page7],
    ["src/pages/da/appinfo/impressum.astro", _page8],
    ["src/pages/da/blog/[slug].astro", _page9],
    ["src/pages/da/blog/index.astro", _page10],
    ["src/pages/da/datenschutz.astro", _page11],
    ["src/pages/da/impressum.astro", _page12],
    ["src/pages/da/index.astro", _page13],
    ["src/pages/datenschutz.astro", _page14],
    ["src/pages/en/appinfo/agb.astro", _page15],
    ["src/pages/en/appinfo/datenschutzrichtlinie.astro", _page16],
    ["src/pages/en/appinfo/impressum.astro", _page17],
    ["src/pages/en/blog/[slug].astro", _page18],
    ["src/pages/en/blog/index.astro", _page19],
    ["src/pages/en/datenschutz.astro", _page20],
    ["src/pages/en/impressum.astro", _page21],
    ["src/pages/en/index.astro", _page22],
    ["src/pages/es/appinfo/agb.astro", _page23],
    ["src/pages/es/appinfo/datenschutzrichtlinie.astro", _page24],
    ["src/pages/es/appinfo/impressum.astro", _page25],
    ["src/pages/es/blog/[slug].astro", _page26],
    ["src/pages/es/blog/index.astro", _page27],
    ["src/pages/es/datenschutz.astro", _page28],
    ["src/pages/es/impressum.astro", _page29],
    ["src/pages/es/index.astro", _page30],
    ["src/pages/impressum.astro", _page31],
    ["src/pages/nl/appinfo/agb.astro", _page32],
    ["src/pages/nl/appinfo/datenschutzrichtlinie.astro", _page33],
    ["src/pages/nl/appinfo/impressum.astro", _page34],
    ["src/pages/nl/blog/[slug].astro", _page35],
    ["src/pages/nl/blog/index.astro", _page36],
    ["src/pages/nl/datenschutz.astro", _page37],
    ["src/pages/nl/impressum.astro", _page38],
    ["src/pages/nl/index.astro", _page39],
    ["src/pages/sv/appinfo/agb.astro", _page40],
    ["src/pages/sv/appinfo/datenschutzrichtlinie.astro", _page41],
    ["src/pages/sv/appinfo/impressum.astro", _page42],
    ["src/pages/sv/blog/[slug].astro", _page43],
    ["src/pages/sv/blog/index.astro", _page44],
    ["src/pages/sv/datenschutz.astro", _page45],
    ["src/pages/sv/impressum.astro", _page46],
    ["src/pages/sv/index.astro", _page47],
    ["src/pages/index.astro", _page48]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "90f26d2d-8f36-4b7c-8cd9-0675974f48cb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
