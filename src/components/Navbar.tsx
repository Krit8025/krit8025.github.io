"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderGit2, Home as HomeIcon, Mail } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { LinkedinIcon } from "@/components/LinkedinIcon";

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

        {/* Navigation & Contact Icons */}
        <div className="flex items-center gap-3">
          {/* Main Navigation Tabs */}
          <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-mono font-medium">
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
          </nav>

          {/* Clear Separation Divider */}
          <div className="h-5 w-px bg-slate-700" aria-hidden="true" />

          {/* Contact Icons Only */}
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/Krit8025"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors"
              title="GitHub: Krit8025"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/krithik-kesav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors"
              title="LinkedIn: krithik-kesav"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:krithik2985@gmail.com"
              className="p-2 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors"
              title="Email: krithik2985@gmail.com"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
