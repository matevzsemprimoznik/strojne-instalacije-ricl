import React from "react";

const CounterCard = () => {
    return (
        <div className='bg-myGrey w-1/2 h-36 rounded-r-3xl flex justify-around items-center -mt-32 my-16'>
            <div>
                <p className='font-bold text-5xl text-myBlue'>65<span className='text-white'>+</span></p>
                <p className='font-bold text-2xl text-myDarkGrey'>zadovoljnih uporabnikov</p>
            </div>
            <div className="border-l-4 border-white h-24 mx-4"></div>
            <div>
                <p className='font-bold text-5xl text-myBlue'>89<span className='text-white'>+</span></p>
                <p className='font-bold text-2xl text-myDarkGrey'>uspešnih projektov</p>
            </div>
        </div>
    )
}

export default CounterCard