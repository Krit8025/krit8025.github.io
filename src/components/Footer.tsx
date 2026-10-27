import { Mail, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { LinkedinIcon } from "@/components/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f23] bg-[#000000] mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
          <span className="font-medium text-zinc-300">Krithik Kesav C</span>
          <span>•</span>
          <span className="text-zinc-500">BITS Pilani, Hyderabad Campus</span>
        </div>

        {/* Contact Icons */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Krit8025"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-[#0a0a0d] border border-[#202024] hover:border-zinc-600 hover:text-white transition-colors"
            title="GitHub: Krit8025"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4 text-zinc-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/krithik-kesav"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-[#0a0a0d] border border-[#202024] hover:border-zinc-600 hover:text-white transition-colors"
            title="LinkedIn: krithik-kesav"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 text-zinc-400" />
          </a>

          <a
            href="mailto:krithik2985@gmail.com"
            className="p-2 rounded-md bg-[#0a0a0d] border border-[#202024] hover:border-zinc-600 hover:text-white transition-colors"
            title="Email: krithik2985@gmail.com"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
