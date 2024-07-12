import { BrandArrItem } from "../../../types/Brands";
import { ProTraderZoneSVGVariation } from "../../../types/Brands/logo";
import { TranslationsType } from "../../../types/Translations";
import { defaultLogo, darkBlueOrange, whiteOrange } from "./logos";

export const protraderzone = (whatsapp: boolean, whatsappNumber: () => TranslationsType): BrandArrItem<ProTraderZoneSVGVariation> => ({
  id: 8,
  nameToLower: "protraderzone",
  name: "ProTradersZone",
  typage: {
    en: "https://protraderzone.com/thankyou/en/",
    it: "https://protraderzone.com/thankyou/it/",
    tr: "",
    ro: "",
    ar: "",
    de: "",
    es: "https://protraderzone.com/thankyou/es/",
    sv: "https://protraderzone.com/thankyou/sv/",
    pt: "",
    fi: "",
    pl: "https://protraderzone.com/thankyou/pl/",
    hu: "",
    th: "",
    ms: "",
    vi: "",
  },
  recaptchaKey: "6LcLpJgpAAAAAIFFCX3S3t4--80SlT_c5Prq4vNH",
  privacyLink: {
    en: "https://protraderzone.com/privacypolicy/en/",
    it: "https://protraderzone.com/privacypolicy/en/",
    tr: "https://protraderzone.com/privacypolicy/en/",
    ro: "https://protraderzone.com/privacypolicy/en/",
    ar: "https://protraderzone.com/privacypolicy/en/",
    de: "https://protraderzone.com/privacypolicy/en/",
    es: "https://protraderzone.com/privacypolicy/en/",
    sv: "https://protraderzone.com/privacypolicy/en/",
    pt: "https://protraderzone.com/privacypolicy/en/",
    fi: "https://protraderzone.com/privacypolicy/en/",
    pl: "https://protraderzone.com/privacypolicy/en/",
    hu: "https://protraderzone.com/privacypolicy/en/",
    th: "https://protraderzone.com/privacypolicy/en/",
    ms: "https://protraderzone.com/privacypolicy/en/",
    vi: "https://protraderzone.com/privacypolicy/en/",
  },
  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
      darkBlueOrange: darkBlueOrange,
      whiteOrange: whiteOrange,
    },
    faviconLink: "https://protraderzone.com/global_assets/imgs/favicon.png",
  },
});
