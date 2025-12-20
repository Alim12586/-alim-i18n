import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ICU from 'i18next-icu';

// Dil dosyalarını import et
import tr from './locales/tr-TR/common.json';
import enGB from './locales/en-GB/common.json';
import enUS from './locales/en-US/common.json';
import koKR from './locales/ko-KR/common.json';
import esMX from './locales/es-MX/common.json';
import zhCN from './locales/zh-CN/common.json';
import zhTW from './locales/zh-TW/common.json';
import jaJP from './locales/ja-JP/common.json';
import otk from './locales/otk/common.json';

i18n
  .use(ICU)                 // ICU format desteği (çoğul, tarih, sayı biçimlendirme)
  .use(initReactI18next)    // React entegrasyonu
  .init({
    lng: 'tr-TR',           // Varsayılan dil
    fallbackLng: ['en-GB', 'en-US'], // Yedek diller
    resources: {
      'tr-TR': { common: tr },
      'en-GB': { common: enGB },
      'en-US': { common: enUS },
      'ko-KR': { common: koKR },
      'es-MX': { common: esMX },
      'zh-CN': { common: zhCN },
      'zh-TW': { common: zhTW },
      'ja-JP': { common: jaJP },
      'otk':   { common: otk }
    },
    ns: ['common'],         // Namespace
    defaultNS: 'common',
    interpolation: { escapeValue: false }
  });

export default i18n;
