import React from "react";
import Hero from "@/components/home/Hero";
import getProjects from "@/lib/getProjects";
import getComments from "@/lib/getComments";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectSection from "@/components/home/ProjectSection";
import CommentSection from "@/components/home/CommentSection";
import ContactUsSection from "@/components/home/ContactUsSection";
import CounterSection from "@/components/home/CounterSection";
import getCounter from "@/lib/getCounter";
import getContact from "@/lib/getContact";
import {getDictionary} from "@/i18n/get-dictionary";
import Nav from "@/components/Nav";
import {BasicPageProps} from "@/types";

const Home = async ({params: {locale}}: BasicPageProps) => {
    const [projects, comments, counter, contact] = await Promise.all([getProjects(locale), getComments(locale), getCounter(), getContact()])
    const dict = await getDictionary(locale)

    return (
        <>
            <Nav dict={dict} locale={locale} textColor='text-white'/>
            <Hero dict={dict}/>
            <CounterSection dict={dict} counter={counter}/>
            <ProjectSection projects={projects} dict={dict}/>
            <ServicesSection dict={dict}/>
            <CommentSection comments={comments} dict={dict}/>
            <ContactUsSection dict={dict} contact={contact} locale={locale}/>
        </>
    )
}
export default Home
