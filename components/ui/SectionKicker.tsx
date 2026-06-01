type SectionKickerProps = {
  children: React.ReactNode;
};

export default function SectionKicker({ children }: SectionKickerProps) {
  return (
    <p
      className="mb-3 text-xs uppercase tracking-[0.3em] text-primary"
      style={{ fontFamily: "var(--font-chakra)" }}
    >
      {children}
    </p>
  );
}