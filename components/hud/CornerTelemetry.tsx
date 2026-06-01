export default function CornerTelemetry() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[5] hidden xl:block">
      <div className="absolute left-8 top-8">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
          Mission Status
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-sky-300/70">
          Operational
        </p>
      </div>

      <div className="absolute right-8 top-8 text-right">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
          Build
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-sky-300/70">
          Portfolio v1
        </p>
      </div>

      <div className="absolute bottom-8 left-8">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
          Runtime
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-sky-300/70">
          Linux / Active
        </p>
      </div>

      <div className="absolute bottom-8 right-8 text-right">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
          Interface
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-sky-300/70">
          Command Center
        </p>
      </div>
    </div>
  );
}