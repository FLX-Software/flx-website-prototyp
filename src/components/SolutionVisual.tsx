import type { ReactNode } from "react";
import Image from "next/image";

type SolutionVisualProps = {
  id: string;
  label: string;
};

function MockupLabel({ children }: { children: ReactNode }) {
  return <p className="sv-kicker">{children}</p>;
}

function MockupHeading({ children }: { children: ReactNode }) {
  return <p className="sv-title">{children}</p>;
}

function FloatingCard({
  title,
  subtitle,
  icon,
  className = "",
}: {
  title: string;
  subtitle: string;
  icon?: "status" | "check" | "none";
  className?: string;
}) {
  return (
    <div className={`sv-float-card ${className}`.trim()}>
      {icon && icon !== "none" ? (
        <span className={`sv-float-icon sv-float-icon--${icon}`} aria-hidden="true" />
      ) : null}
      <div className="sv-float-copy">
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </div>
    </div>
  );
}

function BrowserChrome({ title }: { title: string }) {
  return (
    <div className="sv-chrome">
      <div className="sv-traffic" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="sv-url">{title}</div>
    </div>
  );
}

function SoftwareVisual({ label }: { label: string }) {
  return (
    <div className="sv-stage sv-stage--software">
      <div className="sv-glow sv-glow--a" />
      <div className="sv-glow sv-glow--b" />
      <div className="sv-backplate" />

      <div className="sv-hero-panel">
        <BrowserChrome title={label} />
        <div className="sv-app">
          <aside className="sv-rail" aria-hidden="true">
            <span className="sv-rail-mark" />
            <span className="is-on" />
            <span />
            <span />
            <span />
          </aside>

          <div className="sv-content">
            <div className="sv-content-head">
              <div className="sv-heading-block">
                <MockupLabel>Übersicht</MockupLabel>
                <MockupHeading>Offene Vorgänge</MockupHeading>
              </div>
              <div className="sv-filters" aria-hidden="true">
                <span className="is-active">Heute</span>
                <span>Woche</span>
              </div>
            </div>

            <div className="sv-metric-row">
              <div className="sv-metric">
                <span>Aufgaben</span>
                <strong>12</strong>
                <i className="sv-spark is-up" />
              </div>
              <div className="sv-metric">
                <span>Einsätze</span>
                <strong>4</strong>
                <i className="sv-spark" />
              </div>
              <div className="sv-metric">
                <span>Dokumente</span>
                <strong>7</strong>
                <i className="sv-spark is-mid" />
              </div>
            </div>

            <div className="sv-board">
              <div className="sv-board-col">
                <p className="sv-col-label">In Arbeit</p>
                <div className="sv-card-item">
                  <span className="sv-tag">Service</span>
                  <strong>Rückgabe prüfen</strong>
                </div>
                <div className="sv-card-item">
                  <span className="sv-tag is-soft">Montage</span>
                  <strong>Einsatz planen</strong>
                </div>
              </div>
              <div className="sv-board-col">
                <p className="sv-col-label">Bereit</p>
                <div className="sv-card-item is-accent">
                  <span className="sv-tag">Übergabe</span>
                  <strong>Bericht freigeben</strong>
                </div>
                <div className="sv-progress" aria-hidden="true">
                  <span className="is-fill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingCard
        className="sv-float-card--tr"
        icon="status"
        title="Status"
        subtitle="3 Vorgänge offen"
      />
      <FloatingCard
        className="sv-float-card--br"
        icon="none"
        title="Team"
        subtitle="4 Personen aktiv"
      />
    </div>
  );
}

function FormsVisual({ label }: { label: string }) {
  return (
    <div className="sv-stage sv-stage--forms">
      <div className="sv-glow sv-glow--c" />
      <div className="sv-glow sv-glow--d" />
      <div className="sv-backplate is-forms" />

      <div className="sv-hero-panel sv-hero-panel--forms">
        <div className="sv-form-shell">
          <div className="sv-form-top">
            <span className="sv-doc-badge" aria-hidden="true" />
            <div className="sv-heading-block">
              <MockupLabel>{label}</MockupLabel>
              <MockupHeading>Schadensmeldung</MockupHeading>
            </div>
            <span className="sv-status">In Prüfung</span>
          </div>

          <div className="sv-form-grid">
            <div className="sv-field">
              <span>Gerät</span>
              <p>ZX-240</p>
            </div>
            <div className="sv-field">
              <span>Kunde</span>
              <p>Muster GmbH</p>
            </div>
            <div className="sv-field is-full">
              <span>Beschreibung</span>
              <p className="is-area" aria-hidden="true" />
            </div>
          </div>

          <div className="sv-media-row" aria-hidden="true">
            <span className="has-fill" />
            <span className="has-fill" />
            <span />
          </div>

          <div className="sv-form-footer">
            <span className="sv-step is-done">Erfasst</span>
            <span className="sv-step is-done">Bilder</span>
            <span className="sv-step is-current">PDF</span>
          </div>
        </div>
      </div>

      <div className="sv-sheet">
        <span className="sv-sheet-label">PDF</span>
        <strong>Bericht</strong>
        <em aria-hidden="true" />
        <em className="is-short" aria-hidden="true" />
        <div className="sv-sheet-block" aria-hidden="true" />
        <div className="sv-sheet-stamp">Freigabe</div>
      </div>

      <FloatingCard
        className="sv-float-card--forms"
        icon="check"
        title="Verknüpft"
        subtitle="Dokument bereit"
      />
    </div>
  );
}

function CustomAppsVisual({ label }: { label: string }) {
  return (
    <div className="sv-stage sv-stage--custom">
      <div className="sv-glow sv-glow--e" />
      <div className="sv-glow sv-glow--f" />
      <div className="sv-backplate is-custom" />

      <div className="sv-hero-panel sv-hero-panel--custom">
        <BrowserChrome title={label} />
        <div className="sv-hub">
          <div className="sv-hub-orbit" aria-hidden="true" />

          <div className="sv-hub-rays" aria-hidden="true">
            <span className="sv-hub-ray is-tl">
              <i />
            </span>
            <span className="sv-hub-ray is-tr">
              <i />
            </span>
            <span className="sv-hub-ray is-bl">
              <i />
            </span>
            <span className="sv-hub-ray is-br">
              <i />
            </span>
          </div>

          <div className="sv-hub-core">
            <Image
              src="/brand/logo-mark-clear.png"
              alt="FLX"
              width={96}
              height={96}
              className="sv-hub-core-logo"
            />
          </div>

          <div className="sv-hub-card is-a">
            <strong>Service</strong>
            <span>Vorgänge</span>
          </div>
          <div className="sv-hub-card is-b">
            <strong>Dokumente</strong>
            <span>Formulare</span>
          </div>
          <div className="sv-hub-card is-c">
            <strong>Systeme</strong>
            <span>Anbindung</span>
          </div>
          <div className="sv-hub-card is-d">
            <strong>Abläufe</strong>
            <span>Planung</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SolutionVisual({ id, label }: SolutionVisualProps) {
  if (id === "formulare") {
    return <FormsVisual label={label} />;
  }
  if (id === "anwendungen") {
    return <CustomAppsVisual label={label} />;
  }
  return <SoftwareVisual label={label} />;
}
