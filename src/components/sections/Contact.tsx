"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { company } from "@/lib/company";

type Status = "idle" | "invalid" | "sending" | "success" | "error";

export function Contact() {
  const { t } = useLocale();
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const companyName = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !companyName || !email || !message) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(company.formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          company: companyName,
          email,
          message,
          _replyto: email,
          _subject: `Anfrage von ${name} (flx-software.de)`,
          _template: "table",
          _captcha: "false",
          _honey: "",
        }),
      });

      if (!response.ok) {
        throw new Error("FormSubmit failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-intro">
            <p className="contact-eyebrow">{c.eyebrow}</p>
            <h2 id="contact-title">{c.title}</h2>
            <p className="contact-lead">{c.lead}</p>

            <div className="contact-card">
              <p className="contact-card-title">{company.name}</p>
              <p className="contact-card-text">
                {company.street}
                <br />
                {company.zipCity}
                <br />
                {company.country}
              </p>
              <div className="contact-card-links">
                {company.phones.map((phone, index) => (
                  <a key={phone} href={company.phoneHrefs[index]}>
                    {phone}
                  </a>
                ))}
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
            </div>
          </div>

          <div id="kontakt-form" className="contact-form-wrap">
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <label>
                {c.name}
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                {c.company}
                <input name="company" autoComplete="organization" required />
              </label>
              <label>
                {c.email}
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label>
                {c.message}
                <textarea name="message" rows={5} required />
              </label>

              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? c.sending : c.submit}
              </button>

              {status === "invalid" ? (
                <p className="contact-msg contact-msg--error" role="alert">
                  {c.invalid}
                </p>
              ) : null}
              {status === "success" ? (
                <p className="contact-msg" role="status">
                  {c.success}
                </p>
              ) : null}
              {status === "error" ? (
                <p className="contact-msg contact-msg--error" role="alert">
                  {c.error}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
