"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Check,
  FileText,
  Clock3,
  Mail,
  MessageSquare,
  RefreshCw,
  RotateCcw,
  ArrowUpRight,
} from "lucide-react";
const steps = [
  {
    title: "Quotation sent",
    detail: "A clear starting point.",
    icon: FileText,
    tag: "SENT",
  },
  {
    title: "Follow-up scheduled",
    detail: "The next step, taken care of.",
    icon: Clock3,
    tag: "DAY 3",
  },
  {
    title: "Follow-up sent",
    detail: "A personalised reminder.",
    icon: Mail,
    tag: "SENT",
  },
  {
    title: "Customer responds",
    detail: "“Thanks, let’s go ahead.”",
    icon: MessageSquare,
    tag: "REPLIED",
  },
  {
    title: "Quotation status updated",
    detail: "Accepted. Future reminders stopped.",
    icon: RefreshCw,
    tag: "UPDATED",
  },
];
export function Workflow() {
  const [step, setStep] = useState(4);
  const [run, setRun] = useState(0);
  const [playing, setPlaying] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let timers: ReturnType<typeof setTimeout>[] = [];
    let observer: IntersectionObserver | undefined;
    const start = () => {
      if (reduced.matches) {
        setStep(4);
        setPlaying(false);
        return;
      }
      setStep(-1);
      setPlaying(true);
      timers = steps.map((_, i) =>
        setTimeout(
          () => {
            setStep(i);
            if (i === 4) setPlaying(false);
          },
          400 + i * 1450,
        ),
      );
    };
    if (run > 0) start();
    else {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            start();
            observer?.disconnect();
          }
        },
        { threshold: 0.25 },
      );
      if (panel.current) observer.observe(panel.current);
    }
    const motionChange = () => {
      if (reduced.matches) {
        timers.forEach(clearTimeout);
        setStep(4);
        setPlaying(false);
      }
    };
    reduced.addEventListener("change", motionChange);
    return () => {
      timers.forEach(clearTimeout);
      observer?.disconnect();
      reduced.removeEventListener("change", motionChange);
    };
  }, [run]);
  return (
    <div className="workflow-wrap">
      <Link
        className="workflow-top-note"
        href="/work/automated-follow-ups"
        aria-label="Explore the quotation follow-up prototype"
      >
        <span className="small-square" /> THE FOLLOW-UP, TAKEN CARE OF{" "}
        <ArrowUpRight aria-hidden="true" size={16} />
      </Link>
      <div className="workflow-panel" ref={panel}>
        <div className="workflow-heading">
          <div>
            <span className="micro">WORKFLOW / 001</span>
            <h2>Quotation to conversation.</h2>
          </div>
          <span className="workflow-status">
            {playing ? "Running" : "Complete"}
          </span>
        </div>
        <div className="sample-quote">
          <FileText aria-hidden="true" size={18} />
          <div>
            <strong>Quotation QT–1042</strong>
            <span>Illustrative customer quotation</span>
          </div>
          <span className="quote-status">
            {step === 4 ? "Accepted" : "Outstanding"}
          </span>
        </div>
        <ol className="workflow-steps">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`${i <= step ? "is-done" : ""} ${i === step ? "is-active" : ""}`}
            >
              <span className="step-icon">
                {i < step || (i === 4 && step === 4) ? (
                  <Check aria-hidden="true" size={16} />
                ) : (
                  <s.icon aria-hidden="true" size={16} />
                )}
              </span>
              <div className="step-copy">
                <strong>{s.title}</strong>
                <span>{s.detail}</span>
              </div>
              <span className="step-tag">{i <= step ? s.tag : "WAITING"}</span>
            </li>
          ))}
        </ol>
        <div className="workflow-footer">
          <span>
            <span className="status-dot" /> Illustrative workflow · no emails
            sent
          </span>
          <button
            type="button"
            onClick={() => setRun((r) => r + 1)}
            aria-label="Replay quotation follow-up workflow"
          >
            <RotateCcw aria-hidden="true" size={13} /> Replay
          </button>
        </div>
      </div>
      <div className="workflow-bottom-note">
        <span>
          Every quotation deserves
          <br />
          <strong>a follow-up.</strong>
        </span>
        <span className="workflow-line" />
      </div>
      <p className="sr-only" role="status">
        {playing
          ? "Illustrative quotation follow-up workflow is playing."
          : "Workflow complete: quotation accepted and future reminders stopped."}
      </p>
    </div>
  );
}
