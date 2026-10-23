"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Download, MapPin, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="mb-16 max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-6"
            >
              Four Years of Learning, Building and Improving
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column: Portrait & Stats */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative"
              >
                <Image
                  src="/images/dacar.png"
                  alt="Mohamed Dacar"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                <h3 className="font-heading font-bold text-lg mb-6 border-b border-border pb-4">Snapshot</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-secondary">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{profile.location}</span>
                  </li>
                  <li className="flex items-center gap-3 text-secondary">
                    <span className="w-5 h-5 flex items-center justify-center font-bold text-primary">AA</span>
                    <span>{profile.stats.languages}</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="w-full px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-accent-blue transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Principles */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-secondary max-w-none mb-16"
              >
                <p className="text-2xl font-serif text-primary leading-relaxed">
                  {profile.fullBio}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Professional Principles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {profile.principles.map((principle, idx) => (
                    <div 
                      key={idx}
                      className="bg-white p-6 rounded-2xl border border-border hover:border-accent-blue/50 transition-colors shadow-sm"
                    >
                      <CheckCircle2 className="w-8 h-8 text-accent-blue mb-4" />
                      <p className="font-medium text-primary">{principle}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
