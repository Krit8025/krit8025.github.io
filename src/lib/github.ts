import fs from "fs";
import path from "path";
import { Project, getProjectBySlug } from "@/data/projects";

/**
 * Normalizes relative URLs in markdown to point to the raw GitHub repository content
 */
export function rewriteMarkdownAssetUrls(
  markdown: string,
  project: Project
): string {
  const rawBase = `https://raw.githubusercontent.com/Krit8025/${project.name}/${project.defaultBranch}`;
  const blobBase = `https://github.com/Krit8025/${project.name}/blob/${project.defaultBranch}`;

  // Replace markdown images: ![alt](relative/path.png)
  let updated = markdown.replace(
    /!\[(.*?)\]\(((?!http:\/\/|https:\/\/|#|mailto:)(.*?))\)/g,
    (_, alt, imgPath) => {
      const cleanPath = imgPath.replace(/^\.\//, "").replace(/^\//, "");
      return `![${alt}](${rawBase}/${cleanPath})`;
    }
  );

  // Replace HTML <img> tags with relative src: <img src="relative/path.png" ...>
  updated = updated.replace(
    /<img([^>]*?)src=["']((?!http:\/\/|https:\/\/|#|mailto:)[^"']+)["']([^>]*?)>/gi,
    (_, before, srcPath, after) => {
      const cleanPath = srcPath.replace(/^\.\//, "").replace(/^\//, "");
      return `<img${before}src="${rawBase}/${cleanPath}"${after}>`;
    }
  );

  // Replace non-image relative links: [title](file.pdf) -> GitHub blob
  updated = updated.replace(
    /(?<!!)\[(.*?)\]\(((?!http:\/\/|https:\/\/|#|mailto:)(.*?))\)/g,
    (_, title, linkPath) => {
      const cleanPath = linkPath.replace(/^\.\//, "").replace(/^\//, "");
      return `[${title}](${blobBase}/${cleanPath})`;
    }
  );

  return updated;
}

/**
 * Loads project README from GitHub API or local fallback
 */
export async function getProjectReadme(slug: string): Promise<{
  content: string;
  project: Project | null;
}> {
  const project = getProjectBySlug(slug);
  if (!project) {
    return { content: "# Project Not Found", project: null };
  }

  // 1. Try local cache first for guaranteed static build stability
  try {
    const localPath = path.join(
      process.cwd(),
      "src",
      "data",
      "readmes",
      `${project.slug}.md`
    );
    if (fs.existsSync(localPath)) {
      const raw = fs.readFileSync(localPath, "utf-8");
      return {
        content: rewriteMarkdownAssetUrls(raw, project),
        project,
      };
    }
  } catch (err) {
    console.warn(`Local file read failed for ${slug}:`, err);
  }

  // 2. Fallback to live raw GitHub fetch
  try {
    const url = `https://raw.githubusercontent.com/Krit8025/${project.name}/${project.defaultBranch}/${project.readmeFile}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (res.ok) {
      const text = await res.text();
      return {
        content: rewriteMarkdownAssetUrls(text, project),
        project,
      };
    }
  } catch (err) {
    console.warn(`Live fetch failed for ${slug}:`, err);
  }

  return {
    content: `# ${project.title}\n\n${project.description}\n\n[View on GitHub](${project.repoUrl})`,
    project,
  };
}

