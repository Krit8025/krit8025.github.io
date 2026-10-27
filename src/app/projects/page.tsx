import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FolderGit2, Gamepad2 } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { PROJECTS } from "@/data/projects";

export const metadata = {
  title: "Projects Directory | Krithik Kesav",
  description: "Public repositories and technical project descriptions.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10">
      {/* Header */}
      <section className="space-y-4 border-b-2 border-[#1f222e] pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-700 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>← Back to Visual Gallery</span>
        </Link>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#ddd6fe] border-2 border-[#1f222e] shadow-[2px_2px_0px_#1f222e] text-[#1f222e]">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>ALL REPOSITORIES // LEVEL SELECT</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-mono font-bold tracking-tight text-[#1f222e]">
            All Projects &amp; Repositories
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 font-sans max-w-2xl leading-relaxed">
            Click anywhere on a project card to open its full README documentation and architectural breakdown.
          </p>
        </div>
      </section>

      {/* Projects List - Entire Card is Clickable */}
      <section className="space-y-5">
        {PROJECTS.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative block p-6 sm:p-7 rounded-xl border-2 border-[#1f222e] bg-white shadow-[4px_4px_0px_#1f222e] hover:shadow-[7px_7px_0px_#1f222e] hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          >
            <div className="space-y-3">
              {/* Header row: Index & Tags */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="font-bold text-[#1f222e] bg-[#f3efe6] px-2 py-0.5 rounded border border-[#1f222e]/40">
                  [{String(index + 1).padStart(2, "0")}] {project.name}
                </span>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border-2 border-[#1f222e]"
                      style={{ backgroundColor: project.accentHex }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-mono font-bold text-[#1f222e] group-hover:text-emerald-700 transition-colors flex items-center justify-between gap-2">
                <span>{project.title}</span>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#1f222e] text-white opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-flex items-center gap-1">
                  <span>Open Docs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </h2>

              {/* Description */}
              <p className="text-sm text-zinc-700 leading-relaxed font-sans">
                {project.description}
              </p>
            </div>

            {/* Bottom Info Row */}
            <div className="flex items-center justify-between pt-3 mt-4 border-t border-zinc-200 text-xs font-mono text-zinc-600">
              <span className="font-semibold text-emerald-800 flex items-center gap-1 group-hover:underline">
                → Click anywhere on this box to read README
              </span>

              <span className="text-zinc-500">
                Branch: {project.defaultBranch}
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
