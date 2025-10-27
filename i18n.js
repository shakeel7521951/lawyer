import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",                // ✅ force English on first load
    fallbackLng: "en",
    supportedLngs: ["en", "fr", "ar"],
    ns: ["common"],            // only load common.json by default
    defaultNS: "common",
    interpolation: { escapeValue: false },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    react: { useSuspense: false },
    detection: {
      order: ["cookie", "localStorage", "htmlTag"], // detect later
      caches: ["cookie"],
    },
  });

export default i18n;
