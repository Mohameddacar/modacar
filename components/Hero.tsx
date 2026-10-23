"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import Image from "next/image";
import { ArrowRight, Download, PlayCircle } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border text-sm font-medium text-secondary mb-8 shadow-sm"
          >
            <span className="text-xl">👋</span> Hello, I'm Mohamed Dacar — based in Mogadishu, Somalia.
          </motion.div>
          
          <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center h-[350px] md:h-[500px]">
            {/* The Text Layer (Behind & Front) */}
            <h1 className="font-heading font-extrabold text-[10vw] md:text-7xl lg:text-8xl leading-none tracking-tight text-primary absolute z-0 w-full top-0 md:top-8">
              I DESIGN AND BUILD
            </h1>

            {/* The Portrait (Middle Layer) */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute z-10 top-12 md:top-16 w-full max-w-md mx-auto left-0 right-0 h-[300px] md:h-[450px]"
            >
              {/* Soft glow behind portrait */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-purple/20 blur-[100px] rounded-full" />
              <div 
                className="relative w-full h-full"
                style={{ maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)" }}
              >
                <Image
                  src="/images/dacar.png"
                  alt="Mohamed Dacar"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </motion.div>

            {/* Rotating Role Text (Front Layer) */}
            <div className="absolute z-20 bottom-16 md:bottom-20 w-full h-24 md:h-28 overflow-hidden flex justify-center items-center">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ y: 100, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -100, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-[8vw] md:text-6xl lg:text-7xl text-accent-blue italic px-4 bg-white/30 backdrop-blur-sm rounded-2xl"
                >
                  {profile.roles[currentRoleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <h1 className="font-heading font-extrabold text-[7vw] md:text-5xl lg:text-6xl leading-none tracking-tight text-primary absolute z-30 bottom-0 md:bottom-0 w-full">
              FOR REAL-WORLD IMPACT
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 md:mt-24 text-lg md:text-xl text-secondary max-w-2xl mx-auto font-medium"
          >
            {profile.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/projects"
              className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-accent-blue transition-colors flex items-center gap-2 w-full sm:w-auto justify-center group"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 bg-white text-primary border border-border rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <button className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-primary hover:text-accent-blue hover:border-accent-blue transition-colors">
              <PlayCircle className="w-6 h-6" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Proof Strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-white/50 backdrop-blur-md z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap items-center justify-center sm:justify-between py-4 gap-4 sm:gap-8 text-sm font-mono text-secondary">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
              {profile.stats.experience} of Experience
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
              {profile.stats.projects} Projects
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-red" />
              {profile.stats.languages}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {profile.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
