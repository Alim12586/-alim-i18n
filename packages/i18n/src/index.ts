import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ICU from 'i18next-icu';

// 🌐 Modern diller
import tr from './locales/tr-TR/common.json';
import enGB from './locales/en-GB/common.json';
import enUS from './locales/en-US/common.json';
import esMX from './locales/es-MX/common.json';
import zhCN from './locales/zh-CN/common.json';          // Modern Çin (Basitleştirilmiş)
import zhTW from './locales/zh-TW/common.json';          // Geleneksel Çin (Taiwan/HK/Macau)
import jaJP from './locales/ja-JP/common.json';          // Japonya resmi Japonca
import jaJE from './locales/ja-JE/common.json';          // Japansene Empire özel dili
import otk from './locales/otk/common.json';             // Göktürkçe/Hun Türkçesi

// 🏯 Tarihsel Çin varyantları
import zhCNQing from './locales/zh-CN-Qing/common.json'; // Qing Dynasty
import zhCNTang from './locales/zh-CN-Tang/common.json'; // Tang Dynasty

// 🇰🇷 Kore varyantları
import koSouth from './locales/ko-KR-KP/common-South.json'; // Güney Kore
import koNorth from './locales/ko-KR-KP/common-North.json'; // Kuzey Kore

// 🔧 i18n başlatma
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
      'es-MX': { common: esMX },
      'zh-CN': { common: zhCN },          // Modern Çin
      'zh-CN-Qing': { common: zhCNQing }, // Qing Dynasty
      'zh-CN-Tang': { common: zhCNTang }, // Tang Dynasty
      'zh-TW': { common: zhTW },          // Geleneksel Çin
      'ja-JP': { common: jaJP },          // Japonya resmi Japonca
      'ja-JE': { common: jaJE },          // Japansene Empire
      'otk':   { common: otk },           // Göktürkçe/Hun Türkçesi
      'ko-KR-KP-South': { common: koSouth }, // Güney Kore
      'ko-KR-KP-North': { common: koNorth }  // Kuzey Kore
    },
    ns: ['common'],         // Namespace
    defaultNS: 'common',
    interpolation: { escapeValue: false }
  });

export default i18n;
