import ProjectsCard from "@/components/ProjectsCard";
import React from "react";
import Hero from "@/components/home/Hero";
import getProjects from "@/lib/getProjects";
import getComments from "@/lib/getComments";

export const revalidate = 60

const Home = async () => {
    const projects = await getProjects()
    const comments = await getComments()
    return (
      <>
          <Hero/>
          <h1 className='font-semibold text-xl mb-5'>Projekti</h1>
          <div className='flex w-full flex-wrap'>
              <ProjectsCard />
              <ProjectsCard />
              <ProjectsCard />
          </div>
      </>
  )
}
export default Home
