# NOX Website V4.12.1 — Vercel Build Fix

## Fixed

- Removed the stale `item.artwork` property reference from the Fire & Compliance equipment grid.
- The V4.12 data objects no longer defined that property, so a Next.js TypeScript production build could fail even though parser-only syntax checks passed.
- No design, page URL, content, image or navigation changes were made.

## Checks

- Confirmed no remaining `item.artwork` references exist in the project.
- Confirmed all referenced V4.12 images are present.
- ZIP integrity checked after packaging.
- Dependency installation could not be completed in this environment because the internal npm mirror returned HTTP 503 responses; this is separate from the source-code fix above.
