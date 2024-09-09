import { type BrandArrItem } from "../../../types/Brands";
import { type TradersAcademicSVGVariation } from "../../../types/Brands/logo";
import { type TranslationsType } from "../../../types/Translations";
import { defaultLogo } from "./logos/defaultLogo";

export const tradersacademic = (whatsapp: boolean, whatsappNumber: () => TranslationsType): BrandArrItem<TradersAcademicSVGVariation> => ({
  id: 2,
  nameToLower: "tradersacademic",
  name: "Traders Academic",
  typage: {
    en: "https://tradersacademic.com/thank-you/en/",
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
  recaptchaKey: "6LcF02QjAAAAADxEES9rYjPPlDNRwJiAOmDwSnUA",
  privacyLink: {
    en: "https://www.tradersacademic.com/privacypolicy.html",
    it: "https://www.tradersacademic.com/privacypolicy.html",
    tr: "https://www.tradersacademic.com/privacypolicy.html",
    ro: "https://www.tradersacademic.com/privacypolicy.html",
    ar: "https://www.tradersacademic.com/privacypolicy.html",
    de: "https://www.tradersacademic.com/privacypolicy.html",
    es: "https://www.tradersacademic.com/privacypolicy.html",
    sv: "https://www.tradersacademic.com/privacypolicy.html",
    pt: "https://www.tradersacademic.com/privacypolicy.html",
    fi: "https://www.tradersacademic.com/privacypolicy.html",
    pl: "https://www.tradersacademic.com/privacypolicy.html",
    hu: "https://www.tradersacademic.com/privacypolicy.html",
    th: "https://www.tradersacademic.com/privacypolicy.html",
    ms: "https://www.tradersacademic.com/privacypolicy.html",
    vi: "https://www.tradersacademic.com/privacypolicy.html",
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
