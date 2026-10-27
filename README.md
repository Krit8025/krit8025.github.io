# Krithik's Portfolio Website

A clean, plain retro dark-mode developer portfolio tailored for mechanical, aerospace, and computational engineering projects.

- **Stack:** Next.js (App Router), Tailwind CSS v4, TypeScript, React Markdown
- **Theme:** Retro Dark Slate (`#0d0f14`) with subtle pastel accents (Mint, Lavender, Amber, Cyan, Peach)
- **Deployment:** GitHub Pages (`krit8025.github.io`) via automated GitHub Actions

---

## Architecture & Layout

1. **Main Section (`/`)**:
   - **Hero:** Name, brief engineering description, and quick GitHub link.
   - **Visual Directory (Image-Only Cards):** Clean cards showing only the project visual / CAD / diagram.
   - **Hover Action:** Reveals the project title in a dark retro panel.
   - **Click Action:** Takes you directly to that project's documentation page.
   - **Directory Switcher:** Link to view projects in the textual list.

2. **Projects Directory Section (`/projects`)**:
   - Full list of public repositories.
   - Project name, description, tags, and direct documentation links.

3. **Project Documentation Page (`/projects/[slug]`)**:
   - Dedicated page rendering the repository's `README.md`.
   - Automatically rewrites relative image paths so repository figures & CAD diagrams render properly.
   - Back navigation and direct link to source on GitHub.

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploying to GitHub Pages (`krit8025.github.io`)

1. Create a repository on GitHub named **`krit8025.github.io`** (or push to your portfolio repo).
2. Push this project code:
   ```bash
   git add .
   git commit -m "feat: initial retro dark portfolio"
   git branch -M main
   git remote add origin https://github.com/Krit8025/krit8025.github.io.git
   git push -u origin main
   ```
3. In your repository on GitHub:
   - Go to **Settings > Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site at:
   `https://krit8025.github.io`
