import 'server-only'
import type { Locale } from './config'

interface Dictionaries {
    [key: string]: () => Promise<Record<string, string>>
}

const dictionaries: Dictionaries = {
    en: () => import('./translations/en.json').then((module) => module.default),
    sl: () => import('./translations/sl.json').then((module) => module.default),
}
export const getDictionary = async (locale: Locale) => dictionaries[locale]()