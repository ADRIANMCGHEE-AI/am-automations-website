# v0 handoff

Import this existing repository into v0 through your Git provider. If a GitHub copy is needed, push this source to a new repository you control, then connect that repository to v0 and Vercel. This preserves the full Next.js implementation; a screenshot alone will not preserve behaviour.

## Design and component map

- `src/app/globals.css`: semantic theme variables under `:root` and `[data-theme=dark]`; responsive breakpoints at 1100, 1000, 900, 700 and 359 pixels.
- `src/components/header.tsx`: authentic logo variants, theme persistence, active links and mobile navigation.
- `src/components/workflow.tsx`: animated five-step post-quotation simulation, visibility trigger, replay and reduced-motion state.
- `src/components/projects.tsx`: real screenshot cards linking to internal detail pages.
- `src/components/project-name.tsx`: keeps the final “Follow-Ups” phrase together in headings.
- `src/components/project-detail.tsx`: shared prototype detail layout and external demo links.
- `src/components/contact-options.tsx`: email, clipboard feedback and prefilled WhatsApp conversation.
- `src/components/ui.tsx`: buttons, page intros and final contact callout.

Keep every existing route and every configured destination. Preserve truthful demonstration labels and sample-content disclosures. Do not replace the workflow or contact interactions with static mockups. Keep the theme bootstrap in the root layout to prevent a wrong-theme flash.

## Deployment

For Vercel, use Next.js with the existing package scripts. `output: 'export'` is intentional: this marketing site needs no runtime backend. Configure `NEXT_PUBLIC_SITE_URL` with the actual deployment origin before building; rebuild when changing the domain. Contact needs no email API key because it opens the visitor's email application or WhatsApp.

The `.openai/hosting.json` identity belongs to the initial Site. Preserve it for continued Sites editing. It is not a Vercel project identifier.

## Remaining review decisions

- Confirm a custom domain before adding custom-domain canonicals or DNS.
- Request original vector branding if sharper tiny logo lettering is needed. The exact supplied artwork is preserved.
- A working delivery service and privacy handling are prerequisites if a submission form is added later.
- Refresh portfolio screenshots if either prototype changes.
