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
import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/get-dictionary";
import i18nStore from "@/store/i18n.store";

export const revalidate = 60

interface HomeProps {
    params: {
        lang: Locale
    }
}
const Home = async ({params: {lang}}: HomeProps) => {
    const projects = await getProjects(lang)
    const comments = await getComments(lang)
    const dict = i18nStore.getState().dictionary

    return (
      <>
          <Nav textColor='text-white'/>
          <Hero/>
          <CounterSection dict={dict}/>
          <ProjectSection projects={projects}/>
          <ServicesSection/>
          <CommentSection comments={comments}/>
          <ContactUsSection dict={dict}/>
      </>
  )
}
export default Home
