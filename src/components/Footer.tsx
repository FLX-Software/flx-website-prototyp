"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PrivacySettings } from "@/components/PrivacySettings";
import { useLocale } from "@/i18n/LocaleProvider";
import { company } from "@/lib/company";

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.65"
      />
      <circle cx="12" cy="12" r="4.15" stroke="currentColor" strokeWidth="1.65" />
      <circle cx="17.35" cy="6.65" r="1.05" fill="currentColor" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
    </svg>
  );
}

export function Footer() {
  const { t } = useLocale();
  const f = t.footer;
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo-plate mb-5 inline-flex">
            <Image
              src="/brand/logo-horizontal-clear.png"
              alt="FLX Software"
              width={220}
              height={56}
              className="h-10 w-auto"
            />
          </div>
          <p className="footer-address">
            <strong>{company.name}</strong>
            <span>
              {company.street}
              <br />
              {company.zipCity}
              <br />
              {company.country}
            </span>
          </p>
          <div className="footer-social-block">
            <p className="footer-follow">{f.follow}</p>
            <div className="footer-social">
              <a
                href={company.social.instagram}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href={company.social.linkedin}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h2>{f.contactTitle}</h2>
          <dl className="footer-meta">
            <div>
              <dt>{f.phoneLabel}</dt>
              <dd>
                {company.phones.map((phone, index) => (
                  <a key={phone} href={company.phoneHrefs[index]}>
                    {phone}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt>{f.emailLabel}</dt>
              <dd>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
            </div>
            <div>
              <dt>{f.websiteLabel}</dt>
              <dd>
                <a href={company.website} target="_blank" rel="noopener noreferrer">
                  {company.websiteLabel}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <nav className="footer-col" aria-label={f.nav}>
          <h2>{f.nav}</h2>
          <ul>
            {f.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col" aria-label={f.legal}>
          <h2>{f.legal}</h2>
          <ul>
            <li>
              <Link href="/impressum">{f.impressum}</Link>
            </li>
            <li>
              <Link href="/datenschutz">{f.privacy}</Link>
            </li>
            <li>
              <button
                type="button"
                className="footer-privacy-btn"
                onClick={() => setPrivacyOpen(true)}
              >
                {f.privacySettings}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <p>{f.copyright}</p>
          <p>{f.tagline}</p>
        </div>
      </div>

      <PrivacySettings open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
}
