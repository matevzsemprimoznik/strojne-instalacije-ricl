import './globals.css'
import {Metadata} from "next";
import {ReactNode} from "react";
import {i18n} from "@/i18n/config";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Providers from "@/app/providers";
import CookieBanner from "@/components/CookieBanner";
import {getDictionary} from "@/i18n/get-dictionary";
import i18nStore from "@/store/i18n.store";
import getContact from "@/lib/getContact";
import Footer from "@/components/Footer";

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
}

const RootLayout = async ({children}: RootLayoutProps) => {
    return (
        <html>
            <head>
                <link rel="icon" href="favicon.ico"/>
            </head>
            <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA4_TRACKING_ID || ''}/>
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout

