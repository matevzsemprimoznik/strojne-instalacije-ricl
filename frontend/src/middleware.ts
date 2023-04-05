import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from './i18n/config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import acceptLanguage from "accept-language";

const cookieName = 'i18next'

function getLocale(request: NextRequest): string | undefined {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // Use negotiator and intl-localematcher to get best locale
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    return matchLocale(languages, locales, i18n.defaultLocale)
}


export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    if (pathname.indexOf('icon') > -1 || pathname.indexOf('chrome') > -1)
        return NextResponse.next()

    let lng:string | null = null

    const languageCookie = request.cookies.get(cookieName)
    if (languageCookie)
        lng = acceptLanguage.get(languageCookie.value)
    if (!lng)
        lng = acceptLanguage.get(request.headers.get('Accept-Language'))
    if (!lng) lng = i18n.defaultLocale


    if (!i18n.locales.some(loc => pathname.startsWith(`/${loc}`)) && !pathname.startsWith('/_next'))
        return NextResponse.redirect(new URL(`/${lng}${pathname}`, request.url))

    const refererHeader = request.headers.get('referer')
    if (refererHeader) {
        const refererUrl = new URL(refererHeader)
        const lngInReferer = i18n.locales.find((l) => refererUrl.pathname.startsWith(`/${l}`))
        const response = NextResponse.next()
        if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
        return response
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}