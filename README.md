# Roster – Website

Astro-Website für die Roster-App: Landing Page, rechtliche Unterseiten, Blog –
mit eingebautem SEO/GEO-Fundament (Schema, hreflang, Sitemap, llms.txt).

## Schnellstart

Du brauchst Node.js (ist installiert, wenn `node --version` etwas ausgibt).

```bash
npm install      # einmalig: Abhängigkeiten laden
npm run dev      # lokal starten -> http://localhost:4321
npm run build    # fertige Seite nach /dist bauen
npm run preview  # die gebaute Seite lokal ansehen
```

## Was wo liegt

```
src/
  pages/
    index.astro              -> Startseite DE  (/)
    impressum.astro          -> /impressum   [HIER deine Daten eintragen]
    datenschutz.astro        -> /datenschutz [HIER prüfen lassen]
    blog/index.astro         -> Blog-Übersicht
    blog/[slug].astro        -> Artikel-Template (automatisch)
    en/index.astro           -> Startseite EN  (/en)
  content/blog/*.md          -> Blogartikel als Markdown (neue Datei = neuer Artikel)
  components/                -> Header, Footer, Vio, PolyculeMap
  layouts/BaseLayout.astro   -> <head>, Meta, Schema, hreflang
  styles/global.css          -> alle Design-Tokens (Farben, Fonts)
  i18n/ui.ts                 -> Übersetzungstexte
public/
  robots.txt                 -> erlaubt Google + KI-Crawler
  llms.txt                   -> Kurzprofil für KI-Systeme
  og.png                     -> Social-Sharing-Bild
  favicon.svg
astro.config.mjs             -> Domain (SITE) + Sprachen
```

## Vor dem Go-Live (Checkliste)

1. **Domain eintragen** in `astro.config.mjs` (`const SITE = ...`) und in
   `public/robots.txt` (Sitemap-Zeile).
2. **Impressum + Datenschutz** mit echten Daten füllen (alle `[...]`-Felder)
   und einmal juristisch gegenprüfen lassen.
3. **App-Store-Link** ersetzen (steht aktuell als `apps.apple.com/app/roster`
   in Header, index, en/index).
4. **Studio-Name** final setzen (überall „Slowcraft" – per Suchen/Ersetzen,
   falls es doch anders heißt).
5. **og.png** bei Bedarf durch ein eigenes Bild ersetzen.

## Neuen Blogartikel schreiben

Neue Datei in `src/content/blog/` anlegen, z. B. `mein-artikel.md`:

```markdown
---
title: 'Titel des Artikels'
seoTitle: 'Kurzer Google-Titel, max. 60 Zeichen'
description: 'Ein Satz, der die Frage direkt beantwortet (wichtig für GEO).'
pubDate: 2026-06-25
lang: 'de'
translationKey: 'mein-artikel'
tags: ['Grundlagen']
---

Inhalt hier. Tipp: Die ersten ~200 Wörter sollten die Hauptfrage sofort
beantworten – das mögen sowohl Google als auch KI-Systeme.
```

Übersicht, Artikelseite, Sitemap-Eintrag entstehen automatisch.

### Google-Snippet (Titel & Beschreibung)

- `title` ist die H1 auf der Seite. `seoTitle` ist der Titel in Google (`<title>`,
  `og:title`) – ohne „– Roster", max. **60 Zeichen**, Hauptkeyword vorne, dahinter
  ein konkreter Nutzen (Zahl, „kostenloser Generator", „Leitfaden" …).
- `description`: **120–160 Zeichen**, beginnt mit dem Versprechen bzw. der Antwort.
- Ohne `seoTitle` wird `title – Roster` verwendet (oft zu lang, wird gekürzt).
- `npm run check-snippets` prüft die Längen; läuft automatisch vor jedem Build.
- Zahlen im Titel nur, wenn sie im Text in **allen** Sprachen stimmen.

### App-Store-Buttons im Artikel

Kommen automatisch aus `src/components/ArticleCtas.astro` (Box in der Mitte,
CTA am Ende, Sticky-Leiste auf dem iPhone). Die Überschrift hängt vom Thema ab:
neuen `translationKey` in `src/i18n/appCta.ts` einem Cluster zuordnen
(`map`, `feelings`, `organize`, `health`, `privacy`), sonst gilt `general`.

### Diagramm / Vorschaubild

Optionales Frontmatter `image` + `imageAlt`. Das Bild erscheint unter der H1
und dient als `og:image` und Schema-Bild (sonst gilt `/og.png`). Die Diagramme
werden nicht von Hand gebaut, sondern von `node scripts/blog-images.mjs` erzeugt:
1600×900 PNG für Google/Social plus 1200×675 WebP für die Anzeige, benannt nach
dem Artikel-Slug, Texte in allen 7 Sprachen im Skript. Das Skript setzt das
Frontmatter selbst. Neues Diagramm = neuer Eintrag in `DIAGRAMS` (Schlüssel =
`translationKey`). Mit `--sheet` entstehen Kontaktbögen zur Sichtprüfung auf
Überlauf.

## App-Store-Kampagnen auswerten

Alle App-Store-Links laufen über `appStoreUrl()` in `src/config/appStore.ts` und
tragen ein eigenes Kampagnen-Kürzel (`ct`). Nie einen App-Store-Link von Hand
einfügen – in Markdown ist das okay, dort setzt ein Build-Plugin das Kürzel.

Auswertung: **App Store Connect → App Analytics → Akquisition → Kampagnen**.
Dort pro Kürzel: Produktseitenaufrufe, Downloads, Umsatz.

| Kürzel | Wo |
|---|---|
| `b-{lang}-{key}-m` | Box in der Artikelmitte |
| `b-{lang}-{key}-e` | CTA am Artikelende |
| `b-{lang}-{key}-s` | Sticky-Leiste (iPhone) |
| `b-{lang}-{key}-t` | Link im Fließtext |
| `b-{lang}-{key}-sb` / `sb-{lang}` | Smart App Banner (Safari iOS) |
| `h-{lang}` | Button im Header |
| `home-{lang}-hero` / `home-{lang}-end` | Startseite |
| `feat-{lang}`, `test-{lang}`, `map-{lang}`, `rp-{lang}` | Feature-Seiten, Test, Polycule-Generator, Landingpage |

Bis 2026-11 lief alles über `ct=Website` (und `PolyculeMapper`) – ältere Zahlen
stehen dort.

## Eine Sprache ergänzen (ES / NL)

1. In `src/i18n/ui.ts` den `de`-Block kopieren und übersetzen.
2. Ordner `src/pages/es/` (bzw. `nl/`) anlegen, `en/index.astro` als Vorlage
   kopieren und übersetzen.
3. In `src/layouts/BaseLayout.astro` die `alternates`-Liste um die neue Sprache
   ergänzen, damit hreflang stimmt.

## Hosten

Empfohlen: GitHub-Repo + **Vercel** oder **Cloudflare Pages** (beide kostenlos
für so eine Seite, Build-Befehl `npm run build`, Output-Ordner `dist`). Danach
deine Strato-Domain in den DNS-Einstellungen draufzeigen lassen.
```
Build command:  npm run build
Output dir:     dist
```
