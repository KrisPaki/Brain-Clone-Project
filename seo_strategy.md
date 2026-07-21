# SEO Strategy

## In scope
- Public marketing pages in `artifacts/gobrain/`
- Product and feature pages (`/`, `/its`, `/its-school`, `/strefa-terapeuty`, `/karta-mowy`, `/sklep`)
- Informational and support pages (`/szkolenia-i-webinary`, `/darmowe-webinary`, `/blog`, `/blog/:slug`, `/faq`, `/pomoc`)
- Educational catalog pages (`/programy-edukacyjne`, `/programy-edukacyjne/:slug`)
- Public printable/flyer route (`/ulotka`) when the source code exposes crawl or indexing signals for it

## Out of scope
- Authenticated product experiences hosted outside this app
- Third-party checkout and download destinations linked from the marketing site
- Live production behavior that cannot be verified from source code alone

## Target audience
- Polish-speaking parents of children with concentration, auditory processing, speech, or learning difficulties
- Therapists, logopedists, pedagogues, schools, and educational institutions evaluating GoBrain products

## Primary keywords
- interaktywny trening słuchowy
- trening słuchowy dla dzieci
- CAPD
- zaburzenia przetwarzania słuchowego
- logopedia / terapia logopedyczna
- programy edukacyjne dla dzieci

## Notes
- The app is React + Vite with an SSR build plus `prerender.mjs`; public routes are emitted as static HTML and then hydrated on the client.
- Route metadata is split between `src/components/SEO.tsx` / `react-helmet-async` and hard-coded route arrays in `prerender.mjs`, so route-level SEO conclusions should be checked against the shipped prerendered HTML, not only the JSX source.
- Current prerender output still needs direct `dist/public/*.html` verification because the SSR `render()` path is returning an empty Helmet `head`; richer route-level tags are ending up at the start of `#root` while `prerender.mjs` falls back to its simpler static head arrays.
- `robots.txt`, `sitemap.xml`, and `llms.txt` exist in `artifacts/gobrain/public/`.
- `/ulotka` currently signals `noindex` in source via `<SEO noindex />`, so crawlability checks should keep its sitemap, prerendered HTML, and route intent aligned.

## Dismissed categories
- (None yet)
