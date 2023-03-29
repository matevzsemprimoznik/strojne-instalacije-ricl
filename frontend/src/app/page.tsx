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
import Comment from "@/components/Comment";



import ServicesSection from "@/components/home/ServicesSection";
import CounterSection from "@/components/home/CounterSection";
import ProjectSection from "@/components/home/ProjectSection";

export const revalidate = 60

const Home = async () => {
    const projects = await getProjects()
    //const comments = await getComments()
    return (
      <>
          <Hero/>
          {/*<CounterSection/>*/}
          <ProjectSection/>
          <ServicesSection/>

          <h1 className='font-bold text-4xl mb-12 m-16'><span className='text-myBlue'>Mnenja</span> strank </h1>
          <div className='flex max-w-full  flex-nowrap m-16'>
              <Comment date='Maribor, 25.3.2023' comment='Super narejeno tako kot mora bit! Res sta prava mojstra na svojem področju.' author='Dejan M.' />
              <Comment date='Ptuj, 21.1.2023' comment='Zelo priporočam!' author='Marjan N.' />
              <Comment date='Maribor, 15.2.2023' comment='Vse narejeno tako kot smo se dogovorili.' author='Sara V.' />
          </div>
      </>
  )
}
export default Home
