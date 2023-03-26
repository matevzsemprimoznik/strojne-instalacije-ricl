import {FC} from "react";
import {twMerge} from "tailwind-merge";

interface WheelValveHandleProps {
    classNameContainer?: string
}
const WheelValveHandle:FC<WheelValveHandleProps> = ({classNameContainer}) => {
    return <div className={twMerge('w-14 h-14', classNameContainer)}>
        <div className='animate-spin rounded-full border-[7px] border-[#f54e69] w-full h-full flex items-center justify-center relative'>
            <div className='w-full h-1.5 bg-[#cc3e55] absolute'/>
            <div className='w-full h-1.5 bg-[#cc3e55] rotate-90 absolute z-0'/>
            <div className='w-full h-1.5 bg-[#cc3e55] rotate-45 absolute z-0'/>
            <div className='w-full h-1.5 bg-[#cc3e55] -rotate-45 absolute z-0'/>
            <div className='rounded-full border-8 border-[#f54e69] w-7 h-7 relative'>
                <div className='rounded-full bg-[#cc3e55] w-2 h-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            </div>
        </div>
    </div>
}

export default WheelValveHandle