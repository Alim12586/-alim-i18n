import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ICU from 'i18next-icu';

// Dil dosyalarını import et
import koSouth from './locales/ko-KR-KP/common-South.json';
import koNorth from './locales/ko-KR-KP/common-North.json';
import tr from './locales/tr-TR/common.json';
import enGB from './locales/en-GB/common.json';
import enUS from './locales/en-US/common.json';
import esMX from './locales/es-MX/common.json';
import zhCN from './locales/zh-CN/common.json';
import zhTW from './locales/zh-TW/common.json';
import jaJP from './locales/ja-JP/common.json';
import jaJE from './locales/ja-JE/common.json';   // Japansene Empire dili
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
      'ko-KR-KP-South': { common: koSouth }, // Güney Kore varyantı
      'ko-KR-KP-North': { common: koNorth }, // Kuzey Kore varyantı
      'es-MX': { common: esMX },
      'zh-CN': { common: zhCN },
      'zh-TW': { common: zhTW },
      'ja-JP': { common: jaJP },             // Japonya resmi Japonca
      'ja-JE': { common: jaJE },             // Japansene Empire özel dili
      'otk':   { common: otk }               // Göktürkçe/Hun Türkçesi
    },
    ns: ['common'],         // Namespace
    defaultNS: 'common',
    interpolation: { escapeValue: false }
  });

export default i18n;
