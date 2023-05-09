'use client'
import React, {CSSProperties, FC} from "react";
import {twMerge} from "tailwind-merge";
import WheelValveHandle from "@/components/WheelValveHandle";

interface PipeProps {
    classNameContainer?: string
    flipHorizontal?: boolean
    style?: CSSProperties,
    showWheelValveHande?: boolean
}

const Pipe: FC<PipeProps> = ({classNameContainer, style, showWheelValveHande}) => {
    return <div className={twMerge('h-[250px] relative flex items-center justify-center w-[]', classNameContainer)} style={style}>
        <div className={'w-full grid h-[60px] items-center'}>
            <div className='h-[69%] w-full bg-[#BEC3C7] relative'>
                <div className='absolute h-[50%] bg-[#E3E7E8] w-full'/>
            </div>
        </div>
        {showWheelValveHande && <WheelValveHandle classNameContainer='absolute top-1/2 left-1/2'/>}

    </div>
}

export default Pipe