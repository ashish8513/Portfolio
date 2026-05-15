import { ContactForm } from "@/components/sections/contact-form";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Spotlight } from "@/components/ui/spotlight";
import { profiles, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Download, Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const contactCardClass = cn(
  "flex h-full flex-col rounded-2xl border border-white/[0.09] bg-[#08080c]",
  "shadow-[0_24px_60px_-32px_rgba(0,0,0,0.72)] ring-1 ring-white/[0.04]",
  "transition-[border-color,box-shadow] duration-300",
  "hover:border-white/[0.12] hover:shadow-[0_28px_70px_-32px_rgba(59,130,246,0.12)]",
);

export function Contact() {
  const github = profiles.find((p) => p.icon === "github");
  const linkedin = profiles.find((p) => p.icon === "linkedin");

  return (
    <section
      id="contact"
      className={cn(
        "section-y relative z-10 scroll-mt-28 overflow-hidden border-t border-white/[0.06] bg-[var(--bg-deep)] px-4 sm:px-6 md:scroll-mt-32",
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.08), transparent), radial-gradient(ellipse 50% 40% at 100% 50%, rgba(139, 92, 246, 0.06), transparent)",
          }}
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 -top-28 z-0 h-[min(48vh,420px)] overflow-hidden opacity-[0.55]">
        <Spotlight className="-top-36 left-1/2 h-[130%] -translate-x-1/2 sm:-top-24" fill="#3b82f6" />
        <Spotlight className="top-16 -right-20 h-[85vh] w-[min(60vw,480px)]" fill="#8b5cf6" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something that ships"
            subtitle="Tell me about your product, timeline, and stack — I’ll reply with clear next steps."
          />
        </MotionReveal>

        <div className="section-body-gap grid gap-6 md:gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <MotionReveal className="min-w-0 lg:order-1">
            <div className={cn(contactCardClass, "p-6 sm:p-8")}>
              <div className="mb-6 flex items-start gap-3 border-b border-white/[0.06] pb-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--accent-primary)]/25 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                  <MessageCircle className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-indigo)]">
                    Direct line
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    Collaborations, freelance scopes, or full-time conversations — all welcome. Based in{" "}
                    <span className="font-medium text-zinc-300">{site.location}</span>.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                {github ? (
                  <Link
                    href={github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3.5 py-3 text-sm text-zinc-200 transition hover:border-[var(--github-l3)]/45 hover:bg-[var(--github-l1)]/20 hover:text-white"
                  >
                    <Github className="h-4 w-4 shrink-0 text-[var(--github-l3)] transition-transform group-hover:scale-110" />
                    GitHub
                  </Link>
                ) : null}
                {linkedin ? (
                  <Link
                    href={linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3.5 py-3 text-sm text-zinc-200 transition hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10 hover:text-white"
                  >
                    <Linkedin className="h-4 w-4 shrink-0 text-[#0a66c2]" />
                    LinkedIn
                  </Link>
                ) : null}
                <Link
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3.5 py-3 text-sm text-zinc-200 transition hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 hover:text-white sm:col-span-2"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
                  <span className="min-w-0 truncate">{site.email}</span>
                </Link>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3.5 py-3 text-sm text-zinc-200 transition hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-zinc-400 group-hover:text-[var(--accent-primary)]" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={site.resume.href}
                  download={site.resume.downloadFilename}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3.5 py-3 text-sm font-medium text-zinc-200 transition hover:border-amber-400/45 hover:bg-amber-400/10 hover:text-amber-100 sm:col-span-2"
                >
                  <Download className="h-4 w-4 shrink-0 text-amber-400/90" />
                  Download résumé (PDF)
                </a>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.06} className="min-w-0 lg:order-2">
            <ContactForm cardClassName={contactCardClass} />
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
