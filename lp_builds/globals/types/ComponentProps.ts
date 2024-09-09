import type { BrandArrItem } from "./Brands";
import type { FormValidation } from "./FormValidationTypes";
import type { LandingPageLangType, LandingPageType } from "./LandingPageType";

export interface ComponentProps<TSVGLogoVariations = any, TCustomOpts = any> {
  lang: string;
  langType: LandingPageLangType;
  dir: string;
  lpName: string;
  brandObj: BrandArrItem<TSVGLogoVariations>;
  logo: () => string;
  lpType: LandingPageType;
  formValidation: FormValidation;
  designVersion?: DesignVersion;
  fxoroFooter?: boolean;
  customOptions?: TCustomOpts; // any
}

/**
 * if you modify this, pay attention also to
 * TextVersionTranslation in ./Translations.ts
 */
export type DesignVersion = "v1" | "v2" | "v3" | "v4" | "v5";
