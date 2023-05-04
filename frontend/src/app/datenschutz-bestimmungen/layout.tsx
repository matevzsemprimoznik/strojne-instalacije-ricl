import {Metadata} from "next";
import {ReactNode} from "react";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import getContact from "@/lib/getContact";
import {getDictionary} from "@/i18n/get-dictionary";

export const metadata: Metadata = {
    title: 'Maschineninstallationen Ričl',
    description: 'Benötigen Sie Hardware-Installationen für Ihr Zuhause oder Ihre Geschäftsräume? Ričl ist Experte für die Installation von Klimaanlagen, Wärmepumpen, den Bau von Badezimmern und die Verlegung von Wasserleitungen. Vertrauen Sie uns Ihre Installationsanforderungen an und wir bieten Ihnen effiziente und zuverlässige Lösungen. Kontaktieren Sie uns noch heute und überzeugen Sie sich selbst!',
    openGraph: {
        title: 'Maschineninstallationen Ričl',
        description: 'Benötigen Sie Hardware-Installationen für Ihr Zuhause oder Ihre Geschäftsräume? Ričl ist Experte für die Installation von Klimaanlagen, Wärmepumpen, den Bau von Badezimmern und die Verlegung von Wasserleitungen. Vertrauen Sie uns Ihre Installationsanforderungen an und wir bieten Ihnen effiziente und zuverlässige Lösungen. Kontaktieren Sie uns noch heute und überzeugen Sie sich selbst!',
        url: 'https://strojne-instalacije-ricl.vercel.app/de',
    }
}

interface RootLayoutProps {
    children: ReactNode,
}

const RootLayout = async ({children}: RootLayoutProps) => {
    const contact = await getContact()
    const locale = 'de'
    const dict = await getDictionary(locale)

    return (
        <>
            {children}
            <CookieBanner dict={dict} locale={locale}/>
            <Footer contact={contact} dict={dict} locale={locale}/>
        </>
    )
}

export default RootLayout

