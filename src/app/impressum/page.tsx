import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von FLX Software – Angaben gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <main id="main-content" className="section" tabIndex={-1}>
      <div className="container max-w-3xl">
        <p className="eyebrow">Rechtliches</p>
        <h1 className="mb-6">Impressum</h1>

        <div className="legal-stack">
          <section>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              {company.ownerLine}
              <br />
              {company.street}
              <br />
              {company.zipCity}
              <br />
              Rechtsform: {company.legalForm}
            </p>
          </section>

          <section>
            <h2>Kontakt</h2>
            <p>
              Telefon:{" "}
              <a href={company.phoneHrefs[0]}>{company.phones[0]}</a>
              {" / "}
              <a href={company.phoneHrefs[1]}>{company.phones[1]}</a>
              <br />
              E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
          </section>

          <section>
            <h2>Verantwortlich für den Inhalt</h2>
            <p className="mb-0">{company.responsible}</p>
          </section>
        </div>

        <p className="mt-8">
          <Link href="/">Zur Startseite</Link>
        </p>
      </div>
    </main>
  );
}
