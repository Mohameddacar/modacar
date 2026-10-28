"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block font-serif text-3xl text-primary mb-6">
              M.
            </Link>
            <p className="text-secondary max-w-sm mb-8 text-lg">
              {profile.shortBio}
            </p>
            <div className="flex items-center gap-2 text-sm font-medium bg-success/10 text-success px-4 py-2 rounded-full border border-success/20 w-fit">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Ready To Freelance
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-primary mb-6">Navigation</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-secondary hover:text-accent-blue transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-secondary hover:text-accent-blue transition-colors">About</Link></li>
              <li><Link href="/projects" className="text-secondary hover:text-accent-blue transition-colors">Projects</Link></li>
              <li><Link href="/experience" className="text-secondary hover:text-accent-blue transition-colors">Experience</Link></li>
              <li><Link href="/courses" className="text-secondary hover:text-accent-blue transition-colors">Courses</Link></li>
              <li><Link href="/contact" className="text-secondary hover:text-accent-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-primary mb-6">Connect</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://wa.me/252617791483" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent-blue transition-colors flex items-center gap-1 group">
                  WhatsApp (+252 61 779 1483) <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a href={profile.email.startsWith('mailto') ? profile.email : `mailto:${profile.email}`} className="text-secondary hover:text-accent-blue transition-colors flex items-center gap-1 group">
                  Email <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent-blue transition-colors flex items-center gap-1 group">
                  LinkedIn <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent-blue transition-colors flex items-center gap-1 group">
                  GitHub <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-accent-red">♥</span> in {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
