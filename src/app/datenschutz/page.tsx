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
              Die folgenden Hinweise geben einen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website
              besuchen oder uns über das Kontaktformular kontaktieren.
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
            <h2>3. Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA („Vercel“) gehostet. Beim Aufruf der Seiten
              werden technisch notwendige Verbindungsdaten verarbeitet
              (beispielsweise IP-Adresse, Zeitpunkt der Anfrage,
              User-Agent-Informationen). Die Verarbeitung erfolgt zur
              Bereitstellung und Sicherheit der Website.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an einem sicheren und funktionsfähigen Webauftritt)
              sowie, soweit einschlägig, § 25 Abs. 2 TDDDG für technisch
              erforderliche Speicher- und Zugriffsprozesse.
            </p>
            <p>
              Eine Übermittlung in die USA kann nicht ausgeschlossen werden.
              Vercel nimmt am EU-US Data Privacy Framework teil. Weitere
              Angaben entnehmen Sie bitte der Datenschutzerklärung von Vercel.
              Ein gesonderter Auftragsverarbeitungsvertrag mit Vercel ist von
              uns intern noch zu prüfen und zu dokumentieren.
            </p>
          </section>

          <section>
            <h2>4. Server-Logfiles</h2>
            <p>
              Beim Besuch dieser Website können durch den Hostinganbieter
              automatisch Informationen in sogenannten Server-Logfiles erfasst
              werden (beispielsweise Browsertyp, Betriebssystem, Referrer-URL,
              Hostname und Uhrzeit der Serveranfrage). Diese Daten werden in
              der Regel nicht mit anderen Datenquellen zusammengeführt und
              dienen der technischen Auswertung und Absicherung.
            </p>
          </section>

          <section>
            <h2>5. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter, außer an die für
              die Übermittlung erforderlichen technischen Dienstleister.
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
              dort an unsere E-Mail-Adresse weitergeleitet. FormSubmit kann
              dabei technische Zugriffsdaten (beispielsweise IP-Adresse)
              verarbeiten. Eine Übermittlung in Drittländer ist möglich.
              Weitere Informationen finden Sie in der Datenschutzerklärung von
              FormSubmit.co.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage
              auf den Abschluss oder die Anbahnung eines Vertrags gerichtet ist,
              andernfalls Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
              der Bearbeitung von Anfragen). Die Daten speichern wir, bis der
              Zweck der Kommunikation erledigt ist oder gesetzliche
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2>6. Cookies, LocalStorage und Einwilligung</h2>
            <p>
              Derzeit setzen wir keine Tracking-, Analyse- oder
              Marketing-Cookies ein. Es werden nur technisch notwendige
              Speichervorgänge verwendet, soweit sie für den Betrieb der Website
              erforderlich sind. Dazu gehört die Speicherung der gewählten
              Sprache in Ihrem Browser (LocalStorage-Schlüssel{" "}
              <code>flx-locale</code>).
            </p>
            <p>
              Weil keine einwilligungspflichtigen Technologien aktiv sind,
              wird derzeit kein Cookie-Banner mit Akzeptieren und Ablehnen
              angezeigt. Über die Datenschutzeinstellungen im Footer können Sie
              jederzeit nachlesen, welche Speichervorgänge stattfinden.
            </p>
            <p>
              Rechtsgrundlage für technisch notwendige Speicherung ist § 25 Abs.
              2 TDDDG sowie Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2>7. Schriftarten</h2>
            <p>
              Für die Darstellung der Website werden über Next.js Schriftarten
              von Google Fonts geladen (Sora und Source Sans 3). Dabei kann eine
              Verbindung zu Servern von Google hergestellt und Ihre IP-Adresse
              übermittelt werden. Alternativen zur lokalen Einbindung der
              Schriftarten prüfen wir bei Bedarf.
            </p>
          </section>

          <section>
            <h2>8. Externe Links und Social Media</h2>
            <p>
              Unsere Website verlinkt auf externe Angebote, insbesondere
              Instagram und LinkedIn. Beim Aufruf dieser Links gelten die
              Datenschutzbestimmungen der jeweiligen Anbieter. Ein automatisches
              Tracking über eingebettete Social-Plugins findet auf dieser
              Website derzeit nicht statt.
            </p>
          </section>

          <section>
            <h2>9. KI-Inhalte auf dieser Website</h2>
            <p>
              Die redaktionellen Website-Texte werden von uns verantwortet. Die
              auf der Website gezeigte „Wissenshilfe“ ist eine simulierte Demo
              ohne echte KI-Verarbeitung und ohne Upload Ihrer Unternehmensdaten.
              Dort, wo Beispielantworten dargestellt werden, ist dies als Demo
              bzw. simulierte Beispielantwort gekennzeichnet.
            </p>
          </section>

          <section>
            <h2>10. Speicherdauer</h2>
            <p>
              Soweit in dieser Erklärung keine speziellere Speicherdauer genannt
              wurde, verbleiben personenbezogene Daten bei uns, bis der Zweck
              für die Datenverarbeitung entfällt. Bei berechtigtem Interesse
              speichern wir Daten nur so lange, wie das Interesse fortbesteht
              und keine überwiegenden schutzwürdigen Interessen entgegenstehen.
            </p>
          </section>

          <section>
            <h2>11. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
              sowie Widerspruch gegen die Verarbeitung, soweit die
              gesetzlichen Voraussetzungen vorliegen. Hierzu sowie zu weiteren
              Fragen zum Datenschutz können Sie sich an die oben genannte
              verantwortliche Stelle wenden.
            </p>
            <p className="mb-0">
              Außerdem besteht ein Beschwerderecht bei einer
              Datenschutzaufsichtsbehörde. Zuständig ist insbesondere die
              Aufsichtsbehörde Ihres gewöhnlichen Aufenthaltsorts, Ihres
              Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
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
