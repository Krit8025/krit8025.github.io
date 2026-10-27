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
      className="group relative block w-full rounded-xl overflow-hidden border-2 border-[#1f222e] bg-white shadow-[4px_4px_0px_#1f222e] hover:shadow-[7px_7px_0px_#1f222e] hover:-translate-y-1 transition-all duration-200"
    >
      {/* 16:10 Aspect Ratio Container */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden bg-[#f0ebe1]"
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
            className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
            style={{ objectFit: "cover", objectPosition: "center" }}
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-zinc-500 bg-[#f7f3ec]">
            <FolderGit2 className="w-12 h-12 mb-2 text-zinc-600" />
            <span className="font-mono text-xs">{project.name}</span>
          </div>
        )}

        {/* Hover Overlay: Pure Title and Action */}
        <div className="absolute inset-0 bg-[#ffffff]/92 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-200 flex flex-col justify-between p-5 sm:p-6 border-b-2 border-[#1f222e]">
          {/* Top Row: Stage / Level number */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="px-2 py-0.5 rounded font-bold bg-[#1f222e] text-white">
              STAGE 0{index + 1}
            </span>
          </div>

          {/* Center / Bottom: Title & Action */}
          <div className="space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
            <h3 className="font-mono text-base sm:text-lg font-bold text-[#1f222e] leading-snug">
              {project.title}
            </h3>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1f222e] text-white text-xs font-mono font-bold shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
              <span>Inspect Documentation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
