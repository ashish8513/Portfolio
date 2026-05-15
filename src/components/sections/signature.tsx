import { MotionReveal } from "@/components/motion-reveal";

const points = [
  "MERN + React Native projects delivered from idea to launch.",
  "Clean APIs, thoughtful UI details, and reliable release flow.",
  "Balanced focus on speed, quality, and business impact.",
];

export function Signature() {
  return (
    <section className="section-y-compact relative z-10 overflow-hidden border-t border-white/[0.06] bg-[var(--bg-deep)] px-4 sm:px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[15%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[var(--accent-indigo)] opacity-[0.12] blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] h-64 w-64 rounded-full bg-[var(--accent-hover)] opacity-[0.12] blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal>
          <div className="card-landin rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-14">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-indigo)]">
                  Signature approach
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-[2rem] md:leading-snug">
                  I build products that feel polished and stay maintainable.
                </h3>
                <ul className="mt-8 space-y-4 text-sm leading-relaxed text-zinc-400">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-cyan)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/[0.08] bg-[#080808] p-5 text-center">
                  <p className="text-3xl font-semibold text-white">10+</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Projects shipped</p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-[#080808] p-5 text-center">
                  <p className="text-3xl font-semibold text-white">2+</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Years building</p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-[#080808] p-5 text-center">
                  <p className="text-xl font-semibold text-white">MERN</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Primary stack</p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-[#080808] p-5 text-center">
                  <p className="text-xl font-semibold text-white">RN</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Mobile builds</p>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
