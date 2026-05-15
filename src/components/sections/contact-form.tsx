"use client";

import { submitContact } from "@/app/actions/contact";
import { cn } from "@/lib/utils";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Send } from "lucide-react";

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
      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-hover)] text-sm font-semibold text-white shadow-[0_12px_36px_-12px_rgba(var(--accent-primary-rgb),0.45)] transition hover:brightness-110 active:scale-[0.99] disabled:opacity-60"
    >
      <Send className="h-4 w-4 opacity-90" aria-hidden />
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

const inputCls =
  "mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#0c0c10] px-3.5 py-2.5 text-sm text-[var(--text-main)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] outline-none transition placeholder:text-zinc-600 focus:border-[var(--accent-primary)]/45 focus:ring-2 focus:ring-[var(--accent-primary)]/22";

type ContactFormProps = {
  /** Shared card shell class from Contact section for visual parity */
  cardClassName?: string;
};

export function ContactForm({ cardClassName }: ContactFormProps) {
  const [state, action] = useActionState(formAction, null);

  return (
    <form
      action={action}
      className={cn(
        "flex h-full min-h-[min(100%,420px)] flex-col space-y-4 p-6 sm:space-y-5 sm:p-8",
        cardClassName,
      )}
    >
      <div className="border-b border-white/[0.06] pb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-indigo)]">
          Message
        </p>
        <p className="mt-1 text-sm text-zinc-500">
          I usually reply within a day — include role, stack, and timing if you can.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-4 sm:gap-5">
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
        <div className="flex min-h-0 flex-1 flex-col">
          <label htmlFor="message" className="text-xs font-medium text-zinc-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={cn(inputCls, "min-h-[140px] flex-1 resize-y sm:min-h-[160px]")}
            placeholder="Project goals, role, timeline…"
          />
        </div>
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

      <div className="pt-1">
        <SubmitButton />
      </div>
    </form>
  );
}
