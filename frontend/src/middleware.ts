import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from './i18n/config'
import acceptLanguage from "accept-language";

const cookieName = 'i18next'

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

export function middleware(request: NextRequest) {
    let lng
    if (request.cookies.has(cookieName)) lng = acceptLanguage.get(request.cookies.get(cookieName)?.value)
    if (!lng) lng = acceptLanguage.get(request.headers.get('Accept-Language'))
    if (!lng) lng = i18n.defaultLocale

    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL(`/${lng}`, request.url))
    }

    const referer = request.headers.get('referer')
    if (referer) {
        const refererUrl = new URL(referer)
        const lngInReferer = i18n.locales.find((l) => refererUrl.pathname.startsWith(`/${l}`))
        const response = NextResponse.next()
        if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
        return response
    }

    return NextResponse.next()
}

// export const config = {
//     matcher: ['/','/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|robots.txt|sitemap.xml).*)']
// }