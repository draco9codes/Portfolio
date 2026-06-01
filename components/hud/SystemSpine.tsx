"use client";

export default function SystemSpine() {
  return (
    <div className="pointer-events-none fixed left-16 top-0 z-[3] hidden h-screen xl:block">
      {/* main line */}
      <div className="absolute left-0 top-0 h-full w-px bg-white/[0.05]" />

      {/* top marker */}
      <div className="absolute left-[-4px] top-32 h-2 w-2 rounded-full bg-sky-300/60" />

      {/* middle marker */}
      <div className="absolute left-[-4px] top-1/2 h-2 w-2 rounded-full bg-sky-300/30" />

      {/* lower marker */}
      <div className="absolute left-[-4px] bottom-32 h-2 w-2 rounded-full bg-sky-300/20" />
    </div>
  );
}