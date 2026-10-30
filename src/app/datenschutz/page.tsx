import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von FLX Software.",
};

export default function DatenschutzPage() {
  return (
    <main id="main-content" className="section" tabIndex={-1}>
      <div className="container max-w-3xl">
        <p className="eyebrow">Rechtliches</p>
        <h1 className="mb-6">Datenschutz</h1>

        <div className="legal-stack">
          <section>
            <h2>1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen oder uns über das Kontaktformular kontaktieren.
            </p>
          </section>

          <section>
            <h2>2. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              {company.ownerLine}
              <br />
              {company.street}
              <br />
              {company.zipCity}
              <br />
              Rechtsform: {company.legalForm}
              <br />
              Verantwortlich: {company.responsible}
              <br />
              E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
              <br />
              Telefon:{" "}
              <a href={company.phoneHrefs[0]}>{company.phones[0]}</a>
              {" / "}
              <a href={company.phoneHrefs[1]}>{company.phones[1]}</a>
            </p>
          </section>

          <section>
            <h2>3. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Übermittlung erfolgt über den Dienst{" "}
              <a
                href="https://formsubmit.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                FormSubmit.co
              </a>
              . Dabei werden Ihre Formulardaten an FormSubmit übertragen und von
              dort an unsere E-Mail-Adresse weitergeleitet. FormSubmit kann dabei
              technische Zugriffsdaten (z.&nbsp;B. IP-Adresse) verarbeiten.
              Weitere Informationen finden Sie in der Datenschutzerklärung von
              FormSubmit.co.
            </p>
          </section>

          <section>
            <h2>4. Hosting und Server-Logfiles</h2>
            <p>
              Beim Besuch dieser Website werden durch den Hostinganbieter
              automatisch Informationen in sogenannten Server-Logfiles erfasst
              (z.&nbsp;B. Browsertyp, Betriebssystem, Referrer-URL, Hostname und
              Uhrzeit der Serveranfrage). Diese Daten sind nicht bestimmten
              Personen zuordenbar und werden nicht mit anderen Datenquellen
              zusammengeführt.
            </p>
          </section>

          <section>
            <h2>5. Cookies &amp; Analytics</h2>
            <p>
              Derzeit setzen wir keine Tracking- oder Analytics-Cookies ein. Es
              werden nur technisch notwendige Speichervorgänge verwendet, soweit
              sie für den Betrieb der Website erforderlich sind (z.&nbsp;B.
              Speicherung der gewählten Sprache in Ihrem Browser).
            </p>
          </section>

          <section>
            <h2>6. Ihre Rechte</h2>
            <p className="mb-0">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
              sowie das Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
              sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
              jederzeit an die oben genannte verantwortliche Stelle wenden.
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
