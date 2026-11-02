import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von FLX Software. Angaben gemäß § 5 DDG.",
};

export default function ImpressumPage() {
  return (
    <main id="main-content" className="section" tabIndex={-1}>
      <div className="container max-w-3xl">
        <p className="eyebrow">Rechtliches</p>
        <h1 className="mb-6">Impressum</h1>

        <div className="legal-stack">
          <section>
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>
              {company.ownerLine}
              <br />
              {company.street}
              <br />
              {company.zipCity}
              <br />
              {company.country}
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
              <br />
              Website:{" "}
              <a href={company.website} target="_blank" rel="noopener noreferrer">
                {company.websiteLabel}
              </a>
            </p>
          </section>

          <section>
            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p className="mb-0">{company.responsible}</p>
            <p className="mb-0">
              {company.street}
              <br />
              {company.zipCity}
            </p>
          </section>

          <section>
            <h2>Hinweis zu Register- und Steuerangaben</h2>
            <p className="mb-0">
              FLX Software wird derzeit als Einzelunternehmen geführt. Es sind
              keine Handelsregistereintragung und keine Umsatzsteuer-ID
              hinterlegt. Sollten sich Rechtsform oder Pflichtangaben ändern,
              wird dieses Impressum entsprechend aktualisiert.
            </p>
          </section>
        </div>

        <p className="mt-8">
          <Link href="/">Zur Startseite</Link>
        </p>
      </div>
    </main>
  );
}
