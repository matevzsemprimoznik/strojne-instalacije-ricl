import {FC} from "react";
import {twMerge} from "tailwind-merge";

interface WaterMeterProps {
    classNameContainer?: string
}
const WaterMeter:FC<WaterMeterProps> = ({classNameContainer}) => {
    return <div className={twMerge('absolute rounded-full w-16 h-16 border-[7px] border-yellow-400  bg-gradient-to-br from-white to-[#f2f2f2]', classNameContainer)}>
        <div className='water-meter-animation w-full h-full relative'>
            <div className='w-2 h-2 rounded-full bg-yellow-400 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'/>
            <div className='w-6 h-6 rounded-full bg-transparent absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center'>
                <div className='h-6 w-[6px] rounded-sm bg-[#2c3e52] mt-[-4px]'></div>
            </div>
            <div className='w-2 h-2 rounded-full bg-yellow-400 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'/>
        </div>
    </div>
}

export default WaterMeter