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
    <div ref={ref} className="relative space-y-5">

      {/* Background line */}
      <div
        className="
          absolute
          left-3
          top-[1.875rem]
          h-[calc(100%-1.875rem)]
          w-1
          bg-gray-300
          -translate-x-1/2
          sm:left-6
          sm:top-8
          sm:h-[calc(100%-2rem)]
        "
      />

      {/* Animated fill */}
      
      <motion.div
        style={{
            scaleY: scrollYProgress,
        }}
        className="
            absolute
            left-3
            top-[1.875rem]
            w-1
            h-[calc(100%-1.875rem)]
            bg-pink-800
            origin-top
            -translate-x-1/2
            sm:left-6
            sm:top-8
            sm:h-[calc(100%-2rem)]
        "
        />

      {experience.map((job, index) => (
        <div
          key={job.title}
          className="relative pl-14 sm:pl-24"
        >
          <div>
            <div
                className="
                    absolute
                    left-3
                    top-5
                    w-5
                    h-5
                    rounded-full
                    bg-pink-600
                    border-4
                    border-white
                    shadow
                    -translate-x-1/2
                    sm:left-6
                    sm:w-6
                    sm:h-6
                "
            />
            <div className="w-full">
            <AnimatedCard key={job.title} delay={index * 0.15}>
                <WorkCard {...job} />
            </AnimatedCard>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
