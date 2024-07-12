import type { LandingPageLangType } from "../LandingPageType";
import type { TranslationsType } from "../Translations";
import type { BrandsNames } from "./names";

export interface BrandArrItem<TSVGLogoVariations> {
  id: number;
  nameToLower: BrandsNames;
  name: string;
  typage: TranslationsType;
  recaptchaKey: string;
  privacyLink: TranslationsType;
  images: BrandItemImages<TSVGLogoVariations>;
  whatsapp: boolean;
  whatsappNumber: TranslationsType;
}

interface BrandItemImages<TSVGLogoVariations> {
  logoSVG: TSVGLogoVariations;
  faviconLink: string;
}

export interface BrandParamsObj {
  whatsapp: boolean;
  region: LandingPageLangType;
}
