import { about, site } from "@/lib/content";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { AboutAccordion } from "@/components/sections/about-accordion";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

function splitIntro(text: string) {
  const sep = " — ";
  const i = text.indexOf(sep);
  if (i < 0) return { name: text, body: "" as string | null };
  return {
    name: text.slice(0, i),
    body: text.slice(i + sep.length),
  };
}

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85&auto=format&fit=crop";

export function About() {
  const { name, body } = splitIntro(about.intro);

  return (
    <section
      id="about"
      className="section-y relative z-10 scroll-mt-24 bg-[var(--bg-deep)] bg-mesh px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Story"
            title="About me"
            subtitle="A short journey through building products, leveling up, and staying curious."
          />
        </MotionReveal>

        <div className="section-body-gap grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <MotionReveal className="min-w-0 max-lg:w-full lg:self-start">
            <div className="group relative aspect-[4/5] min-h-[280px] w-full overflow-hidden rounded-[22px] border border-white/[0.1] bg-[#050508] shadow-[0_32px_80px_-48px_rgba(var(--accent-primary-rgb),0.4)] ring-1 ring-white/[0.04]">
              <div
                className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(var(--accent-primary-rgb),0.14)_0%,transparent_42%,transparent_100%)] opacity-90"
                aria-hidden
              />
              <Image
                src={ABOUT_IMAGE}
                alt="Developers collaborating"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
              <div
                className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.5)_100%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                aria-hidden
              />
            </div>
          </MotionReveal>

          {/* Right: bio card + accordion card stacked (not merged) */}
          <div className="flex min-w-0 flex-col gap-8">
            <MotionReveal delay={0.06} className="flex w-full">
            <div className="relative flex w-full flex-1 flex-col overflow-hidden rounded-[22px] border border-white/[0.1] bg-[#0c0c12] p-7 shadow-[0_32px_90px_-50px_rgba(0,0,0,0.9)] ring-1 ring-[var(--accent-primary)]/15 sm:p-9">
              {/* Depth: ambient glows + top edge */}
              <div
                className="pointer-events-none absolute -right-28 -top-28 h-56 w-56 rounded-full bg-[var(--accent-primary)]/25 blur-[80px]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-[var(--accent-primary)]/12 blur-[70px]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(255,255,255,0.04)_0%,transparent_38%)]"
                aria-hidden
              />

              <div className="relative z-[1] flex flex-1 flex-col">
                <p className="text-[15px] leading-[1.7] text-zinc-100 sm:text-base">
                  <span className="font-semibold text-white">{name}</span>
                  {body ? (
                    <>
                      <span className="font-normal text-zinc-400"> — </span>
                      <span className="font-normal text-zinc-300">{body}</span>
                    </>
                  ) : null}
                </p>

                <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent/0" aria-hidden />

                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--accent-primary)] sm:text-xs">
                  Core stack
                </p>

                <ul className="space-y-3.5">
                  {about.highlights.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3.5 text-[15px] leading-snug text-zinc-200 sm:text-[15px]"
                    >
                      <span
                        className="mt-0.5 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-hover)] shadow-[0_0_22px_-4px_rgba(var(--accent-primary-rgb),0.5)] ring-2 ring-[var(--accent-primary)]/25"
                        aria-hidden
                      >
                        <Check className="h-3.5 w-3.5 text-white" strokeWidth={2.75} />
                      </span>
                      <span className="pt-0.5">{line}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-10 text-sm text-zinc-500">{site.location}</p>

                <Link href="#contact" className="btn-primary-landin mt-5 w-full py-4 text-sm font-bold">
                  Start a project
                </Link>
              </div>
            </div>
            </MotionReveal>

            <MotionReveal delay={0.12} className="w-full">
              <div className="w-full space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-white">Learn from my experience</h3>
                  <p className="mt-2 text-sm text-zinc-500">
                    Lessons and mistakes that shaped how I build today.
                  </p>
                </div>
                <AboutAccordion />
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
