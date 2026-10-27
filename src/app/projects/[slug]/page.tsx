import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
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
    title: `${project.title} | Krithik Kesav C`,
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
      <div className="space-y-6 border-b border-[#1f1f23] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <Link
            href="/projects"
            className="smooth-btn-secondary"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Projects</span>
          </Link>

          <Link
            href="/"
            className="text-zinc-400 hover:text-white font-medium font-mono text-xs transition-colors"
          >
            Home
          </Link>
        </div>

        {/* Project Meta Banner */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded text-xs font-mono font-medium text-zinc-200 bg-zinc-800 border border-zinc-700">
              {project.tag}
            </span>
            <span className="text-zinc-600 font-mono text-xs">•</span>
            <span className="text-zinc-400 font-mono text-xs">
              Branch: {project.defaultBranch}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="smooth-btn-primary"
            >
              <GithubIcon className="w-4 h-4 text-black" />
              <span>View Repository on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-800" />
            </a>
          </div>
        </div>
      </div>

      {/* Rendered README Container */}
      <article className="rounded-xl border border-[#1f1f23] bg-[#0a0a0d] p-6 sm:p-10 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#1f1f23] pb-4 mb-8 text-xs font-mono font-medium text-zinc-400">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-zinc-400" />
            <span className="text-zinc-300">DOCUMENTATION // {project.readmeFile}</span>
          </div>
          <span className="px-2.5 py-0.5 rounded text-[11px] bg-zinc-800 text-zinc-300 border border-zinc-700 hidden sm:inline">
            Math &amp; Diagram Enabled
          </span>
        </div>

        <div className="markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeRaw, rehypeKatex]}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Bottom Back Button */}
      <div className="pt-4 flex justify-between items-center text-xs font-mono">
        <Link
          href="/projects"
          className="smooth-btn-secondary"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors font-medium"
        >
          Contribute on GitHub ↗
        </a>
      </div>
    </main>
  );
}
