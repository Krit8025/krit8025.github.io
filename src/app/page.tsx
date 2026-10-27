import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { PROJECTS } from "@/data/projects";
import ProjectImageCard from "@/components/ProjectImageCard";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14">
      {/* Hero Section */}
      <section className="space-y-6 border-b border-[#1e293b] pb-12">
        {/* Pastel Blue Tag Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 border border-sky-400/30 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.15)]">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse inline-block" />
          <span>Engineering Portfolio</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-white">
            Krithik Kesav
          </h1>
          <p className="text-base sm:text-lg text-sky-200/90 font-medium leading-relaxed">
            Final year student of Mechanical Engineering at BITS Pilani, Hyderabad Campus
          </p>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed pt-1">
            Interested in Computational modelling using data driven approaches for analyzing mechanical systems.
          </p>
          <p className="text-xs sm:text-sm text-sky-400/90 font-mono italic">
            P.S. I also love machining for fun.
          </p>
        </div>

        {/* Action Buttons with Smooth Transitions */}
        <div className="flex flex-wrap items-center gap-3 pt-3 font-mono text-xs">
          <a
            href="https://github.com/Krit8025"
            target="_blank"
            rel="noopener noreferrer"
            className="smooth-btn-primary"
          >
            <GithubIcon className="w-4 h-4 text-slate-950" />
            <span>github.com/Krit8025</span>
          </a>

          <Link
            href="/projects"
            className="smooth-btn-secondary"
          >
            <span>Browse Project Descriptions</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Main Section: Visual Projects Directory (Image-Only Cards) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#1e293b] pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-sky-400/70 font-semibold tracking-wider">
              DIRECTORY // VISUAL GALLERY
            </span>
            <h2 className="text-xl sm:text-2xl font-mono font-bold text-white">
              Projects Showcase
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400">
            Hover over cards to view title • Click to inspect documentation
          </p>
        </div>

        {/* 2-Column Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <ProjectImageCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* Bottom Switcher: Leads to Textual Projects List */}
      <section className="p-6 rounded-xl border border-[#1e293b] bg-[#111723] hover:border-sky-400/40 transition-all duration-300 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-mono text-sm font-semibold text-slate-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
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
