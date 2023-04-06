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
import i18nStore from "@/store/i18n.store";
import getCounter from "@/lib/getCounter";
import getContact from "@/lib/getContact";

export const revalidate = 60

interface HomeProps {
    params: {
        lang: Locale
    }
}
const Home = async ({params: {lang}}: HomeProps) => {
    const projects = await getProjects(lang)
    const comments = await getComments(lang)
    const counter = await getCounter()
    const contact = await getContact()
    const dict = i18nStore.getState().dictionary

    return (
      <>
          <Nav textColor='text-white'/>
          <Hero/>
          <CounterSection dict={dict} counter={counter}/>
          <ProjectSection projects={projects} dict={dict}/>
          <ServicesSection/>
          <CommentSection comments={comments}/>
          <ContactUsSection dict={dict} contact={contact}/>
      </>
  )
}
export default Home
