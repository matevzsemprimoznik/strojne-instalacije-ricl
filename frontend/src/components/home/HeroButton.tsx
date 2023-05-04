'use client'

import {dictionaryType} from "@/types";

interface HeroButtonProps {
    dict: dictionaryType
}
const HeroButton = ({dict}: HeroButtonProps) => {
    const onClick = () => {
        const element = document.getElementById('contact-us');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth',block: 'center' });
        }
    }
    return <button onClick={onClick} className='bg-white text- text-lg font-bold px-10 py-4 rounded-3xl mt-14'>{dict['hero.button']}</button>
}
export default HeroButton;