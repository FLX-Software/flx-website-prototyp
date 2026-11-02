"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/i18n/LocaleProvider";

export function Header() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="header-bar container py-3.5">
        <Link
          href="/"
          className="logo-plate header-bar-logo shrink-0"
          aria-label={t.header.home}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/logo-horizontal-clear.png"
            alt="FLX Software"
            width={280}
            height={72}
            className="header-logo"
            priority
          />
        </Link>

        <nav
          className="header-bar-nav hidden items-center justify-center gap-7 xl:gap-9 lg:flex"
          aria-label={t.header.navAria}
        >
          {t.header.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.94rem] font-medium text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-bar-actions flex items-center justify-end gap-2 sm:gap-3">
          <LanguageSwitcher />
          <a href="#kontakt" className="btn btn-primary btn-header">
            {t.header.cta}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-control)] border border-[var(--color-border)] bg-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{t.header.menu}</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-[var(--color-border)] bg-white lg:hidden">
          <nav className="container flex flex-col gap-1 py-4" aria-label={t.header.mobileAria}>
            {t.header.mobileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-[1.05rem] font-medium text-[var(--color-text)] no-underline hover:bg-[var(--color-surface)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="btn btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              {t.header.cta}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
