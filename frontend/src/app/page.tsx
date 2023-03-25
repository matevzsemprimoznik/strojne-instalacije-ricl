import ProjectsCard from "@/components/ProjectsCard";
import React from "react";
import Pipes from "@/components/Pipes";
import Hero from "@/components/home/Hero";

const Home = () => {
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
