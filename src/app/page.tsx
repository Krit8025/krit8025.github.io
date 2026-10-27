import Link from "next/link";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import ProjectImageCard from "@/components/ProjectImageCard";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
      {/* Hero Section */}
      <section className="space-y-6 border-b border-[#272935] pb-12">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-amber-400 leading-tight">
            Krithik Kesav C
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-zinc-100 leading-snug">
            Final year student of Mechanical Engineering at BITS Pilani, Hyderabad Campus
          </p>
          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed pt-1">
            Interested in Computational modelling using data driven approaches for analyzing mechanical systems.
          </p>
          <p className="text-sm sm:text-base text-zinc-400 font-mono italic">
            P.S. I also love machining for fun <span className="text-amber-400 not-italic font-sans font-bold">:)</span>
          </p>
        </div>

        {/* Action Buttons: Only Email, Resume, Browse Projects */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2 font-mono text-xs">
          <a
            href="mailto:krithik2985@gmail.com"
            className="smooth-btn-secondary"
          >
            <Mail className="w-4 h-4 text-zinc-300" />
            <span>Email</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="smooth-btn-primary"
            title="Open Resume in new tab"
          >
            <FileText className="w-4 h-4 text-black" />
            <span>Resume</span>
          </a>

          <Link
            href="/projects"
            className="smooth-btn-secondary"
          >
            <span>Browse Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Main Section: Visual Projects Directory (Image-Only Cards) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#272935] pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
              Featured Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-amber-400 tracking-tight">
              Projects Showcase
            </h2>
          </div>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[#181920] border border-[#272935] text-sm sm:text-[14px] font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <span className="text-zinc-200 font-medium">Hover over image for details</span>
            <span className="text-zinc-500">•</span>
            <span className="text-amber-400 font-semibold">Click to read further</span>
          </div>
        </div>

        {/* 2-Column Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {PROJECTS.map((project, idx) => (
            <ProjectImageCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </section>
    </main>
  );
}
