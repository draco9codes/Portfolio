type StatusPillProps = {
  label: string;
  pulse?: boolean;
  className?: string;
};

export default function StatusPill({
  label,
  pulse = true,
  className = "",
}: StatusPillProps) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-md border border-primary/15 bg-primary/10 px-3 py-1.5",
        className,
      ].join(" ")}
    >
      <span
        className={[
          "h-2 w-2 rounded-full bg-primary",
          pulse ? "animate-pulse" : "",
        ].join(" ")}
      />
      <span
        className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
        style={{ fontFamily: "var(--font-chakra)" }}
      >
        {label}
      </span>
    </div>
  );
}