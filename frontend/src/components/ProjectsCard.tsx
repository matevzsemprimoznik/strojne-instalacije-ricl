import { FC } from 'react';
import Image, {StaticImageData} from 'next/image'

type ProjectsCardProps = {
    imgSrc: string;
    title: string;
};

const ProjectsCard: FC<ProjectsCardProps> = ({ imgSrc, title }) => {
    return (
        <div className='rounded-xl relative mr-5 h-96 overflow-hidden shadow-md object-fill'>
            <Image
                src={imgSrc}
                alt={title}
                className='w-full h-full object-cover'
                fill
            />
            <div className='absolute rounded-xl bottom-5 bg-myLightBlue p-3 left-0 right-0 mx-auto w-4/6'><h1 className='font-bold text-black text-sm w-full text-center'>{title}</h1></div>

        </div>
    )
}

export default ProjectsCard