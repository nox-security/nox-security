# V4.13.35 Vercel build fix

This release corrects the second TypeScript build error reported by Vercel after V4.13.34.

## Fix

- Imported the existing `LinkItem` type from `lib/content.ts` into `components/marketing.tsx`.
- Retained the previous V4.13.34 imports for `OngoingSupportStrip` and `CompleteSystem` on the Fire & Compliance dynamic route.

No design, navigation, content, route, analytics, image or customer-journey changes were made.
