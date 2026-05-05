"use client";

import { submitContact } from "@/app/actions/contact";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Spotlight } from "@/components/ui/spotlight";
import { site } from "@/lib/content";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

type ContactState =
  | null
  | { ok: true; message: string }
  | { ok: false; error: string };

async function formAction(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  return submitContact(formData);
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[var(--accent-indigo)] to-[var(--accent-purple)] text-sm font-semibold text-white shadow-[0_12px_36px_-12px_rgba(59,130,246,0.45)] transition hover:brightness-110 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

const inputCls =
  "mt-1.5 w-full rounded-xl border border-white/10 bg-[var(--bg-elevated)] px-3 py-2.5 text-sm text-[var(--text-main)] outline-none transition focus:border-[var(--accent-indigo)]/45 focus:ring-2 focus:ring-[var(--accent-indigo)]/25";

export function Contact() {
  const [state, action] = useActionState(formAction, null);

  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-[var(--bg-deep)] px-4 py-24 sm:px-6"
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

        <MotionReveal className="mt-12">
          <div className="card-landin mx-auto max-w-3xl rounded-3xl px-8 py-10 text-center md:px-12 md:py-12">
            <p className="text-lg font-medium text-white md:text-xl">
              Prefer a fast lane? Email directly — same-day reads when possible.
            </p>
            <a href={`mailto:${site.email}`} className="btn-blue-glow mt-6 inline-flex px-8 py-3 text-sm font-semibold">
              {site.email}
            </a>
          </div>
        </MotionReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <MotionReveal className="space-y-6">
            <div className="card-landin rounded-2xl p-6 sm:p-8">
              <p className="text-sm text-zinc-400">
                Collaborations, freelance scopes, or full-time conversations — all welcome. Based in{" "}
                <span className="text-zinc-300">{site.location}</span>.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-200 transition hover:border-[var(--accent-indigo)]/35 hover:bg-white/[0.07]"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com"
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
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.06}>
            <form action={action} className="card-landin space-y-4 rounded-2xl p-6 sm:p-8">
              <div>
                <label htmlFor="name" className="text-xs font-medium text-zinc-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className={inputCls}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium text-zinc-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputCls}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-medium text-zinc-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className={`${inputCls} resize-y`}
                  placeholder="Project goals, role, timeline…"
                />
              </div>

              {state && !state.ok ? (
                <p className="text-sm text-red-400" role="alert">
                  {state.error}
                </p>
              ) : null}
              {state && state.ok ? (
                <p className="text-sm text-emerald-400" role="status">
                  {state.message}
                </p>
              ) : null}

              <SubmitButton />
            </form>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
