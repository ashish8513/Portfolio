import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <div className="mb-4 flex justify-center">
          <span className="inline-flex rounded-full border border-white/10 bg-[#0a0a0a]/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-indigo)]">
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
