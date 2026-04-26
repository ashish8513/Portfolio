/**
 * Portfolio copy and links — update URLs, stats, and project images for production.
 */

export const site = {
  name: "Ashish Prabhakar",
  role: "Full Stack Engineer",
  roles: [
    "Full Stack Engineer",
    "Software Developer",
    "AI / ML",
    "Open Source Contributor",
  ],
  tagline:
    "Building real-world products with clean code & creative thinking.",
  heroSubtitle: "I build scalable apps & real-world solutions",
  email: "hello@ashishprabhakar.dev", // Replace with your real email
  location: "India · Open to remote",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Coding Profiles", href: "#profiles" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  description: string;
  /** Short label shown on timeline, e.g. company initial */
  badge?: string;
};

export const experience: ExperienceItem[] = [
  {
    period: "2024 — Present",
    title: "Full Stack Developer",
    company: "Your Company / Freelance",
    description:
      "Building MERN and React Native products end-to-end: APIs, dashboards, auth, and releases with clear documentation.",
    badge: "AP",
  },
  {
    period: "2023 — 2024",
    title: "Software Developer",
    company: "Previous Team",
    description:
      "Owned features across the stack, improved query performance, and collaborated on sprint planning and code review.",
    badge: "T",
  },
];

export const about = {
  intro: `I'm Ashish — a Full Stack developer who enjoys turning ambiguous problems into clear, shippable software. I care about performance, accessibility, and code that the next person (including future me) can actually maintain.`,
  highlights: [
    "MERN stack — MongoDB, Express, React, Node.js",
    "React Native for cross-platform mobile apps",
    "REST & GraphQL APIs, auth, and real-time features",
    "MySQL & MongoDB — schema design, indexing, and migrations",
  ],
  experienceLessons: [
    {
      title: "Ship small, learn fast",
      body: "Early on I chased perfect architecture before users. Iterating in thin vertical slices taught me where complexity actually pays off.",
    },
    {
      title: "Debug the system, not just the bug",
      body: "The best fixes came from tracing data across layers — not patching symptoms. Logging and observability are part of the feature.",
    },
    {
      title: "Communication is a senior skill",
      body: "Clear updates, honest blockers, and documented decisions matter as much as clean commits when you're building with a team.",
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
  { name: "React / Next.js", level: 92, category: "Frontend" },
  { name: "TypeScript", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "React Native", level: 85, category: "Frontend" },
  { name: "Node.js / Express", level: 88, category: "Backend" },
  { name: "MongoDB", level: 82, category: "Backend" },
  { name: "MySQL", level: 78, category: "Backend" },
  { name: "REST APIs & auth", level: 86, category: "Backend" },
  { name: "Git & CI basics", level: 84, category: "Tools" },
  { name: "Docker (fundamentals)", level: 70, category: "Tools" },
  { name: "Figma (handoff)", level: 72, category: "Tools" },
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
    title: "Commerce Dashboard",
    description:
      "Admin analytics with role-based access, charts, and export — MERN with optimistic UI updates.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Habit Tracker (Mobile)",
    description:
      "React Native app with offline-first streaks, reminders, and cloud sync.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    stack: ["React Native", "Node.js", "MongoDB"],
    repoUrl: "https://github.com",
    featured: true,
  },
  {
    title: "API Gateway Service",
    description:
      "Rate limiting, request validation, and structured logging for microservices.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    stack: ["Node.js", "Express", "MySQL"],
    repoUrl: "https://github.com",
  },
  {
    title: "Team Collab Board",
    description:
      "Real-time board with presence, comments, and webhook integrations.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    stack: ["React", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
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
    description: "Open source, experiments, and portfolio code.",
    href: "https://github.com",
    statLabel: "Public repos",
    statValue: "24+", // Update manually or fetch via API
    icon: "github",
  },
  {
    name: "LeetCode",
    description: "Problem solving & patterns practice.",
    href: "https://leetcode.com",
    statLabel: "Problems solved",
    statValue: "180+", // Update to your real count
    icon: "leetcode",
  },
  {
    name: "LinkedIn",
    description: "Experience, recommendations, and connect.",
    href: "https://linkedin.com",
    statLabel: "Network",
    statValue: "500+", // Placeholder
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
      "Ashish shipped a complex dashboard on time and left clear docs for handoff. Communication was consistently crisp.",
    name: "R. Mehta",
    role: "Product Lead",
    initials: "RM",
  },
  {
    quote:
      "Strong full-stack instincts — he caught edge cases in our API contract before they hit production.",
    name: "S. Khan",
    role: "Engineering Manager",
    initials: "SK",
  },
  {
    quote:
      "Paired with Ashish on a React Native release; his attention to UX polish stood out.",
    name: "A. Patel",
    role: "Mobile Chapter Lead",
    initials: "AP",
  },
];
