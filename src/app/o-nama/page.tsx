import React from "react";
import Nav from "@/components/Nav";
import WaterDrop from "@/components/WaterDrop";
import getContact from "@/lib/getContact";
import PipeEdge from "@/components/PipeEdge";
import Pipe from "@/components/Pipe";
import WaterMeter from "@/components/WaterMeter";
import Link from "next/link";
import {getDictionary} from "@/i18n/get-dictionary";

const About = async () => {
    const contact = await getContact()
    const locale = 'hr'
    const dict = await getDictionary(locale)

    return (
        <div className='relative'>
            <Nav dict={dict} locale={locale}/>
            <WaterDrop classNameContainer='top-36 right-44 opacity-50'/>
            <WaterDrop classNameContainer='top-48 right-10 scale-50 opacity-50'/>
            <WaterDrop classNameContainer='top-80 right-24 scale-75 opacity-50' classNameInnerContainer='drop-second'/>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-5 container mx-auto pb-14 lg:pb-28">
                <div className="py-4 flex lg:flex-col flex-col-reverse order-2 lg:order-1">
                    <div className='rounded-2xl mb-20 mt-10 lg:mt-0 bg-custom-light-blue'>
                        <iframe className='rounded-2xl' width="100%" height="400"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kremberk%2047B,%20Kremberk,%202233%20SV.%20ANA%20V%20SLOVENSKIH%20GORICAH+(Strojne%20in%C5%A1talacije%20Ri%C4%8Dl)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between">
                        <div className="mr-10 mb-14 lg:mb-0">
                            <h2 className="text-2xl text-custom-blue font-bold mb-4">DAVORIN RIČL s.p.</h2>
                            <p className="text-lg font-semibold">Kremberk 47B, Kremberk</p>
                            <p className="text-lg font-semibold">2233 SV. ANA</p>
                            <p className="text-lg font-semibold">Slovenija</p>
                        </div>
                        <div className="flex sm:flex-col flex-wrap justify-between mr-0 xl:mr-10">
                            <div className='flex mb-8'>
                                <div className="bg-custom-light-blue rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                                    <svg width="50%" height="50%" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 5.33333C2 4.44928 2.35119 3.60143 2.97631 2.97631C3.60143 2.35119 4.44928 2 5.33333 2H10.8C11.1497 2.00027 11.4904 2.11049 11.7739 2.31508C12.0575 2.51967 12.2695 2.80826 12.38 3.14L14.8767 10.6283C15.0032 11.0089 14.9882 11.4223 14.8345 11.7927C14.6808 12.1632 14.3988 12.4658 14.04 12.645L10.2783 14.5283C12.1222 18.6092 15.3908 21.8778 19.4717 23.7217L21.355 19.96C21.5342 19.6012 21.8368 19.3192 22.2073 19.1655C22.5777 19.0118 22.9911 18.9968 23.3717 19.1233L30.86 21.62C31.192 21.7306 31.4808 21.9429 31.6854 22.2267C31.89 22.5106 32.0001 22.8517 32 23.2017V28.6667C32 29.5507 31.6488 30.3986 31.0237 31.0237C30.3986 31.6488 29.5507 32 28.6667 32H27C13.1933 32 2 20.8067 2 7V5.33333Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className='ml-3 sm:ml-5'>
                                    <h3 className="text-lg font-bold mb-2">{dict['phone']}</h3>
                                    <p className='whitespace-nowrap'><Link href={`tel:${contact.phone}`}>{contact.phone}</Link></p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className="bg-custom-light-blue rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                                    <svg width="50%" height="50%" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 7.14286L15.15 16.16C15.6978 16.5359 16.3415 16.7365 17 16.7365C17.6585 16.7365 18.3022 16.5359 18.85 16.16L32 7.14286M5.33333 26H28.6667C29.5507 26 30.3986 25.6388 31.0237 24.9958C31.6488 24.3528 32 23.4807 32 22.5714V5.42857C32 4.51926 31.6488 3.64719 31.0237 3.00421C30.3986 2.36122 29.5507 2 28.6667 2H5.33333C4.44928 2 3.60143 2.36122 2.97631 3.00421C2.35119 3.64719 2 4.51926 2 5.42857V22.5714C2 23.4807 2.35119 24.3528 2.97631 24.9958C3.60143 25.6388 4.44928 26 5.33333 26Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className='ml-3 sm:ml-5'>
                                    <h3 className="text-lg font-bold mb-2">{dict['email']}</h3>
                                    <p>{contact.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col pb-5 pt-10 order-1 lg:order-2">
                    <h1 className='font-bold text-4xl mb-8'>{dict['about.title.1']}<span className='text-custom-blue'>{dict['about.title.2']}</span></h1>
                    <p className="text-lg mb-4 font-semibold">{dict['about.description.1']}</p>
                    <p className="text-lg font-semibold">{dict['about.description.2']}</p>
                </div>
            </div>

            <div className='hidden lg:block'>
                <Pipe classNameContainer='absolute -z-10 -bottom-[75px] -rotate-90' style={{width: '100px', right: 'calc(28% + 21px)'}}/>
                <PipeEdge classNameContainer='absolute right-[28%] bottom-[100px]'/>
                <Pipe classNameContainer='absolute -z-10 right-[0px] bottom-[45px]' style={{width: '28%'}}/>
                <WaterMeter classNameContainer='bottom-[140px] right-[14%] z-20'/>
            </div>
        </div>
    )
}

export default About;