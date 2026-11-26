import Link from "next/link";
import { ArrowUpRight, ArrowDown, Check } from "lucide-react";
import { Workflow } from "@/components/workflow";
import { ButtonLink, ContactCTA, Eyebrow } from "@/components/ui";
import { ProjectGrid } from "@/components/projects";
import { FAQ } from "@/components/faq";
import { outcomes, processSteps } from "@/config/site";
const pains = [
  "Quotations waiting for a follow-up",
  "Information entered in more than one place",
  "Customer questions on repeat",
  "Product and stock updates done by hand",
];
export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <Eyebrow>
            <span className="eyebrow-line" /> AUTOMATION FOR UK BUSINESSES
          </Eyebrow>
          <h1>
            We automate the work slowing your business <span>down.</span>
          </h1>
          <p className="hero-description">
            Websites, quotation follow-ups and connected systems—helping your
            team spend less time chasing customers, copying information and
            answering repeat questions.
          </p>
          <div className="hero-buttons">
            <ButtonLink href="/contact">Talk Through Your Idea</ButtonLink>
            <ButtonLink secondary href="#selected-work">
              See What We Build
            </ButtonLink>
          </div>
          <p className="hero-reassurance">
            Start with one task. No technical brief needed.
          </p>
          <a className="hero-scroll" href="#selected-work">
            <span>
              <ArrowDown aria-hidden="true" size={14} />
            </span>{" "}
            Explore the demonstrations
          </a>
        </div>
        <div className="hero-workflow">
          <Workflow />
        </div>
      </section>
      <div className="container hero-foot">
        <span>GREATER MANCHESTER · WORKING ACROSS THE UK</span>
        <p>
          Founder-led. Built around the tools and processes you already use.
        </p>
      </div>
      <section id="selected-work" className="container section work-section">
        <div className="section-heading">
          <div>
            <Eyebrow>SEE THE WORK</Eyebrow>
            <h2>
              Practical ideas.
              <br />
              <span className="muted-heading">Ready to explore.</span>
            </h2>
          </div>
          <div>
            <p>
              Two independent demonstrations showing how a different process
              could work. Explore the project or try the demo directly.
            </p>
            <Link className="text-link" href="/work">
              View All Work <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <ProjectGrid />
      </section>
      <section className="services-section">
        <div className="container section">
          <div className="section-heading">
            <div>
              <Eyebrow>WHAT DO YOU WANT TO IMPROVE?</Eyebrow>
              <h2>
                Start with the work.
                <br />
                Find the right solution.
              </h2>
            </div>
            <p>
              Three useful starting points. The details are shaped around your
              business, your tools and your team.
            </p>
          </div>
          <div className="outcome-grid">
            {outcomes.map((o, i) => (
              <Link key={o.title} href={o.href} className="outcome-item">
                <span className="micro">0{i + 1}</span>
                <h3>{o.title}</h3>
                <p>{o.description}</p>
                <span className="outcome-detail">{o.detail}</span>
                <span className="text-link">
                  Explore this service{" "}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <Link className="text-link" href="/services">
            All Services <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section id="problems" className="container section problems">
        <div>
          <Eyebrow>THE EVERYDAY FRICTION</Eyebrow>
          <h2>
            Small tasks.
            <br />
            <span className="muted-heading">A lot of repetition.</span>
          </h2>
          <p>
            We look at where the work gets held up, what can safely happen
            automatically and where a person should stay involved.
          </p>
        </div>
        <div className="pain-list">
          {pains.map((p, i) => (
            <div key={p}>
              <span className="row-number">0{i + 1}</span>
              <h3>{p}</h3>
              <Check size={16} aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>
      <section id="how-we-work" className="process-section">
        <div className="container section">
          <div className="section-heading">
            <div>
              <Eyebrow>HOW A PROJECT WORKS</Eyebrow>
              <h2>
                A clear process.
                <br />
                An agreed next step.
              </h2>
            </div>
            <p>
              You do not need to choose the technology. We begin with the
              problem and agree what the work will involve.
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map(([title, desc], i) => (
              <div className="process-step" key={title}>
                <div className="process-number">
                  <span>0{i + 1}</span>
                  <span className="process-rule" />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container section about-preview">
        <Eyebrow>MEET ADRIAN</Eyebrow>
        <div>
          <h2>
            Built with an
            <br />
            <span className="muted-heading">operations perspective.</span>
          </h2>
          <p>
            I’m Adrian McGhee, the founder of AM Automations, based in Greater
            Manchester. My background in sales and operations coordination
            informs how I approach the work: understand the task, consider the
            people using the system and keep the next step clear.
          </p>
          <Link href="/about" className="text-link">
            More About Adrian <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/builders-merchants"
            className="text-link merchant-inline"
          >
            Run a builders’ or timber merchant?{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <FAQ />
      <ContactCTA />
    </>
  );
}
