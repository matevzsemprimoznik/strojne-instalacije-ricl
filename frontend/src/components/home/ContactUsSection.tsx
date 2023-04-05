'use client'
import React, {FC} from "react";
import Pipe from "@/components/Pipe";
import PipeEdge from "@/components/PipeEdge";
import ContactForm from "@/components/home/ContactForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import {Contact} from "@/types";

interface ContactUsSectionProps {
    contact: Contact
}

const ContactUsSection:FC<ContactUsSectionProps> = ({ contact}) => {
    return <div className='w-full container flex mt-32 sm:mt-44 -mb-14 sm:mb-20' id='contact-us'>
        <div className='grid grid-cols-1 lg:grid-cols-2 shadow-lg shadow-custom-light-blue-shadow mb-14 rounded-3xl grow bg-white'>
            <div className='flex-col flex pt-8 md:pt-16 md:pl-12 pr-8 md:pr-20 lg:pr-0'>
                <div className='pl-8'>
                    <h2 className='font-bold text-4xl mt-8 mb-10'><span className='text-custom-blue'>Kontaktirajte</span> nas</h2>
                    <p className='text-xl font-semibold'>Če imate kakršnakoli vprašanja ali bi radi izvedeli več o naših storitvah, nam lahko pošljete povpraševanje preko obrazca.
                        <br/><br/>Veselimo se vašega sporočila in vam bomo z veseljem odgovorili v najkrajšem možnem času. Prav tako pa nas lahko kontaktirate preko spodaj napisane telefonske številke ali elektronskega naslova. Že vnaprej se zahvaljujemo za vaše zanimanje!</p>
                    <div className="flex flex-row justify-between mt-14 mb-0 lg:mb-32">
                        <div className='flex mb-8'>
                            <div className="bg-custom-light-blue rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                                <svg width="50%" height="50%" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5.33333C2 4.44928 2.35119 3.60143 2.97631 2.97631C3.60143 2.35119 4.44928 2 5.33333 2H10.8C11.1497 2.00027 11.4904 2.11049 11.7739 2.31508C12.0575 2.51967 12.2695 2.80826 12.38 3.14L14.8767 10.6283C15.0032 11.0089 14.9882 11.4223 14.8345 11.7927C14.6808 12.1632 14.3988 12.4658 14.04 12.645L10.2783 14.5283C12.1222 18.6092 15.3908 21.8778 19.4717 23.7217L21.355 19.96C21.5342 19.6012 21.8368 19.3192 22.2073 19.1655C22.5777 19.0118 22.9911 18.9968 23.3717 19.1233L30.86 21.62C31.192 21.7306 31.4808 21.9429 31.6854 22.2267C31.89 22.5106 32.0001 22.8517 32 23.2017V28.6667C32 29.5507 31.6488 30.3986 31.0237 31.0237C30.3986 31.6488 29.5507 32 28.6667 32H27C13.1933 32 2 20.8067 2 7V5.33333Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='ml-3 sm:ml-5'>
                                <h3 className="text-lg font-bold mb-2">Telefon</h3>
                                <p className='whitespace-nowrap'>{contact.attributes.telefon}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="bg-custom-light-blue rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                                <svg width="50%" height="50%" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 7.14286L15.15 16.16C15.6978 16.5359 16.3415 16.7365 17 16.7365C17.6585 16.7365 18.3022 16.5359 18.85 16.16L32 7.14286M5.33333 26H28.6667C29.5507 26 30.3986 25.6388 31.0237 24.9958C31.6488 24.3528 32 23.4807 32 22.5714V5.42857C32 4.51926 31.6488 3.64719 31.0237 3.00421C30.3986 2.36122 29.5507 2 28.6667 2H5.33333C4.44928 2 3.60143 2.36122 2.97631 3.00421C2.35119 3.64719 2 4.51926 2 5.42857V22.5714C2 23.4807 2.35119 24.3528 2.97631 24.9958C3.60143 25.6388 4.44928 26 5.33333 26Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='ml-3 sm:ml-5'>
                                <h3 className="text-lg font-bold mb-2">Email</h3>
                                <p>{contact.attributes.mail}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block relative grow'>
                    <PipeEdge classNameContainer='absolute left-0 bottom-0'/>
                    <Pipe classNameContainer='absolute left-[130px] -bottom-[55px]' style={{width: 'calc(100% - 140px)'}}/>
                    <PipeEdge classNameContainer='absolute -right-[100px] bottom-0 rotate-90'/>
                </div>
            </div>
            <div className='pl-8 md:pl-20 pb-20 pt-8 lg:pt-24 pr-8 md:pr-20'>
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
            <div className='lg:hidden relative h-24 scale-75 sm:scale-100 origin-[0_bottom] w-[133%] sm:w-full'>
                <PipeEdge classNameContainer='absolute left-[0px] bottom-0'/>
                <Pipe classNameContainer='absolute -z-10 left-[130px] -bottom-[55px]' style={{width: 'calc(100% - 250px)'}}/>
                <PipeEdge classNameContainer='absolute right-[0px] bottom-0 rotate-90'/>
            </div>
        </div>
    </div>
}

export default ContactUsSection