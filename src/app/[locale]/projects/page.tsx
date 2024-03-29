import ProjectsCard from "@/components/ProjectsCard";
import React from "react";
import getProjects from "@/lib/getProjects";
import Nav from "@/components/Nav";
import {getDictionary} from "@/i18n/get-dictionary";
import {BasicPageProps} from "@/types";

const Projects = async ({params: {locale}}: BasicPageProps) => {
    const projects = await getProjects(locale)
    const dict = await getDictionary(locale)

    return (
        <>
            <Nav dict={dict} locale={locale}/>
            <div className='container mx-auto mt-10 sm:mt-20'>
                <h1 className='font-bold text-4xl mb-16'>{dict['projects.title.1']} <span
                    className='text-myBlue'>{dict['projects.title.2']}</span></h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 pb-16'>
                    {projects.map((project, index) => <ProjectsCard classNameContainer='mr-0' key={index}
                                                                    imgSrc={project.image}
                                                                    title={project.description}/>)}
                </div>
            </div>
        </>
    )
}

export default Projects;