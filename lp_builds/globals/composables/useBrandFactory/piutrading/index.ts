import { BrandArrItem } from "../../../types/Brands";
import { PiuTradingSVGVariation } from "../../../types/Brands/logo";
import { TranslationsType } from "../../../types/Translations";
import { blackGreen, defaultLogo } from "./logos";

export const piutrading = (whatsapp: boolean, whatsappNumber: () => TranslationsType): BrandArrItem<PiuTradingSVGVariation> => ({
  id: 9,
  nameToLower: "piutrading",
  name: "Più Trading",
  typage: {
    en: "https://piutrading.com/thanks-en.html",
    it: "https://piutrading.com/thanks-en.html",
    tr: "https://piutrading.com/thanks-tr.html",
    ro: "https://piutrading.com/thanks-ro.html",
    ar: "https://piutrading.com/thanks-en.html",
    de: "https://piutrading.com/thanks-en.html",
    es: "https://piutrading.com/thanks-es.html",
    sv: "https://piutrading.com/thanks-sv.html",
    pt: "https://piutrading.com/thanks-pt.html",
    fi: "https://piutrading.com/thanks-fi.html",
    pl: "https://piutrading.com/thanks-pl.html",
    hu: "https://piutrading.com/thanks-hu.html",
    th: "https://piutrading.com/thanks-en.html",
    ms: "https://piutrading.com/thanks-en.html",
    vi: "https://piutrading.com/thanks-en.html",
  },
  recaptchaKey: "6LdCa2EjAAAAAO0nn5jZLdYCGMdTfxlPuO29d1s-",
  privacyLink: {
    en: "",
    it: "",
    tr: "",
    ro: "",
    ar: "",
    de: "",
    es: "",
    sv: "",
    pt: "",
    fi: "",
    pl: "",
    hu: "",
    th: "",
    ms: "",
    vi: "",
  },
  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
      blackGreen: blackGreen,
    },
    faviconLink: "https://piutrading.com/global_assets/imgs/favicon.png",
  },
});
