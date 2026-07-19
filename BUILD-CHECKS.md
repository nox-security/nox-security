# NOX v2.6 checks

```json
{
  "source": "verified v2.5 dependency and asset base",
  "required_integrations_missing": [],
  "forbidden_wording_hits": {},
  "referenced_public_images_checked": 56,
  "missing_public_images": [],
  "routes": 18,
  "package_lock_json_valid": true,
  "package_manager": "npm only (pnpm-lock removed)"
}
```

The v2.6 marketing pages are merged onto the known-working v2.5 package and asset base. Static integrity checks passed. A full dependency install/build could not be completed in this runtime because npm installation did not complete within the execution window; Vercel will run the production build on deployment.
