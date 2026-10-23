"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillLanes } from "@/components/SkillLanes";

export default function Experience() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        
        <section className="pt-32 pb-12">
          <div className="container mx-auto px-6 max-w-7xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-6 max-w-4xl">
              Experience & Education
            </h1>
            <p className="text-xl text-secondary max-w-2xl mb-16">
              A track record of continuous learning, professional growth, and impactful technology roles.
            </p>
            
            <ExperienceTimeline />
          </div>
        </section>

        <SkillLanes />

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Certifications</h2>
              <p className="text-secondary max-w-2xl">Verified credentials in Artificial Intelligence and Software Development.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example Certificate Card */}
              <div className="group bg-white rounded-2xl border border-border p-6 hover:shadow-md hover:border-accent-blue/30 transition-all">
                <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center font-serif text-gray-400">Google AI Cert</div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading font-bold text-lg text-primary">Google AI Certificate</h3>
                  <span className="text-xs font-mono text-secondary">2026</span>
                </div>
                <p className="text-sm text-secondary mb-6">Google</p>
                <button className="text-sm font-medium text-accent-blue hover:underline">View Certificate</button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
