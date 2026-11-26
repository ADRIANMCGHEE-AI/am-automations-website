"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { navigation } from "@/config/site";
const subscribe = (cb: () => void) => {
  window.addEventListener("themechange", cb);
  return () => window.removeEventListener("themechange", cb);
};
const getTheme = () => document.documentElement.dataset.theme === "dark";
export function Logo() {
  return (
    <span className="brand">
      <span className="brand-art">
        <Image
          src="/branding/logo-black.svg"
          width={68}
          height={55}
          alt=""
          className="logo-light"
        />
        <Image
          src="/branding/logo-white.svg"
          width={68}
          height={55}
          alt=""
          className="logo-dark"
        />
      </span>
      <span>
        AM Automations
        <span className="brand-caption">INTELLIGENT BUSINESS SYSTEMS</span>
      </span>
    </span>
  );
}
export function Header() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const dark = useSyncExternalStore(subscribe, getTheme, () => false);
  const current = (href: string): "page" | "location" | undefined =>
    pathname === href
      ? "page"
      : !href.includes("#") && pathname.startsWith(href + "/")
        ? "location"
        : undefined;
  const toggleTheme = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("am-theme", next);
    } catch {}
    window.dispatchEvent(new Event("themechange"));
  };
  useEffect(() => {
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const update = () => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem("am-theme");
      } catch {}
      document.documentElement.dataset.theme =
        saved === "light" || saved === "dark"
          ? saved
          : mq.matches
            ? "dark"
            : "light";
      window.dispatchEvent(new Event("themechange"));
    };
    const storageChange = (e: StorageEvent) => {
      if (e.key === "am-theme" || e.key === null) update();
    };
    mq.addEventListener("change", update);
    window.addEventListener("storage", storageChange);
    return () => {
      mq.removeEventListener("change", update);
      window.removeEventListener("storage", storageChange);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const outside = (e: PointerEvent) => {
      if (e.target instanceof Node && !headerRef.current?.contains(e.target))
        setOpen(false);
    };
    const focusOutside = (e: FocusEvent) => {
      if (
        e.relatedTarget instanceof Node &&
        !headerRef.current?.contains(e.relatedTarget)
      )
        setOpen(false);
    };
    const desktop = matchMedia("(min-width: 1001px)");
    const resize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", handler);
    document.addEventListener("pointerdown", outside);
    document.addEventListener("focusout", focusOutside);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", handler);
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("focusout", focusOutside);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <Link
          href="/"
          aria-label="AM Automations home"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current(n.href)}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            <Sun aria-hidden="true" className="sun" size={18} />
            <Moon aria-hidden="true" className="moon" size={18} />
          </button>
          <Link
            className="header-cta"
            href="/contact"
            data-event="Enquiry Started"
          >
            Talk Through Your Idea <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
          <button
            type="button"
            ref={menuButton}
            className="icon-button menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X aria-hidden="true" size={22} />
            ) : (
              <Menu aria-hidden="true" size={22} />
            )}
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {navigation.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            aria-current={current(n.href)}
            onClick={() => setOpen(false)}
          >
            {n.label}
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        ))}
        <Link
          className="mobile-contact-cta"
          href="/contact"
          onClick={() => setOpen(false)}
        >
          Talk Through Your Idea <ArrowUpRight aria-hidden="true" size={17} />
        </Link>
      </nav>
    </header>
  );
}
