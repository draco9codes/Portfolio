export default function PageVignette() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[2]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(2,6,23,0.22)_78%,rgba(2,6,23,0.44)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.34),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(2,6,23,0.46),transparent)]" />
    </div>
  );
}