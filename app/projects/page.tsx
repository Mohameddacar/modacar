"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="mb-16 max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-6">
              All Projects
            </h1>
            <p className="text-xl text-secondary">
              A comprehensive collection of software systems, applied machine learning prototypes, and data products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
