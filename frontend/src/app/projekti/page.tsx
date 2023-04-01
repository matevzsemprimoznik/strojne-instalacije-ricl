import ProjectsCard from "@/components/ProjectsCard";
import React from "react";
import getProjects from "@/lib/getProjects";

const Projects = async () => {
    const projects = await getProjects()

    return (
        <>
            <h1 className='font-bold text-4xl mb-16 mx-16'>Naši <span className='text-myBlue'>projekti</span></h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 mx-16 pb-16'>
                {projects.map((project, index) => <ProjectsCard key={index} imgSrc={project?.attributes?.images?.data[0]?.attributes?.formats?.medium?.url} title={project.attributes.title}/>)}
            </div>
        </>
    )
}

export default Projects;