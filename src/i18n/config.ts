import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

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

export default i18n;
