"use client"

import React from "react";
import CountUp from 'react-countup';


const CounterSection = () => {
    return (
        <>
            <div className='flex items-center w-full flex-col'>
                <h3 className='text-center text-xl font-bold text-custom-blue mb-3 z-10'>Naše delo</h3>
                <h2 className='text-center text-4xl font-bold text tracking-wider z-10'>Kakovostno delo nam <br/> je prineslo</h2>
            </div>
            <div className='flex flex-col justify-center items-center my-16 px-6 md:px-0 md:mx-auto md:w-2/3 lg:w-1/2'>
                <div className='flex flex-col md:flex-row justify-between items-center w-full'>
                    <div className='text-center md:text-left mb-5 md:mb-0'>
                        <p className='font-bold text-5xl text-myBlue'>
                            <CountUp enableScrollSpy end={65} />
                            <span className='text-black'>+</span>
                        </p>
                        <p className='font-bold text-2xl text-myDarkGrey'>zadovoljnih uporabnikov</p>
                    </div>
                    <div className='border-l-4 hidden md:block border-myLightBlue mx-4 h-24'></div>
                    <div className='text-center md:text-left mb-5 md:mb-0'>
                        <p className='font-bold text-5xl text-myBlue'>
                            <CountUp enableScrollSpy end={89} />
                            <span className='text-black'>+</span>
                        </p>
                        <p className='font-bold text-2xl text-myDarkGrey'>uspešnih projektov</p>
                    </div>
                    <div className='border-l-4 hidden md:block border-myLightBlue h-24 mx-4'></div>
                    <div className='text-center md:text-left mb-5 md:mb-0'>
                        <p className='font-bold text-5xl text-myBlue'>
                            <CountUp enableScrollSpy end={8} />
                            <span className='text-black'>+</span>
                        </p>
                        <p className='font-bold text-2xl text-myDarkGrey'>let izkušenj</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterSection