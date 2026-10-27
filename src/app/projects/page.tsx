import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FolderGit2 } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export const metadata = {
  title: "Projects Directory | Krithik Kesav",
  description: "Public repositories and technical project descriptions.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-4 border-b border-[#1e293b] pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>← Back to Visual Gallery</span>
        </Link>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-sky-500/10 border border-sky-400/30 text-sky-300">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>ALL REPOSITORIES // DIRECTORY</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-mono font-bold tracking-tight text-white">
            All Projects &amp; Repositories
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-2xl leading-relaxed">
            Click anywhere on a project card to inspect its full README documentation and architectural breakdown.
          </p>
        </div>
      </section>

      {/* Projects List - Entire Card is Clickable */}
      <section className="space-y-5">
        {PROJECTS.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative block p-6 sm:p-7 rounded-xl border border-[#1e293b] bg-[#111723] hover:border-sky-400/50 hover:bg-[#141b2a] shadow-lg hover:shadow-[0_12px_32px_-10px_rgba(56,189,248,0.2)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
          >
            <div className="space-y-3">
              {/* Header row: Index */}
              <div className="flex items-center justify-between gap-2 text-xs font-mono">
                <span className="font-semibold text-sky-300 bg-sky-950/70 px-2.5 py-0.5 rounded border border-sky-500/30">
                  [{String(index + 1).padStart(2, "0")}] {project.name}
                </span>

                <span className="text-xs font-mono text-sky-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:inline-flex items-center gap-1">
                  <span>Open Documentation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-mono font-bold text-white group-hover:text-sky-300 transition-colors">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {project.description}
              </p>
            </div>

            {/* Bottom Info Row */}
            <div className="flex items-center justify-between pt-3 mt-4 border-t border-[#1a2335] text-xs font-mono text-slate-400">
              <span className="font-medium text-sky-400/90 flex items-center gap-1 group-hover:underline">
                → Click anywhere to read README
              </span>

              <span className="text-slate-500">
                Branch: {project.defaultBranch}
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
