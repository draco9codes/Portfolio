"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxGlow() {
  const { scrollY } = useScroll();

  const yOne = useTransform(scrollY, [0, 1200], [0, 180]);
  const yTwo = useTransform(scrollY, [0, 1200], [0, -120]);
  const rotate = useTransform(scrollY, [0, 1200], [0, 18]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: yOne, rotate }}
        className="absolute left-[-8rem] top-[8rem] h-[22rem] w-[22rem] rounded-full bg-primary/10 blur-[100px]"
      />
      <motion.div
        style={{ y: yTwo }}
        className="absolute right-[-6rem] top-[22rem] h-[18rem] w-[18rem] rounded-full bg-cyan-300/10 blur-[110px]"
      />
      <motion.div
        style={{ y: yOne }}
        className="absolute bottom-[-8rem] left-1/3 h-[16rem] w-[16rem] rounded-full bg-sky-400/10 blur-[90px]"
      />
    </div>
  );
}