import { type DesignVersion } from "../types/ComponentProps";
import { type TextVersionTranslation, type TranslationsType } from "../types/Translations";

const useTextVersion = (obj: TextVersionTranslation, textVersion: DesignVersion | undefined) => {
  if (!textVersion) throw new Error("You have to add text version in componentProps");

  if (!obj[textVersion]) throw new Error('This textVersion does not exist')

  return obj[textVersion];
};

export default useTextVersion;
