"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { sectionRegistry } from "@/lib/section-registry";

const navItems = sectionRegistry.map((item) => ({
  label: item.label,
  href: `#${item.id}`,
}));

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;

    setScrolled(current > 24);

    if (current < 80) {
      setHidden(false);
      return;
    }

    if (diff > 6) setHidden(true);
    if (diff < -6) setHidden(false);
  });

  useEffect(() => {
    const onHashChange = () => setMenuOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress, originX: 0 }}
        className="fixed left-0 top-0 z-[70] h-[2px] w-full bg-primary"
      />

      <motion.header
        initial={false}
        animate={{
          y: hidden ? -110 : 0,
        }}
        transition={{ duration: 0.28 }}
        className="fixed inset-x-0 top-0 z-[60] px-4 pt-4 md:px-8"
      >
        <div
          className={[
            "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 md:px-6",
            scrolled
              ? "border-primary/20 bg-background/70 shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
              : "border-white/10 bg-background/40",
          ].join(" ")}
        >
          <Link href="#top">
            <span
              className="flex items-center gap-3 text-sm uppercase tracking-[0.26em] text-foreground/90"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(125,211,252,0.9)]" />
              Shivam Kumar
            </span>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                style={{ fontFamily: "var(--font-chakra)" }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground/85 lg:hidden"
            style={{ fontFamily: "var(--font-chakra)" }}
          >
            Menu
          </motion.button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-background/90 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm text-foreground/90 transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}