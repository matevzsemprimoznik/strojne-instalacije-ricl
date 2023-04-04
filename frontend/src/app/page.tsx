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
import useTranslation from "next-translate/useTranslation";

export const revalidate = 60

const Home = async () => {
    const projects = await getProjects()
    const comments = await getComments()
    const { t, lang } = useTranslation('common')
    console.log(t('title'))

    return (
      <>
          <Nav textColor='text-white'/>
          <Hero/>
          <CounterSection/>
          <ProjectSection projects={projects}/>
          <ServicesSection/>
          <CommentSection comments={comments}/>
          <ContactUsSection/>
      </>
  )
}
export default Home
