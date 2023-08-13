export const i18n = {
    defaultLocale: 'sl',
    locales: ['de', 'sl', 'hr'],
} as const

export type Locale = typeof i18n['locales'][number]

interface RoutesStructure {
    [key: string]: {
        [key in Locale]: string;
    }
}

export const routesStructure: RoutesStructure = {
    home: {
        de: 'heim',
        sl: 'domov',
        hr: 'doma',
    },
    about: {
        de: 'uber-uns',
        sl: 'o-nas',
        hr: 'o-nama',
    },
    privacy: {
        de: 'datenschutz-bestimmungen',
        sl: 'pravilnik-zasebnosti',
        hr: 'politika-privatnosti',
    },
    projects: {
        de: 'projekte',
        sl: 'projekti',
        hr: 'projekati',
    }
}

export const getRouteFromLocaleName = (name: string) => {
    let result: string | null = null

    const routes = Object.keys(routesStructure)
    routes.forEach(route => {
        const locales = Object.keys(routesStructure[route as keyof typeof routesStructure])
        locales.forEach(locale => {
            const localeRouteName = routesStructure[route as keyof typeof routesStructure][locale as Locale]
            if (localeRouteName === name)
                result = `/${locale}/${route}`
        })
    })

    return result as string | null
}

export const localeHomeMapping = {
    ...routesStructure.home
}