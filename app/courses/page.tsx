"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { courses } from "@/data/courses";
import { profile } from "@/data/profile";
import {
  Sparkles,
  Clock,
  GraduationCap,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Layers,
  Globe,
  MonitorPlay,
  Cpu,
  Flame,
  ChevronRight,
  Video,
} from "lucide-react";

const categories = [
  "All",
  "Full Stack AI",
  "Data Analysis & Automation",
  "Mentorship",
] as const;

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const featuredCourse = courses[0]; // AI-Powered Full-Stack Development

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  const featuredWhatsappUrl = `https://wa.me/252614293433?text=${encodeURIComponent(
    featuredCourse.whatsappMessage
  )}`;

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 md:pt-36 pb-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-mono font-medium mb-6 border border-accent-blue/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Practical Learning & AI Engineering</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary mb-6 tracking-tight">
              Courses & Masterclasses
            </h1>
            <p className="text-lg sm:text-xl text-secondary leading-relaxed">
              Hands-on, project-driven software engineering and applied AI curricula. Learn to build and deploy complete commercial web applications using modern stacks and AI coding assistants.
            </p>
          </div>

          {/* ========================================================================= */}
          {/* FLAGSHIP FEATURED COURSE SPOTLIGHT (AI-Powered Full-Stack Development) */}
          {/* ========================================================================= */}
          <div className="mb-20 bg-gradient-to-b from-white to-gray-50/60 rounded-3xl border border-border p-6 sm:p-10 lg:p-12 shadow-md hover:shadow-lg transition-all relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {featuredCourse.status}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  <Flame className="w-3.5 h-3.5 text-accent-red" />
                  Flagship Masterclass
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-700 border border-purple-500/20">
                  Vibe Coding & AI Agents
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                <Globe className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold">{featuredCourse.language}</span>
              </div>
            </div>

            {/* Grid Layout: Banner & Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Banner visual (7 cols) */}
              <div className="lg:col-span-7">
                <Link
                  href={`/courses/${featuredCourse.id}`}
                  className="group block relative aspect-video rounded-2xl overflow-hidden border border-border/80 shadow-md hover:shadow-xl transition-all"
                >
                  <Image
                    src={featuredCourse.image}
                    alt={featuredCourse.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="inline-flex items-center gap-2 text-xs font-mono text-white/95 bg-black/70 px-3 py-1.5 rounded-full backdrop-blur-md w-fit mb-2 border border-white/20">
                      <Video className="w-3.5 h-3.5 text-emerald-400" />
                      100% Af-Soomaali | Casharro Muuqaal ah + Project Code + Direct Mentorship
                    </span>
                    <h3 className="text-white text-xl sm:text-2xl font-heading font-bold">
                      {featuredCourse.title}
                    </h3>
                  </div>
                </Link>
              </div>

              {/* Text & Quick Specs (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3">
                    <Link
                      href={`/courses/${featuredCourse.id}`}
                      className="hover:text-accent-blue transition-colors"
                    >
                      {featuredCourse.title}
                    </Link>
                  </h2>
                  <p className="text-accent-blue font-medium text-base mb-4">
                    {featuredCourse.tagline}
                  </p>
                  <p className="text-secondary text-sm sm:text-base leading-relaxed line-clamp-3">
                    {featuredCourse.shortDescription}
                  </p>
                </div>

                {/* Workflow steps chip */}
                <div className="p-3.5 bg-background rounded-2xl border border-border/80">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-secondary block mb-2">
                    Learning Pipeline:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-primary">
                    <span className="px-2 py-1 bg-white rounded-lg border border-border">Idea</span>
                    <span className="text-secondary">→</span>
                    <span className="px-2 py-1 bg-white rounded-lg border border-border">UI/UX Design</span>
                    <span className="text-secondary">→</span>
                    <span className="px-2 py-1 bg-white rounded-lg border border-border">Code with AI</span>
                    <span className="text-secondary">→</span>
                    <span className="px-2 py-1 bg-white rounded-lg border border-border">Deploy</span>
                    <span className="text-secondary">→</span>
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 font-bold">
                      Live Project
                    </span>
                  </div>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0 border border-accent-blue/30">
                    <Image
                      src={featuredCourse.instructor.avatar}
                      alt={featuredCourse.instructor.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-secondary block">
                      Instructor
                    </span>
                    <strong className="text-sm font-heading text-primary block">
                      {featuredCourse.instructor.name}
                    </strong>
                    <span className="text-xs text-secondary">{featuredCourse.instructor.role}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={`/courses/${featuredCourse.id}`}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-accent-blue text-white rounded-full font-semibold text-sm transition-colors shadow-sm text-center"
                  >
                    <span>View Full Syllabus</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={featuredWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold text-sm transition-colors shadow-sm text-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enroll Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* ALL COURSES CATALOG */}
          {/* ========================================================================= */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3">
              Explore All Programs
            </h2>
            <p className="text-secondary text-sm sm:text-base mb-8">
              Select a learning track to find courses, practical labs, and mentorship opportunities.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white text-secondary hover:text-primary border border-border hover:border-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {filteredCourses.map((course) => {
              const whatsappUrl = `https://wa.me/252614293433?text=${encodeURIComponent(
                course.whatsappMessage
              )}`;

              return (
                <div
                  key={course.id}
                  className="bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-accent-blue/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Course Banner or Thumbnail */}
                    <Link
                      href={`/courses/${course.id}`}
                      className="block relative aspect-video rounded-2xl overflow-hidden mb-6 border border-border/70"
                    >
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-primary backdrop-blur-sm border border-white/50 shadow-sm">
                          {course.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        {course.status === "Coming Soon" ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-white backdrop-blur-sm shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            Dhawaan Filo / Coming Soon
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-emerald-600/90 text-white backdrop-blur-sm shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            {course.status}
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* Title & Tagline */}
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary mb-2 group-hover:text-accent-blue transition-colors">
                      <Link href={`/courses/${course.id}`}>
                        {course.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-accent-blue mb-4">
                      {course.tagline}
                    </p>
                    <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                      {course.shortDescription}
                    </p>

                    {/* Metadata specs */}
                    <div className="grid grid-cols-3 gap-2 mb-6 p-3.5 bg-background rounded-2xl border border-border/60 text-xs">
                      <div>
                        <span className="text-[10px] font-mono text-secondary block">Duration</span>
                        <span className="font-semibold text-primary">{course.duration}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-secondary block">Level</span>
                        <span className="font-semibold text-primary">{course.level}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-secondary block">Language</span>
                        <span className="font-semibold text-primary">{course.language}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom: Actions */}
                  <div className="pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                    <Link
                      href={`/courses/${course.id}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-sm font-medium text-primary hover:text-accent-blue transition-colors py-2"
                    >
                      <span>{course.status === "Coming Soon" ? "Status: In Preparation" : "Explore Details"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white font-medium text-xs sm:text-sm transition-all shadow-sm ${
                        course.status === "Coming Soon"
                          ? "bg-amber-600 hover:bg-amber-700"
                          : "bg-emerald-600 hover:bg-emerald-700"
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      {course.status === "Coming Soon" ? "Ku Biir Waitlist-ka" : "Enroll Now"}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* CUSTOM CORPORATE & 1-ON-1 INQUIRIES BANNER */}
          {/* ========================================================================= */}
          <div className="bg-primary text-white rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-400 text-xs font-mono border border-white/15">
                <Cpu className="w-3.5 h-3.5" />
                Custom Workshops & Private Mentorship
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                Want a Tailored Workshop or 1-on-1 Engineering Support?
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Whether you need dedicated team training on modern web development, applied AI automation for your organization, or private video coaching, connect directly with Mohamed Dacar to get started.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`https://wa.me/252614293433?text=${encodeURIComponent(
                    "Hi Mohamed, I would like to inquire about your courses or customized software training!"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-semibold transition-all shadow-lg text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  Direct Chat (+252 61 429 3433)
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors border border-white/20 text-sm sm:text-base"
                >
                  Send an Email
                </a>
              </div>
            </div>

            {/* Glowing background shapes */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent-blue/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -right-10 -top-10 w-60 h-60 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
