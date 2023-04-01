'use client'
import React from "react";
import Pipe from "@/components/Pipe";
import PipeEdge from "@/components/PipeEdge";
import WheelValveHandle from "@/components/WheelValveHandle";
import ContactForm from "@/components/home/ContactForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const ContactUsSection = () => {
    return <div className='w-full px-24 flex mt-52 mb-20'>
        <div className='grid grid-cols-2 shadow-2xl pt-16 pl-12 mb-20 rounded-3xl grow'>
            <div className='flex-col flex'>
                <div className='pl-8'>
                    <div className='flex flex-row items-center'>
                        <div className='w-16 h-16'>
                            <svg fill="#000000" height="100%" width="100%" version="1.1" id="Layer_1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
                                <path id="Mail" d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6
	h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017
	L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003
	L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14
	C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z
	 M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401
	c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981
	l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"/>
                            </svg>
                        </div>
                        <p className='text-4xl text-gray-200 ml-7'>Kontakt</p>
                    </div>
                    <h2 className='font-bold text-4xl mt-8 mb-10'>Pustite nam <span className='text-custom-blue'>sporočilo</span></h2>
                    <p className='text-xl font-semibold'>in mi vam bomo odgovorili v nakrajšen možnem času.
                        Potrudili se bomo, da vam takoj podamo relevanten odgovor
                        na vaše vprašanje zato da čim prej pridete do informacije, ki
                        jo potrebujete. Z veseljem bom del vašega naslednjega projekta, ki se ga boste lotili.</p>
                </div>
                <div className='relative grow'>
                    <PipeEdge classNameContainer='absolute left-0 bottom-0'/>
                    <Pipe classNameContainer='absolute left-[130px] -bottom-[55px]'/>
                    <PipeEdge classNameContainer='absolute left-[490px] bottom-0 rotate-90'/>
                    <WheelValveHandle classNameContainer='absolute bottom-[-10px] left-[320px]'/>
                </div>
            </div>
            <div className='pl-20 pr-10 pb-20 pt-4'>
                <GoogleReCaptchaProvider
                    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    scriptProps={{
                        async: true,
                        defer: false,
                        appendTo: "head",
                        nonce: undefined,
                    }}
                >
                <ContactForm/>
                </GoogleReCaptchaProvider>
            </div>
        </div>
    </div>
}

export default ContactUsSection