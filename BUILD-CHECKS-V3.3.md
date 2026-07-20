# NOX Website v3.3 build checks

Completed against the v3.3 project on 20 July 2026.

- `npm ci` — passed
- `npm run typecheck` — passed
- `npm run build` — passed
- Next.js generated 88 routes
- 83 sitemap URLs returned HTTP 200 in the local production build
- 82 internal linked routes returned HTTP 200
- 76 referenced image assets returned HTTP 200
- Homepage, Residential and Smart Home CCTV routes returned HTTP 200
- ZIP integrity — passed

The project retains `.npmrc` with the public npm registry for Vercel dependency installation.
