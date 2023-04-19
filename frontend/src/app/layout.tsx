import './globals.css'
import {Metadata} from "next";
import {ReactNode} from "react";
import {i18n} from "@/i18n/config";
import Providers from "./providers";
import Script from "next/script";

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
        <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-C270KYH66D"></Script>
        <Script id="google-analytics" strategy='afterInteractive'>
            {
                `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
    
                gtag('config', 'G-C270KYH66D');`
            }
        </Script>
        <body>
        <Providers>{children}</Providers>
        </body>
        </html>
    )
}

export default RootLayout
