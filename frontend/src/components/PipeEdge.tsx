import PipeJoint from "@/components/PipeJoint";
import Image from "next/image";
import {FC} from "react";
import {twMerge} from "tailwind-merge";

interface PipeEdgeProps {
    classNameContainer?: string
}
const PipeEdge:FC<PipeEdgeProps> = ({classNameContainer}) => {
    return <div className={twMerge('h-[100px] w-[100px] flex justify-end items-end', classNameContainer)}>
        <div className='relative w-[66px] h-[66px]'>
            <div className='relative grid grid-cols-[1fr_12px] grid-rows-[1fr_12px] items-end justify-end w-full h-full overflow-hidden'>
                <div className="quarter_ring relative overflow-hidden">
                    <div className='circle-animation absolute w-[93px] h-[93px] top-3 left-3 z-10'/>
                </div>
                <div className='w-full h-full flex justify-start'>
                    <PipeJoint classNameContainer='h-8 w-full justify-self-start'/>
                </div>
                <PipeJoint classNameContainer='w-8'/>
            </div>
        </div>
    </div>
}

export default PipeEdge