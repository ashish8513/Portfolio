"use client";

import { cn } from "@/lib/utils";
import {
  Bot,
  Boxes,
  Cloud,
  Code2,
  Database,
  MessageSquareCode,
  Monitor,
  Network,
  Sparkles,
  Wand2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiApachemaven,
  SiAxios,
  SiCplusplus,
  SiCrewai,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGithubcopilot,
  SiJavascript,
  SiJsonwebtokens,
  SiLangchain,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostman,
  SiReact,
  SiRedis,
  SiRedux,
  SiSpring,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

type BrandIcon = {
  Icon: IconType | LucideIcon;
  color?: string;
};

const SKILL_BRAND_ICONS: Record<string, BrandIcon> = {
  Java: { Icon: FaJava, color: "#ED8B00" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "C++ (DSA & Problem Solving)": { Icon: SiCplusplus, color: "#00599C" },

  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#ffffff" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  Redux: { Icon: SiRedux, color: "#764ABC" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  Axios: { Icon: SiAxios, color: "#5A29E4" },

  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  "Express.js": { Icon: SiExpress, color: "#ffffff" },
  "Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
  "Spring Data": { Icon: SiSpring, color: "#6DB33F" },
  "REST APIs": { Icon: Network, color: "#4c81e3" },
  "JWT Authentication": { Icon: SiJsonwebtokens, color: "#d63eff" },
  "Microservices Architecture": { Icon: Boxes, color: "#4c81e3" },

  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  Redis: { Icon: SiRedis, color: "#DC382D" },

  Maven: { Icon: SiApachemaven, color: "#C71A36" },
  JUnit: { Icon: FaJava, color: "#25A162" },
  Mockito: { Icon: Code2, color: "#4c81e3" },
  Lombok: { Icon: FaJava, color: "#ED8B00" },

  Docker: { Icon: SiDocker, color: "#2496ED" },
  Linux: { Icon: SiLinux, color: "#FCC624" },
  AWS: { Icon: Cloud, color: "#FF9900" },
  "CI/CD": { Icon: SiGithubactions, color: "#2088FF" },

  "OpenAI APIs": { Icon: SiOpenai, color: "#ffffff" },
  LangChain: { Icon: SiLangchain, color: "#1FA67A" },
  CrewAI: { Icon: SiCrewai, color: "#FF5A50" },
  "Prompt Engineering": { Icon: MessageSquareCode, color: "#a78bfa" },
  "RAG (Retrieval Augmented Generation)": { Icon: Database, color: "#4c81e3" },
  "AI Agents": { Icon: Bot, color: "#a78bfa" },
  "Fine Tuning": { Icon: Wand2, color: "#c084fc" },
  "Vector Databases": { Icon: Database, color: "#E8B44C" },

  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#ffffff" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  Cursor: { Icon: Monitor, color: "#ffffff" },
  "VS Code": { Icon: VscVscode, color: "#007ACC" },
  Copilot: { Icon: SiGithubcopilot, color: "#ffffff" },
};

const FALLBACK: BrandIcon = { Icon: Sparkles, color: "#4c81e3" };

type SkillBrandIconProps = {
  name: string;
  className?: string;
  featured?: boolean;
};

export function SkillBrandIcon({ name, className }: SkillBrandIconProps) {
  const { Icon, color } = SKILL_BRAND_ICONS[name] ?? FALLBACK;

  return <Icon className={cn("shrink-0", className)} style={{ color }} aria-hidden />;
}

export function SkillIconTile({
  name,
  featured,
  children,
}: {
  name: string;
  featured?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      title={name}
      className={cn(
        "flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl border bg-[#0c0c10] transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14",
        featured
          ? "border-[var(--ai-border)]/60 bg-[#0a0814] shadow-[0_10px_32px_-10px_var(--ai-glow)]"
          : "border-white/[0.09] shadow-[0_10px_28px_-12px_rgba(0,0,0,0.65)]",
      )}
    >
      {children}
    </div>
  );
}
