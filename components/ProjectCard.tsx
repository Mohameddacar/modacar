"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code, Link as LinkIcon } from "lucide-react";
import { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Image Container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 bg-accent-blue/5 flex items-center justify-center text-accent-blue font-serif text-2xl z-0">
            {project.title} Image
          </div>
        )}

        {/* Hover Action Buttons */}
        <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            href={`/projects/${project.slug}`}
            className="px-4 py-2 bg-white text-primary rounded-full text-sm font-medium hover:bg-accent-blue hover:text-white transition-colors"
          >
            View Case Study
          </Link>
          <div className="flex gap-2">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary hover:bg-accent-blue hover:text-white transition-colors">
                <LinkIcon className="w-4 h-4" />
              </a>
            )}
            {project.sourceUrl && (
              <a href={project.sourceUrl} target="_blank" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary hover:bg-accent-blue hover:text-white transition-colors">
                <Code className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white z-20 transition-transform duration-300 group-hover:-translate-y-2">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-medium text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-sm font-mono text-secondary">
            {project.number}
          </span>
        </div>
        
        <h3 className="text-2xl font-heading font-bold text-primary mb-3">
          {project.title}
        </h3>
        
        <p className="text-secondary mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((tech, i) => (
            <span
              key={tech}
              className="text-xs font-mono text-secondary px-2 py-1 rounded-md border border-border/50 bg-gray-50 transition-all duration-300 opacity-100 lg:opacity-0 lg:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
