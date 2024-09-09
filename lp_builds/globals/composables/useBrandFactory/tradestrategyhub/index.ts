import { type BrandArrItem } from "../../../types/Brands";
import { type TradeStrategyHubSVGVariation } from "../../../types/Brands/logo";
import type { LandingPageType } from "../../../types/LandingPageType";
import { type TranslationsType } from "../../../types/Translations";
import { defaultLogo } from "./logos/defaultLogo";

export const tradestrategyhub = (whatsapp: boolean, whatsappNumber: () => TranslationsType, lpType?: LandingPageType): BrandArrItem<TradeStrategyHubSVGVariation> => ({
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
    en: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    it: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    tr: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    ro: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    ar: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    de: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    es: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    sv: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    pt: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    fi: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    pl: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    hu: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    th: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    ms: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    vi: lpType !== "outbrain" ? "https://tradestrategyhub.com/privacypolicy/en/" : "https://tradestrategyhub.com/privacypolicy/ob/en/",
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
