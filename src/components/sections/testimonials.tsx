import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/content";
import { BadgeCheck } from "lucide-react";

export function Testimonials() {
  const [lead, ...rest] = testimonials;

  return (
    <section id="testimonials" className="relative z-10 scroll-mt-24 border-t border-white/[0.06] bg-[var(--bg-deep)] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Trust"
            title="People I’ve shipped alongside"
            subtitle="Short endorsements — replace with signed quotes when you have permission."
          />
        </MotionReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <MotionReveal className="lg:col-span-2">
            <figure className="card-landin flex h-full flex-col rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-400/90">
                <BadgeCheck className="h-4 w-4" aria-hidden />
                Featured testimonial
              </div>
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-zinc-200 md:text-xl">
                &ldquo;{lead.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-indigo)] to-[var(--accent-purple)] text-sm font-bold text-white">
                  {lead.initials}
                </span>
                <div>
                  <p className="font-semibold text-white">{lead.name}</p>
                  <p className="text-sm text-zinc-500">{lead.role}</p>
                </div>
              </figcaption>
            </figure>
          </MotionReveal>

          <div className="flex flex-col gap-6">
            {rest.map((t) => (
              <MotionReveal key={t.name}>
                <figure className="card-landin flex h-full flex-col rounded-2xl p-6">
                  <blockquote className="flex-1 text-sm leading-relaxed text-zinc-400">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#141414] text-xs font-bold text-white ring-1 ring-white/10">
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
      </div>
    </section>
  );
}
