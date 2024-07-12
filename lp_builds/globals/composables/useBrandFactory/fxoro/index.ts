import { BrandArrItem } from "../../../types/Brands";
import { FXOROSVGVariation } from "../../../types/Brands/logo";
import { TranslationsType } from "../../../types/Translations";
import { defaultLogo } from "./logos/defaultLogo";

export const fxoro = (whatsapp: boolean, whatsappNumber: () => TranslationsType): BrandArrItem<FXOROSVGVariation> => ({
  id: 4,
  nameToLower: "fxoro",
  name: "FXORO",
  typage: {
    en: `https://my.fxoro.com/register`,
    it: `https://my.fxoro.com/it/registrati/`,
    tr: `https://my.fxoro25.com/tr/kayit-ol/`,
    ro: `https://my.fxoro.com/ro/inregistrare/`,
    ar: `https://my.fxoro.com/ar/%D8%AA%D8%B3%D8%AC%D9%8A%D9%84/`,
    de: `https://my.fxoro.com/de/registrieren/`,
    es: `https://my.fxoro.com/es/registrarse/`,
    sv: `https://my.fxoro.com/sv/registrera/`,
    pt: `https://my.fxoro.com/pt/registo/`,
    fi: `https://my.fxoro.com/fi/rekisteroidy/`,
    pl: `https://my.fxoro.com/pl/register/`,
    hu: `https://my.fxoro.com/hu/eles-szamlanyitas/`,
    th: `https://my.fxoro.com/th/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%9A-%E0%B8%A2%E0%B8%99/`,
    ms: `https://my.fxoro.com/ms/daftar/`,
    vi: `https://my.fxoro.com/vi/dang-ky/`,
  },
  recaptchaKey: "6LeuLYQjAAAAABfXp16faOgK81dNJOvm1otioobl",
  privacyLink: {
    en: `https://fxoro.com/en/privacy-and-security-policy/`,
    it: `https://fxoro.com/it/privacy-and-security-policy/`,
    tr: `https://fxoro.com/tr/privacy-and-security-policy/`,
    ro: `https://fxoro.com/ro/privacy-and-security-policy/`,
    ar: `https://fxoro.com/ar/privacy-and-security-policy/`,
    de: `https://fxoro.com/de/privacy-and-security-policy/`,
    es: `https://fxoro.com/es/privacy-and-security-policy/`,
    sv: `https://fxoro.com/sv/privacy-and-security-policy/`,
    pt: `https://fxoro.com/pt/privacy-and-security-policy/`,
    fi: `https://fxoro.com/fi/privacy-and-security-policy/`,
    pl: `https://fxoro.com/pl/privacy-and-security-policy/`,
    hu: `https://fxoro.com/hu/privacy-and-security-policy/`,
    th: `https://fxoro.com/th/privacy-and-security-policy/`,
    ms: `https://fxoro.com/ms/privacy-and-security-policy/`,
    vi: `https://fxoro.com/vi/privacy-and-security-policy/`,
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
