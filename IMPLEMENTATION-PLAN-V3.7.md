# NOX Website v3.7 Implementation Plan and Completion Record

## Objective

Develop the existing NOX website into a stronger residential, fire-compliance and commercial-security acquisition platform without replacing the established black-and-white visual identity or rebuilding components that already work.

## Phase 1 — Audit and ranking protection

Completed:

- Inventoried the existing application routes, dynamic content collections, navigation, footer, metadata helpers, sitemap, robots configuration, forms and redirect rules.
- Recorded the current `/systems/intrusion-alarms` title, description, H1, heading structure, canonical and principal internal links.
- Preserved `/systems/intrusion-alarms` without changing its URL or substantially rewriting its content.
- Audited active copy for police response, URN, SSAIB, NSI, Farsight, free installation, Grade 3 installation claims and unsupported response promises.
- Kept corrective monitoring wording that explicitly states professional monitoring does not automatically mean guaranteed attendance or police response.
- Identified weak generic area routes and excluded them from the sitemap while retaining the routes for users. These routes now use `noindex, follow` until genuine local project, review or photography content is available.
- Added a permanent redirect from the previous `/commercial/fire-compliance` route to the new top-level `/fire-compliance` hub.

Not available for this release:

- Google Search Console exports for page/query analysis.
- Backlink exports or access to an external backlink index.

Because these data sources were not supplied, no claims are made about clicks, impressions, CTR, rankings or backlinks. The established intruder-alarm page was protected rather than edited speculatively.

## Phase 2 — Navigation and homepage

Completed:

- Rebuilt the primary navigation in this order: Residential, Fire & Compliance, Commercial Security, Servicing & Monitoring, Projects, Guides and Get a Quote.
- Put Residential first and made Fire & Compliance a first-level section.
- Moved About NOX, Contact, Reviews and Areas We Cover into the footer/secondary navigation.
- Added grouped desktop dropdowns and one-at-a-time mobile accordions.
- Retained the fixed mobile conversion bar and changed it to `Get a Quote | WhatsApp | Call`.
- Reworked the homepage information hierarchy while preserving the existing visual language.
- Added immediate home/business choice, dedicated Fire & Compliance visibility, commercial system routes, ongoing support, selected projects, guides, areas and contextual enquiry links.

## Phase 3 — Main hubs

Completed:

- Rebuilt `/residential` around Ajax alarms, home CCTV, perimeter protection, garages/outbuildings, smart security and packages.
- Created `/fire-compliance` as the main Fire & Compliance hub.
- Rebuilt `/commercial` around operational commercial requirements, industrial sites, yards, warehouses, multi-site work and integrated projects.
- Rebuilt `/service-plans` as the Servicing & Monitoring hub.
- Rebuilt `/case-studies` as Projects with useful filters.
- Rebuilt `/blog` as Fire & Security Guides and FAQs with topic filters.

## Phase 4 — Priority service pages

Completed or materially improved:

- Fire Alarm Installation.
- Fire Alarm Servicing.
- Fire Alarm Repairs & Takeovers.
- Emergency Lighting Installation.
- Emergency Lighting Testing & Servicing.
- Commercial CCTV.
- Home CCTV.
- Commercial Intruder Alarms.
- Intruder Alarm Servicing.
- Alarm Monitoring.
- CCTV Maintenance.
- Security System Takeovers.
- Repairs & Upgrades.
- Fire Extinguisher Servicing.
- Industrial & Warehouse Security.
- Yard & Perimeter Protection.
- Multi-Site Security.
- Integrated Fire & Security.
- Garages & Outbuildings.
- Residential Security Packages.

The existing `/systems/intrusion-alarms` page was deliberately retained as the structural benchmark and was not substantially rewritten.

## Phase 5 — Projects

Completed:

- Rebuilt the project index with Residential, Fire & Compliance, Commercial CCTV, Commercial Intruder, Industrial & Warehousing, Integrated Systems and Servicing & Takeovers filters.
- Rebuilt project-detail pages around the requirement, existing situation, system design, delivery, handover, ongoing support and practical considerations for similar properties.
- Updated important project titles to the service + property/client type + location convention.
- Removed the visible keyword-list treatment from project pages.
- Continued to use genuine NOX project data and photographs rather than invented results.

## Phase 6 — Guides

Completed:

- Added substantial Fire Alarm, Emergency Lighting, CCTV, Intruder Alarm and Maintenance & Monitoring guides.
- Added Article, Breadcrumb and appropriate FAQ structured data to guide pages.
- Connected guides to relevant services and projects.
- Avoided publishing large numbers of thin location-swapped articles.

## Phase 7 — Location quality control

Completed:

- Retained all existing area URLs so customer bookmarks and internal references are not broken.
- Kept Chesterfield, Sheffield, Derbyshire, Dronfield, Buxton and Retford indexable because they have primary-market or project relevance.
- Applied `noindex, follow` to weaker generic area pages until real local project, review or photography content can be added.
- Removed non-indexable area routes from the sitemap.

## Phase 8 — Technical and conversion work

Completed:

- Added production/preview robots handling. Vercel preview deployments are noindex and disallowed in robots.txt.
- Added Organization and LocalBusiness structured data without unsupported review ratings.
- Kept self-referencing canonical URLs through the existing metadata helper.
- Limited the sitemap to canonical, indexable, current routes.
- Added contextual CTA labels and enquiry parameters for residential, fire, commercial, servicing, monitoring, repair and takeover routes.
- Added page URL, page title, landing page, referrer, traffic source and UTM context to the GoHighLevel iframe URL where technically possible.
- Added missing internal-link targets and corrected a missing image path.
- Preserved responsive layouts and added filter, navigation and footer styling within the established NOX design.

## Final validation

The completed project is validated with:

- `npm ci`
- `npm run typecheck`
- `npm run build`
- Production server route checks.
- Sitemap route checks.
- Redirect checks.
- Rendered internal-link checks.
- Local image-path checks.
- Key-route title, H1 and canonical checks.
- GoHighLevel form iframe presence check.
- ZIP integrity check.
