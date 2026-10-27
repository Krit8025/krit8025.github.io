import fs from "fs";
import path from "path";
import { Project, getProjectBySlug } from "@/data/projects";

/**
 * Strips shields.io badges and repository labels from markdown
 */
export function removeBadgesAndLabels(markdown: string): string {
  let cleaned = markdown;

  // Remove linked badges: [![alt](https://img.shields.io/...)](url)
  cleaned = cleaned.replace(
    /\[!\[[^\]]*\]\(https?:\/\/(img\.)?shields\.io\/[^)]+\)\]\([^)]*\)/gi,
    ""
  );

  // Remove standalone image badges: ![alt](https://img.shields.io/...)
  cleaned = cleaned.replace(
    /!\[[^\]]*\]\(https?:\/\/(img\.)?shields\.io\/[^)]+\)/gi,
    ""
  );

  // Remove HTML badge images: <img src="...shields.io..." ...>
  cleaned = cleaned.replace(
    /<img[^>]*?src=["'][^"']*shields\.io[^"']*["'][^>]*?>/gi,
    ""
  );

  // Remove empty paragraph tags that held badges
  cleaned = cleaned.replace(/<p[^>]*>\s*<\/p>/gi, "");

  // Remove empty lines resulting from badge removals at the top of the file
  cleaned = cleaned.replace(/^(\s*(\r?\n)){2,}/, "\n");

  return cleaned;
}

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
      const cleanPath = imgPath.trim().replace(/^\.\//, "").replace(/^\//, "");
      return `![${alt}](${rawBase}/${cleanPath})`;
    }
  );

  // Replace HTML <img> tags with relative src: <img ... src="relative/path.png" ...>
  updated = updated.replace(
    /<img\s+([^>]*?)src=["']((?!http:\/\/|https:\/\/|#|mailto:)[^"']+)["']([^>]*?)>/gi,
    (_, before, srcPath, after) => {
      const cleanPath = srcPath.trim().replace(/^\.\//, "").replace(/^\//, "");
      return `<img ${before}src="${rawBase}/${cleanPath}"${after}>`;
    }
  );

  // Replace non-image relative links: [title](file.pdf) -> GitHub blob
  updated = updated.replace(
    /(?<!!)\[(.*?)\]\(((?!http:\/\/|https:\/\/|#|mailto:)(.*?))\)/g,
    (_, title, linkPath) => {
      const cleanPath = linkPath.trim().replace(/^\.\//, "").replace(/^\//, "");
      return `[${title}](${blobBase}/${cleanPath})`;
    }
  );

  return updated;
}

/**
 * Loads project README from GitHub API or local fallback,
 * strips badges, and normalizes all asset URLs.
 */
export async function getProjectReadme(slug: string): Promise<{
  content: string;
  project: Project | null;
}> {
  const project = getProjectBySlug(slug);
  if (!project) {
    return { content: "# Project Not Found", project: null };
  }

  let rawContent = "";

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
      rawContent = fs.readFileSync(localPath, "utf-8");
    }
  } catch (err) {
    console.warn(`Local file read failed for ${slug}:`, err);
  }

  // 2. Fallback to live raw GitHub fetch if cache is empty
  if (!rawContent) {
    try {
      const url = `https://raw.githubusercontent.com/Krit8025/${project.name}/${project.defaultBranch}/${project.readmeFile}`;
      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (res.ok) {
        rawContent = await res.text();
      }
    } catch (err) {
      console.warn(`Live fetch failed for ${slug}:`, err);
    }
  }

  if (!rawContent) {
    return {
      content: `# ${project.title}\n\n${project.description}\n\n[View on GitHub](${project.repoUrl})`,
      project,
    };
  }

  // Filter badges and rewrite asset paths
  const cleanedBadges = removeBadgesAndLabels(rawContent);
  const finalContent = rewriteMarkdownAssetUrls(cleanedBadges, project);

  return {
    content: finalContent,
    project,
  };
}
