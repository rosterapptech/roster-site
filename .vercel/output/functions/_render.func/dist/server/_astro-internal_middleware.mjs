import { e as defineMiddleware, s as sequence } from './chunks/render-context_BHZNy_R4.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Bz_4InTj.mjs';
import 'piccolore';
import './chunks/astro/server_DwLGwedF.mjs';
import 'clsx';

const SUPPORTED = ["de", "en", "nl", "es", "da", "sv"];
const DEFAULT = "en";
function detectLang(header) {
  if (!header) return DEFAULT;
  for (const tag of header.split(",")) {
    const code = tag.split(";")[0].trim().slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(code)) return code;
  }
  return DEFAULT;
}
const onRequest$1 = defineMiddleware(async (ctx, next) => {
  const { pathname } = new URL(ctx.request.url);
  if (pathname.startsWith("/_") || pathname.includes(".")) return next();
  const nonDeLangs = SUPPORTED.filter((l) => l !== "de");
  const alreadyLocalized = nonDeLangs.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );
  if (alreadyLocalized) return next();
  const cookieLang = ctx.cookies.get("roster-lang")?.value;
  const lang = cookieLang && SUPPORTED.includes(cookieLang) ? cookieLang : detectLang(ctx.request.headers.get("accept-language"));
  if (lang === "de") return next();
  const target = pathname === "/" ? `/${lang}/` : `/${lang}${pathname}`;
  return Response.redirect(new URL(target, ctx.url.origin), 302);
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
