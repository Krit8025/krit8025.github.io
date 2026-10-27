"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderGit2, LayoutGrid } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090d14]/85 border-b border-[#1e293b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group font-mono text-sm tracking-tight text-slate-200 hover:text-white transition-colors"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)] animate-pulse" />
          <span className="font-bold text-sm tracking-tight text-white group-hover:text-sky-300 transition-colors">
            Krithik Kesav
          </span>
          <span className="hidden sm:inline text-xs text-sky-400/60 font-mono">
            /portfolio
          </span>
        </Link>

        {/* Navigation Tabs with Smooth Transitions */}
        <nav className="flex items-center gap-1.5 sm:gap-2.5 text-xs sm:text-sm font-mono font-medium">
          <Link
            href="/"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all duration-200 ${
              pathname === "/"
                ? "bg-sky-500/15 text-sky-200 border-sky-400/40 shadow-[0_0_14px_rgba(56,189,248,0.15)]"
                : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.04] border-transparent"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Gallery</span>
          </Link>

          <Link
            href="/projects"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all duration-200 ${
              pathname === "/projects" || pathname.startsWith("/projects/")
                ? "bg-sky-500/15 text-sky-200 border-sky-400/40 shadow-[0_0_14px_rgba(56,189,248,0.15)]"
                : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.04] border-transparent"
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Projects</span>
          </Link>

          <a
            href="https://github.com/Krit8025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-sky-200 hover:bg-white/[0.04] transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
