import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer, t } from '../../chunks/Footer_CmRuYHsA.mjs';
import { g as getCollection } from '../../chunks/_astro_content_8Ysm2A-U.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "sv";
  const tr = t(lang);
  const posts = (await getCollection("blog")).filter((p) => p.data.lang === lang).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const fmt = (d) => d.toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/blog", "title": "Blog \u2013 Roster", "description": "", "data-astro-cid-r4fxjnwd": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-r4fxjnwd": true })} ${maybeRenderHead()}<main class="container blog-index" data-astro-cid-r4fxjnwd> <p class="eyebrow" data-astro-cid-r4fxjnwd>Blog</p> <h1 data-astro-cid-r4fxjnwd>${tr("blog.headline")}</h1> <p class="lede" data-astro-cid-r4fxjnwd>${tr("blog.lede")}</p> <div class="posts" data-astro-cid-r4fxjnwd> ${posts.map((post) => renderTemplate`<a${addAttribute(`/sv/blog/${post.id}`, "href")} class="card post" data-astro-cid-r4fxjnwd> <time${addAttribute(post.data.pubDate.toISOString(), "datetime")} data-astro-cid-r4fxjnwd>${fmt(post.data.pubDate)}</time> <h2 data-astro-cid-r4fxjnwd>${post.data.title}</h2> <p data-astro-cid-r4fxjnwd>${post.data.description}</p> <span class="more" data-astro-cid-r4fxjnwd>${tr("blog.readmore")}</span> </a>`)} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-r4fxjnwd": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/sv/blog/index.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/sv/blog/index.astro";
const $$url = "/sv/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
