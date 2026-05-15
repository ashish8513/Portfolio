# Portfolio Website

Welcome to **Ashish Prabhakar**’s personal portfolio — a full stack developer showcase built as a fast, animation-rich single-page experience with a dark Landin / Framer-inspired UI.

![Portfolio preview](https://via.placeholder.com/1200x630/000000/0055FE?text=Ashish+Prabhakar+%E2%80%94+Portfolio)

> Replace the image URL above with a real screenshot from your deployed site when ready.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Live Demo](#live-demo)
- [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Cloning the Repository](#cloning-the-repository)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Connect With Me](#connect-with-me)
- [Acknowledgements](#acknowledgements)

## Introduction

This project presents my skills, projects, and experience through a focused, modern web app: deep black surfaces, blue accents (`#0000EE` / `#0055FE`), smooth scrolling, and motion-driven sections — tuned for clarity and a strong first impression without noisy clutter.

## Features

| Area | What you get |
|------|----------------|
| **Navigation** | Fixed header with section links, **Get in touch** CTA, and a mobile menu that **slides down from the top** (full-width sheet, not a floating card). |
| **Hero** | Split layout with headline, rotating role badge, CTAs, stats strip, and a **custom full-stack “IDE / MERN pipeline” visual** (no stock portrait). |
| **About** | Personal intro with Landin-style typography and spacing. |
| **Skills** | **Stack uplink** — accordion layers (Frontend / Backend / Tools), centered section heading, signal-style depth dots, and tier labels instead of generic percentage bars. |
| **Experience** | Timeline + cards (tight grid); desktop **GSAP pin** on **photo** (`experienceVisual`); readout chip tracks active card. |
| **Projects** | Project grid with stack tags, links, and hover polish. |
| **Coding profiles** | Links and presentation for platforms you configure in content. |
| **Testimonials** | Card-based section for social proof. |
| **Contact** | Contact block wired for email / messaging flows from shared content. |
| **Footer** | Brand, navigation, contact, and availability blurb. |
| **Motion & scroll** | **Framer Motion** section reveals, **Lenis** smooth scrolling, and reduced-motion awareness where it matters. |
| **Responsive** | Mobile-first layouts, touch-friendly controls, adaptive typography. |

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js** (App Router) | React framework — SSR, routing, optimized builds |
| **React 19** | UI library |
| **TypeScript** | Type-safe components and content |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Layout animations, transitions, gestures |
| **Lenis** | Smooth scroll (paired with scroll effects) |
| **Lucide React** | Consistent icon set |
| **GSAP** | Available for advanced motion (where used) |
| **Radix UI** | Accessible primitives (accordion, separator, etc.) |

## Live Demo

Deploy your fork (your own host or CI/CD) and add your production URL here:

- **Portfolio:** [Visit my Portfolio](https://your-domain.example) *(update this link)*

Optional: add a short **Loom / walkthrough** link once you record one.

## Quick Start

### Prerequisites

- **Git**
- **Node.js** (v18 or newer recommended)
- **npm** (ships with Node)

### Cloning the Repository

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

Replace `<your-username>` / `<your-repo>` with your GitHub path once the repo is public.

### Installation

```bash
npm install
```

### Running the Project

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

Other scripts:

```bash
npm run build   # production build
npm run start   # run production server (after build)
npm run lint    # ESLint
```

## Project Structure

**Simple idea:** `src/app/page.tsx` is the homepage — it loads sections **top to bottom**. Text and links for the whole site live in **`src/lib/content.ts`**. Everything else is layout, styling, or animations.

### Homepage order (matches `page.tsx`)

| # | Section | File |
|---|---------|------|
| — | Header / nav | `src/components/site-header.tsx` |
| 1 | Hero | `src/components/sections/hero.tsx` |
| 2 | About | `src/components/sections/about.tsx` |
| 3 | Skills | `src/components/sections/skills-showcase.tsx` |
| 4 | Experience | `src/components/sections/experience.tsx` |
| 5 | Signature | `src/components/sections/signature.tsx` |
| 6 | Projects | `src/components/sections/projects.tsx` (+ `project-card.tsx`) |
| 7 | Coding profiles | `src/components/sections/profiles.tsx` |
| 8 | Testimonials | `src/components/sections/testimonials.tsx` |
| 9 | Contact | `src/components/sections/contact.tsx` |
| — | Footer | `src/components/site-footer.tsx` |

### Folder tree (actual repo)

```text
Portfolio/
├── public/                      # Static files (icons, images you add)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (shell around all pages)
│   │   ├── page.tsx             # Home — composes sections below
│   │   ├── globals.css          # Global CSS + design tokens
│   │   ├── loading.tsx          # Loading UI
│   │   ├── robots.ts            # robots.txt (SEO)
│   │   ├── sitemap.ts           # sitemap (SEO)
│   │   └── actions/
│   │       └── contact.ts       # Server action(s) for forms if used
│   ├── components/
│   │   ├── sections/            # Homepage blocks (see table above)
│   │   ├── effects/             # smooth-scroll (Lenis), stars-background
│   │   ├── landin/              # hero-visual.tsx (hero right column)
│   │   ├── ui/                  # spotlight.tsx, shared UI
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   ├── motion-reveal.tsx    # Scroll-in animations wrapper
│   │   ├── section-heading.tsx
│   │   └── custom-cursor.tsx
│   └── lib/
│       ├── content.ts           # All copy, nav, skills, projects, links
│       └── utils.ts             # Helpers (e.g. cn())
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

**Note:** `src/components/sections/skills.tsx` is an older skills layout and is **not** imported on the home page — the live skills UI is **`skills-showcase.tsx`**.

## Customization

- **All portfolio copy, links, skills, projects, and social URLs** should be updated in **`src/lib/content.ts`** (email, GitHub, images, testimonial text, etc.).
- Swap placeholder **project images** and **profile links** before shipping.
- After changing external image domains, confirm **`next.config`** allows those hosts if you use `next/image`.

## Contributing

Forks and PRs are welcome for fixes and small improvements. For bugs or ideas, open an **issue** with steps to reproduce.

## License

This project is licensed under the **MIT License** — see the [`LICENSE`](LICENSE) file if present, or add one when you publish.

## Connect With Me

**Ashish Prabhakar** — Full Stack Developer  

| | |
|--|--|
| **Portfolio** | [Add your live URL](#) |
| **GitHub** | [github.com/your-handle](https://github.com/your-handle) |
| **LinkedIn** | [Add your profile](#) |
| **Email** | Update in `src/lib/content.ts` (`site.email`) |

**Visit Portfolio** · **Submit feedback** — drop issues on this repo or use your preferred contact channel once links are live.

---

## Acknowledgements

- [Next.js](https://nextjs.org/) · [React](https://react.dev/) · [Tailwind CSS](https://tailwindcss.com/) · [Framer Motion](https://www.framer.com/motion/) · [Lenis](https://lenis.darkroom.engineering/)

Built with care for readability, performance, and a crisp developer-portfolio experience.
