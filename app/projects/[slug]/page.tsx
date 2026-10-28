import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

          <div className="aspect-video w-full bg-gray-100 rounded-3xl overflow-hidden mb-16 relative border border-border shadow-sm">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover object-top"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center font-serif text-2xl text-gray-400">
                {project.title} Cover Image
              </div>
            )}
          </div>

          <article className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-secondary max-w-none">
            <h2 className="text-3xl font-bold mb-6">Overview & Problem Statement</h2>
            <p className="mb-4 text-xl font-medium text-primary leading-relaxed">
              {project.overview || project.description}
            </p>
            <p className="mb-8">
              {project.problem || "Detailed case study content analyzing the core operational challenge, target audience, and business context."}
            </p>

            <h2 className="text-3xl font-bold mb-6">Solution & Architecture</h2>
            <p className="mb-8">
              {project.solution || "Explanation of the product workflow, technical implementation, and system architecture."}
            </p>

            {project.features && project.features.length > 0 && (
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Key Capabilities & Features</h3>
                <ul className="space-y-2.5">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="text-secondary flex items-start gap-2">
                      <span className="text-accent-blue font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-border mb-10 not-prose">
              <h3 className="text-xl font-bold mb-4 mt-0 text-primary">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-sm font-mono text-primary px-3 py-1.5 rounded-md border border-border bg-white shadow-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Impact & Key Outcomes</h2>
            {project.outcomes && project.outcomes.length > 0 ? (
              <ul className="space-y-3 mb-8">
                {project.outcomes.map((outcome, idx) => (
                  <li key={idx} className="text-secondary flex items-start gap-2">
                    <span className="text-success font-bold">→</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mb-8">The final status of the project and key engineering metrics achieved.</p>
            )}

            {project.liveUrl && (
              <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 not-prose">
                <span className="text-secondary text-sm font-medium">Ready to experience the live platform?</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-accent-blue transition-colors inline-flex items-center gap-2 text-sm shadow-sm"
                >
                  Visit Live Site ({project.title})
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
