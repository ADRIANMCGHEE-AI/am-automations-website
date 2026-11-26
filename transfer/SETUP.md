# AM Automations website

Recovered from saved version 6 on 26 November 2026.
Original URL: https://adrianmcgheeautomations.com
Source commit: `6461c64eb4acc934be73ea72647a65ff58b25af8`.

## Develop

Use Node.js 22 or later and npm. Export validation used Node 24.22.3.
Open a terminal in `source/`, then run:

```sh
npm ci
npm run typecheck
npm run build
npm run dev

```

The complete lockfile is included. Do not regenerate dependencies as part of importing.
Application source, local fonts and other tracked assets match the saved commit.
Only the original `.openai/hosting.json` was omitted to keep the new copy separate from the original host.
No Git history, credentials, node_modules or development caches are included.

## Ready-built preview

`static-preview/` is a fresh production export from this exact source.
Serve it with any static web server, for example:

```sh
python3 -m http.server 8080 --directory static-preview
```

Run that command from this project folder and open http://localhost:8080.
Opening index.html directly as a file does not reproduce a hosted Next.js export.

## New Vercel deployment

Create a NEW repository/project from `source/`. Select the Next.js preset,
use `npm ci` to install and `npm run build` to build. The existing
`output: 'export'` configuration produces `out/`; use the framework defaults.
Do not upload `static-preview/` as editable source or recreate the app from screenshots.
For a static-only host, deploy the contents of `static-preview/` instead.

Set NEXT_PUBLIC_SITE_URL to https://adrianmcgheeautomations.com for the eventual production build. Keep the current domain routing in place until the replacement has been verified. Check metadata, canonical URLs, sitemap, robots, email and WhatsApp before switching the domain.

## Validation performed for this export

- npm ci — passed
- npm run typecheck — passed
- npm run build — passed

No application redesign, feature edits, original-host deployment or domain change was made.
Build/type validation was repeated; browser visual/interaction testing was not repeated for this export.
See DATA_TRANSFER.md for the exact scope of included data.
