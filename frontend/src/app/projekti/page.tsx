import ProjectsCard from "@/components/ProjectsCard";

const Projects = () => {
    return (
        <div >
            <h1 className='font-semibold mb-5'>Projekti</h1>
            <div className='flex w-full flex-wrap'>
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
            </div>
        </div>
    )
}

export default Projects;