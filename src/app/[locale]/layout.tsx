import {Metadata} from "next";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import getContact from "@/lib/getContact";
import {getDictionary} from "@/i18n/get-dictionary";
import {BasicLayoutProps, BasicPageProps} from "@/types";
import {i18n} from "@/i18n/config";

export async function generateMetadata({params}: BasicPageProps): Promise<Metadata> {
    const locale = params.locale
    const dict = await getDictionary(locale)

    return {
        title: dict['title'],
        description: dict['description'],
        openGraph: {
            title: dict['openGraph.title'],
            description: dict['openGraph.description'],
            url: dict['openGraph.url'],
        },
    }
}

//export const revalidate = 60 // 24 hours

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({locale}))
}

const RootLayout = async ({children, params: {locale}}: BasicLayoutProps) => {
    const contact = await getContact()
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

