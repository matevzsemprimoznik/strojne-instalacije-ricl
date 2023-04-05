import Link from "next/link";
import {FC} from "react";
import {twMerge} from "tailwind-merge";
import i18nStore from "@/store/i18n.store";

interface NavProps {
    textColor?: 'text-black' | 'text-white'
}
const Nav:FC<NavProps> = ({textColor='text-black'}) => {
    const dict = i18nStore.getState().dictionary
    const locale = i18nStore.getState().locale
    return (
        <div className='flex py-8 container m-auto justify-between'>
            <Link className={twMerge('text-3xl font-bold', textColor)} href={`/${locale}`}>Strojne inštalacije <span className='text-myBlue'>Ričl</span></Link>
            <div className='flex mx-5'>
                <Link className={twMerge('text-lg mt-1 self-start hover-underline-animation', textColor, textColor === 'text-white' ? 'after:bg-white' : 'after:bg-black')} href={`/${locale}/projekti`}>{dict['link.projects']}</Link>
                <Link className={twMerge('ml-12 mt-1 self-start text-lg hover-underline-animation whitespace-nowrap', textColor, textColor === 'text-white' ? 'after:bg-white' : 'after:bg-black')} href={`/${locale}/o-nas`}>{dict['link.about']}</Link>
            </div>
        </div>
    )
}

export default Nav