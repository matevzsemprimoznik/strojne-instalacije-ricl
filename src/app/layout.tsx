import './globals.css'
import {ReactNode} from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Providers from "@/app/providers";
import Script from "next/script";
import {localBusinessData} from "@/assets/local-business-data";

interface RootLayoutProps {
    children: ReactNode,
}

const RootLayout = async ({children}: RootLayoutProps) => {
    return (
        <html>
        <head>
            <link rel="icon" href="favicon.ico"/>
            <meta name="google-site-verification" content="UQsgnJIYQYh3d4kIIz6SsTNisf9SYvieEqmcMTJZAfk"/>
            <Script
                id="app-ld-json"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessData, null, "\t"),
                }}
            />
        </head>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA4_TRACKING_ID || ''}/>
            <body>
            <Providers>{children}</Providers>
            </body>
        </html>
    )
}

export default RootLayout

