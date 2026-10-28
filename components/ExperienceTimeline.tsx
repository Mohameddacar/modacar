"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience, education } from "@/data/experience";

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative py-12" ref={containerRef}>
      
      {/* Center Line for Desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
      <motion.div 
        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-accent-blue -translate-x-1/2 origin-top z-0"
        style={{ scaleY: lineHeight }}
      />
      
      {/* Left Line for Mobile */}
      <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-border" />
      <motion.div 
        className="md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-accent-blue origin-top z-0"
        style={{ scaleY: lineHeight }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10">
        
        {/* Professional Experience Track */}
        <div className="space-y-12 pl-12 md:pl-0 md:pr-12 md:text-right">
          <h3 className="font-serif text-3xl text-primary md:text-right sticky top-24 mb-8 bg-white/80 backdrop-blur-sm py-4 z-20">
            Professional Experience
          </h3>
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              {/* Dot Desktop */}
              <div className="hidden md:block absolute top-6 -right-[3.1rem] w-4 h-4 rounded-full bg-white border-4 border-border group-hover:border-accent-blue transition-colors z-10" />
              {/* Dot Mobile */}
              <div className="md:hidden absolute top-6 -left-[3.4rem] w-4 h-4 rounded-full bg-white border-4 border-border group-hover:border-accent-blue transition-colors z-10" />
              
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all group-hover:border-accent-blue/40 text-left md:text-right">
                <div className="flex items-center gap-2 mb-2 justify-start md:justify-end flex-wrap">
                  {item.type && (
                    <span className="text-xs font-mono font-medium text-accent-blue bg-accent-blue/10 px-2.5 py-0.5 rounded-full border border-accent-blue/20">
                      {item.type}
                    </span>
                  )}
                  <span className="text-xs font-mono text-secondary">{item.period}</span>
                </div>
                <h4 className="font-heading font-bold text-xl text-primary">{item.role}</h4>
                <p className="text-accent-blue font-medium mt-1 text-sm">{item.company}</p>
                {item.description && (
                  <p className="text-secondary text-sm mt-3 leading-relaxed">{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Track */}
        <div className="space-y-12 pl-12 md:pl-12 pt-12 md:pt-32">
          <h3 className="font-serif text-3xl text-primary sticky top-24 mb-8 bg-white/80 backdrop-blur-sm py-4 z-20">
            Education
          </h3>
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              {/* Dot Desktop */}
              <div className="hidden md:block absolute top-6 -left-[3.4rem] w-4 h-4 rounded-full bg-white border-4 border-border group-hover:border-accent-purple transition-colors z-10" />
              {/* Dot Mobile */}
              <div className="md:hidden absolute top-6 -left-[3.4rem] w-4 h-4 rounded-full bg-white border-4 border-border group-hover:border-accent-purple transition-colors z-10" />
              
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all group-hover:border-purple-300">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-xs font-mono font-medium text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                    Education
                  </span>
                  <span className="text-xs font-mono text-secondary">{item.period}</span>
                </div>
                <h4 className="font-heading font-bold text-xl text-primary">{item.degree}</h4>
                <p className="text-purple-700 font-medium mt-1 text-sm">{item.institution}</p>
                {item.description && (
                  <p className="text-secondary text-sm mt-3 leading-relaxed">{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
