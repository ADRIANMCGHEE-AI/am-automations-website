import Link from "next/link";
import { pageMetadata, site } from "@/config/site";
import { PageIntro } from "@/components/ui";
export const metadata = pageMetadata(
  "Privacy & Cookies",
  "How AM Automations handles website enquiries, local preferences and technical website information.",
  "/privacy",
);
export default function Privacy() {
  return (
    <>
      <PageIntro
        eyebrow="PRIVACY & COOKIES"
        title="Your information, explained."
      >
        This notice covers this website and initial enquiries to AM Automations.
        Last updated: 16 November 2026.
      </PageIntro>
      <section className="container privacy-content">
        <article>
          <h2>Who to contact</h2>
          <p>
            Adrian McGhee is responsible for information handled by AM
            Automations. For a privacy question or a request about your
            information, email <a href={`mailto:${site.email}`}>{site.email}</a>{" "}
            or message {site.whatsappDisplay}.
          </p>
        </article>
        <article>
          <h2>When you get in touch</h2>
          <p>
            You choose whether to contact us by email or WhatsApp. Your message
            may include your name, contact details, business information and the
            task you want to discuss. The website opens a draft in your chosen
            service; it does not send an enquiry automatically or submit a
            website form.
          </p>
          <p>
            Enquiry information is used to respond, clarify requirements,
            prepare a scope and manage any resulting business relationship.
            Steps you request before a contract can be handled on that basis.
            Our legitimate interests also include responding to business
            enquiries and keeping relevant correspondence. Where applicable,
            records may be needed to meet legal obligations.
          </p>
        </article>
        <article>
          <h2>Providers and access</h2>
          <p>
            Email and messaging providers process messages to deliver and store
            correspondence. The website hosting and security providers process
            technical request information, such as IP addresses and browser
            details, to serve and protect the site. Those providers may process
            information in other countries under their service arrangements.
            Contact Adrian if you need more detail about the providers relevant
            to your enquiry.
          </p>
          <p>
            Project-specific access to a client’s systems or customer records is
            a separate matter and should be agreed as part of the project scope.
          </p>
        </article>
        <article>
          <h2>How long information is kept</h2>
          <p>
            Relevant correspondence is kept for as long as needed to handle the
            enquiry, manage any agreed work, maintain an appropriate business
            record or meet legal obligations. Retention depends on whether the
            enquiry leads to work, the nature of the correspondence and any
            applicable record-keeping requirements. You can ask about or request
            deletion of your information using the contact details above.
          </p>
        </article>
        <article>
          <h2>Cookies, preferences and measurement</h2>
          <p>
            This version of the website has no advertising or visitor analytics
            service enabled. Your light or dark theme preference is saved in
            your browser’s local storage. You can clear it through your browser
            settings. Hosting and security services may use essential security
            cookies and technical logs to deliver and protect the website.
          </p>
          <p>
            Links to WhatsApp and the external demonstrations take you to other
            services. Their own privacy information applies when you use them.
            Any future change to visitor analytics will be reflected in this
            notice.
          </p>
        </article>
        <article>
          <h2>Your choices and rights</h2>
          <p>
            Depending on the circumstances, you may request access, correction,
            deletion, restriction or a portable copy of your personal
            information. Where processing relies on consent, you may withdraw
            that consent.
          </p>
          <p>
            <strong>
              You may object to processing based on legitimate interests.
            </strong>{" "}
            Contact Adrian using the email above to make a request. You can also
            raise a concern with the{" "}
            <a
              href="https://ico.org.uk/make-a-complaint/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Information Commissioner’s Office
            </a>
            .
          </p>
        </article>
        <article>
          <h2>Questions about a project?</h2>
          <p>
            For an ordinary project enquiry, visit the{" "}
            <Link href="/contact">contact page</Link>. For privacy matters,
            email Adrian directly.
          </p>
        </article>
      </section>
    </>
  );
}
