import { missionItems } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function MissionSection() {
  return (
    <SectionShell id="mission" sectionId="mission" compact className="relative overflow-hidden">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            label="Active Research"
            title="Learning in public through a serious build"
            description="This portfolio is intentionally designed as a long-term engineering project — part professional profile, part frontend learning journey, part interface and systems design laboratory."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SpotlightCard className="p-8">
              <div className="space-y-6">
                {missionItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex gap-4 border-b border-white/8 pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <p
                        className="mb-2 text-xs uppercase tracking-[0.24em] text-primary"
                        style={{ fontFamily: "var(--font-chakra)" }}
                      >
                        {item.label}
                      </p>
                      <p className="text-sm leading-7 text-muted-foreground md:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.08}>
              <SpotlightCard className="border border-primary/15 bg-primary/8 p-6">
                <p
                  className="mb-3 text-xs uppercase tracking-[0.28em] text-primary"
                  style={{ fontFamily: "var(--font-chakra)" }}
                >
                  Build philosophy
                </p>

                <p className="text-sm leading-7 text-muted-foreground">
                  The goal is not to simulate complexity with visual noise. The
                  goal is to communicate competence, systems thinking, polish, and
                  architectural clarity through restrained execution.
                </p>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.14}>
              <SpotlightCard className="p-6">
                <p
                  className="mb-4 text-xs uppercase tracking-[0.28em] text-primary"
                  style={{ fontFamily: "var(--font-chakra)" }}
                >
                  Next phases
                </p>

                <div className="space-y-3">
                  {[
                    "Refine section-level motion and microinteractions",
                    "Add live project data and dynamic backend integration",
                    "Introduce richer command-center status systems",
                    "Evolve toward production deployment and observability",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <p className="text-sm leading-6 text-foreground/85">{item}</p>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}