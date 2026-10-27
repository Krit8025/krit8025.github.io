"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

interface ProjectImageCardProps {
  project: Project;
  index: number;
}

export default function ProjectImageCard({ project, index }: ProjectImageCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block w-full rounded-xl overflow-hidden border border-[#1f1f23] bg-[#0a0a0d] hover:border-amber-500/50 transition-all duration-300 shadow-sm hover:shadow-[0_4px_20px_rgba(234,179,8,0.06)] hover:-translate-y-1"
    >
      {/* Uniform Clean White Canvas Container */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden bg-white flex items-center justify-center p-3"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          minHeight: "220px",
          overflow: "hidden",
        }}
      >
        {!imageError ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-3 transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            style={{ objectFit: "contain", objectPosition: "center" }}
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-zinc-500 bg-zinc-100">
            <FolderGit2 className="w-12 h-12 mb-2 text-zinc-600" />
            <span className="font-mono text-xs text-zinc-700">{project.name}</span>
          </div>
        )}

        {/* Persistent Corner Tag Pill (Secondary Warm Yellow Accent) */}
        <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-amber-300 bg-[#000000]/95 border border-amber-500/40 shadow-sm z-10 group-hover:opacity-0 transition-opacity duration-150">
          {project.tag}
        </div>

        {/* Hover Overlay: Pure Black Matte with Title & Action */}
        <div className="absolute inset-0 bg-[#000000]/95 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-200 flex flex-col justify-between p-5 sm:p-6 z-20">
          {/* Top Row: Index and Tag */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="px-2 py-0.5 rounded text-xs font-medium text-zinc-400 bg-white/[0.06] border border-white/10">
              0{index + 1}
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-xs font-medium text-amber-300 bg-amber-500/15 border border-amber-500/30">
              {project.tag}
            </span>
          </div>

          {/* Center / Bottom: Title & Action */}
          <div className="space-y-2.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
            <h3 className="font-mono text-base sm:text-lg font-bold text-white leading-snug">
              {project.title}
            </h3>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-400 hover:bg-amber-300 text-black font-mono text-xs font-semibold transition-colors">
              <span>Click to read further</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
