import {twMerge} from "tailwind-merge";

const Arrow = (props: any) => {
    const {className, style, onClick} = props;
    const rotate = props.direction === 'left' ? 'rotate(135deg)' : 'rotate(-45deg)'
    return <div style={{...style, transform: rotate}} onClick={onClick} className={twMerge(className, `arrow before:content-none`)}></div>
}

export default Arrow