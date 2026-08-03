# NOX v4.13.42 — Intruder Monitoring Type Fix

- Added optional `imagePosition` support to `ServicePageData` and `PlanPageData`.
- Passed `data.imagePosition` into both system and service-plan page heroes.
- Retained the new Intruder Monitoring control-room image and the `center 44%` crop.
- Targeted TypeScript check for `lib/content.ts` passed.
- All TS and TSX files passed syntax transpilation.
- Full local dependency installation remained unavailable because the internal package mirror returned 404 responses; the Vercel source error shown in v4.13.41 is corrected.
