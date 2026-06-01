"use client";

import { motion } from "framer-motion";
import SectionShell from "@/components/ui/SectionShell";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SystemStat from "@/components/ui/SystemStat";

const telemetry = [
  ["Build Mode", "Interactive Portfolio / Active Development", "primary"],
  ["Frontend State", "Next.js + TypeScript + Motion online", "success"],
  ["Backend Link", "Spring Boot integration planned in Phase 3", "warning"],
  ["Design Goal", "Restrained cinematic command interface", "primary"],
] as const;

export default function SystemTelemetrySection() {
  return (
    <SectionShell id="telemetry" sectionId="telemetry" compact className="pt-10">
      <Reveal>
        <SpotlightCard className="overflow-hidden p-6 md:p-8">
          <motion.div
            animate={{ backgroundPositionX: ["0%", "100%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent 0%, rgba(125,211,252,0.35) 45%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
          />

          <div className="relative z-10 mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p
                className="mb-2 text-xs uppercase tracking-[0.28em] text-primary"
                style={{ fontFamily: "var(--font-chakra)" }}
              >
                System Telemetry
              </p>
              <h2
                className="text-2xl md:text-3xl"
                style={{ fontFamily: "var(--font-chakra)" }}
              >
                Live profile status and development signal
              </h2>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.9)]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-primary">
                Operational
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {telemetry.map(([label, value, tone], index) => (
              <Reveal key={label} delay={index * 0.05}>
                <SystemStat label={label} value={value} tone={tone} />
              </Reveal>
            ))}
          </div>
        </SpotlightCard>
      </Reveal>
    </SectionShell>
  );
}