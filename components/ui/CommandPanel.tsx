"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type CommandPanelProps = {
  children: ReactNode;
  className?: string;
  title?: string;
};

export default function CommandPanel({
  children,
  className = "",
  title,
}: CommandPanelProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={[
        "relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.10),transparent_45%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-70" />

      <motion.div
        className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.08),transparent)]"
        animate={{ x: ["-120%", "900%"] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10">
        {title && (
          <div className="border-b border-white/8 px-6 py-4">
            <p
              className="text-xs uppercase tracking-[0.28em] text-primary"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              {title}
            </p>
          </div>
        )}

        <div>{children}</div>
      </div>
    </motion.div>
  );
}