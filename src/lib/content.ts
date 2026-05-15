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

export type SkillCategory =
  | "Programming Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "DevOps / Cloud"
  | "Gen AI / AI Engineering"
  | "Tools & Productivity";

/** Core lanes — enough breadth without a laundry list. */
export const skillCategoryOrder: SkillCategory[] = [
  "Gen AI / AI Engineering",
  "Programming Languages",
  "Frontend",
  "Backend",
  "Databases",
  "DevOps / Cloud",
  "Tools & Productivity",
];

export type SkillItem = {
  name: string;
  level: number;
  category: SkillCategory;
};

/** Spotlight skills for the quick-scan grid above the stack uplink. */
export const skillHighlights = [
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Spring Boot",
  "MongoDB",
  "PostgreSQL",
  "LangChain",
  "OpenAI APIs",
  "Docker",
  "AWS",
  "Git",
] as const;

/** Quick-scan grid on phone — keep it short. */
export const skillHighlightsMobile = [
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "LangChain",
  "OpenAI APIs",
  "MongoDB",
  "Docker",
] as const;

export const skills: SkillItem[] = [
  { name: "TypeScript", level: 90, category: "Programming Languages" },
  { name: "JavaScript", level: 92, category: "Programming Languages" },
  { name: "Java", level: 88, category: "Programming Languages" },

  { name: "React.js", level: 92, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "React Native", level: 86, category: "Frontend" },
  { name: "Redux", level: 84, category: "Frontend" },

  { name: "Node.js", level: 92, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "Spring Boot", level: 86, category: "Backend" },
  { name: "REST APIs", level: 92, category: "Backend" },
  { name: "JWT Authentication", level: 90, category: "Backend" },
  { name: "Socket.io", level: 88, category: "Backend" },

  { name: "MongoDB", level: 90, category: "Databases" },
  { name: "PostgreSQL", level: 86, category: "Databases" },
  { name: "MySQL", level: 86, category: "Databases" },
  { name: "Redis", level: 82, category: "Databases" },

  { name: "Docker", level: 88, category: "DevOps / Cloud" },
  { name: "AWS", level: 84, category: "DevOps / Cloud" },
  { name: "Linux", level: 88, category: "DevOps / Cloud" },
  { name: "CI/CD", level: 82, category: "DevOps / Cloud" },

  { name: "OpenAI APIs", level: 90, category: "Gen AI / AI Engineering" },
  { name: "LangChain", level: 88, category: "Gen AI / AI Engineering" },
  { name: "RAG (Retrieval Augmented Generation)", level: 88, category: "Gen AI / AI Engineering" },
  { name: "Prompt Engineering", level: 90, category: "Gen AI / AI Engineering" },
  { name: "AI Agents", level: 86, category: "Gen AI / AI Engineering" },
  { name: "Vector Databases", level: 86, category: "Gen AI / AI Engineering" },

  { name: "Git", level: 94, category: "Tools & Productivity" },
  { name: "GitHub", level: 92, category: "Tools & Productivity" },
  { name: "Postman", level: 90, category: "Tools & Productivity" },
];

export type Project = {
  title: string;
  /** e.g. "Jun – Jul 2024" */
  period: string;
  /** One-line intro under the title */
  summary: string;
  /** Bullet achievements (shown on the card) */
  highlights: string[];
  /** Longer copy for “View project details” */
  details: string;
  image: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Real-Time Transcriber & Summarizer",
    period: "2024 – 2025",
    summary:
      "Full-stack AI product for live meeting transcription, searchable archives, and GPT-4 summaries — built for sub-2s streaming latency.",
    highlights: [
      "Whisper speech-to-text with WebSocket streaming and GPT-4 summarization pipelines.",
      "PostgreSQL with indexing, JWT auth, RBAC, PDF/DOCX export, and full-text search.",
      "Deployed on AWS EC2 with Docker and GitHub Actions CI/CD.",
    ],
    details:
      "Designed and shipped an end-to-end transcription platform: capture audio in the browser, stream chunks over WebSockets, persist structured transcripts in PostgreSQL, and generate meeting summaries with OpenAI. Role-based access controls separate admin and member views; exports support PDF and DOCX for stakeholders. Infrastructure runs on AWS EC2 with containerized services and automated deploys via GitHub Actions.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=960&q=80",
    stack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "OpenAI API",
      "Whisper",
      "Socket.io",
      "JWT",
      "RBAC",
      "Docker",
      "AWS EC2",
      "GitHub Actions",
      "REST APIs",
    ],
    repoUrl: "https://github.com/ashish8513",
    featured: true,
  },
  {
    title: "Full Stack CMS Platform",
    period: "2023 – 2024",
    summary:
      "Production CMS with lead management, automation, and third-party integrations — scaled past 1,000 active users.",
    highlights: [
      "Lead pipelines, WhatsApp API, and voice API integrations for outbound workflows.",
      "Admin dashboards for reports, attendance, and user management with role-based views.",
      "Backend tuning and indexing to keep response times stable under growing traffic.",
    ],
    details:
      "Owned core MERN features for a multi-tenant CMS used in daily operations: content modules, lead capture, automation rules, and integration hooks for WhatsApp and voice providers. Built reporting and attendance views for admins, hardened JWT-protected APIs, and optimized MongoDB queries as monthly active users crossed 1,000.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=960&q=80",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "REST APIs",
      "WhatsApp API",
      "Admin dashboards",
      "Role-based access",
    ],
    repoUrl: "https://github.com/ashish8513",
    featured: true,
  },
  {
    title: "Real-Time Chat Application",
    period: "2023",
    summary:
      "Socket.io chat with group rooms, direct messages, presence, and read receipts — MongoDB-backed persistence.",
    highlights: [
      "Bi-directional messaging with rooms, DMs, and live presence indicators.",
      "Read receipts and message history stored in MongoDB with indexed queries.",
      "Responsive Tailwind UI with optimistic updates for snappy sends.",
    ],
    details:
      "Built a real-time messaging client and Node server: users join rooms or start DMs, see who is online, and get delivery/read states without refreshing. Messages persist in MongoDB for history scrollback; the React front end uses Tailwind for layout and keeps the send path optimistic for perceived speed.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=960&q=80",
    stack: [
      "React.js",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
      "WebSockets",
      "JWT",
    ],
    repoUrl: "https://github.com/ashish8513",
  },
];

export type ProfileLink = {
  name: string;
  description: string;
  href: string;
  /** One-line stat shown under the compare slider */
  highlight: string;
  icon: "github" | "leetcode" | "gfg" | "linkedin";
  /** Screenshot in /public/profiles — hover reveals full brightness */
  image?: string;
  beforeImage?: string;
  afterImage?: string;
};

export const profiles: ProfileLink[] = [
  {
    name: "GitHub",
    description: "AI Product Builder · SaaS & AI tools.",
    href: "https://github.com/ashish8513",
    highlight:
      "Ashish Prabhakar · 101 repositories · full-stack, MERN & open-source projects.",
    icon: "github",
    image: "/profiles/github.png",
  },
  {
    name: "LeetCode",
    description: "DSA & patterns practice.",
    href: "https://leetcode.com/u/ashish8513/",
    highlight:
      "373 problems solved · 220 submissions in the past year · max streak 12 days.",
    icon: "leetcode",
    image: "/profiles/leetcode.png",
  },
  {
    name: "GeeksforGeeks",
    description: "Coding score & practice.",
    href: "https://www.geeksforgeeks.org/profile/ashish8513?tab=activity",
    highlight:
      "Coding score on GFG · Chandigarh University · building consistency on POTD.",
    icon: "gfg",
    image: "/profiles/gfg.png",
  },
  {
    name: "LinkedIn",
    description: "Experience and connect.",
    href: "https://www.linkedin.com/in/ashishprabhakar2004/",
    highlight:
      "Full Stack Engineer · MERN · React · Node.js · open to MNC opportunities.",
    icon: "linkedin",
    image: "/profiles/linkedin.png",
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
