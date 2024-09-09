import { type BrandArrItem } from "../../../types/Brands";
import { type TradingProfilerSVGVariation } from "../../../types/Brands/logo";
import { type TranslationsType } from "../../../types/Translations";
import { defaultColorBlack, defaultColorBlackStrokeBlack, defaultColorWhite, defaultLogo, squareColorBlack, squareColorWhite } from "./logos";
import { defaultColorBlackStrokeWhite } from "./logos/defaultColorBlackStrokeWhite";

export const tradingprofiler = (whatsapp: boolean, whatsappNumber: () => TranslationsType): BrandArrItem<TradingProfilerSVGVariation> => ({
  id: 10,
  nameToLower: "tradingprofiler",
  name: "TradingProfiler",
  typage: {
    en: "https://tradingprofiler.com/thank-you/en/",
    it: "",
    tr: "",
    ro: "https://tradingprofiler.com/thank-you/ro/",
    ar: "",
    de: "",
    es: "https://tradingprofiler.com/thank-you/es/",
    sv: "",
    pt: "",
    fi: "",
    pl: "",
    hu: "",
    th: "",
    ms: "",
    vi: "",
  },
  recaptchaKey: "6LekLYQjAAAAAC8K5qL3_1vgESa_o0ms2fGzTGny",
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
      defaultColorBlack: defaultColorBlack,
      defaultColorWhite: defaultColorWhite,
      defaultColorBlackStrokeBlack: defaultColorBlackStrokeBlack,
      defaultColorBlackStrokeWhite: defaultColorBlackStrokeWhite,
      squareColorBlack: squareColorBlack,
      squareColorWhite: squareColorWhite,
    },
    faviconLink: "https://tradingprofiler.com/global_assets/imgs/favicon.png",
  },
});
