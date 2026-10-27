# NOX Website v3.7 — Build and QA Checks

## Dependency and compile checks

- `npm ci` — passed.
- `npm run typecheck` — passed.
- `npm run build` — passed.
- Next.js generated 117 static/SSG pages.

## Production route checks

- XML sitemap contains 96 canonical indexable URLs.
- All 96 sitemap URLs returned HTTP 200 from the local production server.
- 96 rendered pages were parsed for links, images and metadata.
- 113 unique rendered internal links were checked; all resolved to HTTP 200 after redirects.
- 101 unique local image paths were checked; no missing local images were found.
- Every sitemap route had a title, meta description, H1 and canonical.
- No duplicate rendered title tags were found across sitemap routes.
- No duplicate rendered H1s were found across sitemap routes.

## Redirect checks

Confirmed permanent 308 redirects, including:

- `/commercial/fire-compliance` → `/fire-compliance`
- `/service-plans/intruder-maintenance` → `/service-plans/alarm-maintenance`
- `/service-plans/intruder-monitoring` → `/service-plans/alarm-monitoring`
- `/service-plans/emergency-lighting` → `/service-plans/emergency-lighting-servicing`
- `/systems/smart-automation` → `/systems/intrusion-alarms`
- `/why-nox` → `/about-us`

## Indexing checks

- Production robots.txt allows current public routes and lists the sitemap.
- Vercel preview build produced `Disallow: /` in robots.txt.
- Vercel preview homepage produced `noindex, nofollow, nocache` robots metadata.
- Weak generic area routes produce `noindex, follow` and are excluded from the sitemap.
- `/areas/matlock` was checked as a representative noindexed area route.

## Form checks

- The GoHighLevel iframe is present on `/get-quote` with form ID `8FchnjOrpZ4ufh1TiW8k`.
- Context parameters now include the current page URL, landing page, page title, referrer, inferred traffic source and UTM values where present.
- Service pages pass contextual customer type, service category and enquiry type to the quote route.

## Responsive/navigation checks

- Desktop navigation uses four grouped dropdown menus plus Projects, Guides and the Get a Quote CTA.
- Mobile navigation uses one-at-a-time accordion state logic, whole-row buttons, chevrons and reduced-motion support.
- Mobile navigation includes bottom clearance for the fixed conversion bar.
- The fixed mobile bar contains Get a Quote, WhatsApp and Call actions.
- Header, dropdown, footer, filters and page additions use the existing responsive CSS system and black-and-white design language.

## Notes

- The source project does not include a configured ESLint dependency. TypeScript validation and the Next.js production compiler were used as the code-level validation gates.
- Google Search Console, Google Analytics and backlink exports were not supplied, so ranking/traffic claims were not included in the QA record.
