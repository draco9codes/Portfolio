import SectionShell from "@/components/ui/SectionShell";
import SectionHeading from "@/components/ui/SectionHeading";
import DataListRow from "@/components/ui/DetailsRow";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function AboutSection() {

  return (
    <SectionShell id="about" sectionId="about" compact className="relative mt-16">
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <SpotlightCard className="p-8 md:p-10">
            <SectionHeading
              label="About"
              title="Engineer profile / long-term mission"
              description="A backend-first engineer evolving into a design-conscious full-stack builder through deliberate, production-minded frontend learning."
            />

            <div className="mt-8 space-y-5 text-muted-foreground md:text-lg md:leading-8">
              <p>
                I come from an enterprise engineering background where stability,
                maintainability, and correctness matter just as much as shipping.
                My experience includes legacy Java systems, KPI dashboards,
                PostgreSQL and MongoDB workflows, SOAP and REST integrations,
                and production-oriented backend development.
              </p>

              <p>
                This portfolio is not just a personal website. It is a deliberate
                learning project for modern frontend engineering, interface
                systems, motion design, and full-stack architecture using React,
                Next.js, TypeScript, Tailwind, Framer Motion, and eventually
                Spring Boot-backed dynamic data.
              </p>

              <p>
                The goal is to create something that feels engineered rather than
                templated — cinematic, memorable, technically clean, and still
                clear enough for recruiters and collaborators to navigate
                comfortably.
              </p>
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
                Core identity
              </p>

              <div>
                {[
                  ["Role", "Senior Full-Stack Software Developer"],
                  ["Primary Domain", "Enterprise software and systems engineering"],
                  ["Strength", "Architecture-first implementation"],
                  ["Current Evolution", "Modern frontend + design systems"],
                ].map(([label, value]) => (
                  <DataListRow key={label} label={label} value={value} />
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
                Current mission log
              </p>

              <p className="text-sm leading-7 text-muted-foreground">
                Building an immersive command-center portfolio that doubles as a
                serious frontend learning journey, animation study, and production
                engineering showcase.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}