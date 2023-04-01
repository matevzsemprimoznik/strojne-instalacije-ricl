import PipeJoint from "@/components/PipeJoint";
import Image from "next/image";
import {FC} from "react";
import {twMerge} from "tailwind-merge";

interface PipeEdgeProps {
    classNameContainer?: string
}
const PipeEdge:FC<PipeEdgeProps> = ({classNameContainer}) => {
    return <div className={twMerge('h-[130px] w-[130px] flex justify-end items-end', classNameContainer)}>
        <div className='relative w-[100px] h-[100px]'>
            <div className='relative grid grid-cols-[1fr_24px] grid-rows-[1fr_24px] items-end justify-end w-full h-full overflow-hidden'>
                <div className="quarter_ring relative overflow-hidden"></div>
                <div className='w-full h-full flex justify-start'>
                    <PipeJoint classNameContainer='justify-self-start h-[60px]'/>
                </div>
                <PipeJoint classNameContainer='w-[60px]'/>
            </div>
        </div>
    </div>
}

export default PipeEdge