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
description: 'Ein Satz, der die Frage direkt beantwortet (wichtig für GEO).'
pubDate: 2026-06-25
lang: 'de'
tags: ['Grundlagen']
---

Inhalt hier. Tipp: Die ersten ~200 Wörter sollten die Hauptfrage sofort
beantworten – das mögen sowohl Google als auch KI-Systeme.
```

Übersicht, Artikelseite, Sitemap-Eintrag entstehen automatisch.

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
