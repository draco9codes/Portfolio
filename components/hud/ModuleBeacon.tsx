"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCurrentModule } from "@/hooks/useCurrentModule";

export default function ModuleBeacon() {
  const { currentModule } = useCurrentModule();

  return (
    <div className="pointer-events-none fixed bottom-10 left-1/2 z-[60] hidden -translate-x-1/2 xl:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentModule?.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="rounded-full border border-primary/20 bg-background/60 px-6 py-3 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(125,211,252,0.8)]" />

            <span
              className="text-xs uppercase tracking-[0.3em] text-primary"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              {currentModule?.module ?? "INITIALIZING"}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}