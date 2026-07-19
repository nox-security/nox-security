# Build Checks

Completed for this ZIP after the GoHighLevel Website Enquiry form update:

- `npm ci`
- `npx tsc --noEmit`
- `npm run build`
- Next.js generated 59 routes successfully
- Local production server returned HTTP 200 for `/get-quote` and `/contact`
- Rendered HTML confirmed `data-height="806"`
- Rendered HTML confirmed `title="Website Enquiry"`
- Rendered HTML confirmed form ID `8FchnjOrpZ4ufh1TiW8k`
- GoHighLevel embed script is loaded once by the shared form component
- ZIP integrity test completed after packaging
