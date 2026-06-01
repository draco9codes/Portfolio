"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useCurrentModule } from "@/hooks/useCurrentModule";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  compact?: boolean;
  className?: string;
  sectionId: string;
};

export default function SectionShell({
  id,
  children,
  compact = false,
  className = "",
  sectionId,
}: SectionShellProps) {
  const { activeSection } = useCurrentModule();

  const isActive = activeSection === sectionId;

  return (
    <section
      id={id}
      className={[
        "relative px-6 md:px-10 lg:px-16",
        compact ? "py-20 md:py-24" : "py-24 md:py-32",
        className,
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl">{children}</div>

      <motion.div
        animate={{
          scale: isActive ? 1.8 : 1,
          opacity: isActive ? 1 : 0.35,
        }}
        transition={{
          duration: 0.35,
        }}
        className="absolute -left-10 top-16 hidden xl:block"
      >
        <div className="h-2 w-2 rounded-full bg-primary" />
      </motion.div>
    </section>
  );
}