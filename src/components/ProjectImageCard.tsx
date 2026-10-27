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
      className="group relative block w-full rounded-xl overflow-hidden border border-[#1f2633] bg-[#111622] hover:border-sky-400/50 transition-all duration-300 ease-out shadow-lg hover:shadow-[0_16px_36px_-10px_rgba(56,189,248,0.22)] hover:-translate-y-1.5"
    >
      {/* 16:10 Aspect Ratio Container */}
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
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-[0.92] contrast-[1.05] group-hover:brightness-100"
            style={{ objectFit: "cover", objectPosition: "center" }}
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-500 bg-[#0d121c]">
            <FolderGit2 className="w-12 h-12 mb-2 text-slate-600" />
            <span className="font-mono text-xs">{project.name}</span>
          </div>
        )}

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d14]/85 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

        {/* Persistent Corner Tag Pill (discreet and executive) */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-sky-200 bg-[#0c121e]/85 backdrop-blur-md border border-sky-400/30 shadow-sm z-10 group-hover:opacity-0 transition-opacity duration-200">
          {project.tag}
        </div>

        {/* Hover Overlay: Dark Glass with High Legibility */}
        <div className="absolute inset-0 bg-[#0a0f19]/90 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col justify-between p-5 sm:p-6">
          {/* Top Row: Index and Tag */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="px-2.5 py-0.5 rounded text-xs font-medium text-slate-400 bg-white/[0.06] border border-white/10">
              0{index + 1}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-sky-200 bg-sky-500/20 border border-sky-400/30">
              {project.tag}
            </span>
          </div>

          {/* Center / Bottom: Title & Action */}
          <div className="space-y-2.5 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <h3 className="font-mono text-base sm:text-lg font-bold text-white leading-snug">
              {project.title}
            </h3>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-400 text-slate-950 font-mono text-xs font-bold shadow-[0_2px_10px_rgba(56,189,248,0.3)] transition-transform group-hover:translate-x-0.5">
              <span>Click to read further</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
