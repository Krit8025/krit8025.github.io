import Link from "next/link";
import Image from "next/image";
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
      <section className="space-y-4 border-b border-[#272935] pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>← Back to Home</span>
        </Link>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <FolderGit2 className="w-3.5 h-3.5 text-amber-400" />
            <span>PORTFOLIO DIRECTORY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-amber-400">
            Engineering and Research Projects
          </h1>
        </div>
      </section>

      {/* Projects List - Each with Image & Entire Card Clickable */}
      <section className="space-y-6">
        {PROJECTS.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative flex flex-col sm:flex-row gap-6 p-6 sm:p-7 rounded-xl border border-[#272935] bg-[#17181e] hover:border-amber-500/50 hover:bg-[#1e1f28] transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[0_4px_24px_rgba(234,179,8,0.06)]"
          >
            {/* Project Image Thumbnail */}
            <div className="relative w-full sm:w-56 aspect-[16/10] bg-white rounded-lg overflow-hidden shrink-0 border border-[#272935] p-2 flex items-center justify-center">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, 224px"
                className="object-contain p-2 transition-transform duration-300 ease-out group-hover:scale-105"
                style={{ objectFit: "contain", objectPosition: "center" }}
                unoptimized
              />
            </div>

            {/* Project Info & Description */}
            <div className="flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-2.5">
                {/* Header row: Index & Project Tag (Yellow on and inside brackets) */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="font-semibold text-amber-400 bg-[#13141a] px-2.5 py-0.5 rounded border border-amber-500/30">
                    [{String(index + 1).padStart(2, "0")}] <span className="text-amber-300 font-medium">{project.name}</span>
                  </span>

                  <span className="px-3 py-0.5 rounded text-xs font-medium font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30">
                    {project.tag}
                  </span>
                </div>

                {/* Title in Yellow */}
                <h2 className="text-lg sm:text-xl font-mono font-bold text-amber-300 group-hover:text-amber-200 transition-colors flex items-center justify-between gap-3">
                  <span>{project.title}</span>
                  <span className="text-xs font-mono text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:inline-flex items-center gap-1 shrink-0">
                    <span>Read Documentation</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </h2>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-between pt-2 text-xs font-mono text-zinc-400">
                <span className="font-medium text-zinc-400 group-hover:text-amber-300 flex items-center gap-1 group-hover:underline">
                  → Click anywhere to read further
                </span>

                <span className="text-zinc-500">
                  Branch: {project.defaultBranch}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
