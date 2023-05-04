import React from "react";
import Nav from "@/components/Nav";
import PrivacyButtons from "@/components/PrivacyButtons";
import {getDictionary} from "@/i18n/get-dictionary";

const Privacy = async () => {
    const locale = 'sl'
    const dict = await getDictionary(locale)

    return (
        <>
            <Nav locale={locale} dict={dict}/>
            <div className='container'>
                <h3 className='font-bold text-3xl my-8'>{dict['privacy.title.1']}</h3>
                <p className="text-lg font-semibold">{dict['privacy.description.1']}</p>
                <h3 className='font-bold text-3xl my-8'>{dict['privacy.title.2']}</h3>
                <p className="text-lg font-semibold">{dict['privacy.description.2']}</p>
                <ul className='list-disc text-lg font-semibold mt-4 ml-6'>
                    <li>Podjetje Strojne inštalacije Ričl</li>
                    <li>Kremberk 47B, Kremberk</li>
                    <li>2233 SV. ANA</li>
                    <li>Slovenija</li>
                </ul>
                <h3 className='font-bold text-3xl my-8'>{dict['privacy.title.3']}</h3>
                <p className="text-lg font-semibold">{dict['privacy.description.3']}</p>
                <h3 className='font-bold text-3xl my-8'>{dict['privacy.title.4']}</h3>
                <p className="text-lg font-semibold">{dict['privacy.description.4']}</p>
                <h3 className='font-bold text-3xl my-8'>{dict['privacy.title.5']}</h3>
                <p className="text-lg font-semibold">{dict['privacy.description.5']}</p>
                <ul className='list-disc text-lg font-semibold mt-4 ml-6'>
                    <li>{dict['privacy.description.5.list.item.1']}</li>
                </ul>
                <h3 className='font-bold text-3xl my-8'>{dict['privacy.title.6']}</h3>
                <p className="text-lg font-semibold">{dict['privacy.description.6']}</p>
                <h3 className='font-bold text-3xl my-8'>{dict['privacy.title.7']}</h3>
                <p className="text-lg font-semibold ">{dict['privacy.description.7']}</p>
                <div className="mt-8 mb-16">
                    <PrivacyButtons dict={dict}/>
                </div>
            </div>
        </>
    )
}

export default Privacy;