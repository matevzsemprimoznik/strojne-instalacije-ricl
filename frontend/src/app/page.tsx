import ProjectsCard from "@/components/ProjectsCard";
import React from "react";
import Hero from "@/components/home/Hero";
import getProjects from "@/lib/getProjects";
import getComments from "@/lib/getComments";
import CounterCard from "@/components/CounterCard";
import kopalnica from '../assets/KOPALNICA-1_0.jpg';
import kopalnica2 from '../assets/wallstoris-mattwhite-pulsify-chrom-grey-bathroom-ambiance-4x3.jpg';
import talnogretje from '../assets/Talno-gretje-2021-03-22-07-53-24.jpg';
import klima from '../assets/stenska-klima-cena-prednosti-in-slabosti.jpg';
import {Comment} from "@/types";



import ServicesSection from "@/components/home/ServicesSection";
import CounterSection from "@/components/home/CounterSection";
import ProjectSection from "@/components/home/ProjectSection";
import CommentSection from "@/components/home/CommentSection";
import {Project} from "@/types";

export const revalidate = 60

const Home = async () => {
    // const projects = await getProjects()
    // const comments = await getComments()
    const projects: Project[] = [
        {
            id: 1,
            attributes: {
                title: 'Kopalnica',
                description: 'fdgjdfhgf',
                image: 'sgkjfhgkdgfg'
            }
        },
        {
            id: 1,
            attributes: {
                title: 'Kopalnica',
                description: 'fdgjdfhgf',
                image: 'sgkjfhgkdgfg'
            }
        },
        {
            id: 1,
            attributes: {
                title: 'Kopalnica',
                description: 'fdgjdfhgf',
                image: 'sgkjfhgkdgfg'
            }
        },
        {
            id: 1,
            attributes: {
                title: 'Kopalnica',
                description: 'fdgjdfhgf',
                image: 'sgkjfhgkdgfg'
            }
        },
        {
            id: 1,
            attributes: {
                title: 'Kopalnica',
                description: 'fdgjdfhgf',
                image: 'sgkjfhgkdgfg'
            }
        },
    ]

    const comments: Comment[] = [
        {
            id: 1,
            attributes: {
                author: 'Janez N.',
                date: '20.2.2021',
                comment: 'Nekaj najboljšega kar sem videl v življenju'
            }
        },
        {
            id: 2,
            attributes: {
                author: 'Ana N.',
                date: '13.9.2021',
                comment: 'Super izvedba. Hvala'
            }
        },
        {
            id: 3,
            attributes: {
                author: 'Marko S.',
                date: '1.2.2021',
                comment: 'Zelo profesionalno'
            }
        },
    ]

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
