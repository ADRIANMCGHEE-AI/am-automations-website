import Link from "next/link";
import { Logo } from "./header";
import { site, socialLinks, whatsappUrl } from "@/config/site";
const socialIcons: Record<(typeof socialLinks)[number]["label"], string> = {
  LinkedIn:
    "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 4.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  X: "M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.25 6.93 6.06-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z",
};
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" aria-label="AM Automations home">
            <Logo />
          </Link>
          <p>
            Adrian McGhee · Greater Manchester
            <br />
            Practical automation for businesses across the UK.
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/services">Services</Link>
          <Link href="/work">Our Work</Link>
          <Link href="/builders-merchants">For Merchants</Link>
          <Link href="/about">About Adrian</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${site.email}`} data-event="Email Clicked">
            {site.email}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-event="WhatsApp Clicked"
          >
            WhatsApp: {site.whatsappDisplay}
          </a>
          <span>Messages only</span>
          <div
            className="footer-social"
            aria-label="Social profiles"
            role="group"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="footer-social-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d={socialIcons[link.label]} />
                </svg>
                {link.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} AM Automations</p>
        <Link href="/privacy">Privacy & Cookies</Link>
      </div>
    </footer>
  );
}
