'use client';

import {useEffect, useState} from "react";
import {getLocalStorage, setLocalStorage} from "@/utils/storageHelper";

enum CookieConsent {
    GRANTED = 'granted',
    DENIED = 'denied',
    LOADING = 'loading',
    NULL = 'null'
}
export default function CookieBanner(){
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
        <div className={`my-10 mx-auto w-10/12 md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                        bg-white rounded-lg shadow-lg z-50 ${cookieConsent == CookieConsent.NULL ? "flex" : "hidden"}`}>

            <div className='text-center'>
                <p className='text-sm'>Ta stran uporablja piškotke za spremljanje prometa in analizo vašega obiskovanja spletne strani, z namenom izboljšanja uporabniške izkušnje.</p>
            </div>


            <div className='flex gap-2'>
                <button className='px-5 py-2 text-gray-300 rounded-md border-gray-900' onClick={() => setCookieConsent(CookieConsent.DENIED)}>Zavrni</button>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => setCookieConsent(CookieConsent.GRANTED)}>Dovoli</button>
            </div>
        </div>
    )}