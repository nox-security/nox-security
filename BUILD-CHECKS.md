# NOX v2.6 Build Checks

Completed against the packaged project on 19 July 2026:

- Dependency installation: `npm ci` passed.
- TypeScript: `npm run typecheck` passed.
- Production build: `npm run build` passed using Next.js 16.2.10.
- Next.js generated 73 routes.
- XML sitemap: 68 URLs returned HTTP 200 in a local production-server crawl.
- Internal crawl: 145 linked routes and local assets checked with no failures.
- Local image-reference scan: 99 referenced images checked with none missing.
- Prohibited-claim source scan: no Farsight, police-response, URN, SSAIB, SSIAB, NACOSS, NSI, false-alarm guarantee, lifetime-warranty or unsupported response-time wording found in application source.
- ZIP integrity: checked after packaging.

Dependency note: `npm audit --omit=dev` reported no critical or high-severity issues. It reported three moderate advisories associated with the current stable Next.js dependency chain. No forced downgrade or unstable canary dependency was applied.
