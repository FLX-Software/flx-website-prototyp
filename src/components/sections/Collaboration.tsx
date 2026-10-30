"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function Collaboration() {
  const { t } = useLocale();
  const c = t.collab;

  return (
    <section
      id="ablauf"
      className="section section-blue"
      aria-labelledby="collab-title"
    >
      <div className="container">
        <div className="section-intro mb-10">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 id="collab-title" className="mb-4">
            {c.title}
          </h2>
          <p className="lead">{c.lead}</p>
        </div>

        <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-2 xl:grid-cols-4">
          {c.steps.map((step, index) => (
            <li key={step.title} className="panel p-6">
              <p className="mb-3 font-heading text-sm font-semibold text-[var(--color-brand)]">
                {c.step} {index + 1}
              </p>
              <h3 className="mb-3 mt-0 text-lg">{step.title}</h3>
              <p className="m-0 text-[var(--color-muted)]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
