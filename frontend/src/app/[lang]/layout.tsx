import Footer from "@/components/Footer";
import {Metadata} from "next";
import {ReactNode} from "react";
import {i18n} from "@/i18n/config";
import i18nStore from "@/store/i18n.store";
import {getDictionary} from "@/i18n/get-dictionary";
import getContact from "@/lib/getContact";

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
        <>
            <main>{children}</main>
            <Footer contact={contact}/>
        </>
    )
}

export default RootLayout

export function generateStaticParams() {
    return i18n.locales.map(locale => ({lang: locale}))
}
