import {FC} from "react";
import PipeJoint from "@/components/PipeJoint";
import {twMerge} from "tailwind-merge";

interface PipeProps {
    classNameContainer?: string
    flipHorizontal?: boolean
}
const Pipe:FC<PipeProps> = ({classNameContainer, flipHorizontal = false}) => {
    return <div className={twMerge('w-[250px] h-[250px] flex items-center justify-center', classNameContainer)}>
            <div className={'w-full grid h-8 items-center' + (flipHorizontal ? ' grid-cols-[12px_1fr]' : ' grid-cols-[1fr_12px]')}>
                {flipHorizontal && <PipeJoint/>}
                <div className='h-[60%] w-full bg-gray-600 relative'>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="bg-[#3FB7F1FF] w-full h-[80%] relative overflow-hidden">
                                <div className="wave"></div>
                                <div className="wave"></div>
                            </div>
                        </div>
                </div>
                {!flipHorizontal && <PipeJoint/>}
            </div>
        </div>
}

export default Pipe