type DataListRowProps = {
  label: string;
  value: string;
  align?: "left" | "right";
};

export default function DataListRow({
  label,
  value,
  align = "right",
}: DataListRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/8 py-3 last:border-b-0">
      <span
        className="shrink-0 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
        style={{ fontFamily: "var(--font-chakra)" }}
      >
        {label}
      </span>
      <span
        className={[
          "text-sm leading-6 text-foreground/90",
          align === "right" ? "text-right" : "text-left",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
}