"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useCurrentModule } from "@/hooks/useCurrentModule";
import { atmosphereStates } from "@/lib/atmosphere";

export default function DepthAtmosphere() {
  const { scrollY } = useScroll();
  const { activeSection } = useCurrentModule();

  const state =
    atmosphereStates[
      (activeSection as keyof typeof atmosphereStates) || "about"
    ];

  const rawSlow = useTransform(scrollY, [0, 2400], [0, 120]);
  const rawMedium = useTransform(scrollY, [0, 2400], [0, 220]);
  const rawFast = useTransform(scrollY, [0, 2400], [0, 320]);

  const ySlow = useSpring(rawSlow, {
    stiffness: 80,
    damping: 28,
    mass: 0.6,
  });

  const yMedium = useSpring(rawMedium, {
    stiffness: 70,
    damping: 26,
    mass: 0.65,
  });

  const yFast = useSpring(rawFast, {
    stiffness: 60,
    damping: 24,
    mass: 0.7,
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <motion.div
        animate={{
          opacity: state.glow,
        }}
        transition={{
          duration: 1.4,
        }}
        style={{ y: ySlow }}
        className="absolute left-[-8%] top-[4%] h-[28rem] w-[28rem] rounded-full bg-sky-400 blur-[140px]"
      />

      <motion.div
        animate={{
          opacity: state.glow * 0.8,
        }}
        transition={{
          duration: 1.4,
        }}
        style={{ y: yMedium }}
        className="absolute right-[-10%] top-[18%] h-[36rem] w-[36rem] rounded-full bg-cyan-300 blur-[160px]"
      />

      <motion.div
        animate={{
          opacity: state.glow * 0.65,
        }}
        transition={{
          duration: 1.4,
        }}
        style={{ y: yFast }}
        className="absolute left-[18%] bottom-[-12%] h-[30rem] w-[30rem] rounded-full bg-sky-500 blur-[150px]"
      />

      <motion.div
        animate={{
          opacity: state.grid,
        }}
        transition={{
          duration: 1.2,
        }}
        style={{ y: ySlow }}
        className="
          absolute inset-0
          [background-image:
            linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:120px_120px]
        "
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.08),transparent_34%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.3),transparent_18%,transparent_72%,rgba(2,6,23,0.48))]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.16),transparent_18%,transparent_82%,rgba(2,6,23,0.16))]" />
    </div>
  );
}