import './globals.css'
import {Metadata} from "next";
import {ReactNode} from "react";
import {i18n} from "@/i18n/config";
import Providers from "./providers";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
    title: 'Strojne inštalacije Ričl',
    description: 'Potrebujete strojne inštalacije za vaš dom ali poslovni prostor? Ričl je strokovnjak za montažo klim, toplotnih črpalk, izdelavo kopalnic ter polaganje vodovodnih cevi. Zaupajte nam vaše potrebe po inštalacijah in zagotovili vam bomo učinkovite in zanesljive rešitve. Kontaktirajte nas danes in se prepričajte sami!',
    openGraph: {
        title: 'Strojne inštalacije Ričl',
        description: 'Potrebujete strojne inštalacije za vaš dom ali poslovni prostor? Ričl je strokovnjak za montažo klim, toplotnih črpalk, izdelavo kopalnic ter polaganje vodovodnih cevi. Zaupajte nam vaše potrebe po inštalacijah in zagotovili vam bomo učinkovite in zanesljive rešitve. Kontaktirajte nas danes in se prepričajte sami!',
        url: 'https://strojne-instalacije-ricl.vercel.app',
    }
}

interface RootLayoutProps {
    children: ReactNode,
    params: {
        lang: typeof i18n['locales'][number]
    }
}

const RootLayout = async ({children, params: {lang}}: RootLayoutProps) => {
    return (
        <html lang={lang}>
        <head>
            <link rel="icon" href="/favicon.ico"/>
        </head>
            <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA4_TRACKING_ID || ''}/>
        <body>
            <Providers>{children}</Providers>
            <CookieBanner/>
        </body>
        </html>
    )
}

export default RootLayout
