'use client';

import {FC, useEffect, useState} from "react";
import {getLocalStorage, setLocalStorage} from "@/utils/storageHelper";
import {dictionaryType, localeType} from "@/types";
import Link from "next/link";

enum CookieConsent {
    GRANTED = 'granted',
    DENIED = 'denied',
    LOADING = 'loading',
    NULL = 'null'
}
interface CookieBannerProps {
    dict: dictionaryType
    locale: localeType
}
const CookieBanner:FC<CookieBannerProps> = ({dict, locale}) => {
    const [cookieConsent, setCookieConsent] = useState<CookieConsent>(CookieConsent.LOADING);

    useEffect (() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", 'null')
        setCookieConsent(storedCookieConsent)
    }, [])


    useEffect(() => {
        const newValue = cookieConsent === CookieConsent.GRANTED ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });
        if(cookieConsent !== CookieConsent.LOADING && cookieConsent !== CookieConsent.NULL)
            setLocalStorage("cookie_consent", cookieConsent)

    }, [cookieConsent]);
    return (
        <div className={`my-10 mx-auto w-11/12 xs:w-8/12 sm:w-[500px]
                        fixed bottom-0 left-0 right-0
                        flex px-3 md:px-4 py-3 justify-between items-center flex-row gap-4  
                        bg-white rounded-lg shadow-lg z-50 ${cookieConsent == CookieConsent.NULL ? "flex" : "hidden"}`}>

            <div className='text-center'>
                <p className='text-sm'>{dict["cookie-banner.1"]}<Link className='text-custom-blue underline' href={dict['link.privacy.value']}>{dict["cookie-banner.2"]}</Link></p>
            </div>


            <div className='flex gap-2'>
                <button className='px-5 py-2 text-gray-300 rounded-md border-gray-900' onClick={() => setCookieConsent(CookieConsent.DENIED)}>{dict['refuse']}</button>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => setCookieConsent(CookieConsent.GRANTED)}>{dict['allow']}</button>
            </div>
        </div>
    )}
export default CookieBanner;