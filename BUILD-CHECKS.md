# NOX v2.6 Build Checks

Completed on 19 July 2026 for the premium residential, commercial and Ajax refinement.

## Passed

- `npm ci --no-audit --no-fund`
- `npm run typecheck`
- `npm run build`
- Next.js generated 59 static/SSG routes
- 54 sitemap URLs returned HTTP 200 from the local production server
- Internal crawler reached 53 linked pages with no page failures
- No missing locally referenced images were found
- Prohibited-claim scan returned no matches for police response, URN, Farsight, SSAIB/SSIAB, NACOSS, NSI, lifetime warranty, false-alarm guarantees or unsupported emergency-response promises

## HighLevel form styling

The Website Enquiry form is loaded inside a cross-origin GoHighLevel iframe. Website CSS cannot directly recolour the form's internal submit button. If that submit button remains blue, its colour must be changed inside the HighLevel form builder/theme. All NOX website-owned CTA buttons are styled in the black-and-white website system.
