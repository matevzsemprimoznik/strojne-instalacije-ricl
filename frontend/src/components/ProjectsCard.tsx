import { FC } from 'react';
import Image, {StaticImageData} from 'next/image'

type ProjectsCardProps = {
    imgSrc: StaticImageData;
    title: string;
};

const ProjectsCard: FC<ProjectsCardProps> = ({ imgSrc, title }) => {
    return (
        <div className='rounded-xl w-96 h-96 overflow-hidden shadow-md object-fill	relative mr-12 mb-5'>
            <Image
                src={imgSrc}
                alt={title}
                className='w-full h-full object-cover'
            />
            <div className='absolute rounded-xl bottom-5 bg-myLightBlue p-3 left-0 right-0 mx-auto w-4/6'><h1 className='font-bold text-black text-sm w-full text-center'>{title}</h1></div>

        </div>
    )
}

export default ProjectsCard