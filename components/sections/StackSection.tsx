import { coreFocus, skillGroups } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import TechBadge from "@/components/ui/TechBadge";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function StackSection() {
  return (
    <SectionShell id="stack" sectionId="stack" className="relative overflow-hidden">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            label="Systems Inventory"
            title="Systems, tools, and engineering domains"
            description="A command-center view of the technologies I use across enterprise backend systems, modern frontend development, data-intensive applications, and realtime engineering workflows."
          />
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SpotlightCard className="p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <p
                  className="text-xs uppercase tracking-[0.28em] text-primary"
                  style={{ fontFamily: "var(--font-chakra)" }}
                >
                  Capability Grid
                </p>
                <span className="rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-primary">
                  Live Profile
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {skillGroups.map((group, groupIndex) => (
                  <Reveal key={group.label} delay={groupIndex * 0.05}>
                    <div className="rounded-xl border border-white/10 bg-black/10 p-4 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <p
                          className="text-[11px] uppercase tracking-[0.24em] text-primary"
                          style={{ fontFamily: "var(--font-chakra)" }}
                        >
                          {group.label}
                        </p>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {group.items.length} nodes
                        </span>
                      </div>

                      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary/60 to-cyan-300/70"
                          style={{
                            width: `${Math.min(100, 28 + group.items.length * 9)}%`,
                          }}
                        />
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => {
                          const isCore = coreFocus.includes(item);

                          return (
                            <TechBadge
                              key={item}
                              variant={isCore ? "primary" : "default"}
                            >
                              {item}
                            </TechBadge>
                          );
                        })}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.08}>
              <SpotlightCard className="p-6">
                <p
                  className="mb-4 text-xs uppercase tracking-[0.28em] text-primary"
                  style={{ fontFamily: "var(--font-chakra)" }}
                >
                  Primary Operational Zone
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {coreFocus.map((item, index) => (
                    <Reveal key={item} delay={index * 0.04}>
                      <div className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-3 text-sm text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary/15">
                        {item}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.14}>
              <SpotlightCard className="border border-primary/15 bg-primary/8 p-6">
                <p
                  className="mb-3 text-xs uppercase tracking-[0.28em] text-primary"
                  style={{ fontFamily: "var(--font-chakra)" }}
                >
                  Engineering signal
                </p>

                <p className="text-sm leading-7 text-muted-foreground">
                  My strongest profile sits at the intersection of enterprise Java
                  systems, realtime/backend architecture, data-intensive
                  engineering, and modern frontend execution.
                </p>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}