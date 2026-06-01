import { ReactNode } from "react";

type InfoCardProps = {
  children: ReactNode;
  className?: string;
  grid?: boolean;
};

export default function InfoCard({
  children,
  className = "",
  grid = false,
}: InfoCardProps) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.28)]",
        className,
      ].join(" ")}
    >
      {grid && (
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px]" />
      )}

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.12),transparent_45%)]" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}