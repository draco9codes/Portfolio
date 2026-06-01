"use client";

import { motion } from "framer-motion";

type MetricCardProps = {
  label: string;
  value: string;
};

export default function MetricCard({ label, value }: MetricCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
      transition={{ duration: 0.25 }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative overflow-hidden rounded-xl border border-white/10 bg-card/50 p-4 backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.12),transparent_45%)]" />
      <p
        className="relative z-10 mb-2 text-[11px] uppercase tracking-[0.24em] text-primary/80"
        style={{ fontFamily: "var(--font-chakra)" }}
      >
        {label}
      </p>
      <p className="relative z-10 text-sm leading-6 text-muted-foreground">
        {value}
      </p>
    </motion.div>
  );
}