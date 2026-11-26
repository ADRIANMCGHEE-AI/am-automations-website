import { faqs } from "@/config/site";
import { Eyebrow } from "./ui";
import { Plus } from "lucide-react";
export function FAQ({ compact = false }: { compact?: boolean }) {
  return (
    <section className="container section faq-section" id="questions">
      <div className="faq-intro">
        <Eyebrow>BEFORE WE START</Eyebrow>
        <h2>A few useful answers.</h2>
        <p>Scope, costs and what happens next. Clear before you commit.</p>
      </div>
      <div className="faq-list">
        {(compact ? faqs.slice(0, 4) : faqs).map((f) => (
          <details key={f.question}>
            <summary>
              {f.question}
              <Plus size={18} aria-hidden="true" />
            </summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
