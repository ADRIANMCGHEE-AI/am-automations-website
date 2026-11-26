# Verification — 15 November 2026

## Automated checks

- ESLint passed with no application warnings or errors.
- TypeScript strict type checking passed.
- Next.js production static export passed. All seven content routes, 404, robots and sitemap generated.
- Source marketing text was scanned for excluded organisations and fabricated headline metrics.

## Browser checks

- Desktop light and dark homepage layouts inspected.
- Every content page rendered inside a 320px browser frame: no horizontal overflow (305px client width after the frame scrollbar).
- A 390px work view also had no horizontal overflow.
- Mobile navigation opened and closed, and led to Contact.
- Theme toggle worked in both directions and the chosen theme persisted across route changes.
- Workflow replay returned to the running state, progressed through the sequence and reached completion.
- The Work navigation, project card, internal detail page and live-demo destination were verified as a complete flow.
- How We Work navigated from a detail page back to the homepage anchor.
- Contact email and WhatsApp URLs matched the configured values. Copy Email displayed “Email address copied.” after clipboard success.
- Both external prototypes were inspected and real screenshots captured. The follow-up demo's Send Demo Quotation action was tested; no real messages were sent.

## Review limits

- Reduced-motion handling was reviewed in code; browser OS motion emulation was not used.
- Email-client launching and WhatsApp sending depend on visitors' installed apps/accounts; no real enquiry was sent as part of QA.
- Original logo detail is limited by the supplied raster artwork. Exact pixels and soft small lettering were retained through a transparent SVG mask.
- The Site origin is configured for the initial production build. A custom-domain build needs NEXT_PUBLIC_SITE_URL set to that confirmed domain.

## Mobile portfolio refinement

Project cards now preserve the screenshot's 1348:926 aspect ratio below 700px instead of cropping it into a fixed-height frame. Preview padding, arrow buttons and title spacing were reduced. The quotation screenshot was refreshed from the top of the live demo to retain its full heading. Verified proportional image rendering at 390px and no horizontal overflow at 320px. Desktop preview sizing remains unchanged.


## Complete desktop and mobile review

All seven content pages were checked at 320, 390, 768, 1024 and 1440px in both light and dark mode. No horizontal overflow was observed in the 70 combinations. After the last title and navigation refinements, all pages were rechecked at 320 and 1440px in both themes. Text-contrast checks of rendered headings, paragraphs, links, controls and labels passed WCAG AA thresholds for their text sizes in the tested views. These checks are not a claim of complete accessibility certification.

Refinements include more readable supporting copy, 44px primary control targets, consistent full-width screenshot scaling on cards and detail pages, sensible email wrapping at the @ sign, a theme-aware favicon, and page-specific social metadata. “Follow-Ups” stays together in portfolio headings. Non-interactive service examples no longer use link-style arrows; the workflow header arrow now opens the relevant project detail page.

Navigation now marks the active section on project detail routes and normalises trailing slashes. The mobile disclosure closes on Escape, outside interaction, focus leaving the header or a switch to desktop sizing. It preserves ordinary Tab navigation instead of cycling focus inside the menu.

Verified interactions: Escape returns focus to the menu button; Tab proceeds into main content; menu and back links navigate correctly; both project discovery paths reach their correct external destinations; email copying confirms actual clipboard success; theme preference survives navigation and reload; workflow replay completes all five steps and marks the sample quotation accepted; How We Work returns from a detail page to the homepage section.

A short 844 × 390 landscape frame was checked: the expanded menu fits the viewport, scrolls internally and its last CTA remains keyboard reachable. The narrow 404 layout has no overflow and its Back to Home action works. Reduced-motion behaviour remains source-reviewed; OS motion emulation was not used. Email and WhatsApp links were verified without sending messages.

## One-line contact email

The email now uses smaller card-relative text (12–15px), with wrapping disabled and the same mailto destination. Verified at 320, 390, 768, 1024 and 1440px; the full address fits on one line without text overflow. WhatsApp typography is unchanged.


## Custom domain — 16 November 2026

The domain adrianmcgheeautomations.com is attached to the existing Site. Hosting validation and HTTPS certificate status both report active. The custom-domain homepage was opened in the browser and showed the AM Automations website. Site metadata, canonicals, robots and sitemap use the confirmed custom origin, with an optional NEXT_PUBLIC_SITE_URL override.

## 16 November 2026: buyer-journey implementation

- Preserved the existing public site, custom domain, branding, theme control and approved demo destinations.
- Moved selected work immediately after the hero. At 390 × 844, its start moved from approximately 3,516px to 1,276px.
- Added direct demo links, customer-outcome service groups, contextual enquiry topics, commercial FAQs, founder background, a merchant landing page, a privacy notice, screenshot zoom controls and a 1200 × 630 sharing image.
- Production export and TypeScript checks passed.
- Browser checks covered all nine public pages in dark and light themes. No horizontal overflow was found at 390px; homepage, contact and merchant pages were additionally checked at 320px and 768px.
- Automated WCAG A/AA checks found a light-theme outcome-label contrast issue, which was fixed and retested successfully. No other violations were flagged in the checked pages/themes. This is not a complete accessibility audit.
- Verified service context in email and WhatsApp drafts, changing enquiry topic, clipboard success, invalid-topic fallback, mobile menu Escape handling, FAQ disclosure, theme persistence, screenshot dialog/zoom/Escape, and reduced-motion workflow behaviour.
- Verified a direct project visit emits one Project Viewed event, without collecting message contents. Analytics service collection remains disabled pending owner configuration.
- Verified all nine routes, sharing image, sitemap and robots file return 200 in the production export.
- Remaining owner setup: analytics account, Google Search Console verification, and a permanent www redirect at the hosting/domain layer. No founder photograph was invented.
