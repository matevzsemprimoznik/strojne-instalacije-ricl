import './globals.css'
import {Metadata} from "next";
import {ReactNode} from "react";


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
    return (
        <html>
        {children}
        </html>
    )
}

export default RootLayout

