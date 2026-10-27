import { Code2, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[#232738] bg-[#0b0c10] mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-zinc-600" />
          <span>Crafted with Next.js &amp; Tailwind CSS</span>
          <span>•</span>
          <span className="text-zinc-400">Retro Dark Edition</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Krit8025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-emerald-300 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>github.com/Krit8025</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

