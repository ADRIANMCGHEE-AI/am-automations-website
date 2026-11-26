"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { Expand, X, ZoomIn, ZoomOut } from "lucide-react";
export function ScreenshotPreview({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [zoomed, setZoomed] = useState(false);
  return (
    <figure className="container detail-preview">
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <span className="browser-title">
          {title} / independent demonstration
        </span>
      </div>
      <button
        className="preview-button"
        type="button"
        onClick={() => {
          setZoomed(false);
          dialog.current?.showModal();
        }}
        aria-label={`Enlarge screenshot of ${title}`}
      >
        <Image
          src={src}
          alt={`Screenshot of the ${title} demonstration`}
          width={1348}
          height={926}
          priority
        />
        <span className="preview-enlarge">
          <Expand size={16} aria-hidden="true" /> Explore the screenshot
        </span>
      </button>
      <figcaption>
        Actual demonstration screenshot · sample content · select to enlarge
      </figcaption>
      <dialog
        ref={dialog}
        className="screenshot-dialog"
        aria-label={`${title} screenshot`}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className="screenshot-dialog-inner">
          <div className="screenshot-toolbar">
            <p>{title}</p>
            <button
              type="button"
              className="text-link"
              onClick={() => setZoomed((v) => !v)}
              aria-pressed={zoomed}
            >
              {zoomed ? (
                <ZoomOut size={18} aria-hidden="true" />
              ) : (
                <ZoomIn size={18} aria-hidden="true" />
              )}
              {zoomed ? "Fit image" : "Zoom to detail"}
            </button>
            <button
              type="button"
              className="icon-button"
              onClick={() => dialog.current?.close()}
              aria-label="Close screenshot"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          <div
            className="screenshot-scroll"
            tabIndex={0}
            aria-label="Screenshot; scroll to explore when zoomed"
          >
            <Image
              src={src}
              alt={`Full screenshot of ${title}; sample demonstration content`}
              width={1348}
              height={926}
              style={{
                width: zoomed ? 1348 : "100%",
                maxWidth: zoomed ? "none" : "100%",
                height: "auto",
              }}
            />
          </div>
          <p className="screenshot-hint">
            Use “Zoom to detail” to read the interface. Scroll to explore, or
            press Escape to close.
          </p>
        </div>
      </dialog>
    </figure>
  );
}
