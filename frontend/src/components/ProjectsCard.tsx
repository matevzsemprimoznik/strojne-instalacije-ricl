"use client"
import {FC, useState} from 'react';
import Image, {StaticImageData} from 'next/image'
import classNames from 'classnames';
import {twMerge} from "tailwind-merge";

type ProjectsCardProps = {
    imgSrc: string;
    title: string;
    classNameContainer?: string;
};

const ProjectsCard: FC<ProjectsCardProps> = ({ imgSrc, title, classNameContainer }) => {
    const [isHovered, setIsHovered] = useState(false);

    const overlayClasses = classNames('absolute bg-myLightBlue bottom-0 left-0 right-0 top-auto transition-all duration-500', {
        'h-full': isHovered,
        'h-0': !isHovered,
    });

    return (
        <div
            className={twMerge('relative mr-5 h-96 rounded-xl overflow-hidden shadow-md object-fill', classNameContainer)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image src={imgSrc} alt={title} layout='fill' objectFit='cover' />
            <div className={overlayClasses}>
                <div className='flex items-center justify-center h-full'>
                    <h1 className={classNames('w-full', 'mx-auto', 'p-3', 'text-center', 'rounded-xl', 'font-bold', 'text-black', 'text-sm', { 'invisible': !isHovered })}>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard