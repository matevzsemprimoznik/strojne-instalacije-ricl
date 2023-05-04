import {Metadata} from "next";
import {ReactNode} from "react";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import getContact from "@/lib/getContact";
import {getDictionary} from "@/i18n/get-dictionary";

export const metadata: Metadata = {
    title: 'Strojne instalacije Ričl',
    description: 'Trebate hardverske instalacije za Vaš dom ili poslovni prostor? Ričl je stručnjak za montažu klima uređaja, dizalica topline, izradu kupaonica i polaganje vodovodnih cijevi. Povjerite nam svoje potrebe za instalacijom, a mi ćemo vam pružiti učinkovita i pouzdana rješenja. Kontaktirajte nas danas i uvjerite se sami!',
    openGraph: {
        title: 'Strojne instalacije Ričl',
        description: 'Trebate hardverske instalacije za Vaš dom ili poslovni prostor? Ričl je stručnjak za montažu klima uređaja, dizalica topline, izradu kupaonica i polaganje vodovodnih cijevi. Povjerite nam svoje potrebe za instalacijom, a mi ćemo vam pružiti učinkovita i pouzdana rješenja. Kontaktirajte nas danas i uvjerite se sami!',
        url: 'https://strojne-instalacije-ricl.vercel.app/hr',
    }
}

interface RootLayoutProps {
    children: ReactNode,
}

const RootLayout = async ({children}: RootLayoutProps) => {
    const contact = await getContact()
    const locale = 'hr'
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

