"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

type FormState = {
  device: string;
  customer: string;
  date: string;
  description: string;
  status: string;
};

export function DamageReport() {
  const { locale, t } = useLocale();
  const d = t.damage;
  const [form, setForm] = useState<FormState>({
    device: d.initial.device,
    customer: d.initial.customer,
    date: "2026-10-28",
    description: d.initial.description,
    status: d.statuses[0],
  });
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    setForm({
      device: d.initial.device,
      customer: d.initial.customer,
      date: "2026-10-28",
      description: d.initial.description,
      status: d.statuses[0],
    });
  }, [locale, d]);

  useEffect(() => {
    if (!previewOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [previewOpen]);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section
      id="schadensmeldung"
      className="section"
      aria-labelledby="damage-title"
    >
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 id="damage-title" className="mb-4">
            {d.title}
          </h2>
          <p className="lead">{d.lead}</p>
        </div>

        <div className="panel overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3">
            <p className="m-0 font-heading font-semibold">{d.formTitle}</p>
            <span className="example-badge">{d.badge}</span>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <form
              className="grid gap-4 p-5 md:p-7"
              onSubmit={(e) => {
                e.preventDefault();
                setPreviewOpen(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-semibold">
                  {d.device}
                  <input
                    className="min-h-11 rounded-[var(--radius-control)] border border-[var(--color-border)] px-3 font-normal"
                    value={form.device}
                    onChange={(e) => update("device", e.target.value)}
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  {d.customer}
                  <input
                    className="min-h-11 rounded-[var(--radius-control)] border border-[var(--color-border)] px-3 font-normal"
                    value={form.customer}
                    onChange={(e) => update("customer", e.target.value)}
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  {d.date}
                  <input
                    type="date"
                    className="min-h-11 rounded-[var(--radius-control)] border border-[var(--color-border)] px-3 font-normal"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  {d.status}
                  <select
                    className="min-h-11 rounded-[var(--radius-control)] border border-[var(--color-border)] px-3 font-normal"
                    value={form.status}
                    onChange={(e) => update("status", e.target.value)}
                  >
                    {d.statuses.map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="grid gap-1.5 text-sm font-semibold">
                {d.description}
                <textarea
                  rows={4}
                  className="rounded-[var(--radius-control)] border border-[var(--color-border)] px-3 py-2 font-normal"
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                />
              </label>

              <div>
                <p className="mb-2 text-sm font-semibold">{d.photos}</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {d.photoLabels.map((label, i) => (
                    <div
                      key={label}
                      className="flex aspect-[4/3] flex-col justify-end rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-3"
                    >
                      <span className="text-xs text-[var(--color-muted)]">
                        {d.exampleImage} {i + 1}
                      </span>
                      <span className="text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn btn-primary justify-self-start">
                {d.submit}
              </button>
            </form>

            <aside className="border-t border-[var(--color-border)] bg-[var(--color-blue-surface)] p-5 md:border-l md:border-t-0 md:p-7">
              <p className="eyebrow">{d.flowEyebrow}</p>
              <ol className="m-0 flex list-decimal flex-col gap-3 pl-5 text-[var(--color-text)]">
                {d.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </div>

      {previewOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/45 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pdf-preview-title"
          onClick={() => setPreviewOpen(false)}
        >
          <div
            className="panel max-h-[90svh] w-full max-w-xl overflow-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <span className="example-badge mb-2">{d.previewBadge}</span>
                <h3 id="pdf-preview-title" className="m-0 text-xl">
                  {d.previewTitle}
                </h3>
              </div>
              <button
                type="button"
                className="btn btn-secondary min-h-11 px-3"
                onClick={() => setPreviewOpen(false)}
                aria-label={d.closeAria}
              >
                {d.close}
              </button>
            </div>
            <p className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-sm">
              {d.previewNote}
            </p>
            <div className="mt-4 space-y-2 text-[0.98rem]">
              <p className="m-0">
                <strong>{d.device}:</strong> {form.device}
              </p>
              <p className="m-0">
                <strong>{d.customer}:</strong> {form.customer}
              </p>
              <p className="m-0">
                <strong>{d.date}:</strong> {form.date}
              </p>
              <p className="m-0">
                <strong>{d.status}:</strong> {form.status}
              </p>
              <p className="m-0">
                <strong>{d.description}:</strong> {form.description}
              </p>
              <p className="m-0">{d.photosAssigned}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
