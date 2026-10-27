# Build Checks — V4.6

## Passed

- TypeScript/TSX syntax transpilation: **126 files checked, 0 syntax errors**.
- Route inventory: **154 recognised static and generated routes**.
- Internal-link audit: **475 references checked, 0 unresolved**.
- Referenced-image audit: **165 unique references, 0 missing**.
- Displayed `<img>` tags: **40, with 0 missing `alt` attributes**.
- Displayed image comparison with base: **0 added and 0 removed image expressions**.
- Public image hash comparison: **236 files, 0 added, 0 removed, 0 changed**.
- Dynamic content metadata audit: **70 system, plan, project, guide and service landing records with no duplicate titles or descriptions and none over the audit limits**.
- Location metadata audit: **19 unique area titles and descriptions, with no duplicates and no description over 180 characters**.
- Commercial metadata audit: **6 unique commercial landing-page titles and descriptions, with no duplicates and none over the audit limits**.
- Static literal metadata audit: **17 records, no duplicate titles or descriptions, no title over 70 characters and no description over 180 characters**.
- Package metadata: `package.json` and `package-lock.json` both report **4.6.0**.
- Package JSON files parse successfully.

## Production build limitation

A full local Next.js production build could not be completed because the npm registry returned a temporary HTTP 503 while dependencies were being restored. The failed dependency request was external to the website source. The source-level syntax, data, route, link, image, metadata and package checks above were completed successfully.
