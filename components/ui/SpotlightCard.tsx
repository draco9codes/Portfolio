"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  active?: boolean;
};
export default function SpotlightCard({
  children,
  className = "",
  active = false,
}: SpotlightCardProps) {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  return (
    <motion.div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setPosition({ x, y });
      }}
      whileHover={{
        y: -6,
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      className={[
        "group relative overflow-hidden rounded-2xl bg-card/60 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-colors duration-300 hover:border-primary/20",
        active ? "border border-primary/25" : "border border-white/10",
        className,
      ].join(" ")}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(125,211,252,0.2), transparent 24%)`,
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.05),transparent_35%,transparent_65%,rgba(125,211,252,0.06))] opacity-60" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}