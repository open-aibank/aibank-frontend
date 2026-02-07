import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enUS from "../locales/en-US.json";
import zhCN from "../locales/zh-CN.json";

const resources = {
  "en-US": { translation: enUS },
  "zh-CN": { translation: zhCN },
};

// Get saved language from localStorage or default to English
const getSavedLanguage = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("language");
    if (saved && (saved === "en-US" || saved === "zh-CN")) {
      return saved;
    }
  }
  return "en-US";
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getSavedLanguage(),
    fallbackLng: "en-US",
    interpolation: { escapeValue: false },
  });

export default i18n;
