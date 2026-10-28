# Build checks — NOX v4.13.74

- Source: v4.13.72 latest navigation/homepage candidate plus v4.13.73 Steve Foster Cranes work.
- Seven new customer projects appear first in the Projects portfolio; existing older projects retained.
- Four additional project pages written, three previous pages retained; all seven linked in commercial/residential and local area routes.
- Real uploaded photography only, converted to WebP; four new cropped landscape hero images.
- All 134 TS/TSX files parsed with the installed TypeScript parser: **no syntax errors**.
- All 477 literal `/images/` references checked against `public`: **no missing images**.
- 22 unique case-study slugs; first seven match the requested project list.
- Project WebP images verified as readable.
- All seven slugs referenced in relevant hub/area pages.
- Full Next.js production build **not verified**: `npm ci` could not complete in the available environment; partial node_modules removed before packaging.
- ZIP integrity verified after packaging.
