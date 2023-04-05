'use client'

import i18nStore from "@/store/i18n.store";

const HeroButton = () => {
    const dict = i18nStore.getState().dictionary;
    const onClick = () => {
        const element = document.getElementById('contact-us');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth',block: 'center' });
        }
    }
    return <button onClick={onClick} className='bg-white text- text-lg font-bold px-10 py-4 rounded-3xl mt-14'>{dict['hero.button']}</button>
}
export default HeroButton;