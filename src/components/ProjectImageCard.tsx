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
      className="group relative block w-full rounded-xl overflow-hidden border border-[#232738] bg-[#141722] hover:border-zinc-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
      style={{
        display: "block",
        position: "relative",
        borderRadius: "0.75rem",
        overflow: "hidden",
        backgroundColor: "#141722",
      }}
    >
      {/* 16:10 Aspect Ratio Container */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden bg-[#0d0f15]"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          minHeight: "220px",
          overflow: "hidden",
          backgroundColor: "#0d0f15",
        }}
      >
        {!imageError ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-[0.88] contrast-[1.05] group-hover:brightness-100"
            style={{ objectFit: "cover", objectPosition: "center" }}
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-zinc-500 bg-[#12151e]">
            <FolderGit2 className="w-12 h-12 mb-2 text-zinc-600" />
            <span className="font-mono text-xs">{project.name}</span>
          </div>
        )}

        {/* Retro Grid Lines Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14]/90 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity pointer-events-none" />

        {/* Hover Overlay: Dark Retro Panel Revealing Title */}
        <div className="absolute inset-0 bg-[#0d0f15]/85 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex flex-col justify-between p-5 sm:p-6">
          {/* Top Row: Index number & tag */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-500 font-mono">
              0{index + 1} // REPO
            </span>
            <span
              className="px-2 py-0.5 rounded text-[11px] font-mono border"
              style={{
                borderColor: `${project.accentHex}40`,
                color: project.accentHex,
                backgroundColor: `${project.accentHex}10`,
              }}
            >
              {project.tags[0] || "Engineering"}
            </span>
          </div>

          {/* Center / Bottom: Title & Action */}
          <div className="space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-250">
            <h3 className="font-mono text-base sm:text-lg font-semibold text-zinc-100 leading-snug">
              {project.title}
            </h3>

            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-emerald-300 transition-colors pt-1">
              <span>View Documentation &amp; README</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>

        {/* Corner Retro Pastel Accent Marker */}
        <div
          className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"
          style={{
            background: `linear-gradient(135deg, transparent 50%, ${project.accentHex}40 50%)`,
          }}
        />
      </div>
    </Link>
  );
}
