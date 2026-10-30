"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

export function Ai() {
  const { t } = useLocale();
  const a = t.ai;
  const [active, setActive] = useState(0);

  return (
    <section id="ki" className="section" aria-labelledby="ai-title">
      <div className="container">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="section-intro mb-0">
            <p className="eyebrow">{a.eyebrow}</p>
            <h2 id="ai-title" className="mb-4">
              {a.title}
            </h2>
            <p className="lead">{a.lead}</p>
          </div>
          <blockquote className="panel m-0 border-l-4 border-l-[var(--color-brand)] p-6 text-[1.25rem] font-semibold leading-snug">
            {a.quote}
          </blockquote>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            {a.capabilities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4"
              >
                {item}
              </div>
            ))}
            <p className="m-0 text-sm text-[var(--color-muted)]">{a.disclaimer}</p>
          </div>

          <div className="panel overflow-hidden">
            <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] bg-[var(--color-dark)] px-5 py-3 text-white">
              <p className="m-0 font-heading font-semibold">{a.helperTitle}</p>
              <span className="example-badge bg-white/10 text-[#9ec9ff]">{a.demo}</span>
            </div>
            <div className="space-y-3 bg-[var(--color-surface)] p-5">
              <div className="flex flex-wrap gap-2">
                {a.demos.map((item, index) => (
                  <button
                    key={item.q}
                    type="button"
                    className={`rounded-full border px-3 py-2 text-left text-sm ${
                      active === index
                        ? "border-[var(--color-brand)] bg-white text-[var(--color-text)]"
                        : "border-transparent bg-white/70 text-[var(--color-muted)]"
                    }`}
                    onClick={() => setActive(index)}
                  >
                    {a.example} {index + 1}
                  </button>
                ))}
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-[var(--shadow-card)]">
                <p className="mb-2 text-sm font-semibold text-[var(--color-brand)]">
                  {a.question}
                </p>
                <p className="mb-4">{a.demos[active].q}</p>
                <p className="mb-2 text-sm font-semibold text-[var(--color-brand)]">
                  {a.answer}
                </p>
                <p className="m-0 text-[var(--color-muted)]">{a.demos[active].a}</p>
              </div>
              <p className="m-0 text-sm text-[var(--color-muted)]">{a.demoNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
