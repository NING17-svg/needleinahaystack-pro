# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-29 - Adsterra integration unit values populated

- adsterra-integrator replaced the six empty placeholder values in `src/data/ads.ts` with real Adsterra Native Banner, Banner 728x90, 468x60, 320x50, 160x600, and Smartlink codes obtained from the Adsterra publisher dashboard.
- `src/data/ads.ts` now contains all six fixed ad unit values; no new fields or layout changes were introduced.
- No change to AGENTS.md, page shells, navigation, GA4, GSC, Cloudflare, or domain configuration.

### 2026-09-29 - Needle In A Haystack fan guide launched

- one-click-builder assembled 12 primary-locale pages from launch-content-package-v3 (home + 11 fixed pages) plus 3 auxiliary template fixture pages (wiki, faq, about).
- Site Plan `5a5648ec9bc99fcdd4b8a6aad72141dfaa29f3db9732c7b2d58e4443983a9a85`, content-package status `complete`.
- All verify checks pass (typecheck, lint, validate:template, validate:content, validate:indexnow, build, validate:rendered-seo).
- Public content hygiene check passed.
- V3 route contract validator passed.
- `npm run indexnow:setup` generated public/indexnow-20847c0c5d9eceb2ab4bca883c0ad4bd.txt for IndexNow submission.

### 2026-08-12 - Static discovery and review freshness baseline added
