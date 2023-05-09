import React, {FC} from "react";
import {twMerge} from "tailwind-merge";

interface WaterDropProps {
    classNameContainer?: string;
    classNameInnerContainer?: string;
}
const WaterDrop:FC<WaterDropProps> = ({classNameContainer, classNameInnerContainer}) => {
    return  <div className={twMerge('absolute -z-10', classNameContainer)}>
        <div className={twMerge('drop', classNameInnerContainer)}/>
    </div>
}


export default WaterDrop;