import React from "react";
import Hero from "@/components/home/Hero";
import getProjects from "@/lib/getProjects";
import getComments from "@/lib/getComments";



import ServicesSection from "@/components/home/ServicesSection";
import ProjectSection from "@/components/home/ProjectSection";
import CommentSection from "@/components/home/CommentSection";
import ContactUsSection from "@/components/home/ContactUsSection";
import Nav from "@/components/Nav";
import CounterSection from "@/components/home/CounterSection";
import getCounter from "@/lib/getCounter";
import getContact from "@/lib/getContact";

export const revalidate = 60

const Home = async () => {
    const projects = await getProjects()
    const comments = await getComments()
    const counter = await getCounter()
    const contact = await getContact()

    return (
      <>
          <Nav textColor='text-white'/>
          <Hero/>
          <CounterSection counter={counter}/>
          <ProjectSection projects={projects}/>
          <ServicesSection/>
          <CommentSection comments={comments}/>
          <ContactUsSection contact={contact}/>
      </>
  )
}
export default Home
