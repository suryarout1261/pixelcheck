import { Language, Translations } from "../types";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { zh } from "./zh";
import { ja } from "./ja";
import { it } from "./it";
import { de } from "./de";
import { pt } from "./pt";

export const DICTIONARIES: Record<Language, Translations> = {
  en,
  es,
  fr,
  zh,
  ja,
  it,
  de,
  pt,
};
