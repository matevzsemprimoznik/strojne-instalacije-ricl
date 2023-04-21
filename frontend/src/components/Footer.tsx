import Link from "next/link";
import React, {FC} from "react";
import i18nStore from "@/store/i18n.store";
import {Contact} from "@/types";

interface FooterProps {
    contact: Contact
}

const Footer:FC<FooterProps> = ({contact}) => {
    const dict = i18nStore.getState().dictionary
    const locale = i18nStore.getState().locale

    return (
        <footer className='flex relative'>
            <div className='absolute w-full h-full -z-10'>
                <svg preserveAspectRatio='none' width="100%" height="100%" viewBox="0 0 1728 311" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect width="1728" height="311" fill="url(#paint0_linear_70_91)"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M667 205.844V164.819C668.525 154.202 671.308 143.989 675.411 134.337C699.848 76.8657 768.01 45.8205 846.285 37.1874C923.011 28.7252 1011.96 44.5962 1089.77 88.6368C1163.54 130.387 1214.19 195.447 1239.7 259.861C1246.86 277.94 1248.98 294.814 1247.97 310.975H711.513C686.98 276.972 671.54 240.447 667 205.844Z"
                          fill="#2F92FE" fillOpacity="0.84"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M1726.42 113.557V311H1022C1038.44 249.727 1097.63 193.311 1175.1 149.506C1268.93 96.4419 1394.67 63.579 1524.57 68.4824C1598.41 71.2696 1667.02 88.132 1726.42 113.557Z"
                          fill="#47B7FE" fillOpacity="0.51"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M1295.78 311H810.47C864.483 267.117 922.83 236.229 978.238 218.439C1044.4 197.198 1090.43 222.79 1137.08 248.721C1146.82 254.139 1156.6 259.572 1166.58 264.596C1184.4 273.556 1205.77 279.652 1227.25 285.779C1251.63 292.734 1276.15 299.73 1295.78 311Z"
                          fill="#418BFF" fillOpacity="0.79"/>
                    <defs>
                        <linearGradient id="paint0_linear_70_91" x1="-1.98717e-07" y1="156" x2="1728" y2="146"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2860FE"/>
                            <stop offset="1" stopColor="#2EB3FF"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className='w-full pt-10 pb-4'>
                <div className='flex items-center w-full'>
                    <div className='w-auto sm:w-full h-full flex flex-col sm:flex-row justify-between container m-auto'>
                        <div>
                            <h3 className='text-white text-2xl font-bold mb-4'>{dict['footer.title.1']}</h3>
                            <p className='text-white text-xl'>DAVORIN RIČL s.p.</p>
                            <p className='text-white text-xl'>Kremberk 47B, Kremberk</p>
                            <p className='text-white text-xl'> 2233 SV. ANA</p>
                            <p className='text-white text-xl'>Slovenija</p>
                        </div>
                        <div className='my-10 sm:my-0'>
                            <h3 className='text-white text-2xl font-bold mb-4'>{dict['footer.title.2']}</h3>
                            <p className='text-white text-xl'><Link href={`tel:${contact.attributes.telefon}`}>{contact.attributes.telefon}</Link></p>
                            <p className='text-white text-xl'>{contact.attributes.mail}</p>
                        </div>
                        <div>
                            <h3 className='text-white text-2xl font-bold mb-4'>{dict['footer.title.3']}</h3>
                            <p><Link className='text-white text-xl hover-underline-animation after:bottom-0' href={`/${locale}/projekti`}>{dict['link.projects']}</Link></p>
                            <p><Link className='text-white text-xl hover-underline-animation after:bottom-0' href={`/${locale}/o-nas`}>{dict['link.about']}</Link></p>
                        </div>
                    </div>
                </div>
                <div className='flex w-full items-center justify-center mt-4'>
                    <Link className='text-white' href='/'>Slovensko</Link>
                    <Link className='text-white mx-5' href='/de'>Deutsch</Link>
                    <Link className='text-white' href='/hr'>Hrvatsko</Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer