import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { courses } from "@/data/courses";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  Clock,
  GraduationCap,
  Globe,
  Sparkles,
  CheckCircle2,
  Layers,
  Code2,
  MonitorPlay,
  FolderGit2,
  Users,
  ShieldCheck,
  Award,
  Video,
  ArrowRight,
  BellRing,
  AlertCircle,
  Check,
} from "lucide-react";

export function generateStaticParams() {
  return courses.map((c) => ({
    slug: c.id,
  }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.id === slug);

  if (!course) {
    notFound();
  }

  const whatsappEnrollUrl = `https://wa.me/252614293433?text=${encodeURIComponent(
    course.whatsappMessage
  )}`;

  // =========================================================================
  // DEDICATED "IN PREPARATION / COMING SOON" VIEW
  // (Prevents showing fake modules/syllabus before course is officially ready)
  // =========================================================================
  if (course.status === "Coming Soon") {
    return (
      <>
        <Navbar />
        <main className="flex-1 pt-28 md:pt-36 pb-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            {/* Back Link */}
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Courses
            </Link>

            {/* In-Preparation Status Notice */}
            <div className="p-6 md:p-8 rounded-3xl bg-amber-500/10 border border-amber-500/25 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-amber-500 text-white">
                      In Preparation • Dhawaan Filo
                    </span>
                    <span className="text-xs font-mono text-amber-800">
                      Not Yet Available for Instant Access
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-amber-950">
                    Course In Active Development
                  </h3>
                  <p className="text-amber-900 text-sm mt-1 leading-relaxed">
                    Mohamed Dacar is currently structuring the syllabus, recording video lessons in Somali, and packaging starter templates. Join the early waitlist to get notified first!
                  </p>
                </div>
              </div>

              <a
                href={whatsappEnrollUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full text-sm transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Ku Biir Waitlist-ka
              </a>
            </div>

            {/* Course Title & Overview */}
            <div className="space-y-4 mb-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  {course.category}
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                  Python • Excel • Power BI
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-700 border border-purple-500/20">
                  100% Af-Soomaali (Voiceover)
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary tracking-tight">
                {course.title}
              </h1>

              <p className="text-xl text-accent-blue font-medium">
                {course.tagline}
              </p>
            </div>

            {/* Generated Design Banner */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-lg mb-12">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-medium text-amber-300 bg-black/60 px-3.5 py-1.5 rounded-full backdrop-blur-md w-fit mb-2 border border-amber-500/30">
                  <Clock className="w-3.5 h-3.5" />
                  Course In Active Preparation
                </span>
                <h3 className="text-white text-xl sm:text-3xl font-heading font-bold">
                  Data Analysis & Automation with Python, Excel & Power BI
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-2xl">
                  Turning messy spreadsheets into automated reports and executive business dashboards.
                </p>
              </div>
            </div>

            {/* What is being prepared (Honest preview instead of fake finished modules) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-3xl border border-border p-8 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-secondary block mb-1">
                    Under Development
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-primary">
                    What We Are Preparing For You
                  </h3>
                  <p className="text-secondary text-sm mt-1">
                    Here is what you will master once the course is officially released:
                  </p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      1
                    </div>
                    <div>
                      <strong className="text-primary text-sm block">Advanced Microsoft Excel</strong>
                      <span className="text-xs text-secondary">
                        Nested formulas (XLOOKUP, INDEX/MATCH), Pivot Tables, dynamic arrays, and automated workbook modeling.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      2
                    </div>
                    <div>
                      <strong className="text-primary text-sm block">Python & Pandas Automation</strong>
                      <span className="text-xs text-secondary">
                        Writing scripts to automatically clean, merge, and filter messy CSVs/spreadsheets in seconds.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      3
                    </div>
                    <div>
                      <strong className="text-primary text-sm block">Interactive Power BI Dashboards</strong>
                      <span className="text-xs text-secondary">
                        Connecting live data sources, building DAX calculated measures, and designing stunning executive dashboards.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      4
                    </div>
                    <div>
                      <strong className="text-primary text-sm block">100% Af-Soomaali Video Lectures</strong>
                      <span className="text-xs text-secondary">
                        Clear, step-by-step video instructions in Somali with real enterprise datasets and case studies.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Waitlist Box */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-mono mb-4">
                    <BellRing className="w-3.5 h-3.5" />
                    Early Access Community
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
                    Be First in Line When Video Lectures Launch
                  </h3>
                  <p className="text-emerald-100 text-sm leading-relaxed mb-6">
                    Because this course is in preparation, we are taking early waitlist members. Waitlist members will receive:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-emerald-50 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                      <span>Immediate notification when the first module drops</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                      <span>Special early-bird launch discount</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                      <span>Free starter dataset templates & Python scripts</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href={whatsappEnrollUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-white text-emerald-900 font-bold rounded-full hover:bg-emerald-50 transition-colors shadow-md text-sm sm:text-base text-center"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Join Waitlist (+252 61 429 3433)</span>
                  </a>
                  <p className="text-center text-xs text-emerald-200 mt-2 font-mono">
                    Ku biir liiska hore si aad noogu soo biirto
                  </p>
                </div>
              </div>
            </div>

            {/* Instructor Card */}
            <div className="p-6 bg-white rounded-3xl border border-border flex items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden relative shrink-0 border-2 border-accent-blue/30">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-secondary block">
                    Course Instructor & Lead
                  </span>
                  <h4 className="font-heading font-bold text-lg text-primary">
                    {course.instructor.name}
                  </h4>
                  <p className="text-xs text-secondary">{course.instructor.role}</p>
                </div>
              </div>

              <a
                href={whatsappEnrollUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
              >
                <span>Ask about course timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // =========================================================================
  // STANDARD ACTIVE COURSE DETAIL VIEW (For Enrollment Open Courses)
  // =========================================================================
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 md:pt-36 pb-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Back Link */}
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Courses
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  {course.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {course.status}
                </span>
                {course.featured && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-700 border border-amber-500/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    Featured Program
                  </span>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-xl sm:text-2xl text-accent-blue font-medium">
                {course.tagline}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm text-sm">
                <div>
                  <span className="text-xs font-mono text-secondary block mb-1">Muddada / Duration</span>
                  <div className="flex items-center gap-1.5 font-medium text-primary">
                    <Clock className="w-4 h-4 text-accent-blue" />
                    <span>{course.duration}</span>
                  </div>
                  {course.durationNote && (
                    <span className="text-[11px] text-secondary block mt-1 leading-snug">
                      {course.durationNote}
                    </span>
                  )}
                </div>
                <div>
                  <span className="text-xs font-mono text-secondary block mb-1">Heerka / Level</span>
                  <div className="flex items-center gap-1.5 font-medium text-primary">
                    <GraduationCap className="w-4 h-4 text-accent-purple" />
                    <span>{course.level}</span>
                  </div>
                  <span className="text-[11px] text-secondary block mt-1">
                    Bilaaw ilaa heer sare
                  </span>
                </div>
                <div>
                  <span className="text-xs font-mono text-secondary block mb-1">Luqadda / Language</span>
                  <div className="flex items-center gap-1.5 font-semibold text-emerald-700">
                    <Globe className="w-4 h-4 text-emerald-600" />
                    <span>{course.language}</span>
                  </div>
                  {course.languageNote && (
                    <span className="text-[11px] text-emerald-600 font-medium block mt-1 leading-snug">
                      {course.languageNote}
                    </span>
                  )}
                </div>
                <div>
                  <span className="text-xs font-mono text-secondary block mb-1">Habka / Format</span>
                  <div className="flex items-center gap-1.5 font-medium text-primary text-xs sm:text-sm">
                    <Video className="w-4 h-4 text-rose-500" />
                    <span>Videos + Mentorship</span>
                  </div>
                  <span className="text-[11px] text-secondary block mt-1">
                    Taageero toos ah oo 1-on-1 ah
                  </span>
                </div>
              </div>

              {/* Instructor Card */}
              <div className="flex items-center gap-4 p-4 bg-white/70 rounded-2xl border border-border/70 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0 border-2 border-accent-blue/30">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-secondary block">
                    Lead Instructor
                  </span>
                  <h3 className="font-heading font-bold text-lg text-primary">
                    {course.instructor.name}
                  </h3>
                  <p className="text-xs text-secondary">{course.instructor.role}</p>
                </div>
              </div>
            </div>

            {/* Right Sticky Enrollment Card (4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-lg space-y-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-sm">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-mono font-medium text-white/90 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                      Complete Video Course
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-xl text-primary mb-2">
                    Enroll & Access Course Videos
                  </h4>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    Get direct access to HD video tutorials, guided source code repositories, vibe coding prompt templates, and 1-on-1 instructor support.
                  </p>
                </div>

                <a
                  href={whatsappEnrollUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-base transition-all shadow-md hover:shadow-lg group text-center text-white bg-emerald-600 hover:bg-emerald-700"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-center text-xs text-secondary font-mono">
                  Direct Contact: <strong className="text-primary font-sans">+252 61 429 3433</strong>
                </p>

                <div className="border-t border-border pt-5 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-secondary block">
                    What You Get Immediately:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-primary">
                    {course.includedFeatures.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Step Bar */}
          {course.workflowSteps && (
            <div className="mb-20 bg-white rounded-3xl border border-border p-8 md:p-12 shadow-sm">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  Execution Methodology
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-3 mb-2">
                  From Idea to Production
                </h2>
                <p className="text-secondary text-sm md:text-base">
                  The step-by-step engineering cycle you will master in this course.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {course.workflowSteps.map((ws, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-background border border-border/70 relative hover:border-accent-blue/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary text-white font-mono text-xs flex items-center justify-center font-bold mb-4">
                      {ws.step}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-primary mb-1">
                      {ws.label}
                    </h3>
                    <p className="text-xs text-secondary leading-relaxed">
                      {ws.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Course Detailed Description & Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <section className="bg-white rounded-3xl border border-border p-8 md:p-12 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                  <MonitorPlay className="w-7 h-7 text-accent-blue" />
                  Course Overview & Description
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-secondary leading-relaxed">
                  {course.fullDescription.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </section>

              {/* Technologies Covered */}
              <section className="bg-white rounded-3xl border border-border p-8 md:p-12 shadow-sm">
                <div className="mb-8">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                    Industry Tools
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mt-3 mb-2 flex items-center gap-3">
                    <Code2 className="w-7 h-7 text-accent-purple" />
                    Technologies, Stacks & AI Assistants
                  </h2>
                  <p className="text-secondary text-sm">
                    Master modern programming languages, UI libraries, cloud providers, and AI tools used by top engineering teams.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {course.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-background border border-border/80 flex flex-col justify-between hover:border-accent-blue/30 transition-colors"
                    >
                      <span className="text-[10px] font-mono uppercase tracking-wider text-secondary mb-1">
                        {tech.category}
                      </span>
                      <h4 className="font-heading font-semibold text-sm text-primary">
                        {tech.name}
                      </h4>
                      {tech.badge && (
                        <span className="mt-2 text-[11px] font-medium text-accent-blue">
                          {tech.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Real-World Projects You Will Build */}
              {course.realWorldProjects && course.realWorldProjects.length > 0 && (
                <section className="bg-white rounded-3xl border border-border p-8 md:p-12 shadow-sm">
                  <div className="mb-8">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                      Proof of Work
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mt-3 mb-2 flex items-center gap-3">
                      <FolderGit2 className="w-7 h-7 text-emerald-600" />
                      Practical Commercial Projects You Will Build
                    </h2>
                    <p className="text-secondary text-sm">
                      No toy apps. You will build enterprise-grade, portfolio-ready systems solve real client operational challenges.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {course.realWorldProjects.map((proj, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-2xl bg-background border border-border flex flex-col justify-between hover:shadow-sm transition-all"
                      >
                        <div>
                          <span className="text-xs font-mono font-medium text-accent-blue block mb-2">
                            {proj.category}
                          </span>
                          <h3 className="font-heading font-bold text-xl text-primary mb-3">
                            {proj.title}
                          </h3>
                          <p className="text-secondary text-xs sm:text-sm leading-relaxed mb-4">
                            {proj.description}
                          </p>
                        </div>

                        <div className="border-t border-border/70 pt-3">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-secondary block mb-2">
                            Core Modules Built:
                          </span>
                          <ul className="space-y-1">
                            {proj.features.map((f, fi) => (
                              <li
                                key={fi}
                                className="text-xs text-primary flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Course Modules Breakdown */}
              <section className="bg-white rounded-3xl border border-border p-8 md:p-12 shadow-sm">
                <div className="mb-8">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                    Syllabus
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mt-3 mb-2 flex items-center gap-3">
                    <Layers className="w-7 h-7 text-accent-blue" />
                    Complete Course Curriculum & Modules
                  </h2>
                  <p className="text-secondary text-sm">
                    Structured step-by-step video lessons and coding sessions designed for mastery.
                  </p>
                </div>

                <div className="space-y-4">
                  {course.modules.map((mod, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-background border border-border/80 hover:border-accent-blue/40 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <h3 className="font-heading font-bold text-lg sm:text-xl text-primary">
                          {mod.title}
                        </h3>
                        {mod.duration && (
                          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white border border-border text-secondary shrink-0 w-fit">
                            {mod.duration}
                          </span>
                        )}
                      </div>

                      <p className="text-secondary text-sm mb-4 leading-relaxed">
                        {mod.description}
                      </p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-primary">
                        {mod.topics.map((t, ti) => (
                          <li key={ti} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Video Access & Course Delivery Notice */}
              <section className="p-8 md:p-10 bg-gradient-to-br from-emerald-600 to-teal-800 text-white rounded-3xl shadow-lg relative overflow-hidden">
                <div className="relative z-10 max-w-2xl space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-mono">
                    <Video className="w-4 h-4" />
                    Casharrada Muuqaalka & Helitaankooda (Video Lectures)
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold">
                    Sida Aad U Helayso Casharrada Muuqaalka Ah & Agabka Koorsada
                  </h3>
                  <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                    Dhammaan casharrada koorsada waxaa lagu duubay Af-Soomaali cad oo qotodheer. Marka aad toos igala soo xiriirto, waxaad si toos ah u heleysaa video modules-ka la habeeyay, starter repositories-ka GitHub, prompt templates-ka Vibe Coding-ka, iyo taageero toos ah oo 1-on-1 ah si koodhkaaga loo cillad-saaro loona hubiyo inaad mashruucaaga si guul leh u dhisto.
                  </p>
                  <div className="pt-2">
                    <a
                      href={whatsappEnrollUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-emerald-800 font-bold rounded-full hover:bg-emerald-50 transition-colors shadow-md text-sm sm:text-base"
                    >
                      <MessageCircle className="w-5 h-5 text-emerald-600" />
                      Ka Hel Casharrada Toos (+252 61 429 3433)
                    </a>
                  </div>
                </div>

                <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              </section>
            </div>

            {/* Right Column: Outcomes, Audience, Prerequisites */}
            <div className="lg:col-span-4 space-y-8">
              {/* Learning Outcomes */}
              <div className="bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-sm">
                <h3 className="font-heading font-bold text-xl text-primary mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-blue" />
                  What You Will Achieve
                </h3>
                <ul className="space-y-3">
                  {course.learningOutcomes.map((lo, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-primary">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{lo}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Is This Course For */}
              <div className="bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-sm">
                <h3 className="font-heading font-bold text-xl text-primary mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent-purple" />
                  Who This Course Is For
                </h3>
                <ul className="space-y-3">
                  {course.targetAudience.map((ta, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-purple shrink-0 mt-2" />
                      <span>{ta}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-sm">
                <h3 className="font-heading font-bold text-xl text-primary mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  Prerequisites
                </h3>
                <ul className="space-y-2.5">
                  {course.prerequisites.map((pr, i) => (
                    <li key={i} className="text-xs sm:text-sm text-secondary flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{pr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Contact Card */}
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-700 flex items-center justify-center mx-auto">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-emerald-900">
                  Have Questions Before Enrolling?
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Chat directly with instructor Mohamed Dacar to ask about the course schedule, learning support, or video lectures.
                </p>
                <a
                  href={whatsappEnrollUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium text-xs sm:text-sm transition-colors shadow-sm"
                >
                  Message Instructor
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
