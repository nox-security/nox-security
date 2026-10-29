# Build checks — v4.13.75

Source: NOX v4.13.74 seven-project portfolio ZIP.

- TypeScript / TSX syntax parsed successfully across **134** source files.
- All **22** case studies remain in the project data, with the four requested favourites in the editorial priority order.
- **383** existing public image files preserved; **285** unique image references checked, **0 missing**.
- **337** static internal route references checked against actual pages, dynamic route slugs and published guides; **0 missing**. Two inherited stale links were corrected.
- Desktop and mobile navigation: Fire Safety, Commercial, Residential, Projects. Risk Assessment and Emergency Lighting positions swapped.
- Home featured-projects grid, directory progressive disclosure and relevant project ordering checked at source level.
- CSS brace balance: 0.
- `package.json` and `package-lock.json` root versions set to 4.13.75.

**Limitations:** Full Next.js / Vercel production build not run in this container because project dependencies are not installed. Perform a Vercel preview deployment before promoting to production. Source validation does not replace a live responsive visual check.
