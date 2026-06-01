"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          ...fadeUp.hidden,
          y: 24,
          filter: "blur(8px)",
        },
        visible: {
          ...fadeUp.visible,
          transition: {
            ...fadeUp.visible.transition,
            duration: 0.8,
            delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
    >
      {children}
    </motion.div>
  );
}