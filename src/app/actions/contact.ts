"use server";

/**
 * Contact form handler — wire to Resend, SendGrid, or your API.
 * Returns a safe message for the UI without leaking internals.
 */
export async function submitContact(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length < 2) {
    return { ok: false as const, error: "Please enter your name." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false as const, error: "Please enter a valid email." };
  }
  if (!message || message.length < 10) {
    return {
      ok: false as const,
      error: "Message should be at least 10 characters.",
    };
  }

  // TODO: send email or persist to CRM
  return {
    ok: true as const,
    message: "Thanks — I'll get back to you shortly.",
  };
}
