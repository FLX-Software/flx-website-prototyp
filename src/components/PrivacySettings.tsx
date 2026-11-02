"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

type PrivacySettingsProps = {
  open: boolean;
  onClose: () => void;
};

export function PrivacySettings({ open, onClose }: PrivacySettingsProps) {
  const { t } = useLocale();
  const p = t.privacySettings;
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="privacy-overlay" role="presentation" onClick={onClose}>
      <div
        className="privacy-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="privacy-dialog-head">
          <h2 id={titleId} className="m-0 text-xl">
            {p.title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
          >
            {p.close}
          </button>
        </div>

        <div className="privacy-dialog-body">
          <p>{p.intro}</p>
          <section>
            <h3>{p.necessaryTitle}</h3>
            <p>{p.necessaryText}</p>
          </section>
          <section>
            <h3>{p.formTitle}</h3>
            <p>{p.formText}</p>
          </section>
          <section>
            <h3>{p.hostingTitle}</h3>
            <p>{p.hostingText}</p>
          </section>
          <p className="privacy-note">{p.note}</p>
          <Link href="/datenschutz" className="btn btn-primary" onClick={onClose}>
            {p.privacyLink}
          </Link>
        </div>
      </div>
    </div>
  );
}
