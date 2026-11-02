"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

export function Extras() {
  const { t } = useLocale();
  const e = t.extras;
  const [active, setActive] = useState(0);

  return (
    <section
      id="moeglichkeiten"
      className="section section-surface"
      aria-labelledby="extras-title"
    >
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">{e.eyebrow}</p>
          <h2 id="extras-title" className="mb-4">
            {e.title}
          </h2>
          <p className="lead">{e.lead}</p>
        </div>

        <div className="extras-grid">
          <div className="extras-card">
            <h3 className="mt-0 mb-4 text-xl">{e.interfaceTitle}</h3>
            <ul className="extras-list">
              {e.interfaces.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="extras-card">
            <h3 className="mt-0 mb-3 text-xl">{e.aiTitle}</h3>
            <p className="mb-4 text-[var(--color-text)]">{e.aiText}</p>
            <ul className="m-0 mb-0 grid list-none gap-2 p-0">
              {e.aiPoints.map((point) => (
                <li key={point} className="flex gap-2 text-[0.98rem]">
                  <span className="text-[var(--color-brand)]" aria-hidden="true">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="extras-demo panel overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] bg-[var(--color-dark)] px-5 py-3 text-white">
            <p className="m-0 font-heading font-semibold">{e.helperTitle}</p>
            <span className="example-badge bg-white/10 text-[#9ec9ff]">{e.demo}</span>
          </div>
          <div className="space-y-3 bg-[var(--color-surface)] p-5">
            <div className="flex flex-wrap gap-2">
              {e.demos.map((item, index) => (
                <button
                  key={item.q}
                  type="button"
                  className={`min-h-11 rounded-lg border px-3 py-2 text-left text-sm ${
                    active === index
                      ? "border-[var(--color-brand)] bg-white text-[var(--color-text)]"
                      : "border-transparent bg-white/70 text-[var(--color-muted)]"
                  }`}
                  onClick={() => setActive(index)}
                >
                  {e.example} {index + 1}
                </button>
              ))}
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-[var(--shadow-soft)]">
              <p className="mb-2 text-sm font-semibold text-[var(--color-brand)]">
                {e.question}
              </p>
              <p className="mb-4">{e.demos[active].q}</p>
              <p className="mb-2 text-sm font-semibold text-[var(--color-brand)]">
                {e.answer}
              </p>
              <p className="mb-3 text-[var(--color-text)]">{e.demos[active].a}</p>
              <p className="ai-label m-0">{e.simulatedLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
