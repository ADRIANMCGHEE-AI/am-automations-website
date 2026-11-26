# Website specification

AM Automations is presented as a UK automation specialist, with a black, white, charcoal and grey editorial design. The homepage includes the business promise, quotation follow-up demonstration, operational pains, six services, two independent prototype features, Discover / Design / Build / Improve, founder-led introduction and contact CTA.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage and process anchor |
| `/services` | Six detailed services with examples |
| `/work` | Exactly two independent demonstrations |
| `/work/automated-follow-ups` | Follow-up prototype detail and external link |
| `/work/northstone` | Trade e-commerce concept detail and external link |
| `/about` | Founder-led introduction and principles |
| `/contact` | Email and WhatsApp contact |
| Unknown route | Helpful 404 |

## Behaviour

Theme defaults to the operating system and persists an override. Header navigation collapses to a disclosure on smaller screens. The homepage workflow simulates quotation sent, follow-up scheduled, follow-up sent, customer reply and status update in approximately 6.2 seconds. It plays once on visibility and supports replay. No emails are sent by this demonstration. Reduced motion uses a completed static state.

Homepage work cards lead to internal detail routes, then to external prototypes in a new tab with safe rel attributes. Contact launches the visitor's email client or a WhatsApp conversation. The site sends no messages itself. No testimonials, performance figures, customer deployments or unverified integrations are claimed.
