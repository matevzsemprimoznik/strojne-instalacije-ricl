"use client"

import React, {FC} from "react";
import CountUp from 'react-countup';
import { dictionaryType} from "@/types";
import type { Counter } from '@prisma/client'

interface CounterSectionProps {
    dict: dictionaryType
    counter: Counter
}
const CounterSection:FC<CounterSectionProps> = ({dict, counter}) => {
    return (
        <>
            <div className='flex items-center w-full flex-col'>
                <h3 className='text-center text-xl font-bold text-custom-blue mb-3 z-10'>{dict['counter.subtitle']}</h3>
                <h2 className='text-center text-4xl font-bold text tracking-wider z-10'>{dict['counter.title.1']}<br/>{dict['counter.title.2']}</h2>
            </div>
            <div className='flex flex-col justify-center items-center mt-16 mb-28 px-6 md:px-0 md:mx-auto md:w-2/3 lg:w-1/2'>
                <div className='flex flex-col md:flex-row justify-between items-center w-full'>
                    <div className='text-center md:text-left mb-5 md:mb-0'>
                        <p className='font-bold text-5xl text-myBlue text-center'>
                            <CountUp enableScrollSpy end={counter.clients} />
                            <span className='text-black'>+</span>
                        </p>
                        <p className='font-bold text-2xl text-myDarkGrey'>{dict['counter.display.1']}</p>
                    </div>
                    <div className='border-l-4 hidden md:block border-custom-light-blue mx-4 h-24'></div>
                    <div className='text-center md:text-left mb-5 md:mb-0'>
                        <p className='font-bold text-5xl text-myBlue text-center'>
                            <CountUp enableScrollSpy end={counter.projects} />
                            <span className='text-black'>+</span>
                        </p>
                        <p className='font-bold text-2xl text-myDarkGrey'>{dict['counter.display.2']}</p>
                    </div>
                    <div className='border-l-4 hidden md:block border-custom-light-blue h-24 mx-4'></div>
                    <div className='text-center md:text-left mb-5 md:mb-0'>
                        <p className='font-bold text-5xl text-myBlue text-center'>
                            <CountUp enableScrollSpy end={counter.experience} />
                            <span className='text-black'>+</span>
                        </p>
                        <p className='font-bold text-2xl text-myDarkGrey'>{dict['counter.display.3']}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterSection