/* Hallmark · genre: atmospheric-technical · design-system: DESIGN.md · designed-as-app */
/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */

const features = [
  {
    title: "Swarm registry",
    body: "Vehicles, ground stations, and types, all tracked. See the whole swarm in one place.",
  },
  {
    title: "Parameter version control",
    body: "Every flight, every vehicle, pinned to a known-good config. No surprise drift across the swarm.",
  },
  {
    title: "Per-vehicle pre-flight",
    body: "Block takeoff until every check passes. Sensors, motors, GPS lock, comms, geofence, all scriptable.",
  },
  {
    title: "Swarm-aware in-flight assertions",
    body: "Telemetry checks that fire mid-mission. Auto-abort or flag anomalies before they propagate.",
  },
  {
    title: "Sim + hardware",
    body: "Same test definitions run in your simulator and against the live swarm. No translation layer.",
  },
  {
    title: "Swarm mission orchestration",
    body: "Compose missions as sequences of tests and steps. Coordinate across every vehicle in the swarm.",
  },
];

export function FeatureGrid() {
  return (
    <section className="bg-[var(--color-paper)] py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12">
        <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
          <span className="mr-1.5 text-[var(--color-accent)]">—</span>The Platform
        </p>
        <h2 className="max-w-3xl font-display text-[26px] md:text-[34px] lg:text-[44px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
          Swarm, parameters, tests, missions, one system.
        </h2>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-16">
          {features.map((feat, i) => (
            <article
              key={feat.title}
              className="flex items-start gap-4 border-b border-[var(--color-rule)] py-6 md:gap-5 md:py-7"
            >
              <span className="font-display text-2xl font-bold leading-none text-[var(--color-accent)] tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-bold leading-tight tracking-tight uppercase">
                  {feat.title}
                </h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-white/65">
                  {feat.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
