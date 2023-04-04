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

export const revalidate = 60

const Home = async ({params: {lang}}: {params: {lang: Locale}}) => {
    const projects = await getProjects()
    const comments = await getComments()

    const dictionary = await getDictionary(lang)

    return (
      <>
          <Nav textColor='text-white'/>
          <Hero dict={dictionary}/>
          <CounterSection/>
          <ProjectSection projects={projects}/>
          <ServicesSection/>
          <CommentSection comments={comments}/>
          <ContactUsSection/>
      </>
  )
}
export default Home

export function generateStaticParams() {
    return [
        {lang: 'en'},
        {lang: 'sl'}
    ]
}
