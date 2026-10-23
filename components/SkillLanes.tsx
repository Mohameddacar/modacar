"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/experience";

function Marquee({ items, direction = "left", speed = 40 }: { items: string[], direction?: "left" | "right", speed?: number }) {
  return (
    <div className="flex overflow-hidden group select-none py-4">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        className="flex shrink-0 gap-4 pr-4 group-hover:[animation-play-state:paused]"
      >
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="px-6 py-3 bg-white border border-border rounded-full text-primary font-medium hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors cursor-default shadow-sm">
            {item}
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        className="flex shrink-0 gap-4 pr-4 group-hover:[animation-play-state:paused]"
      >
        {items.map((item, i) => (
          <div key={`${item}-dup-${i}`} className="px-6 py-3 bg-white border border-border rounded-full text-primary font-medium hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors cursor-default shadow-sm">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function SkillLanes() {
  return (
    <div className="py-24 bg-gray-50 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Core Competencies</h2>
        <p className="text-secondary max-w-2xl mx-auto">A balanced foundation in engineering, data, and product communication.</p>
      </div>

      <div className="flex flex-col gap-4 relative">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        
        <Marquee items={skills.software} direction="left" speed={30} />
        <Marquee items={skills.aiData} direction="right" speed={35} />
        <Marquee items={skills.product} direction="left" speed={40} />
      </div>
    </div>
  );
}
