import './globals.css'
import {Metadata} from "next";
import {ReactNode} from "react";
import {i18n} from "@/i18n/config";
import Providers from "./providers";

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

interface RootLayoutProps {
    children: ReactNode,
    params: {
        lang: typeof i18n['locales'][number]
    }
}

const RootLayout = async ({children, params: {lang}}: RootLayoutProps) => {
    return (
            <html lang="en">
                <head>
                    <link rel="icon" href="/favicon.ico"/>
                </head>
                <body>
                <Providers>{children}</Providers>
                </body>
            </html>
    )
}

export default RootLayout