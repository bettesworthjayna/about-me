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

      <main className="bg-pink-100">

        <Section
          id="About"
          background="/backgrounds/about.jpeg"
        >
          <div className="px-16">

            <div>
              <h1 className="mb-6 text-5xl font-black sm:text-6xl">
                Hello! I&apos;m Jayna
                
              </h1>
              <br/>
            </div>

            <div>

              

              <p className="text-xl leading-relaxed sm:text-2xl">
                I&apos;m a Software Engineer with a specialization
                in Artificial Intelligence and experience across
                AI systems, computer vision, cloud applications,
                firmware development, and technical leadership. I
                enjoy designing and building technology that solves
                meaningful real-world problems.
              </p>

            </div>
            <div className="flex justify-start gap-4 pt-10 sm:justify-end sm:pr-16 sm:pt-16">
            <a
              href="#Contact"
              className="
                flex items-center gap-4
                max-w-42 px-6 py-3
                text-lg sm:text-xl
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
            <h1 className="mb-6 text-3xl font-black sm:text-4xl">
                  Experience
            </h1>
          </AnimatedCard>
          <Timeline/>
        </Section>

        <Section
          id="Projects"
          background="/backgrounds/projects.jpeg"
        >
           <AnimatedCard>
            <h1 className="mb-4 text-3xl font-black sm:text-4xl">
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
            <h1 className="mb-6 text-3xl font-black sm:text-4xl">
                Life and Hobbies
            </h1>
          </AnimatedCard>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
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
          className="flex flex-col gap-4 px-6 py-12 sm:px-10 md:flex-row md:items-center md:justify-around lg:px-64 lg:py-16"
        >
          <h3 className="text-3xl font-black md:mb-0">
            CONTACT ME
          </h3>

          

            <a
              href="mailto:bettesworthjayna@email.com"
              className="flex items-center gap-2"
            >
              <Mail size={20}/>
              bettesworthjayna@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/jayna-bettesworth-3811a41b7"
              target="_blank"
              className="flex items-center gap-2"
            >
              <LinkedIn size={20}/>
              LinkedIn
            </a>


        </section>

      </main>
    </>
  );
}
