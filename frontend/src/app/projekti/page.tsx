import ProjectsCard from "@/components/ProjectsCard";
import kopalnica from "@/assets/KOPALNICA-1_0.jpg";
import kopalnica2 from "@/assets/wallstoris-mattwhite-pulsify-chrom-grey-bathroom-ambiance-4x3.jpg";
import talnogretje from "@/assets/Talno-gretje-2021-03-22-07-53-24.jpg";
import klima from "@/assets/stenska-klima-cena-prednosti-in-slabosti.jpg";
import React from "react";

const Projects = () => {
    return (
        <>
            <h1 className='font-bold text-4xl mb-16 mx-16'>Naši <span className='text-myBlue'>projekti</span></h1>
            <div className='flex max-w-full  flex-nowrap mx-16'>
                <ProjectsCard imgSrc={kopalnica} title='Kopalnica' />
                <ProjectsCard imgSrc={kopalnica2} title='Kopalnica' />
                <ProjectsCard imgSrc={talnogretje} title='Talno gretje' />
                <ProjectsCard imgSrc={klima} title='Klimatska naprava' />
                <ProjectsCard imgSrc={kopalnica} title='Kopalnica' />
            </div>
        </>
    )
}

export default Projects;