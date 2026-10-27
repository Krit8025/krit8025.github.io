import { ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2433] bg-[#070a0f] mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-slate-500" />
          <span className="font-medium text-slate-300">Krithik Kesav C</span>
          <span>•</span>
          <span className="text-slate-500">BITS Pilani, Hyderabad Campus</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Krit8025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#10141e] border border-[#1e2433] hover:border-slate-600 hover:text-slate-200 transition-colors font-medium text-slate-300"
          >
            <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
            <span>github.com/Krit8025</span>
            <ArrowUpRight className="w-3 h-3 text-slate-500" />
          </a>
        </div>
      </div>
    </footer>
  );
}
