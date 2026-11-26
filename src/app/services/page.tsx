import { pageMetadata, services, contactHref } from "@/config/site";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageIntro, ContactCTA, Eyebrow } from "@/components/ui";
import { FAQ } from "@/components/faq";
export const metadata = pageMetadata(
  "Business Automation & Website Services",
  "Quotation follow-ups, business process automation, websites, AI customer support and system connections for UK businesses.",
  "/services",
);
export default function Services() {
  return (
    <>
      <PageIntro eyebrow="OUR SERVICES" title="Make work flow better.">
        Start with the task you want to improve. We assess your existing tools,
        agree what the solution should do and keep human responsibilities clear.
      </PageIntro>
      <nav
        className="container service-jump-links"
        aria-label="Service sections"
      >
        {services.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.title}
          </a>
        ))}
      </nav>
      <section className="container service-details">
        {services.map((s, i) => (
          <article id={s.id} className="service-detail" key={s.id}>
            <span className="detail-number">0{i + 1}</span>
            <div>
              <Eyebrow>{s.short}</Eyebrow>
              <h2>{s.title}</h2>
              <p>{s.description}</p>
              <p className="service-use">{s.when}</p>
              <div className="service-actions">
                <Link
                  className="text-link"
                  href={contactHref(s.id)}
                  data-event="Enquiry Started"
                  data-interest={s.id}
                >
                  Discuss This Process{" "}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
                {s.demo && (
                  <Link className="text-link" href={`/work/${s.demo}`}>
                    See the Demonstration{" "}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
            <div className="example-list">
              <span className="micro">WHAT THIS CAN INCLUDE</span>
              {s.examples.map((e) => (
                <p key={e}>{e}</p>
              ))}
              <div className="responsibility">
                <span className="micro">WHERE YOUR TEAM STAYS INVOLVED</span>
                <p>{s.responsibility}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
      <div className="container merchant-banner">
        <div>
          <Eyebrow>FOR BUILDERS’ & TIMBER MERCHANTS</Eyebrow>
          <h2>A closer look at your buying journey.</h2>
          <p>
            Explore how the Northstone concept relates to product information,
            repeat enquiries and buying online.
          </p>
        </div>
        <Link className="text-link" href="/builders-merchants">
          Explore the Merchant Page{" "}
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <FAQ />
      <ContactCTA />
    </>
  );
}
