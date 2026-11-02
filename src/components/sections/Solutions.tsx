"use client";

import { SolutionVisual } from "@/components/SolutionVisual";
import { useLocale } from "@/i18n/LocaleProvider";

export function Solutions() {
  const { t } = useLocale();
  const s = t.solutions;

  return (
    <section
      id="loesungen"
      className="section section-blue"
      aria-labelledby="solutions-title"
    >
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 id="solutions-title" className="mb-4">
            {s.title}
          </h2>
          <p className="lead">{s.lead}</p>
        </div>

        <div className="grid gap-5">
          {s.items.map((item, index) => (
            <article
              key={item.id}
              id={item.id}
              className={`solution-row${"reverse" in item && item.reverse ? " solution-row--reverse" : ""}`}
            >
              <div className="solution-copy">
                <p className="mb-3 font-heading text-sm font-semibold text-[var(--color-brand)]">
                  0{index + 1}
                </p>
                <h3 className="mb-3 mt-0 text-[1.45rem]">{item.title}</h3>
                <p className="mb-4 text-[var(--color-muted)]">{item.text}</p>
                <ul className="m-0 mb-5 grid list-none gap-2 p-0">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2 text-[0.98rem]">
                      <span className="text-[var(--color-brand)]" aria-hidden="true">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {"cta" in item && item.cta ? (
                  <a href={item.cta.href} className="btn btn-secondary">
                    {item.cta.label}
                  </a>
                ) : null}
              </div>
              <div className="solution-visual" aria-hidden="true">
                <SolutionVisual id={item.id} label={item.visualLabel} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
