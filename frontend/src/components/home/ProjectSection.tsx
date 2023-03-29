import ProjectsCard from "@/components/ProjectsCard";
import kopalnica from "@/assets/KOPALNICA-1_0.jpg";
import kopalnica2 from "@/assets/wallstoris-mattwhite-pulsify-chrom-grey-bathroom-ambiance-4x3.jpg";
import talnogretje from "@/assets/Talno-gretje-2021-03-22-07-53-24.jpg";
import klima from "@/assets/stenska-klima-cena-prednosti-in-slabosti.jpg";
import React, {FC} from "react";
import {Project} from "@/types";

interface ProjectSectionProps {
    projects: Project[]
}
const ProjectSection:FC<ProjectSectionProps> = ({projects}) => {
    return <div>
        <h1 className='font-bold text-4xl mb-16 mx-32'>Naši <span className='text-custom-blue'>projekti</span></h1>
        <div className='flex max-w-full flex-nowrap mx-32 mb-12'>
            {projects.map((project, index) => <ProjectsCard key={index} imgSrc={kopalnica} title={project.attributes.title}/>)}
        </div>
    </div>
}
export default ProjectSection