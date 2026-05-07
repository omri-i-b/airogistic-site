import type { Metadata } from "next";
import Link from "next/link";
import {
  Lightning,
  ShieldCheck,
  Path,
  ArrowsClockwise,
  Pulse,
  GearSix,
  Cube,
  Broadcast,
  Target,
  Atom,
  ArrowRight,
  Crosshair,
} from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "@/components/landing/site-nav";
import { SiteFooter } from "@/components/landing/site-footer";
import { CtaStrip } from "@/components/landing/cta-strip";

export const metadata: Metadata = {
  title: "Airogistic Dock — Airogistic",
  description:
    "Autonomous launch, land, recharge, and recovery infrastructure for unmanned vehicle fleets. Persistent operations without rolling a truck.",
};

const cycleSteps = [
  {
    num: "01",
    icon: Path,
    title: "Mission departs",
    body: "Drone launches from the dock with a verified parameter set pushed by the Drone Performance Harness. Inertial compensation handles motion if the dock is on a vehicle or moving platform.",
  },
  {
    num: "02",
    icon: Broadcast,
    title: "Sensor-fused recovery",
    body: "On return, radar acquires the vehicle at long range. Lidar takes over on final approach with centimeter-accurate point-cloud guidance. Camera tracking closes the loop. Any one sensor can fail without aborting recovery.",
  },
  {
    num: "03",
    icon: Pulse,
    title: "On-dock diagnostics",
    body: "The moment it touches down, the dock runs a full diagnostic sweep — sonic structural check, motor and ESC temperature, IMU re-calibration, payload balance, propulsion force.",
  },
  {
    num: "04",
    icon: Lightning,
    title: "Recharge & redeploy",
    body: "Battery recharging, fluid or fuel refueling, and parameter sync happen at the station. The next mission starts from a known-good state — no operator required.",
  },
];

const capabilities = [
  {
    icon: ArrowsClockwise,
    title: "Persistent operations",
    body: "Repeat the launch–mission–recover–recharge cycle around the clock without rolling a truck or staffing a ground crew.",
  },
  {
    icon: ShieldCheck,
    title: "Weather-sealed",
    body: "Operates in wind, rain, ice, and harsh field environments. Configurable height options accommodate site-specific weather risk.",
  },
  {
    icon: Cube,
    title: "Stacked swarm staging",
    body: "Multiple drones staged on a single pole pair. Sequential or simultaneous launch sequencing controlled entirely by station software.",
  },
  {
    icon: Target,
    title: "Mobile platform support",
    body: "Inertia-compensated launching enables departure from trucks, boats, and ground vehicles without manual hold or restraint.",
  },
  {
    icon: Atom,
    title: "Multi-sensor recovery",
    body: "Patented radar + lidar + camera fusion guides every recovery. Graceful degradation if any one modality fails.",
  },
  {
    icon: GearSix,
    title: "Lattice-aware",
    body: "First-class integration with the Drone Performance Harness — every flight pinned to a parameter set, every cycle logged.",
  },
];

const useCases = [
  "Warehouse launch operations",
  "Delivery hubs",
  "Logistics depots",
  "Agricultural stations",
  "Mobile field deployments",
  "Defense forward-operating bases",
];

export default function DockPage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1680px] px-12 pt-24 pb-20">
          <div className="inline-flex items-center gap-1.5 border border-[#C5E86C]/40 bg-[#C5E86C]/10 px-2.5 py-1 font-mono text-[11px] tracking-[0.25em] text-[#C5E86C] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5E86C]" />
            In Development
          </div>
          <h1 className="mt-6 max-w-5xl font-display text-[64px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            The drone docking station for{" "}
            <span className="text-[#C5E86C]">persistent operations</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/75">
            Land, charge, swap parameters, and redeploy on a schedule —
            all without rolling a truck. Built to live outdoors and report
            up to the same fleet view you already use.
          </p>
        </div>
      </section>

      {/* The cycle */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1680px] px-12 py-24">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            01 &nbsp;/&nbsp; The Cycle
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-[48px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            One mission. One cycle. Zero operators.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70">
            Every launch begins from a verified configuration and every
            recovery ends with a full diagnostic sweep. The dock turns a
            single mission into a repeatable, observable cycle.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {cycleSteps.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.num}
                  className="border border-white/10 bg-[#0a0a0a] p-8"
                >
                  <p className="font-display text-3xl font-bold tracking-tight text-[#C5E86C]">
                    {s.num}
                  </p>
                  <Icon className="mt-6 h-7 w-7 text-white/85" weight="regular" />
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight uppercase">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/65">
                    {s.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1680px] px-12 py-24">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            02 &nbsp;/&nbsp; Capabilities
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[48px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            Built to run unattended.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title}>
                  <Icon className="h-6 w-6 text-white/85" weight="regular" />
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight uppercase">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/65">
                    {c.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Where it fits */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1680px] px-12 py-24">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            03 &nbsp;/&nbsp; Where it fits
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-[48px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            Anywhere a drone needs to come home — and go again.
          </h2>

          <div className="mt-12 flex flex-wrap gap-3">
            {useCases.map((u) => (
              <div
                key={u}
                className="border border-white/15 bg-[#0a0a0a] px-5 py-3 font-mono text-[12px] tracking-[0.2em] text-white/80 uppercase"
              >
                {u}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        eyebrow="Talk to the team"
        headline="Get on the early-access list."
      />

      <SiteFooter />
    </>
  );
}
