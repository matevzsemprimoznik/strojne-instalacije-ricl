import Image from "next/image";
import ServicesSectionImage from '../../assets/services-section-image.png'

const ServicesSection = () => {
    return <div className='container m-auto pt-20'>
        <div className='flex items-center w-full flex-col'>
            <h3 className='text-center text-xl font-bold text-custom-blue mb-3 z-10'>Naše storitve</h3>
            <h2 className='text-center text-4xl font-bold text tracking-wider z-10'>Nudimo različne vrste <br/> storitev za vas</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-24 mb-20 pt-10 md:pt-32 px-8 sm:px-20 relative'>
            <div className='md:ml-14 w-72 text-center bg-white leading-[70px] h-20 border-4 border-custom-light-blue hover:border-custom-blue transition duration-500 text-custom-blue text-lg font-bold rounded-3xl'>Toplotne črpalke</div>
            <div className='md:mr-14 justify-self-end bg-white w-72 text-center leading-[70px] h-20 border-4 border-custom-light-blue hover:border-custom-blue transition duration-500 text-lg text-custom-blue font-bold rounded-3xl'>Klimatske naprave</div>
            <div className='w-72 text-center bg-white leading-[70px] h-20 border-4 border-custom-light-blue text-custom-blue hover:border-custom-blue transition duration-500 text-lg font-bold rounded-3xl'>Kopalnice</div>
            <div className='w-72 justify-self-end bg-white text-center leading-[70px] h-20 border-4 border-custom-light-blue hover:border-custom-blue transition duration-500 text-custom-blue text-lg font-bold rounded-3xl'>Polaganje cevi</div>
            <div className='md:ml-14 w-72 text-center bg-white leading-[70px] h-20 border-4 border-custom-light-blue text-custom-blue hover:border-custom-blue transition duration-500 text-lg font-bold rounded-3xl'>Talno gretje</div>
            <div className='md:mr-14 justify-self-end bg-white w-72 text-center leading-[70px] h-20 border-4 border-custom-light-blue hover:border-custom-blue transition duration-500 text-custom-blue text-lg font-bold rounded-3xl'>Toplotne črpalke</div>

            <Image src={ServicesSectionImage} alt='services-section-image' style={{minWidth: '500px', width: '400px', zIndex: -1}} className='opacity-40 lg:opacity-100 absolute top-2/3 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10'/>
        </div>
    </div>
}

export default ServicesSection