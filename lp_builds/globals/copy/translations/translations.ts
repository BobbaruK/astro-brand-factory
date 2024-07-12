import { TranslationsType } from "../../../globals/types/Translations";

interface Section {
  [key: string]: TranslationsType;
}

const header: Section = {
  title: {
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
  content: {
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
};

const formButton: TranslationsType = {
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
};

class Translations {
  constructor(public lang: string = "en") {}

  private _header(): void {
    const title = document.querySelector(".js-header-title") as HTMLHeadingElement;
    title.innerHTML = header.title[this.lang];

    const content = document.querySelector(".js-header-content") as HTMLElement;
    content.innerHTML = header.content[this.lang];
  }

  init() {
    this._header();
  }

  get formBtn() {
    return formButton[this.lang];
  }
}

export default function translations(lang: string) {
  return new Translations(lang);
}
