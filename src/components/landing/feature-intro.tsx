import {
  Sliders,
  ArrowsCounterClockwise,
  LinkBreak,
} from "@phosphor-icons/react/dist/ssr";

const columns = [
  {
    icon: Sliders,
    title: "Configuration drift across the swarm",
    body: "Parameters get tweaked on one vehicle, never propagated to the rest. Swarm day comes and the vehicles fly inconsistent configs, or worse, fail their preflight one by one.",
  },
  {
    icon: ArrowsCounterClockwise,
    title: "Tests that don't repeat",
    body: "Manual checklists drift across the fleet. The flight that passed on tail #3 last week fails on tail #7 today and nobody knows what changed.",
  },
  {
    icon: LinkBreak,
    title: "Field and cloud are split",
    body: "Field operators log to spreadsheets. HQ has no swarm-wide view. Nothing lines up when something goes wrong mid-mission.",
  },
];

export function FeatureIntro() {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 py-14 md:py-18 lg:py-20">
        <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
          <span className="mr-1.5 text-[#C5E86C]">—</span>The Problem
        </p>
        <h2 className="mt-4 max-w-6xl text-balance font-display text-[26px] md:text-[34px] lg:text-[44px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
          Most swarm program delays aren&rsquo;t mechanical.{" "}
          <span className="text-white/45">They&rsquo;re </span>
          <span className="text-[#C5E86C]">procedural</span>
          <span className="text-white/45">.</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <div key={col.title}>
                <Icon className="h-6 w-6 text-white/85" weight="regular" />
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight uppercase">
                  {col.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-white/65">
                  {col.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
