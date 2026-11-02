"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/dictionaries";

function FlagDe() {
  return (
    <svg
      className="lang-flag"
      viewBox="0 0 36 24"
      width="36"
      height="24"
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      <rect width="36" height="8" fill="#000" />
      <rect y="8" width="36" height="8" fill="#dd0000" />
      <rect y="16" width="36" height="8" fill="#ffce00" />
    </svg>
  );
}

function FlagUs() {
  const stripe = 24 / 13;
  // Weniger, aber größere Sterne: bei kleiner Größe besser lesbar
  const stars: Array<[number, number]> = [
    [2.2, 2.1],
    [5.2, 2.1],
    [8.2, 2.1],
    [11.2, 2.1],
    [3.7, 4.5],
    [6.7, 4.5],
    [9.7, 4.5],
    [2.2, 6.9],
    [5.2, 6.9],
    [8.2, 6.9],
    [11.2, 6.9],
    [3.7, 9.3],
    [6.7, 9.3],
    [9.7, 9.3],
  ];

  return (
    <svg
      className="lang-flag"
      viewBox="0 0 36 24"
      width="36"
      height="24"
      aria-hidden="true"
    >
      <rect width="36" height="24" fill="#b22234" />
      {Array.from({ length: 6 }, (_, i) => (
        <rect
          key={`stripe-${i}`}
          y={(i * 2 + 1) * stripe}
          width="36"
          height={stripe}
          fill="#fff"
        />
      ))}
      <rect width="14.4" height={stripe * 7} fill="#3c3b6e" />
      {stars.map(([x, y], index) => (
        <path
          key={`star-${index}`}
          fill="#fff"
          transform={`translate(${x} ${y}) scale(0.42)`}
          d="M0 -2.1 L0.65 -0.65 L2.2 -0.65 L0.95 0.25 L1.4 1.8 L0 0.95 L-1.4 1.8 L-0.95 0.25 L-2.2 -0.65 L-0.65 -0.65 Z"
        />
      ))}
    </svg>
  );
}

const options: {
  id: Locale;
  labelKey: "de" | "en";
  Flag: typeof FlagDe;
}[] = [
  { id: "de", labelKey: "de", Flag: FlagDe },
  { id: "en", labelKey: "en", Flag: FlagUs },
];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div className="lang-switch" role="group" aria-label={t.lang.group}>
      {options.map(({ id, labelKey, Flag }) => {
        const active = locale === id;
        return (
          <button
            key={id}
            type="button"
            className={`lang-switch-btn${active ? " is-active" : ""}`}
            aria-pressed={active}
            aria-label={t.lang[labelKey]}
            title={t.lang[labelKey]}
            onClick={() => setLocale(id)}
          >
            <Flag />
          </button>
        );
      })}
    </div>
  );
}
