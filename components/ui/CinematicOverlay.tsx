"use client";

import { motion } from "framer-motion";

export default function CinematicOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.12),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.08),transparent_28%)]" />

      <motion.div
        animate={{ opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_25%,transparent_75%,rgba(125,211,252,0.05))]"
      />

      <motion.div
        animate={{ backgroundPositionY: ["0px", "120px"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "100% 6px",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.05]" />
    </div>
  );
}