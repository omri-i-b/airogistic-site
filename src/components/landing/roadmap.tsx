import Link from "next/link";
import { ArrowRight, Crosshair } from "@phosphor-icons/react/dist/ssr";

const configs = [
  {
    tag: "Persistent operations",
    title: "Schedule, not dispatch.",
    body: "Autonomous landing, charging, and parameter swap for inspection and ISR fleets. Wind farms, pipelines, power lines, refineries, agriculture. Recurring missions on a clock instead of a truck.",
    bullets: [
      "One supervisor, many pre-positioned sites",
      "Recurring inspection cadences run unattended",
      "Mission turnaround collapsed",
      "Every flight pinned to a verified configuration",
    ],
  },
  {
    tag: "Perimeter operations",
    title: "Distributed by design.",
    body: "Modular payload bays accept sensor stacks, comms relays, and counter-drone effectors. A lattice of nodes around a site becomes a networked, software-defined perimeter.",
    bullets: [
      "Modular payload bays per node",
      "Multiple ready effectors per node",
      "Effector- and airframe-agnostic",
      "Lattice-compatible by default",
    ],
  },
];

export function Roadmap() {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 py-14 md:py-18 lg:py-20">
        <div>
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            01 &nbsp;/&nbsp; The Node
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[26px] md:text-[34px] lg:text-[44px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            One chassis.{" "}
            <span className="text-[#C5E86C]">Two missions</span>.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">
            Coupled-Pole Nodes are forward-deployable, weather-sealed,
            networked platforms with a patented dual-mast architecture.
            Same chassis, same software, same field-to-cloud sync,
            different payload bay loadout for the work in front of it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 lg:grid-cols-2">
          {configs.map((c) => (
            <article
              key={c.tag}
              className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8 lg:p-10"
            >
              <p className="font-mono text-[10px] tracking-[0.25em] text-[#C5E86C] uppercase">
                {c.tag}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight uppercase">
                {c.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                {c.body}
              </p>
              <ul className="mt-6 space-y-2.5">
                {c.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-base text-white/80"
                  >
                    <Crosshair
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-[#C5E86C]"
                      weight="bold"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 font-mono text-[11px] tracking-[0.25em] text-white/50 uppercase">
          Same chassis. Same software. Different payload bay.
        </p>

        <Link
          href="/infrastructure"
          className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.25em] text-[#C5E86C] uppercase transition-opacity hover:opacity-80"
        >
          See the node
          <ArrowRight className="h-3 w-3" weight="bold" />
        </Link>
      </div>
    </section>
  );
}
