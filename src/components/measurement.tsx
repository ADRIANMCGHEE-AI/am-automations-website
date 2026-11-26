"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
type EventProps = { interest?: string; path?: string };
declare global {
  interface Window {
    plausible?: (name: string, options?: { props?: EventProps }) => void;
  }
}
export function trackEvent(name: string, props: EventProps = {}) {
  if (typeof window === "undefined") return;
  const safe = {
    interest: props.interest || "general",
    path: window.location.pathname,
  };
  window.dispatchEvent(
    new CustomEvent("am:measurement", { detail: { name, props: safe } }),
  );
  // An owner-configured analytics integration can subscribe or provide Plausible.
  // No analytics service, cookies or network requests are enabled by this module.
  try {
    window.plausible?.(name, { props: safe });
  } catch {
    /* Measurement must not interrupt navigation. */
  }
}
export function Measurement() {
  const pathname = usePathname();
  useEffect(() => {
    const slug = pathname.split("/").filter(Boolean)[1];
    if (
      pathname.startsWith("/work/") &&
      ["northstone", "automated-follow-ups"].includes(slug)
    )
      trackEvent("Project Viewed", { interest: slug });
  }, [pathname]);
  useEffect(() => {
    const click = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      const target = e.target.closest<HTMLElement>("[data-event]");
      if (target?.dataset.event)
        trackEvent(target.dataset.event, { interest: target.dataset.interest });
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  return null;
}
