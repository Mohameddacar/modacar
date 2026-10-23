"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export function ProjectCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Selected Work
          </h2>
          <p className="text-xl text-secondary">
            Products and intelligent systems built from real problems—not tutorial exercises.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="/projects" className="text-sm font-medium text-accent-blue hover:underline mr-4">
            View All Projects
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-colors ${
                canScrollLeft ? "text-primary hover:border-primary" : "text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-colors ${
                canScrollRight ? "text-primary hover:border-primary" : "text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Next projects"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative">
        <div
          ref={carouselRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 -mx-6 px-6 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 min-w-max pb-4">
            {projects.slice(0, 5).map((project, index) => (
              <div 
                key={project.id} 
                className="w-[85vw] sm:w-[calc(50vw-2rem)] lg:w-[calc(33.333vw-2rem)] max-w-[500px] snap-center shrink-0"
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
