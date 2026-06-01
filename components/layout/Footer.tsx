import { siteConfig } from "@/lib/site";
import StatusPill from "@/components/ui/StatusPill";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-4 py-8 md:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(125,211,252,0.08),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p
            className="text-xs uppercase tracking-[0.28em] text-primary"
            style={{ fontFamily: "var(--font-chakra)" }}
          >
            System Status
          </p>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Portfolio interface active · Built with Next.js, TypeScript,
            Tailwind, and Framer Motion · Engineered for a restrained cinematic
            command-center experience
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <StatusPill label={siteConfig.status} pulse />
          <p className="text-sm text-foreground/85">
            {siteConfig.name} · {siteConfig.shortTitle}
          </p>
        </div>
      </div>
    </footer>
  );
}