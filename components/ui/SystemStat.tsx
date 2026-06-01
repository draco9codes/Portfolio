"use client";

import { motion } from "framer-motion";

type SystemStatProps = {
  label: string;
  value: string;
  tone?: "default" | "primary" | "success" | "warning";
};

export default function SystemStat({
  label,
  value,
  tone = "default",
}: SystemStatProps) {
  const toneClass =
    tone === "primary"
      ? "border-primary/20 bg-primary/10 text-primary"
      : tone === "success"
      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
      : tone === "warning"
      ? "border-amber-400/20 bg-amber-400/10 text-amber-300"
      : "border-white/10 bg-white/5 text-foreground/85";

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`rounded-xl border px-4 py-4 ${toneClass}`}
    >
      <p
        className="mb-2 text-[10px] uppercase tracking-[0.24em] opacity-80"
        style={{ fontFamily: "var(--font-chakra)" }}
      >
        {label}
      </p>
      <p className="text-sm leading-6">{value}</p>
    </motion.div>
  );
}