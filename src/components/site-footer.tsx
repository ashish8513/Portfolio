import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-xs text-zinc-500 sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {site.name}. Crafted with Next.js & Tailwind.
        </p>
        <p className="max-w-md sm:text-right">{site.tagline}</p>
      </div>
    </footer>
  );
}
