"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { profile } from "@/data/profile";
import { Download, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left: Contact Info & Portrait */}
            <div className="space-y-12">
              <div>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
                  Let's Work Together
                </h1>
                <p className="text-xl text-secondary">
                  Prefer email? Write to{" "}
                  <a href={`mailto:${profile.email}`} className="text-accent-blue hover:underline">
                    {profile.email}
                  </a>
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="w-32 h-32 rounded-full bg-gray-100 overflow-hidden relative shrink-0">
                  <Image
                    src="/images/dacar.png"
                    alt="Mohamed Dacar"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-primary mb-1">{profile.name}</h3>
                  <p className="text-secondary font-medium mb-4">{profile.role}</p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium bg-success/10 text-success px-4 py-2 rounded-full border border-success/20 w-fit mx-auto md:mx-0">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    Available for work
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-heading font-bold text-xl text-primary border-b border-border pb-4">Social & CV</h3>
                <div className="flex flex-col gap-4">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white rounded-xl border border-border hover:border-accent-blue hover:shadow-sm transition-all group">
                    <span className="font-medium text-primary group-hover:text-accent-blue transition-colors">LinkedIn</span>
                    <ArrowUpRight className="w-5 h-5 text-secondary group-hover:text-accent-blue transition-colors" />
                  </a>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white rounded-xl border border-border hover:border-accent-blue hover:shadow-sm transition-all group">
                    <span className="font-medium text-primary group-hover:text-accent-blue transition-colors">GitHub</span>
                    <ArrowUpRight className="w-5 h-5 text-secondary group-hover:text-accent-blue transition-colors" />
                  </a>
                  <a href="/resume.pdf" target="_blank" className="flex items-center justify-between p-4 bg-primary rounded-xl hover:bg-accent-blue transition-colors group">
                    <span className="font-medium text-white">Download CV</span>
                    <Download className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ContactForm />
            </div>

          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
