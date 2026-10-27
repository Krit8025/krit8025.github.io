import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FolderGit2, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { PROJECTS } from "@/data/projects";

export const metadata = {
  title: "Projects Directory | Krithik",
  description: "Public repositories and technical project descriptions.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Header */}
      <section className="space-y-4 border-b border-[#232738] pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-emerald-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Visual Gallery</span>
        </Link>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
            <FolderGit2 className="w-4 h-4" />
            <span>02 // REPOSITORIES DIRECTORY</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-mono font-bold tracking-tight text-zinc-100">
            All Projects &amp; Repositories
          </h1>
          <p className="text-sm text-zinc-400 font-sans max-w-2xl leading-relaxed">
            A comprehensive catalog of public repositories with project summaries. Select any project to inspect its full README documentation and code structure.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="space-y-6">
        {PROJECTS.map((project, index) => (
          <div
            key={project.slug}
            className="p-6 sm:p-7 rounded-xl border border-[#232738] bg-[#131620] hover:bg-[#171a27] hover:border-zinc-500/40 transition-all duration-250 flex flex-col justify-between gap-6 group"
          >
            <div className="space-y-3">
              {/* Header row: Index & Tags */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-zinc-500">
                  [{String(index + 1).padStart(2, "0")}] {project.name}
                </span>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono border"
                      style={{
                        borderColor: `${project.accentHex}30`,
                        color: project.accentHex,
                        backgroundColor: `${project.accentHex}10`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-mono font-semibold text-zinc-100 group-hover:text-white transition-colors">
                <Link
                  href={`/projects/${project.slug}`}
                  className="hover:underline underline-offset-4 decoration-zinc-600 hover:decoration-emerald-400"
                >
                  {project.title}
                </Link>
              </h2>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                {project.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#1c2130] text-xs font-mono">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#181d2a] hover:bg-[#202738] text-emerald-200 border border-emerald-500/30 hover:border-emerald-400 transition-all"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Full Documentation</span>
              </Link>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors py-2 px-1"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Source on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

