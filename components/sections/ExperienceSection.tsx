import { experienceItems } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import TechBadge from "@/components/ui/TechBadge";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ExperienceSection() {
  return (
    <SectionShell id="experience" sectionId="experience">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            label="Operational History"
            title="Enterprise engineering in production environments"
            description="Work shaped by scale, reliability, integrations, analytics performance, and the realities of maintaining systems that serve real users across real deployments."
          />
        </Reveal>

        <div className="space-y-8">
          {experienceItems.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.08}>
              <SpotlightCard className="p-8 md:p-10">
                <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
                  <div>
                    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p
                          className="mb-2 text-xs uppercase tracking-[0.28em] text-primary"
                          style={{ fontFamily: "var(--font-chakra)" }}
                        >
                          {item.company}
                        </p>

                        <h3
                          className="text-2xl md:text-4xl"
                          style={{ fontFamily: "var(--font-chakra)" }}
                        >
                          {item.role}
                        </h3>
                      </div>

                      <div className="text-left xl:text-right">
                        <p className="text-sm text-foreground/90">{item.period}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.location}
                        </p>
                      </div>
                    </div>

                    <p className="mb-8 max-w-2xl text-muted-foreground md:text-lg md:leading-8">
                      {item.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <TechBadge key={tech} variant="primary">
                          {tech}
                        </TechBadge>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-black/10 p-5">
                    <p
                      className="mb-4 text-xs uppercase tracking-[0.26em] text-primary"
                      style={{ fontFamily: "var(--font-chakra)" }}
                    >
                      Key contributions
                    </p>

                    <div className="space-y-4">
                      {item.highlights.map((highlight) => (
                        <div key={highlight} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <p className="text-sm leading-7 text-foreground/85">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}