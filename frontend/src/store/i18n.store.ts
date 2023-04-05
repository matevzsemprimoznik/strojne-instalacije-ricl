import {createStore} from 'zustand/vanilla'
import {i18n} from "@/i18n/config";
import {getDictionary} from "@/i18n/get-dictionary";
import {dictionaryType, localeType} from "@/types";
import { useStore } from 'zustand'


export interface I18nState {
    locale: localeType
    dictionary: dictionaryType
}

const store = createStore<I18nState>(() => ({
    locale: i18n.defaultLocale,
    dictionary: getDictionary(i18n.defaultLocale)
}))


export default store