import ProjectsCard from "@/components/ProjectsCard";
import React from "react";
import getProjects from "@/lib/getProjects";
import Nav from "@/components/Nav";
import i18nStore from "@/store/i18n.store";

const Projects = async () => {
    const projects = await getProjects()
    const dict = i18nStore.getState().dictionary

    return (
        <>
            <Nav/>
            <div className='container mx-auto mt-10 sm:mt-20'>
                <h1 className='font-bold text-4xl mb-16'>{dict['projects.title.1']} <span className='text-myBlue'>{dict['projects.title.2']}</span></h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 pb-16'>
                    {projects.map((project, index) => <ProjectsCard classNameContainer='mr-0' key={index} imgSrc={project?.attributes?.images?.data[0]?.attributes?.formats?.medium?.url} title={project.attributes.title}/>)}
                </div>
            </div>
        </>
    )
}

export default Projects;