import {twMerge} from "tailwind-merge";

const Arrow = (props: any) => {
    const {className, onClick} = props;
    const disabledClass = className.toString().includes('disabled') ? 'slick-disabled' : ''
    const rotate = props.direction === 'left' ? 'rotate(135deg)' : 'rotate(-45deg)'
    const position = props.direction === 'left' ? 'left-[-14px] lg:left-[-20px]' : 'right-[-14px] lg:right-[-20px]'
    return <div style={{transform: rotate}} onClick={onClick} className={twMerge(disabledClass, position, `arrow before:content-none hidden lg:block`)}></div>
}

export default Arrow