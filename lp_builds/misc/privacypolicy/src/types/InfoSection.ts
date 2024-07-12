import type { TranslationsType } from "../../../../globals/types/Translations";

export interface InfoSection {
  title: TranslationsType;
  paras?: TranslationsType[];
  list?: TranslationsType[];
}
