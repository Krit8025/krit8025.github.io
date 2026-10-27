import { ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#1f222e] bg-[#f5f1e8] mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#1f222e]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="font-semibold">Krithik Kesav</span>
          <span>•</span>
          <span className="text-zinc-600">Pastel Retro Gaming Edition</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Krit8025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border-2 border-[#1f222e] shadow-[2px_2px_0px_#1f222e] hover:bg-[#bbf7d0] hover:-translate-y-0.5 transition-all font-semibold"
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
