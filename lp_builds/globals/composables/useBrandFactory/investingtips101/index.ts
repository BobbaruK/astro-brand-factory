import { type BrandArrItem } from "../../../types/Brands";
import { type Investingtips101SVGVariation } from "../../../types/Brands/logo";
import { type TranslationsType } from "../../../types/Translations";
import { defaultLogo } from "./logos";

export const investingtips101 = (whatsapp: boolean, whatsappNumber: () => TranslationsType): BrandArrItem<Investingtips101SVGVariation> => ({
  id: 1,
  nameToLower: "investingtips101",
  name: "Investing Tips 101",
  typage: {
    en: "https://investingtips101.com/thanks-en.html",
    it: "https://investingtips101.com/thanks-it.html",
    tr: "",
    ro: "https://investingtips101.com/thanks-ro.html",
    ar: "",
    de: "",
    es: "https://investingtips101.com/thanks-es.html",
    sv: "https://investingtips101.com/thanks-sv.html",
    pt: "",
    fi: "",
    pl: "https://investingtips101.com/thanks-pl.html",
    hu: "",
    th: "",
    ms: "",
    vi: "",
  },
  recaptchaKey: "6Lcie2QjAAAAABe6qk6JiC3wvPyhbiywPGijEKjm",
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
    },
    faviconLink: "https://investingtips101.com/global_assets/imgs/favicon.svg",
  },
});
