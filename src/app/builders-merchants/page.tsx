import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/config/site";
import { PageIntro, ButtonLink, ContactCTA, Eyebrow } from "@/components/ui";
import { FAQ } from "@/components/faq";
export const metadata = pageMetadata(
  "Websites & Connected Systems for Builders’ Merchants",
  "Trade e-commerce concepts and connected workflows for UK builders’ and timber merchants. Explore the Northstone demonstration with AM Automations.",
  "/builders-merchants",
);
export default function Merchants() {
  return (
    <>
      <PageIntro
        eyebrow="FOR BUILDERS’ & TIMBER MERCHANTS"
        title="Make the next buying step easier."
      >
        Help customers find the right material, understand the product and
        explore buying online. Start with your catalogue, your customers and the
        way your branch already works.
      </PageIntro>
      <section className="container merchant-feature">
        <Link
          href="/work/northstone"
          className="merchant-preview"

          data-interest="northstone"
        >
          <Image
            src="/projects/northstone.jpg"
            alt="Northstone demonstration showing its trade merchant homepage and product categories"
            width={1348}
            height={926}
            priority
          />
          <span className="preview-enlarge">
            Explore the Northstone concept{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </Link>
        <div className="merchant-feature-copy">
          <Eyebrow>TRY THE NORTHSTONE CONCEPT</Eyebrow>
          <h2>
            The trade counter,
            <br />
            online.
          </h2>
          <p>
            Browse categories, search the sample catalogue, review
            specifications and prices, and add products to a basket.
          </p>
          <p className="project-disclosure">
            Independent demonstration with sample products, stock and prices.
            Live stock, payments, trade-account rules and operational
            integrations require separate implementation.
          </p>
          <div className="project-intro-actions">
            <ButtonLink
              href="https://northstone-trade-timber.vercel.app/"
              external
              interest="northstone"
            >
              Try the Merchant Demo
            </ButtonLink>
            <Link href="/work/northstone" className="text-link">
              See the Project Decisions{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="container section">
          <Eyebrow>THREE PARTS OF THE JOURNEY</Eyebrow>
          <h2>
            Help the customer
            <br />
            take the next step.
          </h2>
          <div className="feature-grid">
            <article>
              <span className="micro">01 / FIND</span>
              <h3>Get to the right product.</h3>
              <p>
                Clear categories, catalogue search and product descriptions help
                customers narrow down the materials they need.
              </p>
            </article>
            <article>
              <span className="micro">02 / UNDERSTAND</span>
              <h3>See the useful details.</h3>
              <p>
                Specifications, pricing presentation and clear buying
                information support the decision. Any stock information needs an
                agreed, reliable source.
              </p>
            </article>
            <article>
              <span className="micro">03 / ACT</span>
              <h3>Make the next step clear.</h3>
              <p>
                A basket, a suitable enquiry or a route to the branch should fit
                your trading rules and the way you fulfil orders.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="container section evidence-section">
        <div>
          <Eyebrow>BUILT AROUND YOUR OPERATION</Eyebrow>
          <h2>
            Start with what
            <br />
            you already use.
          </h2>
        </div>
        <div className="evidence-list">
          <article>
            <h3>Review the catalogue and the buying journey</h3>
            <p>
              Look at how products are organised, which questions customers ask
              and where the current website sends them next.
            </p>
          </article>
          <article>
            <h3>Assess the systems before promising a connection</h3>
            <p>
              Check product data, stock systems, account pricing, payment and
              delivery requirements. Compatibility and access determine what can
              sensibly be connected.
            </p>
          </article>
          <article>
            <h3>Agree one useful first scope</h3>
            <p>
              That could be a website improvement, a catalogue experience or a
              connected workflow. The scope identifies what is included, what
              stays manual and how the result will be tested.
            </p>
          </article>
        </div>
      </section>
      <div className="container merchant-banner">
        <div>
          <Eyebrow>AFTER THE QUOTATION</Eyebrow>
          <h2>Follow-up is part of the journey too.</h2>
          <p>
            Explore a separate simulation showing reminders, customer replies
            and a stopping rule for outstanding quotations.
          </p>
        </div>
        <Link href="/work/automated-follow-ups" className="text-link">
          Explore Follow-Ups <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <FAQ compact />
      <ContactCTA
        interest="builders-merchants"
        title="What is getting in your customers’ way?"
        description="Tell Adrian about your merchant business, your website and the systems you use. We’ll explore a practical first improvement."
      />
    </>
  );
}
