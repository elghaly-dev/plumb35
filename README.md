# Plumb

Ready desk software — lifetime paid seats.

**Homepage:** https://plumb-35.elghaly.dev/

✝️🧿🪬

3️⃣🧿5️⃣

---

| Seat | Price | Shop (PayPal) |
|------|-------|--------|
| Starter | $350 | [Buy](https://plumb-shop.elghaly.dev/products/plumb-starter) |
| Pro | $699 | [Buy](https://plumb-shop.elghaly.dev/products/plumb-pro) |
| Source | $1,999 | [Buy](https://plumb-shop.elghaly.dev/products/plumb-source) |

Ask us on mail — [support@elghaly.dev](mailto:support@elghaly.dev) · We are 24

Titan / gRPC quoted separately. Follow-up $149/mo after the update window.

Flash path screenshots on the live page: Kamino 15k USDC borrow + Jupiter loop (redacted Solscan captures — illustrations, no transaction signature published).

## Files

| File | What it is |
|------|------------|
| `index.html` | The whole sales page — markup plus inline CSS |
| `i18n.js` | Copy for all six languages (`en ar ru zh de es`) and the language switcher |
| `app.js` | Sticky header, scroll reveal, FAQ accordion, mobile seat bar — all optional enhancement |
| `brand-35-plumb.{jpg,webp}` | The 35 house mark, featured below the hero |
| `board-*.{png,webp}` | Desk screenshots used in the gallery and seat cards |
| `assets/flash-15k-*.{png,webp}` | Redacted Solscan captures for the on-chain proof section |
| `404.html`, `robots.txt`, `sitemap.xml`, `site.webmanifest` | Crawler and browser support files |

### Editing copy

Text lives in **two** places and both must be changed together: the English
in `index.html` and the same key in the `en` block of `i18n.js`. `i18n.js`
overwrites the markup on load, so editing only the HTML has no visible effect.
Each translatable element carries an `id` that matches its key.

A key missing from a locale falls back to its `en` text, and the page then
shows that locale's `localeNote` saying some parts are still in English.

Images are served as WebP with the original PNG/JPEG kept as a `<picture>`
fallback. If you replace one, regenerate both files or drop the `<source>`.

## Hosting (GitHub Pages)

DNS is correct (`plumb-35.elghaly.dev` → `alarm2024.github.io`). The site 404s because **every Actions deploy has failed** — GitHub reports billing must be resolved before runners start.

**Fix A (recommended if billing is blocked):** In repo **Settings → Pages**, switch source from *GitHub Actions* to **Deploy from branch `main` / `(root)`**. Static files (`index.html`, `CNAME`, `.nojekyll`) need no build step.

**Fix B:** Resolve billing under **Settings → Billing & plans**, then re-run the `pages` workflow (or push to `main`).

This repo contains only public sales HTML — no secrets. Making the repo public is optional but restores free Actions minutes if you prefer the workflow path.
