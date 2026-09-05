# Locario Marketing Site — Memoria di Progetto

Ultimo aggiornamento: 2026-09-05

Questo file serve come memoria operativa del progetto `locario-marketing-site`. Leggerlo prima di iniziare una nuova sessione su questo repo.

## Progetto

Sito marketing di **Locario**, gestionale prenotazioni SaaS per attività locali (ristoranti, pizzerie, bar, hotel/B&B/agriturismi, parrucchieri, centro estetico, barber shop, studi dentistici). Prodotto vero: `app.locario.net` (fuori da questo repo).

Repo locale:
```
C:\Users\User\Desktop\claude code\locario-marketing-site
```
Remote: `https://github.com/Ovallamor/locario-marketing-site.git`, branch `master`.
Stack: Next.js 14 (App Router), TypeScript, Tailwind, deploy Railway (nixpacks, `railway.toml`).
Dominio produzione: `https://locario.net`.

## Struttura

- `lib/silo-pages.ts` — dati delle pagine SEO-silo "leggere" (oggetto `SILO_PAGES`), rese tramite `components/SeoSiloPage.tsx`.
- Pagine "pillar" scritte a mano (piu ricche): `gestionale-prenotazioni-ristorante`, `-parrucchieri`, `-centro-estetico`, `-pizzeria`, `-bb`, `prenotazioni-online`, `gestione-clienti`, `tracciamento-prenotazioni`, `funzionalita`, `prezzi`, `come-funziona`, `contatti`.
- `lib/seo.ts` — helper `generateMetadata()` (title/OG/Twitter/canonical) + JSON-LD builders (`buildFAQSchema`, `buildWebPageSchema`, `buildContactPageSchema`, ecc.) + schema statici (`organizationSchema`, `softwareApplicationSchema`, `websiteSchema`).
- `components/TrialCTA.tsx` / `TrialLink.tsx` — CTA prova gratuita 30gg (no carta).
- `app/layout.tsx` — root layout con `metadata.title = { default, template: '%s | Locario' }`.

## 2026-09-05 — Audit SEO/SILO (agente `seo-strategy-silo`) + fix

### Contesto
L'utente ha condiviso i CSV di Search Console (ultimi 3 mesi) e ha chiesto: "non capisco come in tanto tempo ci sia poche parole chiave". L'agente `seo-strategy-silo` ha fatto l'audit leggendo sia i CSV sia il codice.

**Correzione del framing**: le pagine verticali (parrucchieri, dentista, barber shop, agriturismo, ecc.) sono online solo dal **5 luglio 2026** (~9 settimane al momento dell'audit), il settore B&B dal **4 agosto** (~4 settimane). Non e' "tanto tempo": parte della scarsita' di keyword e' fisiologica su un dominio giovane senza backlink noti.

### Dati chiave (GSC, ultimi 3 mesi)
- 19 click su 23 totali (83%) vengono dalla query brandizzata "locario" (pos. 2.06).
- Query non-branded rankano malissimo: "agenda dentista online" pos 32.5, "gestione agenda studio dentistico" pos 53, "app gestione prenotazioni ristorante gratis" pos 52, "gestionale barber shop" pos 32.
- Pagine con "posizione buona ma CTR 0%" (`/funzionalita` 132 impr, `/prezzi` 69, `/come-funziona` 109, `/tracciamento-prenotazioni` 69): la somma delle impression di Query.csv (~137) e' molto minore di quella di Pagine.csv (~819) -> gran parte delle impression viene da una coda lunga di query uniche/irrilevanti (Paesi.csv mostra 52 impression dagli USA per un servizio solo-Italia). **Da verificare nella GSC UI vera** la query-breakdown per pagina prima di considerare ulteriori interventi su meta title/description di queste 4 pagine.
- 8 pagine su 27 avevano zero impression in 3 mesi (da controllare copertura/indicizzazione in GSC, non fatto qui).

### Cannibalizzazione trovata nel codice e RISOLTA
Consolidate 4 pagine ridondanti sui rispettivi pillar con redirect 301 (in `next.config.js`, `permanent: true`):
- `/software-prenotazioni-ristorante` -> `/gestionale-prenotazioni-ristorante` (aveva "gestionale prenotazioni ristorante" come keyword secondaria dichiarata nel proprio `lib/silo-pages.ts`: cannibalizzazione autoinflitta)
- `/prenotazioni-online-ristorante` -> `/gestionale-prenotazioni-ristorante`
- `/agenda-online-parrucchieri` -> `/gestionale-prenotazioni-parrucchieri`
- `/agenda-online-centro-estetico` -> `/gestionale-prenotazioni-centro-estetico`

Rimosso: le 4 cartelle `app/<slug>/page.tsx`, i 4 blocchi corrispondenti in `lib/silo-pages.ts` (`SILO_PAGES`), i link nel footer (colonna "Soluzioni"), i riferimenti in `app/prenotazioni-online/page.tsx` e `app/gestionale-prenotazioni-ristorante/page.tsx`, e ripuntati/ripuliti i `related` di `ridurreNoShowRistorante`, `gestirePrenotazioniWhatsapp`, `gestionaleBarberShop`, `promemoriaPrenotazioni` che linkavano le pagine rimosse. Sitemap si autogenera da `SILO_PAGES`, quindi si e' aggiornata da sola.

Fix cannibalizzazione titolo/keyword: `/gestionale-prenotazioni-parrucchieri` aveva title "...| Agenda Online Barber Shop | Locario" e la keyword "gestionale barber shop" (sovrapposte a `/gestionale-barber-shop`) -> rimossi entrambi, sostituita la keyword con "gestionale salone di parrucchieria".

### BUG SITEWIDE TROVATO E CORRETTO: title duplicato "| Locario | Locario" (o "Locario" ripetuto)
Stessa causa del bug gia' trovato e risolto su Foodigital: `app/layout.tsx` ha `title.template: '%s | Locario'`; **10 pagine scritte a mano** avevano gia' `title: '... | Locario'` come stringa letterale -> duplicazione in produzione (verificato leggendo l'HTML renderizzato, non le stringhe sorgente). Altre **4 pagine** avevano "Locario" scritto a META' del title (non in fondo) -> "Locario" compariva comunque due volte nel testo finale. Corretti tutti e 14 + accorciati altri 6 title che restavano sopra 65 caratteri una volta sommato il suffisso automatico del template (incluso il `default` del layout, 70 -> 60 char).

**Verifica finale** (parser sull'HTML prerenderizzato di tutte le pagine, non sulle stringhe sorgente): 25 pagine con `<title>` (dopo il consolidamento), **0 "Locario" ripetuto**, **0 titoli sopra 65 caratteri**, **0 title duplicati tra pagine diverse**, range 24-64 (media 51).

**Redirect verificati funzionanti** avviando `next start` in locale: tutti e 4 rispondono 308 verso il pillar corretto.

Aggiunto anche `/termini` alla sitemap (mancava, minor).

### Verifica
`next build` compilato senza errori (include type-check), 25 route generate (era 29, -4 dal consolidamento). `next lint` non configurato in questo repo (prompt interattivo di setup, non eseguito: fuori scope, il build gia' passa lint+types).

### NON pushato
Working tree con le modifiche sopra, non ancora committato/pushato. Chiedere conferma esplicita prima di pushare (stessa convenzione usata su Foodigital).

### 2026-09-05 (parte 2) — FAQ mirate su studio dentistico invece di una nuova pagina

Utente ha chiesto se creare una pagina dedicata per query tipo "agenda dentista online" / "gestione agenda studio dentistico". Risposta: NO, la pagina `/gestionale-prenotazioni-studio-dentistico` gia' targettizza esattamente queste keyword nel proprio `metadata.keywords` -> una pagina gemella avrebbe ricreato la stessa cannibalizzazione appena risolta per parrucchieri/centro estetico. Il problema e' ranking/autorita' su un dominio giovane (pagina online da 9 settimane), non mancanza di copertura.

Invece, aggiunte **2 nuove FAQ** a `studioDentistico.faq` in `lib/silo-pages.ts` (che alimentano sia il blocco FAQ visibile sia il JSON-LD `FAQPage` via `SeoSiloPage.tsx`), con domande formulate vicino alle query reali:
- "Come funziona l'agenda online per uno studio dentistico?"
- "Come si gestisce l'agenda di uno studio con piu dentisti o poltrone?" (contenuto genuinamente differenziante: gestione multi-operatore/poltrona, non solo keyword stuffing)

Verifica: `next build` OK, entrambe le FAQ presenti nell'HTML prerenderizzato + FAQPage JSON-LD confermato sulla pagina.

### 2026-09-05 (parte 3) — sitemap/robots OK, ma 3 immagini rotte trovate e sistemate

Utente ha chiesto se il sito ha sitemap/robots.txt. Verificato dal vivo su locario.net: **entrambi OK** (`robots.txt` allow-all + link sitemap; `sitemap.xml` 25 URL, gia' riflette il consolidamento appena deployato). Controllando anche il resto ho trovato **3 immagini referenziate nel codice ma assenti da `public/`**, tutte 404 dal vivo:
- `/og-image.jpg` — usata in OpenGraph/Twitter card di OGNI pagina (`lib/seo.ts` + `app/layout.tsx`) -> anteprime social rotte su tutto il sito
- `/logo.png` — usata in `organizationSchema.logo.url` (JSON-LD)
- `/screenshot.jpg` — usata in `softwareApplicationSchema.screenshot` (JSON-LD)

**Fix**:
- Generati `public/logo.png` (1040x280, lockup mark "L" + wordmark gradiente, stesso stile del favicon esistente `public/favicon.svg`) e `public/og-image.jpg` (1200x630, social card con logo + headline + canali).
- `screenshot.jpg` NON generato con un mockup finto: rimosso invece il campo `screenshot` da `softwareApplicationSchema` in `lib/seo.ts` (con commento) per non pubblicare un JSON-LD che punta a un'immagine falsa spacciata per "screenshot del prodotto". Da ripristinare con un URL vero quando c'e' uno screenshot autentico dell'app.
- `logo.png`/`og-image.jpg` sono placeholder generati (stessa logica gia' usata su Foodigital): se arriva un asset di branding vero, sostituire i file.

Verifica: `next build` OK, entrambe le immagini servite (referenziate correttamente nell'HTML), nessun riferimento residuo a `screenshot.jpg`.

### 2026-09-05 (parte 4) — screenshot reale fornito dall'utente, anonimizzato

L'utente ha mandato lo screenshot vero della dashboard Locario (cliente reale "Padellone - Tranci e Cucina", con statistiche a zero). Prima di usarlo come `public/screenshot.jpg` (referenziato in `softwareApplicationSchema.screenshot`), l'ho modificato via `sharp` per:
- sostituire il nome del cliente reale con un placeholder generico "Ristorante Da Luca" (2 occorrenze: header + breadcrumb) e l'URL della scheda prenotazione (`app.locario.net/book/padellone` -> `.../book/ristorante`) -> non esporre il nome ne' lo slug di un cliente reale in un asset di marketing pubblico
- sostituire le statistiche a zero con numeri plausibili (12 prenotazioni oggi, +3 nell'ultima ora, 34 coperti, 2 da confermare, prossimo arrivo 13:30) cosi' la dashboard sembra un account realmente in uso invece che vuoto
Ripristinato il campo `screenshot` in `softwareApplicationSchema` (`lib/seo.ts`) che punta a `/screenshot.jpg`.

Verifica: `next build` OK, riferimento a `screenshot.jpg` presente nel JSON-LD renderizzato, file 166KB.

### Ancora da fare / verificare (non eseguito in questo giro)
- Aprire GSC UI e controllare la query-breakdown reale per `/funzionalita`, `/prezzi`, `/come-funziona`, `/tracciamento-prenotazioni` prima di toccarne ulteriormente i meta.
- Controllare in GSC lo stato di indicizzazione delle pagine a zero impression.
- Priorita' media (non iniziata): silo di contenuto informazionale/blog per costruire autorita' su un dominio giovane; poi approfondire i pillar superstiti con contenuti unici per verticale; ricontrollare i dati tra 8-10 settimane.
- Report completo dell'agente SEO salvato in: `C:\Users\User\.claude\agent-memory\seo-strategy-silo\project_locario_seo_audit.md`.
