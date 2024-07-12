import { type BrandArrItem } from "../../../types/Brands";
import { type FXOROSVGVariation } from "../../../types/Brands/logo";
import { type TranslationsType } from "../../../types/Translations";
import { defaultLogo } from "./logos/defaultLogo";

export const genericBrand = (whatsapp: boolean, whatsappNumber: () => TranslationsType): BrandArrItem<FXOROSVGVariation> => ({
  id: 4,
  nameToLower: "genericBrand",
  name: "Generic Brand",
  typage: {
    en: ``,
    it: ``,
    tr: ``,
    ro: ``,
    ar: ``,
    de: ``,
    es: ``,
    sv: ``,
    pt: ``,
    fi: ``,
    pl: ``,
    hu: ``,
    th: ``,
    ms: ``,
    vi: ``,
  },
  recaptchaKey: "6LeuLYQjAAAAABfXp16faOgK81dNJOvm1otioobl",
  privacyLink: {
    en: ``,
    it: ``,
    tr: ``,
    ro: ``,
    ar: ``,
    de: ``,
    es: ``,
    sv: ``,
    pt: ``,
    fi: ``,
    pl: ``,
    hu: ``,
    th: ``,
    ms: ``,
    vi: ``,
  },
  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
    },
    faviconLink: "",
  },
});
