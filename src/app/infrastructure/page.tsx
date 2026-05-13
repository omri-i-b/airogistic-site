import type { Metadata } from "next";
import Image from "next/image";
import {
  Crosshair,
  Lightning,
  Pulse,
  Wind,
  Broadcast,
  Target,
  Atom,
} from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "@/components/landing/site-nav";
import { SiteFooter } from "@/components/landing/site-footer";
import { CtaStrip } from "@/components/landing/cta-strip";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Coupled-Pole Stations, Airogistic",
  description:
    "Patented, customizable autonomous drone stations. Launch, land, recharge, repeat.",
};

const tiles = [
  {
    icon: Crosshair,
    label: "Precision dual-pole docking",
    body: "Stacked multi-drone deployment and guided recovery.",
  },
  {
    icon: Lightning,
    label: "Charge, swap, redeploy",
    body: "Fast-charge via pole couplers. Parameter sync at the station.",
  },
  {
    icon: Pulse,
    label: "On-station diagnostics",
    body: "Full sweep every cycle: sonic, thermal, IMU, balance, force.",
  },
  {
    icon: Wind,
    label: "Field-environment ready",
    body: "Wind, rain, and inertia-compensated launch from moving platforms.",
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
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-14 lg:pb-16">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            {/* Left: copy + tiles */}
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-[11px] tracking-[0.3em] text-white/45 uppercase">
                  <span className="text-[#C5E86C]">—</span>{" "}
                  Coupled-Pole Station &nbsp;·&nbsp; US Patented
                </p>
                <span className="inline-flex items-center gap-1.5 border border-amber-300/40 bg-amber-300/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-amber-200 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  In development
                </span>
              </div>

              <h1 className="mt-5 font-display text-[44px] sm:text-[56px] md:text-[68px] lg:text-[80px] xl:text-[96px] leading-[0.92] font-bold tracking-[-0.025em] uppercase">
                Launch. Land. Recharge.{" "}
                <span className="text-[#C5E86C]">Repeat</span>.
              </h1>
              <p className="mt-6 max-w-xl text-base lg:text-lg text-white/70">
                Patented dual-mast docking stations. Application-specific,
                build-to-order, OEM and B2B. Single drone to stacked
                swarm, from base launch to full launch, land, and
                recharge.
              </p>

              {/* Feature tiles, 4-up horizontal */}
              <div className="mt-auto grid grid-cols-2 gap-3 pt-10 sm:grid-cols-4">
                {tiles.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div
                      key={t.label}
                      className="border border-white/10 bg-[#0a0a0a] p-4"
                    >
                      <Icon
                        className="h-5 w-5 text-[#C5E86C]"
                        weight="regular"
                      />
                      <h3 className="mt-3 font-display text-sm font-bold leading-tight tracking-tight uppercase">
                        {t.label}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-white/55">
                        {t.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: dock product image, full hero height */}
            <div className="relative -mx-5 min-h-[420px] md:-mx-8 md:min-h-[520px] lg:mx-0 lg:-mr-12 lg:min-h-0 xl:-mr-16">
              <Image
                src={asset("/coupled-pole-station.png")}
                alt="Coupled-Pole Station with stacked drones"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-center lg:object-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Patent */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            <span className="text-[#C5E86C]">—</span> The Patent
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
