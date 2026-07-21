# NOX Fire & Security Website v3.7

Version 3.7 develops the approved NOX website into a clearer residential, Fire & Compliance and commercial-security acquisition platform while preserving the established black-and-white visual identity.

## Primary customer journey

The main navigation is organised around:

1. Residential
2. Fire & Compliance
3. Commercial Security
4. Servicing & Monitoring
5. Projects
6. Guides
7. Get a Quote

The GoHighLevel Website Enquiry form uses form ID `8FchnjOrpZ4ufh1TiW8k`. Contextual enquiry links pass the service, audience, enquiry type and source page into the quote route. The embed also appends page, referrer, traffic-source and UTM context where available.

## Main positioning

- Ajax intruder alarms, home CCTV, perimeter protection, gates, garages and outbuildings.
- Commercial CCTV, intruder alarms, industrial sites, warehouses, yards and multi-site projects.
- Commercial fire-alarm installation, servicing, repairs and takeovers.
- Emergency-lighting installation, testing and servicing.
- Ongoing monitoring, maintenance, repairs, upgrades and service plans.
- Genuine NOX projects and photography used as proof throughout the website.

## Ranking protection

`/systems/intrusion-alarms` remains the protected benchmark page. Its URL and main content structure were preserved pending review of actual Google Search Console data.

See:

- `IMPLEMENTATION-PLAN-V3.7.md`
- `SEO-ROUTE-INVENTORY-V3.7.md`
- `CHANGELOG-V3.7.md`
- `CLAIMS-AND-DATA-GAPS-V3.7.md`
- `BUILD-CHECKS-V3.7.md`

## Development

```bash
npm ci
npm run dev
npm run typecheck
npm run build
npm run start
```

The project uses the public npm registry through `.npmrc`. Do not replace the public registry URLs in `package-lock.json` with machine-specific or private registry URLs.
