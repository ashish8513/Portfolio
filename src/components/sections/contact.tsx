"use client";

import { submitContact } from "@/app/actions/contact";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
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
      className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:brightness-110 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export function Contact() {
  const [state, action] = useActionState(formAction, null);

  return (
    <section id="contact" className="relative z-10 scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Let’s talk"
            title="Let’s build something great together"
            subtitle="Share a bit about your product, timeline, and stack — I’ll respond with next steps."
          />
        </MotionReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <MotionReveal className="space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <p className="text-sm text-zinc-400">
                Prefer email? Reach me directly at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-indigo-200 underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
                .
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-200 hover:bg-white/[0.07]"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-200 hover:bg-white/[0.07]"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
                <Link
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-200 hover:bg-white/[0.07]"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </Link>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.06}>
            <form action={action} className="glass-panel space-y-4 rounded-2xl p-6 sm:p-8">
              <div>
                <label htmlFor="name" className="text-xs font-medium text-zinc-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#030303]/60 px-3 py-2.5 text-sm text-white outline-none ring-indigo-400/0 transition focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/30"
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
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#030303]/60 px-3 py-2.5 text-sm text-white outline-none transition focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/30"
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
                  className="mt-1.5 w-full resize-y rounded-lg border border-white/10 bg-[#030303]/60 px-3 py-2.5 text-sm text-white outline-none transition focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/30"
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
