import en from './locales/en.json';
import pt from './locales/pt.json';

const translations = {
  en,
  pt,
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof en;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Locale;
  return 'en';
}

export function useTranslations(lang: Locale) {
  return function t(key: TranslationKey) {
    return translations[lang][key] || translations['en'][key];
  };
}
