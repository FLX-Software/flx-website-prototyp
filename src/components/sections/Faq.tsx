"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function Faq() {
  const { t } = useLocale();
  const f = t.faq;

  return (
    <section className="section section-surface" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">{f.eyebrow}</p>
          <h2 id="faq-title" className="mb-0">
            {f.title}
          </h2>
        </div>
        <div className="faq panel px-5 md:px-7">
          {f.items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
