import { ContactForm } from "@/components/sections/contact-form";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Spotlight } from "@/components/ui/spotlight";
import { profiles, site } from "@/lib/content";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-y relative z-10 scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-[var(--bg-deep)] px-4 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-24 z-0 h-[min(52vh,480px)] overflow-hidden opacity-90">
        <Spotlight className="-top-32 left-1/2 h-[120%] -translate-x-1/2 md:-top-20" fill="blue" />
        <Spotlight className="top-20 -right-24 h-[90vh] w-[55vw]" fill="purple" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something that ships"
            subtitle="Tell me about your product, timeline, and stack — I’ll reply with clear next steps."
          />
        </MotionReveal>

        <div className="section-body-gap grid gap-10 lg:grid-cols-2 lg:gap-16">
          <MotionReveal className="space-y-6">
            <div className="card-landin rounded-2xl p-6 sm:p-8">
              <p className="text-sm text-zinc-400">
                Collaborations, freelance scopes, or full-time conversations — all welcome. Based in{" "}
                <span className="text-zinc-300">{site.location}</span>.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={profiles.find((p) => p.icon === "github")!.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-200 transition hover:border-[var(--github-l3)]/40 hover:bg-[var(--github-l1)]/25 hover:text-white"
                >
                  <Github className="h-4 w-4 text-[var(--github-l3)]" />
                  GitHub
                </Link>
                <Link
                  href={profiles.find((p) => p.icon === "linkedin")!.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-200 transition hover:border-[var(--accent-indigo)]/35 hover:bg-white/[0.07]"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
                <Link
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-200 transition hover:border-[var(--accent-indigo)]/35 hover:bg-white/[0.07]"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </Link>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-200 transition hover:border-[var(--accent-indigo)]/35 hover:bg-white/[0.07]"
                >
                  <Phone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={site.resume.href}
                  download={site.resume.downloadFilename}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-200 transition hover:border-[var(--accent-indigo)]/35 hover:bg-white/[0.07]"
                >
                  Résumé PDF
                </a>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.06}>
            <ContactForm />
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
