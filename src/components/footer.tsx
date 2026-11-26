import Link from "next/link";
import { Logo } from "./header";
import { site, whatsappUrl } from "@/config/site";
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
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} AM Automations</p>
        <Link href="/privacy">Privacy & Cookies</Link>
      </div>
    </footer>
  );
}
