import ogrevanjeImg from '../assets/9f15cdb3fd407c2998c4_62668341.jpg';
import Image from 'next/image'


const ProjectsCard = () => {
    return (
        <div className='rounded-2xl w-80 h-96 overflow-hidden shadow-md object-fill	relative mr-5 mb-5'>
            <Image
                src={ogrevanjeImg}
                alt="Picture of the author"
                className='w-full h-full object-cover'
            />
            <h1 className='absolute bottom-1 text-white w-full text-center'>Urejena kopalnica</h1>
        </div>
    )
}

export default ProjectsCard