import Link from "next/link";
import { ArrowRight, Terminal, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { PROJECTS } from "@/data/projects";
import ProjectImageCard from "@/components/ProjectImageCard";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
      {/* Hero: Name, Brief Description, Plain and Simple */}
      <section className="space-y-6 border-b border-[#232738] pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#151824] border border-[#262c3e] text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span>Mechanical &amp; Aerospace Engineering • Computational Systems</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-zinc-100">
            Hi, I&apos;m <span className="text-emerald-300">Krithik</span>.
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-sans">
            I build computational solvers, optimization models, and engineering prototypes—ranging from supersonic nozzle contours and shrouded aerodynamic propellers to vibration fault diagnostics and suspension systems.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
          <a
            href="https://github.com/Krit8025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161a25] hover:bg-[#1f2434] text-zinc-200 border border-[#2b3245] hover:border-emerald-400/50 transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5 text-emerald-300" />
            <span>github.com/Krit8025</span>
          </a>

          <Link
            href="/projects"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161a25] hover:bg-[#1f2434] text-purple-200 border border-[#2b3245] hover:border-purple-400/50 transition-all"
          >
            <span>Browse Project Descriptions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Main Section: Visual Projects Directory (Image-Only Cards) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#1f2434] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <Terminal className="w-3.5 h-3.5 text-emerald-300" />
              <span>DIRECTORY // VISUAL GALLERY</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-mono font-semibold text-zinc-200">
              Projects Showcase
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-500">
            Hover over cards to view title • Click to read documentation
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
      <section className="p-6 rounded-xl border border-[#232738] bg-[#11141c] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-mono text-sm font-semibold text-zinc-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            Looking for detailed project descriptions?
          </h3>
          <p className="text-xs text-zinc-400 font-sans">
            Explore the repository catalog with full descriptions, methodologies, and direct README access.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs bg-[#191d2a] hover:bg-[#22283a] text-purple-200 border border-purple-500/30 hover:border-purple-400 transition-all shrink-0"
        >
          <span>Open Projects Directory</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </main>
  );
}
