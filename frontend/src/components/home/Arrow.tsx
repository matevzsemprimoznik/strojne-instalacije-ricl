import {twMerge} from "tailwind-merge";

const Arrow = (props: any) => {
    const {className, style, onClick} = props;
    const rotate = props.direction === 'left' ? 'rotate(135deg)' : 'rotate(-45deg)'
    const position = props.direction === 'left' ? 'left-[-14px] lg:left-[-20px]' : 'right-[-14px] lg:right-[-20px]'
    return <div style={{transform: rotate}} onClick={onClick} className={twMerge(className, position, `arrow before:content-none hidden sm:block`)}></div>
}

export default Arrow