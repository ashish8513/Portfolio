import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const team = [
  { name: "Daniel Reed", role: "Co-Founder, CEO" },
  { name: "James Turner", role: "Developer, Tech Lead" },
  { name: "Michael Carter", role: "Marketing Strategist" },
] as const;

const awards = [
  { org: "Framer", title: "CSS Design Awards", note: "Site of the Day" },
  { org: "Awwwards", title: "Awwwards", note: "Site of the Year" },
  { org: "IPSUM", title: "Red Dot Design", note: "Best of the Year" },
  { org: "LOGO", title: "Framer Awards", note: "Site of the Month" },
] as const;

const tools = [
  { name: "Zapier", tag: "Automation" },
  { name: "Slack", tag: "Communication" },
  { name: "Dropbox", tag: "Cloud Storage" },
  { name: "Stripe", tag: "Payments" },
  { name: "Mailchimp", tag: "Email Marketing" },
  { name: "GitHub", tag: "Version Control" },
] as const;

const faqs = [
  "What do I need to get started?",
  "What kind of customization is available?",
  "How easy is it to edit for beginners?",
  "Can you support us after launch?",
  "Do I need to know how to code?",
  "What will I get after purchasing?",
] as const;

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Landin style agency process, team, tools, and delivery approach.",
};

function SectionTag({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-zinc-300">
      {text}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex flex-1 flex-col pt-24">
        <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#050505] px-6 py-14 text-center sm:px-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,85,254,0.3),transparent_55%)]" />
            <div className="relative">
              <SectionTag text="Dig Deep About Us" />
              <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Learn More About Landin Let&apos;s Deep Dive!
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-sm text-zinc-400 sm:text-base">
                Landin is your go-to agency for creative thinking and modern digital
                experiences. We design with clarity, build with precision, and scale with confidence.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href="#contact" className="btn-blue-glow inline-flex">
                  Connect With Us
                </Link>
                <Link href="#story" className="btn-outline-landin">
                  What is Landin?
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
          <div className="grid gap-10 rounded-3xl border border-white/[0.06] bg-[#040404] p-6 md:grid-cols-2 md:p-10">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#020202]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_70%,rgba(0,85,254,0.22),transparent_55%)]" />
            </div>
            <div className="space-y-5">
              <SectionTag text="About Landin" />
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                An Agency With Classic Revolutionary Skills!
              </h2>
              <div className="space-y-4 text-sm text-zinc-400 sm:text-base">
                <p>
                  <span className="font-semibold text-zinc-200">Your Success, Our Priority</span>
                  <br />
                  We empower clients to reach goals through practical strategy and polished interfaces.
                </p>
                <p>
                  <span className="font-semibold text-zinc-200">Partners You Can Rely On</span>
                  <br />
                  We move closely with your team, from discovery to launch and ongoing optimization.
                </p>
              </div>
              <Link href="#contact" className="btn-blue-glow inline-flex">
                Book an Appointment
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
          <div className="text-center">
            <SectionTag text="Team Members" />
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Meet the Team Making Things Happen Every Day
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 sm:text-base">
              Our team is made up of passionate professionals bringing creativity and technical excellence.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070707]"
              >
                <div className="h-64 bg-[radial-gradient(circle_at_50%_20%,rgba(0,85,254,0.22),transparent_40%),linear-gradient(180deg,#171717,#0a0a0a)]" />
                <div className="border-t border-white/[0.08] bg-[linear-gradient(180deg,rgba(0,0,238,0.08),transparent)] px-4 py-3">
                  <p className="font-semibold text-white">{member.name}</p>
                  <p className="text-sm text-zinc-400">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
          <div className="grid gap-10 rounded-3xl border border-white/[0.06] bg-[#040404] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div className="space-y-4">
              <SectionTag text="Awards" />
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Awards & Recognition
              </h2>
              <p className="max-w-sm text-sm text-zinc-400 sm:text-base">
                We are proud to be recognized by design and product communities for impactful work.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {awards.map((award) => (
                <article
                  key={`${award.org}-${award.title}`}
                  className="rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(0,85,254,0.12),rgba(255,255,255,0.01))] p-5"
                >
                  <p className="text-lg font-semibold text-white">{award.org}</p>
                  <p className="mt-7 text-sm font-medium text-zinc-200">{award.title}</p>
                  <p className="text-sm text-zinc-400">{award.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
          <div className="text-center">
            <SectionTag text="Our Stack" />
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Tools and Technologies Powering Our Productivity
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 sm:text-base">
              We use proven tools to keep communication smooth, deployment safe, and operations efficient.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <article
                key={tool.name}
                className="rounded-2xl border border-white/[0.08] bg-[#050505] p-5"
              >
                <p className="text-lg font-semibold text-white">{tool.name}</p>
                <p className="text-sm text-zinc-400">{tool.tag}</p>
                <p className="mt-5 text-sm text-zinc-500">
                  Trusted in our workflow to deliver reliable and scalable outcomes.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
          <div className="grid gap-10 rounded-3xl border border-white/[0.06] bg-[#040404] p-6 md:grid-cols-[0.85fr_1.15fr] md:p-10">
            <div className="space-y-4">
              <SectionTag text="How We Work?" />
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-sm text-sm text-zinc-400 sm:text-base">
                Quick answers to common questions before we start your project.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#070707] px-5 py-4 text-sm text-zinc-200"
                >
                  <span>{item}</span>
                  <span className="text-lg leading-none text-zinc-500">+</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
