import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/content";
import { BadgeCheck } from "lucide-react";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative z-10 scroll-mt-24 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Trust"
            title="Verified community testimonials"
            subtitle="Short quotes from collaborators — replace with real names and approvals."
          />
        </MotionReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <MotionReveal key={t.name}>
              <figure className="glass-panel flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-400/90">
                  <BadgeCheck className="h-4 w-4" aria-hidden />
                  Community verified
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 text-xs font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
