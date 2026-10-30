"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";

function FlowArrow({ delay = "0s" }: { delay?: string }) {
  return (
    <div
      className="hero-vision-flow"
      aria-hidden="true"
      style={{ ["--flow-delay" as string]: delay }}
    >
      <span className="hero-flow-track">
        <span className="hero-flow-pulse" />
      </span>
      <svg
        className="hero-flow-head"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 12h14M14 6l6 6-6 6" />
      </svg>
    </div>
  );
}

export function Hero() {
  const { t } = useLocale();
  const h = t.hero;

  return (
    <section className="hero section" aria-labelledby="hero-title">
      <div className="container-wide relative">
        <div className="hero-copy">
          <p className="eyebrow">{h.eyebrow}</p>
          <h1 id="hero-title" className="mb-5">
            {h.titleLine1}
            <br />
            <span className="heading-highlight">{h.titleLine2}</span>
          </h1>
          <p className="lead">{h.lead}</p>
          <div className="hero-actions">
            <a href="#kontakt" className="btn btn-primary">
              {h.ctaPrimary}
            </a>
            <a href="#loesungen" className="btn btn-secondary">
              {h.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hero-vision" aria-label={h.visionAria}>
          <div className="hero-vision-panel">
            <p className="hero-vision-label">{h.sourceLabel}</p>
            <div className="hero-vision-case">
              {h.sourceItems.map((item) => (
                <div key={item}>
                  <span className="mark" aria-hidden="true">
                    •
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <p className="hero-vision-caption">{h.sourceCaption}</p>
          </div>

          <FlowArrow />

          <div className="hero-vision-hub">
            <div className="hero-vision-brand">
              <Image
                src="/brand/logo-mark-clear.png"
                alt="FLX Software"
                width={220}
                height={220}
                className="h-[6rem] w-[6rem] object-contain sm:h-[7.25rem] sm:w-[7.25rem]"
                priority
              />
            </div>
            <p>{h.hubCaption}</p>
          </div>

          <FlowArrow delay="0.75s" />

          <div className="hero-vision-panel">
            <p className="hero-vision-label">{h.destLabel}</p>
            <div className="hero-vision-case">
              <div>
                <span className="mark mark-ok" aria-hidden="true">
                  ✓
                </span>
                {h.destItems[0]}
              </div>
              <div>
                <span className="mark mark-ok" aria-hidden="true">
                  ✓
                </span>
                {h.destItems[1]}
              </div>
              <div className="hero-vision-next">
                <span aria-hidden="true">→</span>
                {h.destItems[2]}
              </div>
            </div>
            <p className="hero-vision-caption">{h.destCaption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
