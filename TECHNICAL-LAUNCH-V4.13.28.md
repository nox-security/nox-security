# NOX Fire & Security — Technical Launch Release V4.13.28

## Implemented

- Google Analytics 4 property: `G-Q51KGWJ7TG`
- Analytics loads only after the visitor accepts optional analytics
- Separate events for quotation, phone, WhatsApp and email selections
- Genuine website enquiry completion uses the recommended `generate_lead` event
- New `/thank-you` route for GoHighLevel's successful form redirect
- Thank-you route is `noindex` and excluded from the XML sitemap
- Form and first-touch context are passed into the lead event where available
- Cookie choices can be changed from the footer or Cookie Policy
- Advertising storage and personalised-advertising signals remain disabled
- Residential security packages legacy URL now redirects to `/residential`
- Sitemap release date updated for the technical site-wide release
- Large photographic assets compressed without changing their dimensions or paths

## GoHighLevel setting

The Website Enquiry form should redirect to:

`https://www.nox-security.co.uk/thank-you`

## After production deployment

1. Open the website in a private browser.
2. Accept analytics.
3. Submit one test enquiry through the live Website Enquiry form.
4. Confirm that the browser reaches `/thank-you`.
5. Confirm `page_view` and `generate_lead` in Google Analytics Realtime/DebugView.
6. Mark `generate_lead` as a key event in Google Analytics.
7. Delete or clearly label the test contact in GoHighLevel.

## Validation completed

- TypeScript/TSX syntax transpilation completed across `app`, `components` and `lib`.
- CSS brace validation completed.
- Referenced static image paths checked.
- ZIP archive integrity checked after packaging.

A full Next.js production build should also run automatically in Vercel during deployment.
