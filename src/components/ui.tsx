import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { contactHref } from "@/config/site";
export function ButtonLink({
  href,
  children,
  secondary = false,
  external = false,
  className = "",
  interest,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  external?: boolean;
  className?: string;
  interest?: string;
}) {
  return (
    <Link
      className={`button ${secondary ? "button-secondary" : ""} ${className}`}
      href={href}
      data-event={
        external
          ? "Demo Opened"
          : href.startsWith("/contact")
            ? "Enquiry Started"
            : undefined
      }
      data-interest={interest}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external ? (
        <ArrowUpRight aria-hidden="true" size={17} />
      ) : (
        <ArrowRight aria-hidden="true" size={17} />
      )}
    </Link>
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="container page-intro">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p className="lead">{children}</p>
    </section>
  );
}
export function ContactCTA({
  interest,
  title = "What would you like to make easier?",
  description = "Tell Adrian about one task, the tools you use and what you would like to happen. No technical brief needed.",
}: {
  interest?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="closing">
      <div className="container closing-inner">
        <div>
          <Eyebrow>YOUR NEXT STEP</Eyebrow>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <ButtonLink href={contactHref(interest)} interest={interest}>
          Talk Through Your Idea
        </ButtonLink>
      </div>
    </section>
  );
}
