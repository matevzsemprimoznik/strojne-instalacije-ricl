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

interface RootLayoutProps {
    children: ReactNode,
    params: {
        lang: typeof i18n['locales'][number]
    }
}

const RootLayout = async ({children, params: {lang}}: RootLayoutProps) => {
    const contact = await getContact()
    const dictionary = await getDictionary(lang)

    i18nStore.setState({locale: lang, dictionary})
    return (

        <>
            <head>
                <link rel="icon" href="favicon.ico"/>
            </head>
            <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA4_TRACKING_ID || ''}/>
            <body>
            <Providers>{children}</Providers>
            <CookieBanner dict={dictionary} locale={lang}/>
            <Footer contact={contact}/>
            </body>
        </>
    )
}

export default RootLayout

export function generateStaticParams() {
    return i18n.locales.map(locale => ({lang: locale}))
}
export async function generateMetadata(
    { params: {lang} }: { params: {lang: typeof i18n['locales'][number]} },
): Promise<Metadata> {
    const dictionary = await getDictionary(lang)

    return {
        title: dictionary['title'],
        description: dictionary['description'],
        openGraph: {
            title: dictionary['openGraph.title'],
            description: dictionary['openGraph.description'],
            url: dictionary['openGraph.url'],
        },
    };
}
