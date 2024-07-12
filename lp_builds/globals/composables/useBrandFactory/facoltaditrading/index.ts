import { BrandArrItem } from "../../../types/Brands";
import { FacoltaDiTradingSVGVariation } from "../../../types/Brands/logo";
import { TranslationsType } from "../../../types/Translations";
import { defaultLogo } from "./logos/defaultLogo";

export const facoltaditrading = (whatsapp: boolean, whatsappNumber: () => TranslationsType): BrandArrItem<FacoltaDiTradingSVGVariation> => ({
  id: 3,
  nameToLower: "facoltaditrading",
  name: "Facoltà Di Trading",
  typage: {
    en: `https://facoltaditrading.com/TY_AICI}`,
    it: `https://facoltaditrading.com/TY_AICI}`,
    tr: ``,
    ro: `https://facoltaditrading.com/TY_AICI}`,
    ar: ``,
    de: ``,
    es: `https://facoltaditrading.com/TY_AICI}`,
    sv: `https://facoltaditrading.com/TY_AICI}`,
    pt: ``,
    fi: ``,
    pl: `https://facoltaditrading.com/TY_AICI}`,
    hu: ``,
    th: ``,
    ms: ``,
    vi: ``,
  },
  recaptchaKey: "6LfWLIQjAAAAADF97_A4hqRnyD3EmZ-XLXDXgIVa",
  privacyLink: {
    en: "https://facoltaditrading.com/privacypolicy.html",
    it: "https://facoltaditrading.com/privacypolicy.html",
    tr: "https://facoltaditrading.com/privacypolicy.html",
    ro: "https://facoltaditrading.com/privacypolicy.html",
    ar: "https://facoltaditrading.com/privacypolicy.html",
    de: "https://facoltaditrading.com/privacypolicy.html",
    es: "https://facoltaditrading.com/privacypolicy.html",
    sv: "https://facoltaditrading.com/privacypolicy.html",
    pt: "https://facoltaditrading.com/privacypolicy.html",
    fi: "https://facoltaditrading.com/privacypolicy.html",
    pl: "https://facoltaditrading.com/privacypolicy.html",
    hu: "https://facoltaditrading.com/privacypolicy.html",
    th: "https://facoltaditrading.com/privacypolicy.html",
    ms: "https://facoltaditrading.com/privacypolicy.html",
    vi: "https://facoltaditrading.com/privacypolicy.html",
  },
  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
    },
    faviconLink: "https://tradersacademic.com/global_assets/imgs/favicon.svg",
  },
});
