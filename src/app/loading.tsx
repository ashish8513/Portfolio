export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-deep)]">
      <div className="relative flex items-center gap-3">
        <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />
        <span className="h-3 w-3 animate-pulse rounded-full bg-indigo-500 [animation-delay:120ms]" />
        <span className="h-3 w-3 animate-pulse rounded-full bg-violet-400 [animation-delay:220ms]" />
      </div>
    </div>
  );
}
