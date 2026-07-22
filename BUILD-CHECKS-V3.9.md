# NOX Website v3.9 — Build and QA Checks

## Passed

- TypeScript/TSX syntax transpilation across 125 source files.
- 25 App Router page templates inspected.
- Metadata and H1 marker audit passed for every rendered page template; the remaining route is an intentional redirect.
- 118 literal internal links checked with no missing route targets.
- 219 local image references checked with no missing files.
- GoHighLevel form ID `8FchnjOrpZ4ufh1TiW8k` confirmed.
- GoHighLevel embed script confirmed.
- Prohibited claims scan passed for SSAIB, SSIAB, NSI, NACOSS, URN, Farsight and police-response promises.
- Visible internal-strategy wording scan passed.
- Package lock and `.npmrc` contain no inaccessible internal registry addresses.
- Partial `node_modules`, `.next` and TypeScript build-cache files removed before packaging.

## Production build status

A complete `npm ci` and Next.js production build could not be completed in this runtime because requests to the public npm registry repeatedly failed with temporary DNS/network errors (`EAI_AGAIN`). The package lock itself points only to the public npm registry and the source-level checks above passed.

Vercel should run `npm ci` and `npm run build` when the branch is deployed. If the registry is temporarily unavailable during that deployment, redeploy without build cache after the network error clears.
