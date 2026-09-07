# App Store Server Notifications → Telegram

Nimmt Apples V2-Notifications entgegen, verifiziert die Signatur mit
`@apple/app-store-server-library` und schickt eine deutsche Meldung an Telegram.
Keine Datenbank, kein State.

```
src/pages/api/asn/[secret].ts   ← Endpoint (Astro Server Endpoint, prerender = false)
lib/asn/verifier.js             ← SignedDataVerifier pro Environment + Bundle-ID, gecached
lib/asn/appleRootCerts.js       ← Apple Root CAs als base64-Konstanten
lib/asn/messages.js             ← Event → deutscher Meldungstext
lib/asn/creators.js             ← offerIdentifier → Creator + Bounty
lib/asn/telegram.js             ← sendMessage-Wrapper
```

## Warum nicht `api/asn/[secret].js` im Root

`@astrojs/vercel` schreibt das gesamte Deployment nach Build Output API v3.
Die erzeugte `.vercel/output/config.json` enthält nur die Routen des Adapters
und endet auf einen 404-Catch-All — ein Root-`api/`-Ordner wird nicht
mitgebaut und wäre nie erreichbar. Deshalb liegt der Endpoint in `src/pages/`
und landet damit in `_render.func` (Runtime `nodejs22.x`, nicht Edge — die
Signaturprüfung braucht `node:crypto` und X.509).

## Endpoint-URL — der Slash ist Pflicht

```
https://rosterapp.tech/api/asn/<ASN_PATH_SECRET>/
```

`trailingSlash: 'always'` in `astro.config.mjs` erzeugt die Route als
`^/api/asn/([^/]+?)/$`. Ohne abschließenden Slash antwortet Vercel mit 308 —
und Apple folgt Redirects nicht. **In App Store Connect unbedingt mit Slash
eintragen.**

Secret erzeugen:

```bash
openssl rand -hex 24
```

## Deployment

1. Env-Vars in Vercel setzen (Project → Settings → Environment Variables),
   Keys siehe `.env.example` im Repo-Root.
2. Pushen. Der Endpoint wird als Teil von `_render.func` mitgebaut.
3. In App Store Connect: App → App-Informationen → *App Store Server
   Notifications* → Version **V2**, URL für Production und Sandbox eintragen
   (dieselbe URL für beide Apps — unterschieden wird über die Bundle-ID im Payload).

## Testbenachrichtigung

App Store Connect → App → App-Informationen → *App Store Server Notifications*
→ **Testbenachrichtigung senden**. Es sollte
„🧪 Testbenachrichtigung — Endpoint funktioniert" im Telegram-Chat landen.

Kommt nichts: `vercel logs <deployment-url>`. Der Endpoint quittiert Apple
immer mit 200 und loggt Fehler nur nach `console.error`.

## Env-Vars

| Variable | Pflicht | Bedeutung |
|---|---|---|
| `APPLE_BUNDLE_IDS` | ja | Komma-separierte Allowlist. Alles andere → 400. |
| `APPLE_APP_APPLE_ID_ROSTER` | ja (Prod) | Apple-ID der App aus App Store Connect, numerisch. |
| `APPLE_APP_APPLE_ID_SPURLOS` | ja (Prod) | dito für Spurlos. |
| `ASN_PATH_SECRET` | ja | Secret im Pfad. |
| `TELEGRAM_BOT_TOKEN` | ja | Von @BotFather. |
| `TELEGRAM_CHAT_ID` | ja | Eigene Chat-ID (z. B. via @userinfobot). |
| `SEND_SANDBOX_EVENTS` | nein | `false` schaltet Sandbox-Meldungen stumm. Apple bekommt trotzdem 200. |

Spurlos' Bundle-ID ist `EliasStudios.Spurlos--Metadaten-lo-schen`; damit die
Variable trotzdem `APPLE_APP_APPLE_ID_SPURLOS` heißen darf, gibt es die
Alias-Map `APP_ENV_ALIAS` in `verifier.js`. Eine dritte App braucht: Eintrag in
`APPLE_BUNDLE_IDS`, die passende `APPLE_APP_APPLE_ID_*`-Variable (ggf. Alias)
und je einen Eintrag in `APP_NAMES`/`PRODUCT_NAMES` in `messages.js`.

## Antwortverhalten

| Situation | Status |
|---|---|
| kein POST | 405 |
| Secret falsch/fehlt | 404 (nicht 401 — der Pfad soll für Scanner nicht existieren) |
| `signedPayload` fehlt oder Body kaputt | 400 |
| Signatur, Bundle-ID oder Environment falsch | 400, **nichts gesendet** |
| alles ok | 200 |

Nach bestandener Verifikation ist der Status **immer** 200 — auch wenn Telegram
ausfällt. Ein Nicht-200 würde Apple stundenlang retrien lassen und dieselbe
Meldung mehrfach aufs Handy spülen.

Anders als bei einer klassischen `(req, res)`-Vercel-Function lässt sich hier
nicht erst 200 schicken und danach senden — die Response *ist* der Rückgabewert.
Telegram wird deshalb vorher awaited, gedeckelt durch das 5-s-Timeout in
`telegram.js`. Der Fehlerfall ändert nichts am Status.

## Middleware

`src/middleware.ts` lässt `/api/`-Pfade unangetastet durch. Ohne diesen Guard
würde die Spracherkennung eine Notification mit fremdem `Accept-Language` auf
`/en/api/asn/…` umleiten.

## Creator-Bounties

`creators.js` mappt den Offer-Referenznamen aus App Store Connect auf Creator
und Bounty. Bei `OFFER_REDEEMED` steht in `transaction.offerIdentifier` der
**Referenzname des Offers**, nicht der individuelle Code — pro Creator also ein
eigenes Offer anlegen. Ohne Mapping wird der rohe Identifier ausgegeben.

## Zertifikate

Die Apple Root CAs liegen als base64-Konstanten in `appleRootCerts.js`, nicht
als `.cer`-Dateien: Binärdateien landen über File-Tracing nur unzuverlässig im
Function-Bundle. Als JS-Konstante sind sie nachweislich in
`_render.func` enthalten. Quelle und Erneuerungs-Kommando stehen im File.
