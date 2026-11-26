"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MessageSquare } from "lucide-react";
import { site, contactLinks, enquiryTopics } from "@/config/site";
import { useEnquiryContext } from "./enquiry-context";
import { trackEvent } from "./measurement";
export function ContactOptions() {
  const [copy, setCopy] = useState("");
  const { topic, choose } = useEnquiryContext();
  const links = contactLinks(topic.id);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopy("Email address copied.");
      trackEvent("Email Copied", { interest: topic.id });
    } catch {
      setCopy("Select and copy the email address above.");
    }
  };
  return (
    <>
      <div className="enquiry-context">
        <div>
          <label htmlFor="enquiry-interest">
            What would you like to discuss?
          </label>
          <p>Your chosen topic is included in the email or WhatsApp draft.</p>
        </div>
        <select
          id="enquiry-interest"
          value={topic.id}
          onChange={(e) => choose(e.target.value)}
        >
          {enquiryTopics.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div className="contact-options">
        <article className="contact-card">
          <div className="contact-card-top">
            <Mail size={24} aria-hidden="true" />
            <span className="micro">01 / EMAIL</span>
          </div>
          <h2>Start a conversation.</h2>
          <p>
            Tell Adrian what takes too much time, which tools you use and what
            you would like to happen.
          </p>
          <a
            href={links.email}
            className="contact-address email-address"
            data-event="Email Clicked"
            data-interest={topic.id}
          >
            <span>{site.email}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <button type="button" className="copy-button" onClick={copyEmail}>
            {copy === "Email address copied." ? (
              <Check size={14} aria-hidden="true" />
            ) : (
              <Copy size={14} aria-hidden="true" />
            )}{" "}
            Copy Email Address
          </button>
          <span className="copy-status" role="status">
            {copy}
          </span>
        </article>
        <article className="contact-card whatsapp-card">
          <div className="contact-card-top">
            <MessageSquare size={24} aria-hidden="true" />
            <span className="micro">02 / WHATSAPP</span>
          </div>
          <h2>Prefer a message?</h2>
          <p>
            Open a WhatsApp draft with your chosen topic. Add a little context
            and send it when you are ready.
          </p>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-address"
            data-event="WhatsApp Clicked"
            data-interest={topic.id}
          >
            {site.whatsappDisplay}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a
            className="text-link"
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-event="WhatsApp Clicked"
            data-interest={topic.id}
          >
            Open WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <span className="contact-small">WhatsApp messages only</span>
        </article>
      </div>
      <p className="contact-privacy">
        You choose when to send your message. Read how enquiry information is
        handled in the <Link href="/privacy">privacy notice</Link>.
      </p>
    </>
  );
}
