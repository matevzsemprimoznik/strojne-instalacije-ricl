"use client"

import React, {FC} from "react";
import CountUp from 'react-countup';
import {dictionaryType} from "@/types";

interface CounterSectionProps {
    dict: dictionaryType
}
const CounterSection:FC<CounterSectionProps> = ({dict}) => {
    return (
        <div className='flex flex-col justify-center items-center -mt-12 my-16 px-6 md:px-0 md:mx-auto md:w-2/3 lg:w-1/2'>
            <div className='flex flex-col md:flex-row justify-between items-center w-full'>
                <div className='text-center md:text-left mb-5 md:mb-0'>
                    <p className='font-bold text-5xl text-myBlue'>
                        <CountUp end={65} />
                        <span className='text-black'>+</span>
                    </p>
                    <p className='font-bold text-2xl text-myDarkGrey'>{dict['counter.display.1']}</p>
                </div>
                <div className='border-l-4 hidden md:block border-myLightBlue mx-4 h-24'></div>
                <div className='text-center md:text-left mb-5 md:mb-0'>
                    <p className='font-bold text-5xl text-myBlue'>
                        <CountUp end={89} />
                        <span className='text-black'>+</span>
                    </p>
                    <p className='font-bold text-2xl text-myDarkGrey'>{dict['counter.display.2']}</p>
                </div>
                <div className='border-l-4 hidden md:block border-myLightBlue h-24 mx-4'></div>
                <div className='text-center md:text-left mb-5 md:mb-0'>
                    <p className='font-bold text-5xl text-myBlue'>
                        <CountUp end={8} />
                        <span className='text-black'>+</span>
                    </p>
                    <p className='font-bold text-2xl text-myDarkGrey'>{dict['counter.display.3']}</p>
                </div>
            </div>
        </div>
    )
}

export default CounterSection