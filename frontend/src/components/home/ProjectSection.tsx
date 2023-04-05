'use client'
import ProjectsCard from "@/components/ProjectsCard";
import React, {FC} from "react";
import {Project} from "@/types";


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from "@/components/home/Carousel";
import i18nStore from "@/store/i18n.store";

interface ProjectSectionProps {
    projects: Project[]
}
const ProjectSection:FC<ProjectSectionProps> = ({projects= []}) => {
    const dict = i18nStore.getState().dictionary;

    return <div className='relative'>
        <div className='absolute top-64 sm:top-0 right-0 -z-10'>
            <svg width="100%" style={{minWidth: '400px'}} height="1070" viewBox="0 0 836 1070" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M591.052 0.445048C762.518 -6.51101 933.889 68.3681 1033.09 204.477C1126.79 333.033 1101.27 498.702 1066.35 652.548C1030.97 808.366 991.171 987.121 840.855 1051.28C693.61 1114.13 543.151 1004 397.326 938.1C247.309 870.306 55.4808 830.629 10.2947 675.943C-36.2255 516.69 83.7633 365.592 192.98 238.559C298.091 116.3 427.272 7.08928 591.052 0.445048Z" fill="#DEF3FF"/>
            </svg>
        </div>
        <div className='container'>
            <h2 className='font-bold text-4xl mb-16 '>{dict['home.projects.title.1']}<span className='text-custom-blue'>{dict['home.projects.title.2']}</span></h2>
            <div className='max-w-full mb-12' >
                <Carousel>
                    {projects.map((project, index) => <ProjectsCard key={index} imgSrc={project?.attributes?.images?.data[0]?.attributes?.formats?.medium?.url} title={project.attributes.title}/>)}
                </Carousel>
            </div>
        </div>



    </div>
}
export default ProjectSection