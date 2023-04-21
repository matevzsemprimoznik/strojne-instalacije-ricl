import '../globals.css'
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
    params: {
        lang: typeof i18n['locales'][number]
    }
}

const RootLayout = async ({children, params: {lang}}: RootLayoutProps) => {
    const contact = await getContact()

    i18nStore.setState({locale: lang, dictionary: await getDictionary(lang)})
    return (
        <html lang={lang}>
            <head>
                <link rel="icon" href="favicon.ico"/>
            </head>
            <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA4_TRACKING_ID || ''}/>
            <body>
                <Providers>{children}</Providers>
                <CookieBanner/>
                <Footer contact={contact}/>
            </body>
        </html>
    )
}

export default RootLayout

export function generateStaticParams() {
    return i18n.locales.map(locale => ({lang: locale}))
}
