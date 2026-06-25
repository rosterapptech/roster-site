import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer, t } from '../../chunks/Footer_CmRuYHsA.mjs';
import { g as getCollection } from '../../chunks/_astro_content_8Ysm2A-U.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "en";
  const tr = t(lang);
  const posts = (await getCollection("blog")).filter((p) => p.data.lang === lang).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const fmt = (d) => d.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": "/blog", "title": "Blog \u2013 Roster", "description": "Thoughts on polyamory, open relationships, and organising connections without stress.", "data-astro-cid-s63ypivo": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-s63ypivo": true })} ${maybeRenderHead()}<main class="container blog-index" data-astro-cid-s63ypivo> <p class="eyebrow" data-astro-cid-s63ypivo>Blog</p> <h1 data-astro-cid-s63ypivo>${tr("blog.headline")}</h1> <p class="lede" data-astro-cid-s63ypivo>${tr("blog.lede")}</p> <div class="posts" data-astro-cid-s63ypivo> ${posts.map((post) => renderTemplate`<a${addAttribute(`/en/blog/${post.id}`, "href")} class="card post" data-astro-cid-s63ypivo> <time${addAttribute(post.data.pubDate.toISOString(), "datetime")} data-astro-cid-s63ypivo>${fmt(post.data.pubDate)}</time> <h2 data-astro-cid-s63ypivo>${post.data.title}</h2> <p data-astro-cid-s63ypivo>${post.data.description}</p> <span class="more" data-astro-cid-s63ypivo>${tr("blog.readmore")}</span> </a>`)} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-s63ypivo": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/en/blog/index.astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/en/blog/index.astro";
const $$url = "/en/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
