# Prüfliste Datenschutz & Recht (FLX Software Website)

Stand der technischen Umsetzung: November 2026.  
Endgültige rechtliche Freigabe erfolgt durch FLX Software bzw. qualifizierte Rechtsberatung.

## Umgesetzt im Code

- Impressum auf § 5 DDG umgestellt (statt TMG)
- Einzelunternehmen beibehalten; keine erfundenen Register- oder USt-ID-Angaben
- Datenschutzerklärung an reale Technik angepasst: Vercel, FormSubmit, LocalStorage-Sprache, keine Tracking-Cookies
- Kein Schein-Cookie-Banner; Datenschutzeinstellungen im Footer
- KI-Demo als Simulation gekennzeichnet (keine echte KI-Verarbeitung)

## Offen / intern zu prüfen

1. **Auftragsverarbeitung Vercel:** AV-Vertrag / DPA und Dokumentationsnachweis prüfen.
2. **FormSubmit:** AV-/Drittland-Situation, Speicherfristen und konkrete Empfängerwege rechtlich bewerten; ggf. eigenen API-Endpunkt bevorzugen.
3. **Google Fonts:** Prüfen, ob Schriften lokal gehostet werden sollen, um Drittlandübermittlung zu vermeiden.
4. **Zuständige Datenschutzaufsicht:** Konkrete Behörde für Blumberg/Baden-Württemberg in der Erklärung optional nennen.
5. **§ 18 Abs. 2 MStV:** Verantwortung für Inhalte mit beiden genannten Personen abstimmen.
6. **UG-Gründung:** Impressum und Datenschutzerklärung erst nach tatsächlicher Gründung anpassen.
7. **EU AI Act Art. 50:** Aktuell nur simulierte Demo. Bei späterer echter KI-Funktion Transparenzpflichten erneut prüfen.
8. **Social-Media-Impressumspflichten:** Profile auf Instagram/LinkedIn separat auf Vollständigkeit prüfen.

## Cookies & Speichertechnologien (Ist-Zustand)

| Technologie | Zweck | Einwilligung nötig? |
|---|---|---|
| LocalStorage `flx-locale` | Sprachwahl speichern | Nein (technisch erforderlich) |
| FormSubmit (nur bei Formularabsendung) | Anfragezustellung | Nein als Cookie-Banner; Hinweis in Datenschutz |
| Vercel Hosting/Logs | Betrieb und Sicherheit | Nein als Marketing-Cookie |
| Tracking/Analytics | nicht vorhanden | – |
