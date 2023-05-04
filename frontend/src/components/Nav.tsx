import Link from "next/link";
import {FC} from "react";
import {twMerge} from "tailwind-merge";
import {dictionaryType, localeType} from "@/types";

interface NavProps {
    textColor?: 'text-black' | 'text-white'
    dict: dictionaryType
    locale: localeType
}
const Nav:FC<NavProps> = ({textColor='text-black', locale, dict}) => {
    return (
        <div className='flex py-8 container m-auto justify-between'>
            <Link className={twMerge('text-3xl font-bold', textColor)} href={dict['link.home.value']}>Strojne inštalacije <span className='text-myBlue'>Ričl</span></Link>
            <div className='flex mx-5'>
                <Link className={twMerge('text-lg mt-1 self-start hover-underline-animation', textColor, textColor === 'text-white' ? 'after:bg-white' : 'after:bg-black')} href={dict['link.projects.value']}>{dict['link.projects']}</Link>
                <Link className={twMerge('ml-12 mt-1 self-start text-lg hover-underline-animation whitespace-nowrap', textColor, textColor === 'text-white' ? 'after:bg-white' : 'after:bg-black')} href={dict['link.about.value']}>{dict['link.about']}</Link>
            </div>
        </div>
    )
}

export default Nav