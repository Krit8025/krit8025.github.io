import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { PROJECTS } from "@/data/projects";
import ProjectImageCard from "@/components/ProjectImageCard";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
      {/* Hero Section */}
      <section className="space-y-6 border-b border-[#1e2433] pb-12">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Krithik Kesav C
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-slate-200 leading-snug">
            Final year student of Mechanical Engineering at BITS Pilani, Hyderabad Campus
          </p>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed pt-1">
            Interested in Computational modelling using data driven approaches for analyzing mechanical systems.
          </p>
          <p className="text-sm sm:text-base text-slate-400 font-mono italic">
            P.S. I also love machining for fun :)
          </p>
        </div>

        {/* Action Buttons: Clean & Muted */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2 font-mono text-xs">
          <a
            href="https://github.com/Krit8025"
            target="_blank"
            rel="noopener noreferrer"
            className="smooth-btn-primary"
          >
            <GithubIcon className="w-4 h-4 text-slate-900" />
            <span>github.com/Krit8025</span>
          </a>

          <Link
            href="/projects"
            className="smooth-btn-secondary"
          >
            <span>Browse Project Descriptions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Main Section: Visual Projects Directory (Image-Only Cards) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#1e2433] pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">
              Featured Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-slate-100 tracking-tight">
              Projects Showcase
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-400">
            Hover over image to view title • Click to read further
          </p>
        </div>

        {/* 2-Column Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {PROJECTS.map((project, idx) => (
            <ProjectImageCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* Bottom Switcher: Leads to Textual Projects List */}
      <section className="p-6 sm:p-7 rounded-xl border border-[#1e2433] bg-[#10141e] hover:border-slate-600 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-mono text-base font-bold text-slate-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-slate-400" />
            Looking for detailed project descriptions?
          </h3>
        </div>

        <Link
          href="/projects"
          className="smooth-btn-secondary shrink-0"
        >
          <span>Open Projects Directory</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </main>
  );
}
