# Build Checks — V4.7

## Passed checks

- TypeScript/TSX syntax parse: **124 files**, no syntax errors.
- Case-study enrichment: **15 of 15** case studies include design priorities, completed outcome, local context and FAQs.
- Area dataset: **31** indexable area pages.
- Visible area links without matching content: **0**.
- Barnsley and Worksop visible references: **0**.
- Removed area redirects: **2 permanent redirects**.
- Recognised site routes in structural audit: **135**.
- Literal internal links checked: **470**, unresolved: **0**.
- Image references checked: **307 references / 162 unique paths**, missing: **0**.
- Public asset comparison against V4.6: **247 files**, added: **0**, removed: **0**, changed: **0**.
- Projects hero and Multi-Site Security page both reference `/images/projects/bottle-thyme-vehicles.jpg`.
- Package metadata: `package.json` and `package-lock.json` report **4.7.0**.

## Production-build limitation

A complete local `next build` could not be run because restoring dependencies returned an HTTP 503 from the package registry while downloading `zod-3.25.76.tgz`. The failed partial `node_modules` directory was removed before packaging. Syntax, route, link, image and asset-integrity checks were completed independently.
