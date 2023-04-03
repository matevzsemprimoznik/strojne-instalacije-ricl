import {FC} from "react";
import {twMerge} from "tailwind-merge";

interface PipeJointProps {
    classNameContainer?: string
}
const PipeJoint:FC<PipeJointProps> = ({classNameContainer}) => {
    return <div className={twMerge('h-full w-full bg-[#BEC3C7] relative', classNameContainer)}>
        <div className='h-[60%] w-[80%] absolute bg-[#E3E7E8] right-0'/>
        {/*<div className='h-[80%] w-[60%] absolute bg-gray-400 right-0'/>*/}
    </div>
}
export default PipeJoint