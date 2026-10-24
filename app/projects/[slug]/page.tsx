import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-sm font-mono font-medium text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-sm font-mono text-secondary">
                Project {project.number}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl text-secondary leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 border-y border-border py-6">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-accent-blue transition-colors flex items-center gap-2 text-sm">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.sourceUrl && (
                <a href={project.sourceUrl} target="_blank" className="px-6 py-3 bg-white text-primary border border-border rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm shadow-sm">
                  <Code className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>
          </div>

          <div className="aspect-video w-full bg-gray-100 rounded-3xl overflow-hidden mb-16 relative border border-border">
            <div className="absolute inset-0 flex items-center justify-center font-serif text-2xl text-gray-400">
              {project.title} Cover Image
            </div>
          </div>

          <article className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-secondary max-w-none">
            <h2 className="text-3xl font-bold mb-6">Project Context</h2>
            <p className="mb-8">Detailed case study content will go here. This includes the problem space, intended users, and constraints.</p>

            <h2 className="text-3xl font-bold mb-6">Solution & Architecture</h2>
            <p className="mb-8">Explanation of the product workflow, main features, and the technology choices made.</p>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-border mb-8">
              <h3 className="text-xl font-bold mb-4 mt-0">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-sm font-mono text-primary px-3 py-1.5 rounded-md border border-border bg-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Outcomes & Lessons Learned</h2>
            <p className="mb-8">The final status of the project and what was learned during the implementation.</p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
