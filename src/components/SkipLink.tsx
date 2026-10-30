"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function SkipLink() {
  const { t } = useLocale();
  return (
    <a className="skip-link" href="#main-content">
      {t.skip}
    </a>
  );
}
