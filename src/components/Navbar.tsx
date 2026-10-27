"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderGit2, LayoutGrid } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0d0f14]/85 border-b border-[#232738]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Terminal Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 group font-mono text-sm tracking-tight text-zinc-300 hover:text-white transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
          <span className="text-emerald-300 font-semibold">krit8025</span>
          <span className="text-zinc-600">:~$</span>
          <span className="hidden sm:inline text-zinc-400 group-hover:text-zinc-200 transition-colors">
            portfolio
          </span>
        </Link>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-3 text-xs sm:text-sm font-mono">
          <Link
            href="/"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all border ${
              pathname === "/"
                ? "bg-[#181b26] text-emerald-200 border-emerald-500/30 shadow-sm"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-[#151722] border-transparent"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Visual Gallery</span>
          </Link>

          <Link
            href="/projects"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all border ${
              pathname === "/projects" || pathname.startsWith("/projects/")
                ? "bg-[#181b26] text-purple-200 border-purple-500/30 shadow-sm"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-[#151722] border-transparent"
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>All Projects</span>
          </Link>

          <a
            href="https://github.com/Krit8025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-[#151722] transition-colors border border-transparent"
            title="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span className="hidden md:inline">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

