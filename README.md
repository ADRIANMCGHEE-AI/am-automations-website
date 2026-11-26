# AM Automations

A complete, responsive marketing and portfolio site built with Next.js App Router, React, TypeScript and Tailwind CSS. Static output deploys on Sites and can also be deployed on Vercel.

## Development

Use Node.js 22 or later and npm 10 or later.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

`npm run dev` starts Next.js. The wrapper in `scripts/dev.mjs` also translates the hosting preview runner's arguments. The production export is `out/`. On Vercel, import the same repository, select Next.js and use `npm run build` with the default framework settings.

## Configuration

- `src/config/site.ts`: contact information, WhatsApp message, navigation, six services and process stages.
- `src/config/projects.ts`: the two approved prototype destinations and descriptions.
- `src/app/globals.css`: semantic design tokens, themes, typography and responsive rules.
- `src/components/`: shared page structure and interactive components.

Set `NEXT_PUBLIC_SITE_URL` to the confirmed deployment origin before building. It controls metadata resolution and sitemap URLs. The confirmed public origin is https://adrianmcgheeautomations.com. It is also the default in site configuration; NEXT_PUBLIC_SITE_URL can override it for another deployment. No credentials are required. Copy `.env.example` for local configuration; do not commit secret environment files.

## Branding

`public/branding/original.jpg` is the exact supplied logo. The black and white SVG assets preserve its pixels through an embedded luminance mask, which makes the black background transparent without redrawing the mark or guessing its tiny lettering. These are raster-backed SVG containers, not traced vector artwork. The small lettering in the supplied source is soft; a genuine vector original would improve small-size reproduction. Theme variants and favicon are in the same directory. Geist is served locally from `public/fonts/`, with its bundled licence.

## Contact and privacy

Contact uses real `mailto:` and WhatsApp links. No server-side submission form is shown. Copy Email reports clipboard success only after the browser confirms it. WhatsApp opens a prefilled draft; the visitor sends it. There are no analytics, tracking scripts, logins or databases. Local storage only holds the visitor's theme override.

## Portfolio verification

Both live prototypes were inspected on 15 November 2026 and their real interfaces captured for the project previews. Northstone shows catalogue search, categories, sample prices and stock, and add-to-basket controls. The follow-up demo shows a sample quotation, simulated inbox, time advancement and reply controls. No live integration or paying-client outcome is claimed. Screenshots are saved in `public/projects/`.

## Motion and accessibility

The quotation workflow autoplays once on intersection and can be replayed. Its timers are cleaned up on unmount and restart. Reduced motion shows a completed state and disables animation. The theme follows the operating system until overridden; the override persists. The mobile navigation is an accessible disclosure with Escape handling and ordinary document focus order. All routes have semantic headings, a skip link and visible focus states.

## Handoff

See `docs/V0_HANDOFF.md`, `docs/WEBSITE_SPECIFICATION.md` and `docs/VERIFICATION.md` for editing guidance and validation details. The source repository contains the full implementation and the hosting manifest. Keep the same repository when refining the site.

## November 2026 refinements

The homepage now introduces the two demos immediately after the hero, presents three customer outcomes and includes commercial FAQs. The merchant landing page is /builders-merchants/ and the privacy notice is /privacy/. Contact links preserve an allowlisted interest in the draft subject/message. Project screenshots have an accessible zoom dialog. Measurement hooks are ready but no analytics provider is enabled; see docs/MEASUREMENT_SETUP.md.
