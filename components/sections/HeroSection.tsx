"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import PrimaryAction from "@/components/ui/PrimaryAction";
import SecondaryAction from "@/components/ui/SecondaryAction";
import Reveal from "@/components/ui/Reveal";
import MouseTilt from "@/components/ui/MouseTilt";
import CinematicOverlay from "@/components/ui/CinematicOverlay";
import HoloOrbScene from "@/components/ui/HoloOrbScene";

export default function HeroSection() {
  const { scrollY } = useScroll();

  const yLeft = useTransform(scrollY, [0, 700], [0, 80]);
  const yRight = useTransform(scrollY, [0, 700], [0, 140]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.28]);

  return (
  <section
    id="top"
    className="relative z-10 flex min-h-screen items-center overflow-hidden px-6 pb-10 pt-28 md:px-10 lg:px-16"
  >
      <CinematicOverlay />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-[16%] h-40 w-40 rounded-full border border-primary/20 bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[18%] right-[8%] h-56 w-56 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div style={{ y: yLeft, opacity }} className="relative z-10 space-y-8">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-primary">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_20px_rgba(125,211,252,0.95)]" />
              Cinematic interface / immersive mode active
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="space-y-6">
              <p
                className="text-xs uppercase tracking-[0.34em] text-primary md:text-sm"
                style={{ fontFamily: "var(--font-chakra)" }}
              >
                Shivam Kumar • Systems Engineer • Full-Stack Builder
              </p>

              <h1
                className="max-w-5xl text-5xl leading-[0.9] md:text-7xl xl:text-[7.4rem]"
                style={{ fontFamily: "var(--font-chakra)" }}
              >
                Building software
                <span className="block text-foreground/70">with cinematic force.</span>
              </h1>

              <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
                Enterprise backend engineer shaping a futuristic portfolio interface
                through motion systems, 3D immersion, and high-intensity frontend craft.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap gap-4">
              <PrimaryAction href="#projects">Enter Project Grid</PrimaryAction>
              <SecondaryAction href="#contact">Open Contact Channel</SecondaryAction>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                ["System Mode", "Immersive UI / Motion-first identity"],
                ["Primary Core", "Backend architecture + engineering discipline"],
                ["Current Goal", "3D cinematic portfolio experience"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-md"
                >
                  <p className="mb-2 text-[10px] uppercase tracking-[0.24em] text-primary">
                    {label}
                  </p>
                  <p className="text-sm leading-6 text-foreground/85">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </motion.div>

        <motion.div style={{ y: yRight }} className="relative">
          <MouseTilt intensity={12} className="relative">
            <div className="absolute inset-0 rounded-[2.2rem] bg-[radial-gradient(circle_at_50%_50%,rgba(125,211,252,0.14),transparent_60%)] blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-black/20 shadow-[0_40px_120px_rgba(0,0,0,0.34)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.24em] text-primary"
                    style={{ fontFamily: "var(--font-chakra)" }}
                  >
                    Holographic Core
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Realtime visual identity layer
                  </p>
                </div>

                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                </div>
              </div>

              <div className="relative">
                <HoloOrbScene />

                <div className="absolute left-4 top-4 rounded-lg border border-primary/20 bg-black/35 px-3 py-2 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
                    3D Signal
                  </p>
                  <p className="mt-1 text-xs text-foreground/80">
                    Orbital mesh / reactive light field
                  </p>
                </div>

                <div className="absolute bottom-4 right-4 rounded-lg border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
                    Render State
                  </p>
                  <p className="mt-1 text-xs text-foreground/80">Cinematic mode online</p>
                </div>
              </div>
            </div>
          </MouseTilt>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_bottom,transparent,hsl(var(--background)/0.6),hsl(var(--background)/0.95))]" />
      </section>
  );
}