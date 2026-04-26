import { MotionReveal } from "@/components/motion-reveal";
import { StarsBackground } from "@/components/effects/stars-background";

const points = [
  "MERN + React Native projects delivered from idea to launch.",
  "Clean APIs, thoughtful UI details, and reliable release flow.",
  "Balanced focus on speed, quality, and business impact.",
];

export function Signature() {
  return (
    <section className="relative z-10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <StarsBackground className="p-6 sm:p-10">
            <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200/90">
                  What makes me different
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  I build products that feel polished and stay maintainable.
                </h3>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-300">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="glass-panel rounded-2xl p-4 text-center">
                  <p className="text-2xl font-semibold text-white">10+</p>
                  <p className="mt-1 text-xs text-slate-400">Projects shipped</p>
                </div>
                <div className="glass-panel rounded-2xl p-4 text-center">
                  <p className="text-2xl font-semibold text-white">2+</p>
                  <p className="mt-1 text-xs text-slate-400">Years building</p>
                </div>
                <div className="glass-panel rounded-2xl p-4 text-center">
                  <p className="text-2xl font-semibold text-white">MERN</p>
                  <p className="mt-1 text-xs text-slate-400">Primary stack</p>
                </div>
                <div className="glass-panel rounded-2xl p-4 text-center">
                  <p className="text-2xl font-semibold text-white">RN</p>
                  <p className="mt-1 text-xs text-slate-400">Mobile builds</p>
                </div>
              </div>
            </div>
          </StarsBackground>
        </MotionReveal>
      </div>
    </section>
  );
}
