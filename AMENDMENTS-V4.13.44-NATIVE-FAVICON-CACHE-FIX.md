# V4.13.44 — Native favicon cache fix

- Moved the NOX shield favicon into Next.js native App Router metadata files: `app/favicon.ico`, `app/icon.png` and `app/apple-icon.png`.
- Removed manually declared icon metadata from `app/layout.tsx` so Next.js owns the generated `<link>` tags.
- Removed the duplicate public-root `favicon.ico` route to avoid competing `/favicon.ico` sources.
- Retained the webmanifest and dedicated favicon image set under `public/favicon/` for installable-browser metadata.
- This changes the browser icon route strategy and lets Next.js generate production icon metadata rather than reusing the previously cached manual paths.
