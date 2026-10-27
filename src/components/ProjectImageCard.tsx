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
      className="group relative block w-full rounded-xl overflow-hidden border border-[#1e2433] bg-[#111622] hover:border-slate-500 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
    >
      {/* 16:10 Container with full image containment */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c1018]"
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
            className="object-contain p-2 transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            style={{ objectFit: "contain", objectPosition: "center" }}
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-500 bg-[#0d121c]">
            <FolderGit2 className="w-12 h-12 mb-2 text-slate-600" />
            <span className="font-mono text-xs">{project.name}</span>
          </div>
        )}

        {/* Persistent Corner Tag Pill (hidden when hovered to prevent double-tag) */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-slate-300 bg-[#0e131d]/90 border border-slate-700 shadow-sm z-10 group-hover:opacity-0 transition-opacity duration-200">
          {project.tag}
        </div>

        {/* Hover Overlay: Clean Matte Overlay with Title & Action */}
        <div className="absolute inset-0 bg-[#0b0f17]/92 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-200 flex flex-col justify-between p-5 sm:p-6 z-20">
          {/* Top Row: Index and Tag */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="px-2 py-0.5 rounded text-xs font-medium text-slate-400 bg-white/[0.05] border border-white/10">
              0{index + 1}
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-xs font-medium text-slate-200 bg-slate-800 border border-slate-700">
              {project.tag}
            </span>
          </div>

          {/* Center / Bottom: Title & Action */}
          <div className="space-y-2.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
            <h3 className="font-mono text-base sm:text-lg font-bold text-slate-100 leading-snug">
              {project.title}
            </h3>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-200 hover:bg-white text-slate-900 font-mono text-xs font-semibold transition-colors">
              <span>Click to read further</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
