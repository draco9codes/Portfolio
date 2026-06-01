"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type SecondaryActionProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
};

export default function SecondaryAction({
  href,
  children,
  external = false,
}: SecondaryActionProps) {
  if (external) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-foreground/85 backdrop-blur-sm transition-colors hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
        style={{ fontFamily: "var(--font-chakra)" }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <Link href={href}>
      <motion.span
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-foreground/85 backdrop-blur-sm transition-colors hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
        style={{ fontFamily: "var(--font-chakra)" }}
      >
        {children}
      </motion.span>
    </Link>
  );
}