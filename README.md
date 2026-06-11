# CreatorStrat — Social Media Manager Portfolio

A modern, responsive portfolio website for a Social Media Manager, built with **React + Vite + Tailwind CSS v3**.

## Tech Stack

- **React 19** — Component-based UI
- **Vite 8** — Fast dev server and build tool
- **Tailwind CSS 3** — Utility-first styling
- **Lucide React** — Icon library

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173/

# Production build
npm run build
npm run preview
```

## Deployment (Vercel)

1. Push to GitHub
2. Import at [vercel.com](https://vercel.com) → New Project
3. Vercel auto-detects Vite — click **Deploy**

Or via CLI:
```bash
npx vercel
```

## Project Structure

```
src/
├── components/      # 10 section components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── WhyWork.jsx
│   ├── Process.jsx
│   ├── Services.jsx
│   ├── Tools.jsx
│   ├── SampleWorks.jsx
│   ├── Connect.jsx
│   └── Footer.jsx
├── assets/          # Cropped portfolio images
├── App.jsx          # Root layout
├── main.jsx         # Entry point
└── index.css        # Tailwind + custom utilities
```

## Design

- **Color palette**: Primary red `#CD4439`, cream `#F7DEAD`, light cream `#FFF8F5`
- **Fonts**: Archivo Narrow (headings), Plus Jakarta Sans (body)
- **Style**: Neo-brutalism silhouette outlines, split-color sections, decorative SVG flowers
