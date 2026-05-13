import type { Metadata } from "next";
import {
  Lightning,
  Crosshair,
  Wind,
  ThermometerSimple,
  Compass,
  Pulse,
  Broadcast,
  Target,
  Atom,
} from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "@/components/landing/site-nav";
import { SiteFooter } from "@/components/landing/site-footer";
import { CtaStrip } from "@/components/landing/cta-strip";

export const metadata: Metadata = {
  title: "Coupled-Pole Stations, Airogistic",
  description:
    "Patented, customizable autonomous drone stations. Launch, land, recharge, repeat.",
};

const capabilities = [
  {
    icon: Crosshair,
    title: "Precision dual-pole docking",
    body: "Two structural poles enable stacked multi-drone deployment and guided recovery in field, vehicle-mounted, or mobile configurations.",
  },
  {
    icon: Lightning,
    title: "Charge, swap, redeploy",
    body: "Fast-charge via pole couplers. Battery recharging, fluid or fuel refueling, and parameter sync happen at the station.",
  },
  {
    icon: Pulse,
    title: "On-station diagnostics",
    body: "Every cycle runs a full sweep: sonic structural check, motor and ESC temperature, IMU calibration, payload balance, propulsion force.",
  },
  {
    icon: Wind,
    title: "Field-environment ready",
    body: "Operates in wind, rain, and harsh field conditions. Inertia-compensated launch from trucks, boats, and moving vehicles.",
  },
];

const recovery = [
  {
    icon: Broadcast,
    tag: "RADAR",
    title: "Long-range acquisition",
    body: "Radar detects the returning vehicle early, establishing approach vectors and handoff to close-range sensors.",
  },
  {
    icon: Target,
    tag: "LIDAR",
    title: "Precision mapping",
    body: "3D point-cloud scan of landing zone and vehicle attitude. Centimeter-accurate positioning, any light condition.",
  },
  {
    icon: Atom,
    tag: "FUSED",
    title: "Sensor fusion",
    body: "Radar, Lidar, and Camera fuse into a single recovery output. Graceful degradation if any one sensor fails.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 pt-14 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[11px] tracking-[0.3em] text-white/45 uppercase">
              Coupled-Pole Stations &nbsp;·&nbsp; US Patented
            </p>
            <span className="inline-flex items-center gap-1.5 border border-amber-300/40 bg-amber-300/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-amber-200 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              In development
            </span>
          </div>
          <h1 className="mt-5 max-w-5xl font-display text-[34px] md:text-[48px] lg:text-[64px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            Launch. Land. Recharge.{" "}
            <span className="text-[#C5E86C]">Repeat</span>, automatically.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Patented dual-mast docking stations. Application-specific,
            build-to-order, OEM and B2B. Single drone to stacked swarm,
            from base launch to full launch, land, and recharge.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            01 &nbsp;/&nbsp; What it does
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[26px] md:text-[34px] lg:text-[44px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            The full mission cycle. No human in the loop.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.title}
                  className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8"
                >
                  <Icon className="h-6 w-6 text-white/85" weight="regular" />
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight uppercase">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/65">
                    {c.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Patented Recovery */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            02 &nbsp;/&nbsp; The Patent
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[26px] md:text-[34px] lg:text-[44px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            Radar. Lidar. Camera.{" "}
            <span className="text-[#C5E86C]">Fused</span> recovery.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">
            A patented multi-sensor system guides every vehicle back to
            the docking pole, in any lighting, in degraded weather.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
            {recovery.map((r) => {
              const Icon = r.icon;
              return (
                <article
                  key={r.tag}
                  className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8"
                >
                  <Icon className="h-6 w-6 text-white/85" weight="regular" />
                  <p className="mt-6 font-mono text-[10px] tracking-[0.25em] text-[#C5E86C] uppercase">
                    {r.tag}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold tracking-tight uppercase">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/65">
                    {r.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaStrip
        eyebrow="Talk to the team"
        headline="See a station run a full cycle."
      />

      <SiteFooter />
    </>
  );
}
