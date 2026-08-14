# Build checks — V4.13.44

- Confirmed `app/favicon.ico` exists and contains multiple icon sizes.
- Confirmed `app/icon.png` is a 96x96 square PNG using the shield-only NOX mark.
- Confirmed `app/apple-icon.png` is a 180x180 square PNG.
- Confirmed explicit `metadata.icons` declarations were removed from `app/layout.tsx`.
- Confirmed the duplicate `public/favicon.ico` route was removed.
- Confirmed the existing webmanifest remains valid JSON and its referenced icon files exist.
