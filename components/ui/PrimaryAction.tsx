"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type PrimaryActionProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
};

export default function PrimaryAction({
  href,
  children,
  external = false,
}: PrimaryActionProps) {
  if (external) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.97 }}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/15 px-6 py-3 text-sm text-primary shadow-[0_10px_30px_rgba(14,165,233,0.12)] transition-colors hover:bg-primary/20"
        style={{ fontFamily: "var(--font-chakra)" }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <Link href={href}>
      <motion.span
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/15 px-6 py-3 text-sm text-primary shadow-[0_10px_30px_rgba(14,165,233,0.12)] transition-colors hover:bg-primary/20"
        style={{ fontFamily: "var(--font-chakra)" }}
      >
        {children}
      </motion.span>
    </Link>
  );
}