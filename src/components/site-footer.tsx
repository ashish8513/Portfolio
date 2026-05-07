import { nav, portfolioBuiltWith, profiles, site } from "@/lib/content";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[var(--bg-deep)] px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="space-y-4">
          <Link href="#top" className="inline-flex items-center gap-2 font-semibold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0a] text-xs font-bold">
              AP
            </span>
            {site.name}
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-500">{site.tagline}</p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Navigate</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-zinc-400 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-zinc-400">
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="transition hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li>{site.location}</li>
            <li>
              <a
                href={site.resume.href}
                download={site.resume.downloadFilename}
                className="transition hover:text-white"
              >
                Download résumé (PDF)
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Availability</p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            Open to full-time roles at product-led teams and MNCs. Remote-first preferred; comfortable with India-friendly
            overlap hours and clear async communication.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-zinc-600">
            Also interested in well-scoped contract work when it fits the stack.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/[0.06] pt-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600">This site</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {portfolioBuiltWith.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1 font-mono text-[10px] font-medium text-zinc-500 sm:text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-zinc-600 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center sm:justify-end">
            <span className="text-zinc-500">Engineered as a production Next.js app.</span>
            <a
              href={profiles.find((p) => p.icon === "github")?.href ?? "https://github.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 underline-offset-4 transition hover:text-white hover:underline"
            >
              GitHub →
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
