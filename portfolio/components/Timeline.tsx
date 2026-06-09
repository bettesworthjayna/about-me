"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import WorkCard from "./WorkCard";
import AnimatedCard from "./AnimatedCard";
import { experience } from "@/data/experience";

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  

  return (
    <div ref={ref} className="relative">

      {/* Background line */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-1
          bg-gray-300
          -translate-x-1/2
        "
      />

      {/* Animated fill */}
      
      <motion.div
        style={{
            scaleY: scrollYProgress,
        }}
        className="
            absolute
            left-1/2
            top-0
            w-1
            h-full
            bg-pink-800
            origin-top
            -translate-x-1/2
        "
        />

      {experience.map((job, index) => (
        <div
          key={job.title}
          className={`
            flex mb-20
            ${
              index % 2 === 0
                ? "justify-start"
                : "justify-end"
            }
          `}
        >
          <div className="w-5/12">
            <div
                className="
                    absolute
                    left-1/2
                    w-6
                    h-6
                    rounded-full
                    bg-pink-600
                    border-4
                    border-white
                    shadow
                    -translate-x-1/2
                "
            />
            <AnimatedCard key={job.title} delay={index * 0.15}>
                <WorkCard {...job} />
            </AnimatedCard>
          </div>
        </div>
      ))}
    </div>
  );
}