"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function Problem() {
  const { t } = useLocale();
  const p = t.problem;

  return (
    <section className="section section-surface" aria-labelledby="problem-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">{p.eyebrow}</p>
          <h2 id="problem-title" className="mb-4">
            {p.title}
          </h2>
          <p className="lead">{p.lead}</p>
        </div>

        <div className="compare">
          <div className="compare-pane">
            <h3 className="mb-4 mt-0 text-lg">{p.beforeTitle}</h3>
            <ul className="compare-list">
              {p.before.map((item) => (
                <li key={item}>
                  <span className="mark mark-muted" aria-hidden="true">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="compare-pane compare-pane--after">
            <h3 className="mb-4 mt-0 text-lg">{p.afterTitle}</h3>
            <ul className="compare-list">
              {p.after.map((item) => (
                <li key={item}>
                  <span className="mark mark-ok" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
