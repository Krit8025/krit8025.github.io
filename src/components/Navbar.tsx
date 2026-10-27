"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderGit2, Home as HomeIcon } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0e14]/90 border-b border-[#1e2433]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 group font-mono text-sm tracking-tight text-slate-200 hover:text-white transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-slate-400" />
          <span className="font-semibold text-sm tracking-tight text-slate-200 group-hover:text-white transition-colors">
            Engineering Portfolio - Krithik Kesav C
          </span>
        </Link>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 sm:gap-2.5 text-xs sm:text-sm font-mono font-medium">
          <Link
            href="/"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border transition-colors ${
              pathname === "/"
                ? "bg-slate-800 text-slate-100 border-slate-700"
                : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 border-transparent"
            }`}
          >
            <HomeIcon className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          <Link
            href="/projects"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border transition-colors ${
              pathname === "/projects" || pathname.startsWith("/projects/")
                ? "bg-slate-800 text-slate-100 border-slate-700"
                : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 border-transparent"
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Projects</span>
          </Link>

          <a
            href="https://github.com/Krit8025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 transition-colors"
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
