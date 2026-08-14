# V4.13.45 — Favicon cache-bust

- Rebuilt from the last successfully deployed v4.13.43 codebase.
- Kept the shield-only NOX favicon artwork.
- Moved browser icon references to a brand-new `/nox-icon-2026/` URL namespace to avoid stale Safari/Chrome favicon caches.
- Kept standard `metadata.icons` configuration instead of Next.js App Router native icon files.
- Updated the webmanifest to the same cache-busted icon namespace.
