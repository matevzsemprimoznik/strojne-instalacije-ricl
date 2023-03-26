import {FC} from "react";
import {twMerge} from "tailwind-merge";

interface ValveHandleProps {
    classNameContainer?: string
}
const ValveHandle:FC<ValveHandleProps> = ({classNameContainer}) => {
    return <div className={twMerge('w-[20px] h-6 absolute bg-[#2c3e52]', classNameContainer)}>
        <div className='relative w-full h-full valve-handle-animation'>
            <div className='w-12 h-2 rounded-sm bg-[#f54e69] my-auto absolute top-1/2 -translate-y-1/2 -left-1'/>
            <div className='w-2 h-2 rounded-sm bg-[#cc3e55] my-auto absolute top-1/2 -translate-y-1/2 left-5'/>
            <div className='w-3 h-3 rounded-full bg-[#f54e69] my-auto absolute top-1/2 -translate-y-1/2 left-1'/>
            <div className='w-1 h-1 rounded-full bg-white my-auto absolute top-1/2 -translate-y-1/2 left-2'/>
        </div>
    </div>
}

export default ValveHandle