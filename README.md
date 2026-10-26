# Manu Prathap — Senior Portfolio Website

A personal portfolio built with **React 19**, **Vite**, and **Vanilla CSS**. Designed with an editorial light theme (`#FAF5EA` cream background, crisp white cards, and `#8A1C1C` dark red accent).

All profile information, experience, projects, skills, and certifications are sourced from **Manu Prathap's CV**.

---

## Features & Sections

1. **Sticky Navigation**: Brand monogram (`MP`), quick anchor links, "Hire me" trigger, and a thin scroll-progress bar.
2. **Hero Banner**:
   - Live availability badge (`Bangalore, India`).
   - Large headline and verified 2-3 sentence summary.
   - Core engineering stack pills with inline SVGs.
   - Desktop code-style TypeScript profile card (`ManuPrathap.profile.ts`).
3. **Pinned Story Section**:
   - Large statement quote whose words light up as you scroll.
4. **Stats Strip**:
   - `3+` Years Experience
   - `94/100` Lighthouse Score
   - `40%` Faster Load Time
   - `60%` Fewer API Bugs
   - High-performance numeric count-up animation when scrolled into view.
5. **Technical Toolbox**:
   - Large icon cards for core tools (Angular, React, Next.js, TypeScript, Node.js, Python, Firebase, RxJS).
   - Categorized badges for Frontend, UI & State, Performance, Backend, Databases/Cloud, AI/ML, Generative AI, and Testing.
6. **Work & Projects**:
   - Dual-tab toggle: **Enterprise Roles** (ElkanIO Research Labs, Exouzia) and **Key Projects** (iHub-24 POS, TripXOXO, BookOTrip, Stamp the Passport, and ML models).
   - Horizontally swipeable carousel with arrow controls and architecture inspection modal dialogs.
7. **Generative & Agentic AI Band**:
   - Highlight section covering LLMs, RAG Pipelines, LangChain, LangGraph, and Agent Workflows.
8. **Education & Certifications**:
   - Academic degrees (B.Tech & Diploma) and specialized AI/ML certifications from Evarcity Learning.
9. **Contact Panel**:
   - Text-first interface without redundant icons.
   - Direct clickable redirect links (`mailto:` and `tel:`).
   - Instant copy buttons with "Copied ✓" feedback.
   - Direct redirect buttons to verified **LinkedIn** and **GitHub** profiles.
10. **Scroll Engine**:
    - Single `requestAnimationFrame` loop setting CSS variable `--p` (0 to 1).
    - Fully respects `prefers-reduced-motion`.

---

## Getting Started

### Prerequisites
- Node.js `v18+` or `v20+` (tested on Node v24)
- npm `v9+` or `v11+`

### Installation & Run Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## How to Edit Content

All personal content is centralized at the top of `src/App.jsx` in clearly named arrays:

- `PERSONAL_INFO`: Name, role headline, contact info, and introductory summaries.
- `STATS_DATA`: Highlighted metrics and descriptions.
- `FEATURED_TOOLS`: Core highlighted tools.
- `TOOLBOX_CATEGORIES`: Grouped technical skills.
- `ENTERPRISE_ROLES`: Company experience and bullet points.
- `PERSONAL_PROJECTS`: Project descriptions, stacks, and live demo / repo placeholders.
- `AI_UPSKILLING_PILLARS`: Generative & Agentic AI topics.
- `EDUCATION_DATA` & `CERTIFICATIONS_DATA`: Degrees and certifications.

All colors, typography, and spacing tokens are defined at the top of `src/styles.css` under `:root`.

---

## Deployment Guide

### Deploying to Vercel
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Manu Prathap portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live on a fast global CDN with automated HTTPS.

### Deploying to Netlify
1. Log into [Netlify](https://www.netlify.com/) and click **"Add new site"** → **"Import an existing project"**.
2. Connect your GitHub repository.
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy site**.
