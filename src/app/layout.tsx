import './globals.css'
import {ReactNode} from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Providers from "@/app/providers";

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
            <Providers>{children}</Providers>
            </body>
        </html>
    )
}

export default RootLayout

