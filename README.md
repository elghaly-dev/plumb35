# Plumb

Ready desk software — lifetime paid seats.

**Homepage:** https://plumb.elghaly.dev/

✝️🧿🪬

3️⃣🧿5️⃣

---

| Seat | Price | Stripe |
|------|-------|--------|
| Starter | $299 | [Pay](https://buy.stripe.com/14A6oB4AD7GBd2g3QN3Ru00) |
| Pro | $699 | [Pay](https://buy.stripe.com/4gM00d4AD2mhfao1IF3Ru01) |
| Source | $1,999 | [Pay](https://buy.stripe.com/5kQ5kx4AD2mh2nC0EB3Ru02) |

Ask us on mail — [support@elghaly.dev](mailto:support@elghaly.dev) · We are 24

Titan / gRPC quoted separately. Follow-up $149/mo after the update window.

Flash proof gallery on the live page: Kamino 15k USDC borrow + Jupiter loop (redacted Solscan captures).

## Hosting (GitHub Pages)

DNS is correct (`plumb.elghaly.dev` → `alarm2024.github.io`). The site 404s because **every Actions deploy has failed** — GitHub reports billing must be resolved before runners start.

**Fix A (recommended if billing is blocked):** In repo **Settings → Pages**, switch source from *GitHub Actions* to **Deploy from branch `main` / `(root)`**. Static files (`index.html`, `CNAME`, `.nojekyll`) need no build step.

**Fix B:** Resolve billing under **Settings → Billing & plans**, then re-run the `pages` workflow (or push to `main`).

This repo contains only public sales HTML — no secrets. Making the repo public is optional but restores free Actions minutes if you prefer the workflow path.
