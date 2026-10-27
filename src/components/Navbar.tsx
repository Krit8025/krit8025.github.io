"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderGit2, LayoutGrid, Gamepad2 } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#fbf9f4]/95 border-b-2 border-[#1f222e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Retro Gaming Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group font-mono text-sm tracking-tight text-[#1f222e] hover:opacity-85 transition-opacity"
        >
          <div className="w-8 h-8 rounded-md bg-[#bbf7d0] border-2 border-[#1f222e] shadow-[2px_2px_0px_#1f222e] flex items-center justify-center">
            <Gamepad2 className="w-4 h-4 text-[#1f222e]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight leading-none text-[#1f222e]">
              Krithik Kesav
            </span>
            <span className="text-[10px] font-mono text-zinc-600 tracking-wider">
              [PRESS START]
            </span>
          </div>
        </Link>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono font-semibold">
          <Link
            href="/"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 border-[#1f222e] transition-all ${
              pathname === "/"
                ? "bg-[#bbf7d0] shadow-[2px_2px_0px_#1f222e] translate-x-[-1px] translate-y-[-1px]"
                : "bg-white hover:bg-[#fed7aa] shadow-[1px_1px_0px_#1f222e] hover:shadow-[2px_2px_0px_#1f222e]"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Gallery</span>
          </Link>

          <Link
            href="/projects"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 border-[#1f222e] transition-all ${
              pathname === "/projects" || pathname.startsWith("/projects/")
                ? "bg-[#ddd6fe] shadow-[2px_2px_0px_#1f222e] translate-x-[-1px] translate-y-[-1px]"
                : "bg-white hover:bg-[#fed7aa] shadow-[1px_1px_0px_#1f222e] hover:shadow-[2px_2px_0px_#1f222e]"
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Projects</span>
          </Link>

          <a
            href="https://github.com/Krit8025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#bae6fd] border-2 border-[#1f222e] shadow-[1px_1px_0px_#1f222e] hover:shadow-[2px_2px_0px_#1f222e] transition-all"
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
