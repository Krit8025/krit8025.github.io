import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FolderGit2 } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export const metadata = {
  title: "Engineering and Research Projects | Krithik Kesav C",
  description: "Engineering and research projects across computational modeling and mechanics.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-4 border-b border-[#1e2433] pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>← Back to Home</span>
        </Link>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO DIRECTORY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-slate-100">
            Engineering and Research Projects
          </h1>
        </div>
      </section>

      {/* Projects List - Entire Card is Clickable */}
      <section className="space-y-5">
        {PROJECTS.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative block p-6 sm:p-7 rounded-xl border border-[#1e2433] bg-[#10141e] hover:border-slate-500 hover:bg-[#131926] transition-all duration-200 cursor-pointer"
          >
            <div className="space-y-3">
              {/* Header row: Index & Project Tag */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="font-semibold text-slate-300 bg-slate-800 px-2.5 py-0.5 rounded border border-slate-700">
                  [{String(index + 1).padStart(2, "0")}] {project.name}
                </span>

                <span className="px-3 py-0.5 rounded text-xs font-medium font-mono text-slate-300 bg-slate-800 border border-slate-700">
                  {project.tag}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-2xl font-mono font-bold text-slate-100 group-hover:text-white transition-colors flex items-center justify-between gap-3">
                <span>{project.title}</span>
                <span className="text-xs font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:inline-flex items-center gap-1 shrink-0">
                  <span>Read Documentation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {project.description}
              </p>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between pt-3 mt-4 border-t border-[#18202d] text-xs font-mono text-slate-400">
              <span className="font-medium text-slate-400 group-hover:text-slate-200 flex items-center gap-1 group-hover:underline">
                → Click anywhere to read further
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
