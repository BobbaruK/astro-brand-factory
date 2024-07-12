import { BrandArrItem } from "../../../types/Brands";
import { FXOROGlobalSVGVariation } from "../../../types/Brands/logo";
import { TranslationsType } from "../../../types/Translations";
import { defaultLogo } from "./logos/defaultLogo";

export const fxoro_global = (whatsapp: boolean, whatsappNumber: () => TranslationsType): BrandArrItem<FXOROGlobalSVGVariation> => ({
  id: 5,
  nameToLower: "fxoro_global",
  name: "FXORO",
  typage: {
    en: `https://my.global.fxoro.com/register`,
    it: `https://my.global.fxoro.com/it/registrati/`,
    tr: `https://my.global.fxoro25.com/tr/kayit-ol/`,
    ro: `https://my.global.fxoro.com/ro/inregistrare/`,
    ar: `https://my.global.fxoro.com/ar/%D8%AA%D8%B3%D8%AC%D9%8A%D9%84/`,
    de: `https://my.global.fxoro.com/de/registrieren/`,
    es: `https://my.global.fxoro.com/es/registrarse/`,
    sv: `https://my.global.fxoro.com/sv/registrera/`,
    pt: `https://my.global.fxoro.com/pt/registo/`,
    fi: `https://my.global.fxoro.com/fi/rekisteroidy/`,
    pl: `https://my.global.fxoro.com/pl/register/`,
    hu: `https://my.global.fxoro.com/hu/eles-szamlanyitas/`,
    th: `https://my.global.fxoro.com/th/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%9A-%E0%B8%A2%E0%B8%99/`,
    ms: `https://my.global.fxoro.com/ms/daftar/`,
    vi: `https://my.global.fxoro.com/vi/dang-ky/`,
  },
  recaptchaKey: "6LeILoQjAAAAAN_Dsbeu4ncn9Adut_tO3uK4Blnk",
  privacyLink: {
    en: `https://global.fxoro.com/en/privacy-and-security-policy/`,
    it: `https://global.fxoro.com/it/privacy-and-security-policy/`,
    tr: `https://global.fxoro.com/tr/privacy-and-security-policy/`,
    ro: `https://global.fxoro.com/ro/privacy-and-security-policy/`,
    ar: `https://global.fxoro.com/ar/privacy-and-security-policy/`,
    de: `https://global.fxoro.com/de/privacy-and-security-policy/`,
    es: `https://global.fxoro.com/es/privacy-and-security-policy/`,
    sv: `https://global.fxoro.com/sv/privacy-and-security-policy/`,
    pt: `https://global.fxoro.com/pt/privacy-and-security-policy/`,
    fi: `https://global.fxoro.com/fi/privacy-and-security-policy/`,
    pl: `https://global.fxoro.com/pl/privacy-and-security-policy/`,
    hu: `https://global.fxoro.com/hu/privacy-and-security-policy/`,
    th: `https://global.fxoro.com/th/privacy-and-security-policy/`,
    ms: `https://global.fxoro.com/ms/privacy-and-security-policy/`,
    vi: `https://global.fxoro.com/vi/privacy-and-security-policy/`,
  },

  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
    },
    faviconLink: "https://fxoro.com/global_assets/imgs/favicon.svg",
  },
});
