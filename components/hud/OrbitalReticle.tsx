export default function OrbitalReticle() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[4] overflow-hidden">
      <div className="absolute right-[10%] top-[16%] h-[18rem] w-[18rem] rounded-full border border-sky-300/[0.05]" />

      <div className="absolute right-[10%] top-[16%] h-[22rem] w-[22rem] rounded-full border border-white/[0.04]" />

      <div className="absolute right-[10%] top-[16%] h-[26rem] w-[26rem] rounded-full border border-sky-300/[0.03]" />

      <div className="absolute right-[10%] top-[16%] h-px w-72 bg-white/[0.04]" />

      <div className="absolute right-[10%] top-[16%] h-72 w-px bg-white/[0.04]" />
    </div>
  );
}