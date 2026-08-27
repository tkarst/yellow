export function Atmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div className="night-sky absolute inset-0" />
      <div className="starfield absolute inset-0 opacity-70" />
      <div className="horizon-glow absolute inset-x-0 bottom-0 h-[55vh]" />
      <div className="light-rig absolute inset-0 hidden sm:block">
        <span className="light-beam beam-a" />
        <span className="light-beam beam-b" />
        <span className="light-beam beam-c" />
        <span className="light-beam beam-d" />
      </div>
      <div className="vignette absolute inset-0" />
      <div className="film-grain absolute inset-0" />
    </div>
  );
}
