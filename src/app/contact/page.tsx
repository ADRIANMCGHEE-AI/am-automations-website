import { pageMetadata, processSteps } from "@/config/site";
import { PageIntro, Eyebrow } from "@/components/ui";
import { ContactOptions } from "@/components/contact-options";
import { FAQ } from "@/components/faq";
export const metadata = pageMetadata(
  "Contact Adrian — Discuss an Automation Project",
  "Tell Adrian about one task you want to improve. Contact AM Automations by email or WhatsApp, with no technical brief needed.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="LET’S TALK" title="Start with one task.">
        Tell Adrian what takes too much time, what you currently use and what
        you would like to happen. You do not need a technical brief.
      </PageIntro>
      <section className="container contact-page">
        <ContactOptions />
        <div className="contact-guidance">
          <Eyebrow>WHAT HAPPENS NEXT?</Eyebrow>
          <h2>A conversation before a commitment.</h2>
          <p>
            I’ll review the process and clarify anything missing. If there is a
            useful fit, the scope, responsibilities, price and delivery plan are
            agreed before implementation.
          </p>
        </div>
        <div className="process-grid contact-process">
          {processSteps.map(([title, desc], i) => (
            <article className="process-step" key={title}>
              <div className="process-number">
                <span>0{i + 1}</span>
                <span className="process-rule" />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>
      <FAQ compact />
    </>
  );
}
