import type { Locale } from './config'
import {i18n} from "./config";
import slTranslations from './translations/sl'
import deTranslations from './translations/de'
import hrTranslations from './translations/hr'
import {dictionaryType} from "@/types";

type Dictionaries = {
    [key in (typeof i18n['locales'][number])]: dictionaryType;
};

const dictionaries: Dictionaries = {
    de: deTranslations,
    sl: slTranslations,
    hr: hrTranslations,
} as const
export const getDictionary = (locale: Locale) => {
    return dictionaries[locale]
}