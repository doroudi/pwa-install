import { configureLocalization } from '@lit/localize';
import {
  sourceLocale,
  targetLocales,
} from './locale-codes';

import * as fa from './locales/fa';
import * as en from './locales/en';

const localizedTemplates = new Map([
  ['fa', fa],
  ['en', en],
])

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  // @ts-ignore
  loadLocale: async (lang: string) => localizedTemplates.get(lang)
});

export const changeLocale = (lang: string) => {
  try {
    setLocale(lang.slice(0, 2));
  }
  catch {
    console.warn(`pwa-install: translation error - unsupported locale: ${lang}`);
  }
};
