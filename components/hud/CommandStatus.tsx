"use client";

import { sectionRegistry } from "@/lib/section-registry";
import { useCurrentModule } from "@/hooks/useCurrentModule";


export default function CommandStatus() {
  const { currentModule } = useCurrentModule();

  return (
    <div className="pointer-events-none fixed left-8 top-1/2 z-[55] hidden -translate-y-1/2 xl:block">
      <div className="w-64 rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span
            className="text-[10px] uppercase tracking-[0.3em] text-white/50"
            style={{ fontFamily: "var(--font-chakra)" }}
          >
            System Status
          </span>
        </div>

        <div className="space-y-5">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/40">
              Active Module
            </p>

            <p
              className="text-sm tracking-[0.18em] text-sky-300"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              {currentModule?.module ?? "INITIALIZING"}
            </p>
          </div>

          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/40">
              Mission State
            </p>

            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              Operational
            </p>
          </div>

          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/40">
              Runtime
            </p>

            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              Fedora KDE / Active
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}