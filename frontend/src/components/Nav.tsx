import Link from "next/link";
import {FC} from "react";
import {twMerge} from "tailwind-merge";

interface NavProps {
    textColor?: 'text-black' | 'text-white'
}
const Nav:FC<NavProps> = ({textColor='text-black'}) => {
    return (
        <div className='flex py-8 container m-auto justify-between'>
            <Link className={twMerge('text-3xl font-bold', textColor)} href="/">Strojne inštalacije <span className='text-myBlue'>Ričl</span></Link>
            <div className='flex mx-5'>
                <Link className={twMerge('text-lg mt-1 self-start hover-underline-animation', textColor)} href="/projekti">Projekti</Link>
                <Link className={twMerge('ml-12 mt-1 self-start text-lg hover-underline-animation whitespace-nowrap', textColor)} href="/o-nas">O nas</Link>
            </div>
        </div>
    )
}

export default Nav