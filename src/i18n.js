import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import tr from './locales/tr.json';

i18n
  .use(LanguageDetector) // ← burada dil algılama ve kaydetme aktif
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
    },
    fallbackLng: 'tr',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // ← dili localStorage'da saklar
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
