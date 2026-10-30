"use client";

import { useState } from "react";
import { PlatformMap } from "@/components/PlatformMap";
import { useLocale } from "@/i18n/LocaleProvider";

export function Departments() {
  const { t } = useLocale();
  const d = t.departments;
  const [active, setActive] = useState<string>("service");
  const current = d.items.find((item) => item.id === active) ?? d.items[0];

  return (
    <section className="section" aria-labelledby="departments-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 id="departments-title" className="mb-4">
            {d.title}
          </h2>
          <p className="lead">{d.lead}</p>
        </div>

        <div className="dept-grid" role="tablist" aria-label={d.tablist}>
          {d.items.map((dept) => (
            <button
              key={dept.id}
              type="button"
              role="tab"
              aria-selected={dept.id === active}
              className="dept-btn"
              onClick={() => setActive(dept.id)}
            >
              <strong>{dept.label}</strong>
            </button>
          ))}
        </div>

        <div className="dept-detail" role="tabpanel" aria-label={current.label}>
          <h3 className="mb-2 mt-0 text-xl">{current.label}</h3>
          <p className="mb-3 text-[var(--color-muted)]">{current.text}</p>
          <p className="m-0 text-[0.98rem] text-[var(--color-muted)]">{d.note}</p>
        </div>

        <PlatformMap />
      </div>
    </section>
  );
}
