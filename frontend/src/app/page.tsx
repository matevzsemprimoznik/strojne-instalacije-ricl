import React from "react";
import Hero from "@/components/home/Hero";
import getProjects from "@/lib/getProjects";
import getComments from "@/lib/getComments";



import ServicesSection from "@/components/home/ServicesSection";
import ProjectSection from "@/components/home/ProjectSection";
import CommentSection from "@/components/home/CommentSection";

export const revalidate = 60

const Home = async () => {
    const projects = await getProjects()
    const comments = await getComments()

    console.log(projects)

    return (
      <>
          <Hero/>
          {/*<CounterSection/>*/}
          <ProjectSection projects={projects}/>
          <ServicesSection/>
          <CommentSection comments={comments}/>
      </>
  )
}
export default Home
