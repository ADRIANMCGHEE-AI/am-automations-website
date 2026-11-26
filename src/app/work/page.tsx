import { pageMetadata } from "@/config/site";
import { PageIntro, ContactCTA } from "@/components/ui";
import { ProjectGrid } from "@/components/projects";
export const metadata = pageMetadata(
  "Automation & Website Demonstrations",
  "Explore two independent demonstrations of quotation automation and trade e-commerce.",
  "/work",
);
export default function Work() {
  return (
    <>
      <PageIntro eyebrow="OUR WORK" title="Ideas you can explore.">
        Two independent prototypes that turn everyday business problems into
        tangible digital experiences.
      </PageIntro>
      <section className="container work-page">
        <ProjectGrid headingLevel={2} />
        <p className="work-disclosure">
          These are independent demonstrations with sample content, rather than
          commissioned client deployments.
        </p>
      </section>
      <ContactCTA />
    </>
  );
}
