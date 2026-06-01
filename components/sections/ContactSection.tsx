import { contactLinks } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import PrimaryAction from "@/components/ui/PrimaryAction";
import SecondaryAction from "@/components/ui/SecondaryAction";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ContactSection() {
  return (
    <SectionShell id="contact" sectionId="contact" compact>
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-8">
          <Reveal>
            <SectionHeading
              label="Communication Terminal"
              title="Let&apos;s connect through real work"
              description="Open to conversations around backend engineering, full-stack product development, modern frontend systems, and long-term software architecture work."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-wrap gap-4">
              <PrimaryAction href="mailto:shivamkumar16385@gmail.com">
                Send Email
              </PrimaryAction>

              <SecondaryAction href="https://github.com/draco9codes" external>
                Open GitHub
              </SecondaryAction>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <SpotlightCard className="p-6">
            <p
              className="mb-4 text-xs uppercase tracking-[0.28em] text-primary"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              Active Endpoints
            </p>

            <div className="space-y-4">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start justify-between gap-4 rounded-xl border border-white/8 bg-black/10 px-4 py-4 transition-colors hover:border-primary/20 hover:bg-primary/5"
                >
                  <span
                    className="shrink-0 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
                    style={{ fontFamily: "var(--font-chakra)" }}
                  >
                    {item.label}
                  </span>
                  <span className="text-right text-sm leading-6 text-foreground/90">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </SectionShell>
  );
}