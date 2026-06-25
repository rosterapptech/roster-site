import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_DwLGwedF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer, t } from '../../../chunks/Footer_CmRuYHsA.mjs';
import { r as renderEntry, g as getCollection } from '../../../chunks/_astro_content_8Ysm2A-U.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://rosterapp.tech");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.filter((p) => p.data.lang === "en").map((post) => ({
    params: { slug: post.id },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  const lang = "en";
  const tr = t(lang);
  const fmt = (d) => d.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.data.title,
    description: post.data.description,
    datePublished: post.data.pubDate.toISOString(),
    ...post.data.updatedDate && { dateModified: post.data.updatedDate.toISOString() },
    author: { "@type": "Organization", name: post.data.author },
    inLanguage: lang
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "path": `/blog/${post.id}`, "title": `${post.data.title} \u2013 Roster`, "description": post.data.description, "schema": schema, "data-astro-cid-zskweizq": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "data-astro-cid-zskweizq": true })} ${maybeRenderHead()}<main class="container article" data-astro-cid-zskweizq> <a href="/en/blog" class="back" data-astro-cid-zskweizq>${tr("blog.back")}</a> <time${addAttribute(post.data.pubDate.toISOString(), "datetime")} data-astro-cid-zskweizq>${fmt(post.data.pubDate)}</time> <h1 data-astro-cid-zskweizq>${post.data.title}</h1> <div class="body" data-astro-cid-zskweizq> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-zskweizq": true })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-zskweizq": true })} ` })} `;
}, "/Users/eliaswilkening/Desktop/roster-site/src/pages/en/blog/[slug].astro", void 0);

const $$file = "/Users/eliaswilkening/Desktop/roster-site/src/pages/en/blog/[slug].astro";
const $$url = "/en/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
