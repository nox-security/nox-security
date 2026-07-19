# NOX v2.6 working-base amendment checks

## Completed amendments

- Preserved the approved homepage layout and premium NOX visual direction.
- Restored the stronger fire-and-security wording: systems designed around the property.
- Replaced the two competing conversion routes with one site-wide **Get a Free Quote** journey.
- Kept the previous survey URL as a compatibility redirect to `/get-quote`; it is not shown as a customer CTA.
- Added a clearer residential/commercial split, including a dedicated Residential page and stronger Commercial routes.
- Restored verified customer-review wording and expanded review placement across the site.
- Moved servicing, maintenance, fire aftercare, monitoring and takeovers higher in the customer journey.
- Expanded About NOX, the company story and founder roles.
- Corrected Joseph Robb to **Co-Founder & Managing Director**.
- Restored team and project photography in colour.
- Upgraded Contact and Get a Quote into premium residential/commercial enquiry pages.
- Expanded factual case studies without inventing project outcomes.
- Added a blog/guides section with four fire, security and aftercare articles.

## Technical checks passed

- `npm ci --no-audit --no-fund`
- `npm run typecheck`
- `npm run build`
- Next.js generated **58 static/SSG routes** successfully.
- Sitemap contains **53 URLs**; all returned HTTP 200 in the local production server test.
- **33 literal internal links** tested; no broken routes found.
- **52 referenced public assets** checked; no missing files found.
- GoHighLevel Website Enquiry form ID `8FchnjOrpZ4ufh1TiW8k` is present in the rendered quote page.
- No customer-facing links remain to the separate survey-booking route.
- `/book-security-survey` returns a 307 redirect to `/get-quote` for old links.
- Prohibited wording scan returned no hits for Farsight, URN, SSAIB, SSIAB, NACOSS, NSI, police-response claims, lifetime warranties or false-alarm guarantees.
- ZIP integrity checked after packaging.

The production build displayed only a non-blocking warning that the `baseline-browser-mapping` data package is older than two months. Compilation, TypeScript, static generation and final optimisation all completed successfully.
