import Link from "next/link";
import {
  Sliders,
  ArrowsCounterClockwise,
  LinkBreak,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

const columns = [
  {
    icon: Sliders,
    title: "Configuration drift grounds fleets",
    body: "Parameters get tweaked between flights, never reviewed, never rolled back. Mission day comes and the aircraft fails its preflight, or worse, doesn't get one.",
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
      <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 py-14 md:py-18 lg:py-20">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            01 &nbsp;/&nbsp; The Software
          </p>
          <span className="inline-flex items-center gap-1.5 border border-[#C5E86C]/40 bg-[#C5E86C]/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-[#C5E86C] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5E86C]" />
            Available today
          </span>
        </div>
        <h2 className="mt-4 max-w-6xl text-balance font-display text-[26px] md:text-[34px] lg:text-[44px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
          Most drone program delays aren&rsquo;t mechanical.{" "}
          <span className="text-white/45">They&rsquo;re </span>
          <span className="text-[#C5E86C]">procedural</span>
          <span className="text-white/45">.</span>
        </h2>
        <Link
          href="/#contact"
          className="mt-6 inline-flex items-center gap-1.5 bg-white px-4 py-2.5 font-mono text-[11px] tracking-[0.25em] text-black uppercase transition-colors hover:bg-white/90"
        >
          Get the software
          <ArrowRight className="h-3 w-3" weight="bold" />
        </Link>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border-t border-white/10 pt-10">
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
