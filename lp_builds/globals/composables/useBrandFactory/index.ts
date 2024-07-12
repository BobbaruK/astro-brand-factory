import { type BrandArrItem } from "../../types/Brands";
import { type BrandsNames } from "../../types/Brands/names";
import { type LandingPageLangType } from "../../types/LandingPageType";
import { daytradingstar } from "./daytradingstar";
import { facoltaditrading } from "./facoltaditrading";
import { fxoro } from "./fxoro";
import { fxoro_global } from "./fxoro_global";
import { genericBrand } from "./genericBrand";
import { investingtips101 } from "./investingtips101";
import { piutrading } from "./piutrading";
import { protraderzone } from "./protraderzone";
import { tradersacademic } from "./tradersacademic";
import { tradestrategyhub } from "./tradestrategyhub";
import { tradingprofiler } from "./tradingprofiler";

interface Args {
  brand: BrandsNames;
  region: LandingPageLangType;
  whatsapp: boolean;
}

export const useBrandFactory = <T>({
  brand,
  region,
  whatsapp,
}: Args): BrandArrItem<T> => {
  const whatsappNumber = () => {
    switch (region) {
      case "cysec":
        return {
          en: "442045864398",
          it: "3901119881294",
          tr: "",
          ro: "",
          ar: "",
          de: "",
          es: "34683785822",
          sv: "46790083304",
          pt: "",
          fi: "",
          pl: "48884787595",
          hu: "",
          th: "",
          ms: "",
          vi: "",
        };

      case "fsa":
        return {
          en: "911171279567",
          it: "",
          tr: "",
          ro: "",
          ar: "",
          de: "",
          es: "573009121615",
          sv: "46790083304",
          pt: "",
          fi: "",
          pl: "48884787595",
          hu: "",
          th: "",
          ms: "",
          vi: "",
        };
    }
  };

  switch (brand) {
    case "genericBrand":
      return genericBrand(whatsapp, whatsappNumber) as BrandArrItem<T>;

    case "investingtips101":
      return investingtips101(whatsapp, whatsappNumber) as BrandArrItem<T>;

    case "tradersacademic":
      return tradersacademic(whatsapp, whatsappNumber) as BrandArrItem<T>;

    case "facoltaditrading":
      return facoltaditrading(whatsapp, whatsappNumber) as BrandArrItem<T>;

    case "fxoro":
      return fxoro(whatsapp, whatsappNumber) as BrandArrItem<T>;

    case "fxoro_global":
      return fxoro_global(whatsapp, whatsappNumber) as BrandArrItem<T>;

    case "daytradingstar":
      return daytradingstar(whatsapp, whatsappNumber) as BrandArrItem<T>;

    case "tradestrategyhub":
      return tradestrategyhub(whatsapp, whatsappNumber) as BrandArrItem<T>;

    case "protraderzone":
      return protraderzone(whatsapp, whatsappNumber) as BrandArrItem<T>;

    case "piutrading":
      return piutrading(whatsapp, whatsappNumber) as BrandArrItem<T>;

    case "tradingprofiler":
      return tradingprofiler(whatsapp, whatsappNumber) as BrandArrItem<T>;

    default:
      return genericBrand(whatsapp, whatsappNumber) as BrandArrItem<T>;
  }
};
