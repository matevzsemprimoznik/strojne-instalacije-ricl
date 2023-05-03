'use client'
import React, {FC} from "react";
import {setLocalStorage} from "@/utils/storageHelper";


const PrivacyButtons:FC = () => {

    const denieCookies = () => {
        setLocalStorage("cookie_consent", 'denied')
    }

    const allowCookies = () => {
        setLocalStorage("cookie_consent", 'granted')
    }

    return (
        <>
            <button className='bg-custom-blue px-5 py-2 text-white rounded-lg mr-6' onClick={() => allowCookies()}>Dovoli</button>
            <button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => denieCookies()}>Zavrni</button>
        </>
    )
}

export default PrivacyButtons