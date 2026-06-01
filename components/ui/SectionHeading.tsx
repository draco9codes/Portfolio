type SectionHeadingProps = {
  label: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
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

      <p className="text-muted-foreground md:text-lg md:leading-8">
        {description}
      </p>
    </div>
  );
}