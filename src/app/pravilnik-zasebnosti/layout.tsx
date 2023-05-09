import {Metadata} from "next";
import {ReactNode} from "react";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import getContact from "@/lib/getContact";
import {getDictionary} from "@/i18n/get-dictionary";

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
    const contact = await getContact()
    const locale = 'sl'
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

