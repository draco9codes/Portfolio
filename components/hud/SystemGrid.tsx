export default function SystemGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]">
        <div
          className="
            h-full w-full
            [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
            [background-size:140px_140px]
          "
        />
      </div>

      <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.04]" />
      <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.04]" />

      <div className="absolute left-0 top-[12%] h-px w-full bg-white/[0.03]" />
      <div className="absolute left-0 bottom-[12%] h-px w-full bg-white/[0.03]" />
    </div>
  );
}