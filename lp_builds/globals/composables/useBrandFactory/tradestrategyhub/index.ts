import { BrandArrItem } from "../../../types/Brands";
import { TradeStrategyHubSVGVariation } from "../../../types/Brands/logo";
import { TranslationsType } from "../../../types/Translations";
import { defaultLogo } from "./logos/defaultLogo";

export const tradestrategyhub = (whatsapp: boolean, whatsappNumber: () => TranslationsType): BrandArrItem<TradeStrategyHubSVGVariation> => ({
  id: 7,
  nameToLower: "tradestrategyhub",
  name: "TradeStrategyHub",
  typage: {
    en: "https://tradestrategyhub.com/thankyou/en/",
    it: "https://tradestrategyhub.com/thankyou/it/",
    tr: "",
    ro: "",
    ar: "",
    de: "",
    es: "https://tradestrategyhub.com/thankyou/es/",
    sv: "https://tradestrategyhub.com/thankyou/sv/",
    pt: "",
    fi: "",
    pl: "https://tradestrategyhub.com/thankyou/pl/",
    hu: "",
    th: "",
    ms: "",
    vi: "",
  },
  recaptchaKey: "6LeapJgpAAAAABjc0UySawSAB6zKqRNwbqFiMbUk",
  privacyLink: {
    en: "https://tradestrategyhub.com/privacypolicy/en/",
    it: "https://tradestrategyhub.com/privacypolicy/en/",
    tr: "https://tradestrategyhub.com/privacypolicy/en/",
    ro: "https://tradestrategyhub.com/privacypolicy/en/",
    ar: "https://tradestrategyhub.com/privacypolicy/en/",
    de: "https://tradestrategyhub.com/privacypolicy/en/",
    es: "https://tradestrategyhub.com/privacypolicy/en/",
    sv: "https://tradestrategyhub.com/privacypolicy/en/",
    pt: "https://tradestrategyhub.com/privacypolicy/en/",
    fi: "https://tradestrategyhub.com/privacypolicy/en/",
    pl: "https://tradestrategyhub.com/privacypolicy/en/",
    hu: "https://tradestrategyhub.com/privacypolicy/en/",
    th: "https://tradestrategyhub.com/privacypolicy/en/",
    ms: "https://tradestrategyhub.com/privacypolicy/en/",
    vi: "https://tradestrategyhub.com/privacypolicy/en/",
  },
  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
    },
    faviconLink: "https://tradestrategyhub.com/global_assets/imgs/favicon.png",
  },
});
