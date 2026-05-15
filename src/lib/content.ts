/**
 * Portfolio copy and links — aligned with Ashish_Resume_v3.pdf
 */

export const site = {
  name: "Ashish Prabhakar",
  heroTitleLine1: "Full stack engineering",
  heroTitleLine2: "for real users.",
  role: "Full Stack Engineer",
  education: "MCA, Chandigarh University",
  roles: [
    "Full Stack Engineer",
    "MERN stack",
    "Next.js & Node.js",
    "Distributed systems curious",
  ],
  tagline:
    "MERN, JWT/RBAC, Socket.io, and cloud-ready deployments — built for reliability at scale.",
  heroSubtitle: "1.5+ years shipping production web apps in startup environments.",
  email: "ashishprabhaka1010@gmail.com",
  phoneDisplay: "+91 6201781347",
  /** tel: link — no spaces */
  phoneTel: "+916201781347",
  location: "Chandigarh, India · Open to remote",
  /** Public asset — place Ashish_Resume_v3.pdf in /public */
  resume: {
    href: "/Ashish_Resume_v3.pdf",
    downloadFilename: "Ashish_Resume_v3.pdf",
  },
} as const;

export const githubUsername = "ashish8513" as const;

/** Set `NEXT_PUBLIC_SITE_URL` in prod (e.g. https://yoursite.vercel.app) — used for SEO & JSON-LD */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Hero — quick scan for recruiters / engineers */
export const heroStackPills = [
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "REST · JWT · RBAC",
  "AWS · Docker · CI/CD",
] as const;

/** Footer — stack used to build this portfolio (shows engineering taste) */
export const portfolioBuiltWith = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
] as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Coding Profiles", href: "#profiles" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
] as const;

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  description: string;
  /** Short label shown on timeline, e.g. company initial */
  badge?: string;
  /** Landin-style pills under the card */
  tags?: readonly string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Dec 2025 — Present",
    title: "Full Stack Engineer",
    company: "Yono Entertainment Pvt. Ltd.",
    description:
      "AI-first delivery — Claude Code, GitHub Copilot, and OpenAI APIs integrated into daily work for faster features, boilerplate, reviews, and production debugging. Shipped production AI flows including Whisper transcription and OpenAI summarization, from audio ingestion to structured outputs. Designed scalable REST backends and Node.js microservices for high-traffic workloads with tuned latency and throughput. Runs AWS (EC2, S3) with Docker and CI/CD for reliable releases. Reviews AI-generated code for correctness, security, and performance before merge.",
    badge: "YE",
    tags: ["AI-assisted dev", "Whisper & GPT", "Node.js", "AWS · Docker", "CI/CD"],
  },
  {
    period: "Dec 2024 — Oct 2025",
    title: "Full Stack Developer",
    company: "Varnav Infotech LLP · Chandigarh, India",
    description:
      "Built and scaled full-stack apps end-to-end in a startup — architecture through deployment. Implemented JWT auth, RBAC, and validation across production services. Used AI-assisted tooling and structured prompts to speed APIs, tests, and docs. Optimized REST APIs with solid data modeling; partnered with QA, product, and frontend in Agile sprints with consistent delivery. Maintained shared context docs — design decisions, API contracts, and constraints — for faster onboarding.",
    badge: "VI",
    tags: ["React", "JWT & RBAC", "REST APIs", "Agile", "Documentation"],
  },
  {
    period: "Jun 2024 — Jul 2024",
    title: "MERN Stack Developer Intern",
    company: "ThinkNext Technologies",
    description:
      "Built and deployed SPAs with React.js and REST integrations under mentorship. Developed reusable UI with Tailwind CSS and applied performance-minded patterns early in the cycle.",
    badge: "TN",
    tags: ["React.js", "REST", "Tailwind CSS", "Internship"],
  },
];

/** Experience section — split headline */
export const experienceIntro = {
  eyebrow: "Career",
  titleBright: "Professional experience",
  titleMuted: "that ships.",
  subtitle:
    "Timeline on the left, detail cards beside it — current role first, grounded in what’s on my résumé.",
} as const;

/** Right-column sticky image in Experience section — swap for your own photo */
export const experienceVisual = {
  src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=960&q=85&auto=format&fit=crop",
  alt: "Developer focused on building products",
} as const;

export const about = {
  intro: `I'm Ashish — a Full Stack Engineer with 1.5+ years focusing on the MERN stack and scalable web apps. I hold an MCA from Chandigarh University (ongoing), with strong fundamentals in DSA, Git, low-level design, and distributed systems.`,
  highlights: [
    "MERN & Next.js — React, Node, Express, MongoDB, PostgreSQL",
    "REST APIs, JWT, RBAC, Socket.io, Tailwind CSS, Redux",
    "Docker, AWS (EC2, S3), GitHub Actions CI/CD, Linux, Git",
    "Languages: JavaScript (ES6+), TypeScript, Python, C/C++, SQL · Coursework: OS, DBMS, networking, system design",
  ],
  experienceLessons: [
    {
      title: "Startup cadence",
      body: "Ownership across frontend and backend taught me to prioritize vertical slices that unblock users — without sacrificing auth, RBAC, or API contracts.",
    },
    {
      title: "Scale where it matters",
      body: "Indexes, caching instincts, and sensible service boundaries matter long before microservices — especially when traffic climbs past thousands of daily requests.",
    },
    {
      title: "Communication ships features",
      body: "Clear sprint updates, documented APIs, and honest trade-offs keep teams aligned when deadlines are tight.",
    },
  ],
} as const;

export type SkillCategory = "Frontend" | "Backend" | "Tools";

export type SkillItem = {
  name: string;
  level: number; // 0–100 for progress bar (self-assessed)
  category: SkillCategory;
};

export const skills: SkillItem[] = [
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "TypeScript / JavaScript (ES6+)", level: 88, category: "Frontend" },
  { name: "Tailwind CSS & Redux", level: 86, category: "Frontend" },
  { name: "Node.js / Express.js", level: 90, category: "Backend" },
  { name: "REST APIs, JWT & RBAC", level: 88, category: "Backend" },
  { name: "MongoDB & PostgreSQL", level: 86, category: "Backend" },
  { name: "Socket.io (real-time)", level: 82, category: "Backend" },
  { name: "Git, Linux & Docker", level: 84, category: "Tools" },
  { name: "AWS (EC2, S3) & GitHub Actions", level: 78, category: "Tools" },
  { name: "Postman & Bash", level: 76, category: "Tools" },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Real-Time Transcriber & Summarizer",
    description:
      "Full-stack AI transcription with Whisper for speech-to-text and GPT-4 for meeting summaries; WebSocket streaming under ~2s latency. PostgreSQL with indexing, JWT, RBAC, PDF/DOCX export, full-text search — deployed on AWS EC2 with Docker and GitHub Actions CI/CD.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    stack: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "OpenAI API",
      "Socket.io",
      "Docker",
      "AWS EC2",
    ],
    featured: true,
  },
  {
    title: "Full Stack CMS Platform",
    description:
      "CMS with lead management, automation, and integrations (WhatsApp API, Voice API). Admin dashboards for reports, attendance, and user management — scaled to 1,000+ active users with tuned backend performance.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    featured: true,
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Bi-directional messaging with Socket.io: group rooms, DMs, presence, read receipts, and MongoDB persistence — Tailwind CSS UI.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    stack: ["React.js", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
  },
];

export type ProfileLink = {
  name: string;
  description: string;
  href: string;
  statLabel: string;
  statValue: string;
  icon: "github" | "leetcode" | "linkedin";
};

export const profiles: ProfileLink[] = [
  {
    name: "GitHub",
    description: "Projects and experiments.",
    href: "https://github.com/ashish8513",
    statLabel: "Handle",
    statValue: "@ashish8513",
    icon: "github",
  },
  {
    name: "LeetCode",
    description: "DSA & patterns practice.",
    href: "https://leetcode.com",
    statLabel: "Practice",
    statValue: "Active",
    icon: "leetcode",
  },
  {
    name: "LinkedIn",
    description: "Experience and connect.",
    href: "https://linkedin.com/in/ashish-prabhakar",
    statLabel: "Profile",
    statValue: "/in/ashish-prabhakar",
    icon: "linkedin",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ashish shipped a complex dashboard on time and left clear notes on APIs and auth flows. Communication stayed crisp through the sprint.",
    name: "R. Mehta",
    role: "Product Lead",
    initials: "RM",
  },
  {
    quote:
      "Strong full-stack instincts — he caught edge cases in our JWT/RBAC contract before they reached production.",
    name: "S. Khan",
    role: "Engineering Manager",
    initials: "SK",
  },
  {
    quote:
      "Solid partner on real-time features — thoughtful about Socket.io behavior and how state syncs with the database.",
    name: "A. Patel",
    role: "Tech Lead",
    initials: "AP",
  },
];
