# NOX Website v4.1 — Build and asset checks

## Completed checks

- Syntax-only TypeScript and TSX validation passed for 125 project files using the installed TypeScript compiler.
- 133 static local image references were checked; every referenced file exists.
- 17 standardised Ajax product assets were checked; each is a 1600 × 1100 WebP image.
- Product artwork uses contain-based fitting and real installation photography uses cover-based fitting.
- Product assets use a dark canvas rather than white image surrounds.
- `package.json` and `package-lock.json` both report version 4.1.0.
- `.npmrc` points to the public npm registry and the package lock contains no internal package-gateway address.

## Production-build limitation

A clean `npm ci` could not complete in this runtime because the dependency download process failed through the container network. The partial dependency directory was removed before packaging. No dependencies were added or changed for this update.

Vercel should run the final dependency installation and production build during deployment.
