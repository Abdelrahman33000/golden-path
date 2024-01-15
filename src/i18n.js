import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import En from "../src/Locale/en.json"
import Ar from "../src/Locale/ar.json"
import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
  en: {
    translation: En
  },
  ar: {
    translation: Ar
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false 
    },
    react : {
        useSuspense :false
    }
  });

  export default i18n;