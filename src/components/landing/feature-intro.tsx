/* Hallmark · genre: atmospheric-technical · design-system: DESIGN.md · designed-as-app */
/* Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V5 */

const columns = [
  {
    title: "Configuration drift across the swarm",
    body: "Parameters get tweaked on one vehicle, never propagated to the rest. Swarm day comes and the vehicles fly inconsistent configs, or worse, fail their preflight one by one.",
  },
  {
    title: "Tests that don't repeat",
    body: "Manual checklists drift across the fleet. The flight that passed on tail #3 last week fails on tail #7 today and nobody knows what changed.",
  },
  {
    title: "Field and cloud are split",
    body: "Field operators log to spreadsheets. HQ has no swarm-wide view. Nothing lines up when something goes wrong mid-mission.",
  },
];

export function FeatureIntro() {
  return (
    <section className="border-t border-[var(--color-rule)] bg-[var(--color-paper)] py-14 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
              <span className="mr-1.5 text-[var(--color-accent)]">—</span>The Problem
            </p>
            <h2 className="mt-4 max-w-xl text-balance font-display text-[26px] md:text-[34px] lg:text-[44px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
              Most swarm program delays aren&rsquo;t mechanical.{" "}
              <span className="text-white/45">They&rsquo;re </span>
              <span className="text-[var(--color-accent)]">procedural</span>
              <span className="text-white/45">.</span>
            </h2>
          </div>

          <ul className="space-y-10 lg:space-y-14">
            {columns.map((col, i) => (
              <li
                key={col.title}
                className="grid grid-cols-[44px_minmax(0,1fr)] gap-x-5 border-l-2 border-[var(--color-rule-strong)] pl-5"
              >
                <span className="font-mono text-[11px] tracking-[0.25em] text-[var(--color-accent)] uppercase tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold tracking-tight uppercase">
                    {col.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-white/65">
                    {col.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
