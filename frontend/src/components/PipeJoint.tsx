import {FC} from "react";
import {twMerge} from "tailwind-merge";

interface PipeJointProps {
    classNameContainer?: string
}
const PipeJoint:FC<PipeJointProps> = ({classNameContainer}) => {
    return <div className={twMerge('h-full bg-[#2c3e52] relative', classNameContainer)}>
        <div className='h-[60%] w-[80%] absolute bg-[#3a546b] right-0'/>
        {/*<div className='h-[80%] w-[60%] absolute bg-gray-400 right-0'/>*/}
    </div>
}
export default PipeJoint