type SectionPanelProps = {
  id: string;
  label: string;
  title: string;
  body: string;
};

export default function SectionPanel({
  id,
  label,
  title,
  body,
}: SectionPanelProps) {
  return (
    <section
      id={id}
      className="mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-24 md:px-6"
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px]" />

        <div className="relative z-10">
          <p
            className="mb-3 text-xs uppercase tracking-[0.3em] text-primary"
            style={{ fontFamily: "var(--font-chakra)" }}
          >
            {label}
          </p>

          <h2
            className="mb-4 text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-chakra)" }}
          >
            {title}
          </h2>

          <p className="max-w-2xl text-muted-foreground md:text-lg md:leading-8">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}