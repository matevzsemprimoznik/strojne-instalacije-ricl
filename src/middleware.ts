import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'

import {getRouteFromLocaleName, i18n, localeHomeMapping} from './i18n/config'
import acceptLanguage from "accept-language";

const cookieName = 'i18next'

const getLanguageFromHeader = (header: string | null) => {
    const languages = header?.split(',') || []
    let language = null

    for (let i = 0; i < languages.length; i++) {
        const locale = languages[i].split('-')[0]
        if (i18n.locales.includes(locale as any)) {
            language = locale
            break
        }
    }
    return language
}
export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    const route = getRouteFromLocaleName(pathname.slice(1))

    if (route)
        return NextResponse.rewrite(new URL(route, request.url))

    if (pathname.indexOf('icon') > -1 || pathname.indexOf('chrome') > -1)
        return NextResponse.next()

    let lng: string | null = null

    const languageCookie = request.cookies.get(cookieName)
    if (languageCookie)
        lng = acceptLanguage.get(languageCookie.value)
    if (!lng)
        lng = getLanguageFromHeader(request.headers.get('Accept-Language'))
    if (!lng) lng = i18n.defaultLocale


    if(pathname === '/'){
        const homePagePath = localeHomeMapping[lng as keyof typeof localeHomeMapping] || localeHomeMapping[i18n.defaultLocale as keyof typeof localeHomeMapping]
        return NextResponse.redirect(new URL(homePagePath, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!_next).*)',
    ],
}