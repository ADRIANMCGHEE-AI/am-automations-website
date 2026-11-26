import { ProjectName } from "./project-name";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/config/projects";
import { ButtonLink, ContactCTA, Eyebrow } from "./ui";
import { ScreenshotPreview } from "./screenshot-preview";
import { contactHref } from "@/config/site";
export function ProjectDetail({ index }: { index: 0 | 1 }) {
  const p = projects[index];
  return (
    <>
      <section className="container project-intro">
        <Link href="/work" className="back-link">
          <ArrowLeft aria-hidden="true" size={15} /> Back to Our Work
        </Link>
        <div className="project-meta">
          <Eyebrow>{p.category}</Eyebrow>
          <span className="project-label">{p.label}</span>
        </div>
        <h1>
          <ProjectName title={p.title} />
        </h1>
        <div className="project-intro-bottom">
          <p className="lead">{p.intro}</p>
          <div className="project-intro-actions">
            <ButtonLink href={p.url} external interest={p.slug}>
              Try Live Demo
            </ButtonLink>
            <Link
              className="text-link"
              href={contactHref(p.slug)}
              data-event="Enquiry Started"
              data-interest={p.slug}
            >
              Discuss a Similar System{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <ScreenshotPreview src={p.image} title={p.title} />
      <section className="container section project-overview">
        <div>
          <Eyebrow>THE STARTING POINT</Eyebrow>
          <h2>
            {index === 0
              ? "A consistent next step after the quote."
              : "A clearer route from product to basket."}
          </h2>
        </div>
        <div>
          <p className="lead">{p.problem}</p>
          <p className="project-disclosure">{p.note}</p>
        </div>
      </section>
      <section className="process-section">
        <div className="container section">
          <Eyebrow>WHAT YOU CAN TEST</Eyebrow>
          <h2>Explore the experience.</h2>
          <div className="feature-grid">
            {p.features.map(([t, d], i) => (
              <article key={t}>
                <span className="micro">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <ButtonLink href={p.url} external interest={p.slug}>
            Try Live Demo
          </ButtonLink>
        </div>
      </section>
      <section className="container section evidence-section">
        <div>
          <Eyebrow>BEHIND THE DEMONSTRATION</Eyebrow>
          <h2>
            Why it works
            <br />
            this way.
          </h2>
        </div>
        <div className="evidence-list">
          <article>
            <h3>The design decision</h3>
            <p>{p.reasoning}</p>
          </article>
          <article>
            <h3>What a real implementation needs</h3>
            <p>{p.implementation}</p>
          </article>
          <article>
            <h3>The intended business benefit</h3>
            <p>{p.benefit}</p>
          </article>
        </div>
      </section>
      <section className="container project-next">
        <p>Explore the other demonstration</p>
        <Link href={`/work/${projects[index === 0 ? 1 : 0].slug}`}>
          <span>
            <ProjectName title={projects[index === 0 ? 1 : 0].title} />
          </span>
          <ArrowUpRight size={22} aria-hidden="true" />
        </Link>
      </section>
      <ContactCTA
        interest={p.slug}
        title={
          index === 0
            ? "Want a clearer quotation follow-up?"
            : "Want a better online buying experience?"
        }
        description="Tell Adrian how your current process works. We can explore the fit, the systems involved and a sensible first scope."
      />
    </>
  );
}
