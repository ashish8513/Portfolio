import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { profiles } from "@/lib/content";
import { Code2, Github, Linkedin } from "lucide-react";
import Link from "next/link";

function ProfileIcon({ type }: { type: (typeof profiles)[number]["icon"] }) {
  const cls = "h-5 w-5 text-white";
  switch (type) {
    case "github":
      return <Github className={cls} aria-hidden />;
    case "leetcode":
      return <Code2 className={cls} aria-hidden />;
    case "linkedin":
      return <Linkedin className={cls} aria-hidden />;
    default:
      return null;
  }
}

export function Profiles() {
  return (
    <section id="profiles" className="relative z-10 scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Presence"
            title="Coding profiles"
            subtitle="Where I share code, practice, and connect — stats are placeholders until you wire APIs."
          />
        </MotionReveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {profiles.map((p) => (
            <MotionReveal key={p.name}>
              <Link
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                data-profile-card
                className="glass-panel flex h-full flex-col rounded-2xl p-6 transition hover:border-indigo-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/80 to-sky-500/80 shadow-lg shadow-indigo-500/20">
                  <ProfileIcon type={p.icon} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {p.description}
                </p>
                <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                    {p.statLabel}
                  </p>
                  <p className="text-xl font-semibold tabular-nums text-white">
                    {p.statValue}
                  </p>
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
