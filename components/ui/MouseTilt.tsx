"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

type MouseTiltProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export default function MouseTilt({
  children,
  className = "",
  intensity = 16,
}: MouseTiltProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;

        const rotateY = (px - 0.5) * intensity;
        const rotateX = (0.5 - py) * intensity;

        setRotate({ x: rotateX, y: rotateY });
      }}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}