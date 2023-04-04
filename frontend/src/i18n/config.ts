export const i18n = {
    defaultLocale: 'sl',
    locales: ['en', 'sl'],
} as const

export type Locale = typeof i18n['locales'][number]