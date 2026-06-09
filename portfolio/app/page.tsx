import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import ProjectCard from "@/components/ProjectCard";
import LifeCard from "@/components/LifeCard";
import AnimatedCard from "@/components/AnimatedCard";
import LinkedIn from "@/data/linkedin";
import {life} from "@/data/life"
import {projects} from "@/data/projects"

import { Mail } from "lucide-react";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Section
          id="About"
          background="/backgrounds/about.jpeg"
        >
          <div >

            <div>
              <h1 className="text-7xl font-black mb-6">
                Hello! I'm Jayna
                
              </h1>
              <br/>
            </div>

            <div>

              

              <p className="text-3xl leading-relaxed">
                I'm a Software Engineer with a specialization 
                in Artificial Intelligence and experience across 
                AI systems, computer vision, cloud applications, 
                firmware development, and technical leadership. I 
                enjoy designing and building technology that solves 
                meaningful real-world problems.
              </p>

            </div>
            <div className="flex justify-end gap-4 pr-16 pt-16 ">
            <a
              href="/#Contact"
              className="
                flex items-center gap-4
                px-6 py-3 max-w-42
                text-xl
                rounded-xl
                bg-pink-900/50
                text-white
                font-semibold
                hover:scale-105
                transition
              "
            >
              Contact Me
            </a>
            </div>

          </div>
        </Section>

        <Section
          id="Experience"
          background="/backgrounds/work.jpeg"
        >
          <AnimatedCard>
            <h1 className="text-4xl font-black mb-6">
                  Experience
            </h1>
          </AnimatedCard>
          <br/>
          <Timeline/>
        </Section>

        <Section
          id="Projects"
          background="/backgrounds/projects.jpeg"
        >
           <AnimatedCard>
            <h1 className="text-4xl font-black mb-4">
                  Projects
            </h1>
          </AnimatedCard>
          <div>
            {projects.map(project => (
              <AnimatedCard key={project.title}>
                <ProjectCard
                  key={project.title}
                  {...project}
                />
                <br/>
              </AnimatedCard>
            ))}
          </div>
        </Section>

        <Section
          id="Life"
          background="/backgrounds/life.jpeg"
        >
          <AnimatedCard>
            <h1 className="text-4xl font-black mb-6">
                Life and Hobbies
            </h1>
          </AnimatedCard>
          <div className="grid md:grid-cols-2 gap-8">
            {life.map(item => (
              <AnimatedCard key={item.title}>
                <LifeCard
                  key={item.title}
                  {...item}
                />
              </AnimatedCard>
            ))}
          </div>
        </Section>

        <section
          id="Contact"
          className="flex justify-around px-64 py-16"
        >
          <h3 className="text-3xl font-black mb-8">
            CONTACT ME
          </h3>

          

            <a
              href="mailto:bettesworthjayna@email.com"
              className="flex gap-2"
            >
              <Mail size={20}/>
              bettesworthjayna@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/jayna-bettesworth-3811a41b7"
              target="_blank"
              className="flex gap-2"
            >
              <LinkedIn size={20}/>
              LinkedIn
            </a>


        </section>

      </main>
    </>
  );
}