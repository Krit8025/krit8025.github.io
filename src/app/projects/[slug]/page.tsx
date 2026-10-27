import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import { getProjectReadme } from "@/lib/github";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Krithik`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const { content, project } = await getProjectReadme(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10">
      {/* Navigation & Header */}
      <div className="space-y-6 border-b border-[#232738] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Projects List</span>
          </Link>

          <Link
            href="/"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Visual Gallery
          </Link>
        </div>

        {/* Project Meta Banner */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="px-2.5 py-0.5 rounded text-xs font-mono border"
              style={{
                borderColor: `${project.accentHex}40`,
                color: project.accentHex,
                backgroundColor: `${project.accentHex}10`,
              }}
            >
              {project.name}
            </span>
            <span className="text-zinc-600 font-mono text-xs">•</span>
            <span className="text-zinc-500 font-mono text-xs">
              Branch: {project.defaultBranch}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-mono font-bold text-zinc-100 tracking-tight">
            {project.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161a25] hover:bg-[#1f2434] text-zinc-200 border border-[#2b3245] hover:border-emerald-400/50 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5 text-emerald-300" />
              <span>View Repository on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Rendered README Container */}
      <article className="rounded-xl border border-[#232738] bg-[#12141c] p-6 sm:p-10 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#232738] pb-4 mb-8 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-300" />
            <span>DOCUMENTATION // {project.readmeFile}</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline">Rendered Markdown</span>
        </div>

        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Bottom Back Button */}
      <div className="pt-4 flex justify-between items-center text-xs font-mono">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#161a24] hover:bg-[#1c212e] text-zinc-300 border border-[#252b3c] hover:border-zinc-500 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-emerald-300 transition-colors"
        >
          Contribute on GitHub ↗
        </a>
      </div>
    </main>
  );
}

