export const i18n = {
    defaultLocale: 'sl',
    locales: ['de', 'sl', 'hr'],
} as const

export type Locale = typeof i18n['locales'][number]

export const localeHomeMapping = {
    de: 'heim',
    sl: 'domov',
    hr: 'doma',
}