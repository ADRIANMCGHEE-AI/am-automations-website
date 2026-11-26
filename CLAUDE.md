# AM Automations website

Original handover (in it, `source/` means this folder): @transfer/CLAUDE.md
Also see transfer/SETUP.md, transfer/DATA_TRANSFER.md, README.md and docs/.
Read AGENTS.md: this uses Next.js 16, so check `node_modules/next/dist/docs/` before changing Next.js APIs.

## Commands (run in this folder)
```sh
npm ci
npm run dev          # http://localhost:3000
npm run lint
npm run typecheck
npm run build        # static export to out/
```
Before committing a change, run lint, typecheck and build.

## Repository rules
- This repository holds only the public AM Automations site. Cheshire Gas has its own separate repository.
- Never add Cheshire Gas or LLK to this site.
- The live site deploys from `main`. Before every push, run lint, typecheck and build.

## Deployment (Vercel)
- Vercel project `am-automations-website` (Hobby account `adrian-1921`) is connected to this repository.
  Each push to `main` deploys to production at https://am-automations-website.vercel.app.
  Other branches get preview deployments.
- Build settings: Next.js preset, `npm ci`, `npm run build`, Node 24.x.
- Vercel Authentication is intentionally off, by the owner's decision on 26 Nov 2026. The staging URLs are public.
- `adrianmcgheeautomations.com` and `www` (308 redirect to the root domain) were added and verified
  on this Vercel project on 26 Nov 2026, at the owner's request.
- DNS is managed at Cloudflare. It was switched to Vercel on 26 Nov 2026: an `A` record for `@` pointing to
  `76.76.21.21`, and a `CNAME` for `www` pointing to `cname.vercel-dns.com`, both "DNS only".
  This Vercel project now serves the live site; each push to `main` goes live.
- Do not change these Cloudflare records: the `n8n` tunnel, the Google `MX`, SPF and DKIM records,
  `_domainconnect`, `_cf-custom-hostname` and `_openai-site-verification`. The last three remain from the old
  Squarespace and ChatGPT hosting.
