# NOX Website V4.6 — SEO & Conversion Upgrades

## Ranking protection

- All existing page URLs remain unchanged.
- Existing redirect routes remain in place.
- Every existing location page remains indexable and included in the sitemap.
- The preferred domain is now consistently `https://www.nox-security.co.uk` in canonicals, metadata, schema and redirects.
- Preview deployments remain `noindex` so Vercel previews do not compete with the live site.

## On-page SEO

- Unique page titles and descriptions strengthened across core service pages, systems, service plans, guides, projects and local landing pages.
- Metadata now includes self-referencing canonicals, `en-GB`, Open Graph data, Twitter cards and large-image preview directives.
- Core metadata prioritises CCTV, fire alarms, intruder alarms, emergency lighting, servicing, monitoring, repairs and takeovers.
- Weak project metadata was upgraded with specific service, property and location context.
- Existing area pages were expanded into useful local service pages without inventing offices, projects or claims.

## Structured data

- Site-wide `Organization`, `LocalBusiness` and `WebSite` entities.
- Page-level `Service`, `WebPage`, `Article`, `BreadcrumbList` and visible-question `FAQPage` data where relevant.
- Schema references one consistent business identity and preferred-domain URL.
- Service schema connects pages to relevant areas served and the visible service content.

## Internal links and landing-page funnels

- Core systems and servicing templates now link to relevant guides, local service pages, quotation preparation and related services.
- Commercial service pages connect CCTV, intruder, perimeter, industrial, multi-site, monitoring, maintenance and fire routes.
- Location pages connect residential, commercial, fire, security, servicing, guide and project routes.
- Guide links are contextual and text-based; no new images were introduced.
- Quotation calls to action retain page, service, audience and enquiry context.

## Conversion measurement

- Quote, phone and WhatsApp lead-intent clicks now emit a consistent `nox_lead_intent` event to `dataLayer`.
- Where a Google tag is already present, the same interaction also emits `generate_lead_intent` through `gtag`.
- The existing GoHighLevel form continues to pass page URL, landing page, referrer, traffic source and available UTM values.
- No analytics property ID or advertising tag was invented or hard-coded.

## Important commercial note

The site is now a stronger technical and on-page foundation for organic enquiries, but no developer can guarantee 100 qualified enquiries per month or first-page rankings from code alone. Reaching that target also depends on search demand, Google Business Profile performance, reviews, local authority and links, competition, publishing useful evidence-led content, conversion tracking, sales response and continuous Search Console optimisation.
