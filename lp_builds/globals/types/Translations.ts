import type { LandingPageType } from "../types/LandingPageType";

export type FooterTranslations = {
  [key in LandingPageType]: TranslationsType;
};

export type TranslationsType = {
  en: string;
  it: string;
  tr: string;
  ro: string;
  ar: string;
  de: string;
  es: string;
  sv: string;
  pt: string;
  fi: string;
  pl: string;
  hu: string;
  th: string;
  ms: string;
  vi: string;
  [key: string]: string;
};

export interface TextVersionTranslation {
  v1: TranslationsType;
  v2: TranslationsType;
  v3?: TranslationsType;
  v4?: TranslationsType;
  v5?: TranslationsType;
  // [key: string]: TranslationsType;
}
