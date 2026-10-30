"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function Erp() {
  const { t } = useLocale();
  const e = t.erp;

  return (
    <section id="erp" className="section section-surface" aria-labelledby="erp-title">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="section-intro mb-0">
            <p className="eyebrow">{e.eyebrow}</p>
            <h2 id="erp-title" className="mb-4">
              {e.title}
            </h2>
            <p className="lead mb-5">{e.lead}</p>
            <p className="mb-0 text-[var(--color-muted)]">{e.note}</p>
          </div>

          <div className="panel relative overflow-hidden p-6 md:p-8">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, rgb(0 115 255 / 0.12), transparent 55%)",
              }}
            />
            <div className="relative grid gap-4">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 text-center font-heading font-semibold">
                {e.existingErp}
              </div>
              <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[var(--color-brand)]">
                <span aria-hidden="true">↕</span> {e.interfaces}
              </div>
              <div className="chip-brand rounded-2xl border px-4 py-4 text-center font-heading font-semibold">
                {e.platform}
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {e.areas.map((area) => (
                  <div
                    key={area}
                    className="rounded-xl border border-[var(--color-border)] bg-white px-3 py-3 text-center text-sm"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-8 m-0 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {e.flows.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-[var(--color-border)] bg-white px-4 py-4"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
