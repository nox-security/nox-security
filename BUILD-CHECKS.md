# NOX Website v3.0 Build Checks

Checks completed against the final project before packaging:

- `npm ci --no-audit --no-fund` — passed; 189 packages installed.
- `npm run typecheck` — passed with exit code 0.
- `npm run build` — passed with exit code 0 using Next.js 16.2.10.
- Production build generated 88 static/SSG routes.
- XML sitemap contained 83 public URLs; all returned HTTP 200 from the local production server.
- 83 discovered internal page links were checked; no failures.
- 85 discovered local assets were checked; no failures.
- GoHighLevel form ID `8FchnjOrpZ4ufh1TiW8k` confirmed on `/get-quote` and `/contact`.
- Form embed height `806` confirmed on both form pages.
- Canonical metadata and Breadcrumb structured data confirmed on representative service, system, plan and case-study pages.
- `package-lock.json` contains public `registry.npmjs.org` resolved URLs only; no private OpenAI/internal registry URLs remain.
- Prohibited wording scan across `app`, `components` and `lib` returned no matches.
- ZIP integrity — checked after packaging.

These checks verify the local project and production build. They do not claim that a Vercel deployment has already been completed.
