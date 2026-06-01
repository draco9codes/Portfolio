"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import TechBadge from "@/components/ui/TechBadge";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import MouseTilt from "@/components/ui/MouseTilt";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string>(projects[0]?.name ?? "");

  const featuredProject =
    projects.find((project) => project.name === activeProject) ?? projects[0];

  const supportingProjects = projects.filter(
    (project) => project.name !== featuredProject?.name
  );

  return (
    <SectionShell id="projects" sectionId="projects" className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-[-8rem] top-20 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />

      <div className="space-y-12">
        <Reveal>
          <SectionHeading
            label="Projects Archive"
            title="Featured builds, engineering notes, and system-level thinking"
            description="A cinematic vertical showcase of selected projects, technical decisions, implementation depth, and the way I approach software as a long-term system rather than a short-lived demo."
          />
        </Reveal>

        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <MouseTilt intensity={10}>
              <motion.div layout transition={{ layout: { duration: 0.35 } }}>
                <SpotlightCard className="overflow-hidden rounded-[2rem] p-0">
                  <div className="relative border-b border-white/10 px-6 py-6 md:px-8">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.16),transparent_30%)]" />

                    <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p
                          className="mb-2 text-[11px] uppercase tracking-[0.24em] text-primary"
                          style={{ fontFamily: "var(--font-chakra)" }}
                        >
                          Featured Project / {featuredProject.status}
                        </p>

                        <h3
                          className="text-3xl md:text-5xl"
                          style={{ fontFamily: "var(--font-chakra)" }}
                        >
                          {featuredProject.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_rgba(125,211,252,0.9)]" />
                        <span className="text-[10px] uppercase tracking-[0.22em] text-primary">
                          Active focus
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[1.12fr_0.88fr]">
                    <div className="space-y-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={featuredProject.name}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -14 }}
                          transition={{ duration: 0.28 }}
                          className="space-y-6"
                        >
                          <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
                            {featuredProject.summary}
                          </p>

                          <div className="grid gap-4 md:grid-cols-2">
                            {featuredProject.highlights.map((highlight, index) => (
                              <Reveal key={`${featuredProject.name}-${highlight}`} delay={index * 0.04}>
                                <motion.div
                                  layout
                                  className="rounded-2xl border border-white/10 bg-black/10 p-4"
                                >
                                  <p
                                    className="mb-2 text-[10px] uppercase tracking-[0.22em] text-primary"
                                    style={{ fontFamily: "var(--font-chakra)" }}
                                  >
                                    System Note {String(index + 1).padStart(2, "0")}
                                  </p>
                                  <p className="text-sm leading-7 text-foreground/85">
                                    {highlight}
                                  </p>
                                </motion.div>
                              </Reveal>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="space-y-4">
                      <motion.div
                        layout
                        className="rounded-2xl border border-primary/20 bg-primary/10 p-5"
                      >
                        <p
                          className="mb-3 text-[10px] uppercase tracking-[0.22em] text-primary"
                          style={{ fontFamily: "var(--font-chakra)" }}
                        >
                          Core stack
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {featuredProject.stack.map((item) => (
                            <TechBadge key={item} variant="primary">
                              {item}
                            </TechBadge>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        layout
                        className="rounded-2xl border border-white/10 bg-black/10 p-5"
                      >
                        <p
                          className="mb-3 text-[10px] uppercase tracking-[0.22em] text-primary"
                          style={{ fontFamily: "var(--font-chakra)" }}
                        >
                          Delivery posture
                        </p>
                        <p className="text-sm leading-7 text-foreground/85">
                          Architecture-aware implementation with a balance of backend
                          discipline, product thinking, system clarity, and modern UI execution.
                        </p>
                      </motion.div>

                      <motion.div
                        layout
                        className="rounded-2xl border border-white/10 bg-black/10 p-5"
                      >
                        <p
                          className="mb-3 text-[10px] uppercase tracking-[0.22em] text-primary"
                          style={{ fontFamily: "var(--font-chakra)" }}
                        >
                          Interaction mode
                        </p>
                        <p className="text-sm leading-7 text-foreground/85">
                          Select another project from the right-side list to change the featured
                          workspace without breaking the vertical reading flow.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </MouseTilt>
          </Reveal>

          <div className="space-y-4">
            <Reveal delay={0.06}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p
                  className="text-[11px] uppercase tracking-[0.24em] text-primary"
                  style={{ fontFamily: "var(--font-chakra)" }}
                >
                  Supporting Projects
                </p>
              </div>
            </Reveal>

            {supportingProjects.map((project, index) => {
              const isActive = activeProject === project.name;

              return (
                <Reveal key={project.name} delay={0.08 + index * 0.05}>
                  <motion.button
                    type="button"
                    layout
                    whileHover={{ y: -4, x: 4 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setActiveProject(project.name)}
                    className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-card/50 p-5 text-left transition-all duration-300 hover:border-primary/20 hover:bg-card/75"
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.14),transparent_30%)]" />

                    <div className="relative z-10">
                      <div className="mb-3 flex items-start justify-between gap-4">
                        <div>
                          <p
                            className="mb-2 text-[10px] uppercase tracking-[0.22em] text-primary"
                            style={{ fontFamily: "var(--font-chakra)" }}
                          >
                            {project.status}
                          </p>

                          <h4
                            className="text-xl"
                            style={{ fontFamily: "var(--font-chakra)" }}
                          >
                            {project.name}
                          </h4>
                        </div>

                        {isActive && (
                          <motion.span
                            layoutId="project-active-dot"
                            className="mt-1 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(125,211,252,0.9)]"
                          />
                        )}
                      </div>

                      <p className="text-sm leading-7 text-muted-foreground">
                        {project.summary}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.slice(0, 4).map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-foreground/75"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.button>
                </Reveal>
              );
            })}

            <Reveal delay={0.18}>
              <div className="rounded-2xl border border-primary/15 bg-primary/8 p-5">
                <p
                  className="mb-3 text-[10px] uppercase tracking-[0.22em] text-primary"
                  style={{ fontFamily: "var(--font-chakra)" }}
                >
                  Selection behavior
                </p>
                <p className="text-sm leading-7 text-muted-foreground">
                  The selected project expands into the featured workspace on the left,
                  keeping the section dramatic without forcing horizontal scroll behavior.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}