import Link from "next/link";
import { ArrowRight, Gamepad2, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { PROJECTS } from "@/data/projects";
import ProjectImageCard from "@/components/ProjectImageCard";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12">
      {/* Hero: Tag, Intro, Plain and Simple Retro Gaming Vibe */}
      <section className="space-y-5 border-b-2 border-[#1f222e] pb-10">
        {/* Retro Gaming Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#bbf7d0] border-2 border-[#1f222e] shadow-[2px_2px_0px_#1f222e] text-[#1f222e]">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping inline-block" />
          <span>Engineering Portfolio</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-[#1f222e]">
            Krithik Kesav
          </h1>
          <p className="text-base sm:text-xl font-medium text-zinc-700 max-w-2xl leading-relaxed">
            Final year student of Mechanical Engineering at BITS Pilani, Hyderabad Campus
          </p>
        </div>

        {/* Quick Modern Retro Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
          <a
            href="https://github.com/Krit8025"
            target="_blank"
            rel="noopener noreferrer"
            className="retro-button bg-[#bbf7d0] hover:bg-[#86efac] text-[#1f222e]"
          >
            <GithubIcon className="w-4 h-4" />
            <span>github.com/Krit8025</span>
          </a>

          <Link
            href="/projects"
            className="retro-button bg-[#ddd6fe] hover:bg-[#c4b5fd] text-[#1f222e]"
          >
            <span>Browse Project Descriptions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Main Section: Visual Projects Directory (Image-Only Cards) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b-2 border-[#1f222e] pb-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-600">
              <Gamepad2 className="w-4 h-4 text-emerald-700" />
              <span>[STAGE SELECT] // VISUAL GALLERY</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-mono font-bold text-[#1f222e]">
              Projects Showcase
            </h2>
          </div>
          <p className="text-xs font-mono font-semibold text-zinc-600">
            Hover over cards to view title • Click to read documentation
          </p>
        </div>

        {/* 2-Column Responsive Image Grid with Retro Gaming Shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <ProjectImageCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* Bottom Switcher: Leads to Textual Projects List */}
      <section className="p-6 rounded-xl border-2 border-[#1f222e] bg-white shadow-[4px_4px_0px_#1f222e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-mono text-sm font-bold text-[#1f222e] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Looking for detailed project descriptions?
          </h3>
        </div>

        <Link
          href="/projects"
          className="retro-button bg-[#fef08a] hover:bg-[#fde047] text-[#1f222e] shrink-0"
        >
          <span>Open Projects Directory</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </main>
  );
}
