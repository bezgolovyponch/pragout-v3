import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from '../public/locales/en/translation.json';
import translationDE from '../public/locales/de/translation.json';
import detector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  .use(detector)
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
      fallbackLng: 'en',
    resources: {
      en: {
        translation: translationEN
      },
      de: {
        translation: translationDE
      },
    },
  },
    );

export default i18n;
