import React, {FC} from "react";
import {twMerge} from "tailwind-merge";

interface WaterDropProps {
    classNameContainer?: string;
}
const WaterDrop:FC<WaterDropProps> = ({classNameContainer}) => {
    return  <div className={twMerge('absolute -z-10', classNameContainer)}>
        <div className='drop'/>
    </div>
}


export default WaterDrop;