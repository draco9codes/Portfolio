"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center px-4 md:px-6">
        <div className="w-full rounded-2xl border border-red-500/20 bg-card/60 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm">
          <p
            className="mb-3 text-xs uppercase tracking-[0.3em] text-red-400"
            style={{ fontFamily: "var(--font-chakra)" }}
          >
            System Fault
          </p>

          <h1
            className="mb-4 text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-chakra)" }}
          >
            Interface execution failed
          </h1>

          <p className="max-w-2xl text-muted-foreground md:text-lg md:leading-8">
            Something broke while rendering the portfolio interface. This is a
            recoverable state in development, so try resetting the route first.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center rounded-md border border-primary/30 bg-primary/12 px-5 py-3 text-sm uppercase tracking-[0.22em] text-primary transition-all hover:bg-primary/18"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              Retry Render
            </button>
          </div>

          {error?.message && (
            <pre className="mt-8 overflow-x-auto rounded-xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-red-200">
              {error.message}
            </pre>
          )}
        </div>
      </div>
    </main>
  );
}