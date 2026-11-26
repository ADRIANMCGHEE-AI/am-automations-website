import { pageMetadata } from "@/config/site";
import { PageIntro, ContactCTA, Eyebrow } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export const metadata = pageMetadata(
  "About Adrian McGhee",
  "Meet Adrian McGhee, founder of AM Automations. A Greater Manchester automation specialist with a background in sales and operations coordination.",
  "/about",
);
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT AM AUTOMATIONS"
        title="An operations perspective. A practical approach."
      >
        AM Automations is led by Adrian McGhee, based in Greater Manchester and
        working with businesses across the UK.
      </PageIntro>
      <section className="container section about-body">
        <div>
          <Eyebrow>MEET THE FOUNDER</Eyebrow>
          <h2>Hi, I’m Adrian.</h2>
          <span className="founder-signature">Adrian McGhee</span>
          <span className="micro">FOUNDER · AM AUTOMATIONS</span>
          <p className="founder-location">Greater Manchester · UK</p>
        </div>
        <div>
          <p className="lead">
            My background is in sales and operations coordination—the work
            behind the enquiry, the quotation and the order.
          </p>
          <p>
            I work with customer enquiries, quotations, purchasing, logistics,
            supplier communication and after-sales support. That experience
            shapes the questions I ask when a process needs improving: where
            does the information come from, who needs it next and what happens
            when something changes?
          </p>
          <p>
            I started AM Automations to build useful websites, workflows and
            connected systems around those everyday operational problems. You
            deal directly with me, from understanding the task to reviewing the
            result.
          </p>
          <p>
            I look at the tools a business already uses before recommending
            something new. Sometimes AI is useful. Sometimes a straightforward
            integration, a clearer workflow or a small business tool is the
            appropriate answer.
          </p>
          <Link
            href="/contact"
            className="text-link"
            data-event="Enquiry Started"
          >
            Tell Me About Your Business{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="about-statement">
        <div className="container section">
          <Eyebrow>THE STARTING QUESTION</Eyebrow>
          <p>
            Which task takes more effort
            <br />
            <span>than it should?</span>
          </p>
        </div>
      </section>
      <section className="container section principles">
        <article>
          <span className="micro">01 / UNDERSTAND</span>
          <h3>Listen to the people doing the work.</h3>
          <p>
            Map the current process and the exceptions, rather than starting
            with a tool.
          </p>
        </article>
        <article>
          <span className="micro">02 / AGREE</span>
          <h3>Make the scope clear.</h3>
          <p>
            Set out what is being built, how it will be reviewed and who remains
            responsible for each step.
          </p>
        </article>
        <article>
          <span className="micro">03 / HAND OVER</span>
          <h3>Make it useful day to day.</h3>
          <p>
            Explain how the system works and agree what support, checks or
            maintenance are needed.
          </p>
        </article>
      </section>
      <ContactCTA />
    </>
  );
}
