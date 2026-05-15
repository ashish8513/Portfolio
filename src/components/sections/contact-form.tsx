"use client";

import { submitContact } from "@/app/actions/contact";
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

export function ContactForm() {
  const [state, action] = useActionState(formAction, null);

  return (
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
  );
}
