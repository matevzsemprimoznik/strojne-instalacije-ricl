import {FC} from "react";
import PipeJoint from "@/components/PipeJoint";
import {twMerge} from "tailwind-merge";

interface PipeProps {
    classNameContainer?: string
    flipHorizontal?: boolean
}
const Pipe:FC<PipeProps> = ({classNameContainer}) => {
    return <div className={twMerge('w-[380px] h-[250px] flex items-center justify-center', classNameContainer)}>
            <div className={'w-full grid h-[60px] items-center'}>
                <div className='h-[69%] w-full bg-[#617c97] relative border-2 border-[#475b73]'>
                    <div className='absolute h-[50%] bg-[#4a6278] w-full'/>
                </div>
            </div>
        </div>
}

export default Pipe