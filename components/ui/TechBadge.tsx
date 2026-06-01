"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type TechBadgeProps = {
  children: ReactNode;
  variant?: "default" | "primary";
};

export default function TechBadge({
  children,
  variant = "default",
}: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ duration: 0.18 }}
      className={[
        "inline-flex rounded-md border px-2.5 py-1.5 text-xs tracking-[0.08em] transition-colors",
        variant === "primary"
          ? "border-primary/20 bg-primary/10 text-primary hover:bg-primary/15"
          : "border-white/10 bg-white/5 text-muted-foreground hover:border-primary/15 hover:text-foreground",
      ].join(" ")}
    >
      {children}
    </motion.span>
  );
}