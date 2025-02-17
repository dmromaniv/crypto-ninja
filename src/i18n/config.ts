import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import { formatCurrency, formatDateTime, Notation } from "@/utils/format";

import { currencyConfig, defaultFractionDigits } from "@/config/formatConfig";

export const supportedLngs = {
  en: { tag: "en", label: "EN" },
  uk: { tag: "uk", label: "UK" },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: supportedLngs.en.tag,
    supportedLngs: Object.values(supportedLngs).map((lng) => lng.tag),
    detection: {
      order: ["path", "localStorage"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
    },
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

i18n.services.formatter?.add("formatCurrency", (value, lng, options) => {
  return formatCurrency({
    number: value,
    currency: options?.currency || currencyConfig.USD.code,
    locale: lng || supportedLngs.en.tag,
    notation: options?.notation || Notation.Standard,
    minDigits: options?.minDigits || defaultFractionDigits.min,
    maxDigits: options?.maxDigits || defaultFractionDigits.max,
  });
});

i18n.services.formatter?.add("formatDateTime", (value, lng, options): string => {
  return (
    formatDateTime({
      value,
      lng: lng || supportedLngs.en.tag,
      format: options?.format,
      pattern: options?.pattern,
    }) || "Invalid date"
  );
});

export default i18n;
