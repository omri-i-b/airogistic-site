import {
  Sliders,
  ArrowsCounterClockwise,
  LinkBreak,
} from "@phosphor-icons/react/dist/ssr";

const columns = [
  {
    icon: Sliders,
    title: "Configuration drift grounds fleets",
    body: "Parameters get tweaked between flights, never reviewed, never rolled back. Mission day comes and the aircraft fails its preflight — or worse, doesn't get one.",
  },
  {
    icon: ArrowsCounterClockwise,
    title: "Tests don't repeat",
    body: "Manual checklists drift. The flight that passed last week fails today and nobody knows what changed.",
  },
  {
    icon: LinkBreak,
    title: "Field and cloud are split",
    body: "Field teams log to spreadsheets. HQ has no view. Nothing lines up when something goes wrong.",
  },
];

export function FeatureIntro() {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-[1680px] px-12 py-20">
        <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
          01 &nbsp;/&nbsp; The Problem
        </p>
        <h2 className="mt-4 max-w-4xl font-display text-[44px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
          Most drone program delays aren&rsquo;t mechanical.
          <br />
          <span className="text-white/45">They&rsquo;re </span>
          <span className="text-[#C5E86C]">procedural</span>
          <span className="text-white/45">.</span>
        </h2>
        <div className="mt-12 grid grid-cols-3 gap-10 border-t border-white/10 pt-10">
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <div key={col.title}>
                <Icon className="h-6 w-6 text-white/85" weight="regular" />
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight uppercase">
                  {col.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
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
