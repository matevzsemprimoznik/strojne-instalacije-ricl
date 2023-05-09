'use client'
import React, {FC} from "react";
import {setLocalStorage} from "@/utils/storageHelper";
import {dictionaryType} from "@/types";

interface PrivacyButtonsProps {
    dict: dictionaryType
}
const PrivacyButtons:FC<PrivacyButtonsProps> = ({dict}) => {

    const denieCookies = () => {
        setLocalStorage("cookie_consent", 'denied')
    }

    const allowCookies = () => {
        setLocalStorage("cookie_consent", 'granted')
    }

    return (
        <>
            <button className='bg-custom-blue px-5 py-2 text-white rounded-lg mr-6' onClick={() => allowCookies()}>{dict['allow']}</button>
            <button className='border-custom-blue text-custom-blue  border-2 px-5 py-2  rounded-lg' onClick={() => denieCookies()}>{dict['refuse']}</button>
        </>
    )
}

export default PrivacyButtons