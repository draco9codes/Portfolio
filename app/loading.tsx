export default function Loading() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 md:px-6">
        <div className="w-full space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span
              className="text-[11px] uppercase tracking-[0.28em] text-primary"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              Booting interface
            </span>
          </div>

          <div className="space-y-4">
            <div className="h-4 w-48 rounded bg-white/10" />
            <div className="h-16 w-full max-w-3xl rounded bg-white/10" />
            <div className="h-6 w-full max-w-2xl rounded bg-white/5" />
            <div className="h-6 w-[70%] max-w-2xl rounded bg-white/5" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-card/50 p-4"
              >
                <div className="mb-3 h-3 w-24 rounded bg-white/10" />
                <div className="h-5 w-32 rounded bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}