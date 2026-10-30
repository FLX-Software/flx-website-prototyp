"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function About() {
  const { t } = useLocale();
  const a = t.about;

  return (
    <section
      id="ueber-uns"
      className="section"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <p className="eyebrow">{a.eyebrow}</p>
            <h2 id="about-title" className="mb-5">
              {a.title}
            </h2>
            {a.paragraphs.map((paragraph) => (
              <p key={paragraph} className="about-text">
                {paragraph}
              </p>
            ))}
          </div>

          <figure className="about-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/team.jpg"
              alt={a.photoAlt}
              width={2304}
              height={1533}
              className="about-photo-img"
              decoding="async"
              fetchPriority="high"
            />
            <figcaption>{a.photoCaption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
