import Image from "next/image";
import { ProjectName } from "./project-name";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/config/projects";
export function ProjectGrid({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="project-grid">
      {projects.map((p, i) => (
        <article className="project-card" key={p.slug}>
          <Link
            className="project-summary"
            href={`/work/${p.slug}`}
            aria-labelledby={`project-title-${p.slug}`}

            data-interest={p.slug}
          >
            <div className={`project-image project-image-${i}`}>
              <div className="project-browser">
                <div className="browser-bar">
                  <span />
                  <span />
                  <span />
                  <span className="browser-title">
                    {i === 0
                      ? "Quotation follow-up / interactive demo"
                      : "Northstone / trade & timber"}
                  </span>
                </div>
                <Image
                  src={p.image}
                  alt={`Screenshot of the ${p.title} demonstration`}
                  width={1348}
                  height={926}
                />
              </div>
              <span className="project-open" aria-hidden="true">
                <ArrowUpRight size={24} />
              </span>
            </div>
            <div className="project-meta">
              <span className="micro">{p.category}</span>
              <span className="project-label">{p.label}</span>
            </div>
            <Heading id={`project-title-${p.slug}`}>
              <span className="project-title-text">
                <ProjectName title={p.title} />
              </span>
              <ArrowUpRight aria-hidden="true" size={23} />
            </Heading>
            <p>{p.description}</p>
          </Link>
          <div className="project-actions">
            <Link className="text-link" href={`/work/${p.slug}`}>
              View Project <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <a
              className="text-link"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              data-event="Demo Opened"
              data-interest={p.slug}
            >
              Try Demo <ArrowUpRight size={15} aria-hidden="true" />
              <span className="sr-only">: {p.title} (opens a new tab)</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
