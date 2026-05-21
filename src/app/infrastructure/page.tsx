import type { Metadata } from "next";
import Image from "next/image";
import {
  Crosshair,
  Lightning,
  Pulse,
  Wind,
} from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "@/components/landing/site-nav";
import { SiteFooter } from "@/components/landing/site-footer";
import { CtaStrip } from "@/components/landing/cta-strip";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Coupled-Pole Stations, Airogistic",
  description:
    "Forward-deployable docking stations for autonomous drone swarms. In development.",
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
    body: "Every cycle, full sweep, before the next swarm goes up.",
  },
  {
    icon: Wind,
    label: "Field-ready",
    body: "Wind, rain, and inertia-compensated launch from moving platforms.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-14 lg:pb-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.25fr] lg:gap-12">
            {/* Left: copy + tiles */}
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-[11px] tracking-[0.3em] text-white/45 uppercase">
                  <span className="text-[#C5E86C]">—</span>{" "}
                  Coupled-Pole Station
                </p>
                <span className="inline-flex items-center gap-1.5 border border-amber-300/40 bg-amber-300/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-amber-200 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  On the roadmap
                </span>
              </div>

              <h1 className="mt-5 font-display text-[30px] md:text-[44px] lg:text-[56px] leading-[0.98] font-bold tracking-[-0.02em] uppercase">
                A dock for the{" "}
                <span className="text-[#C5E86C]">swarm</span> to come home
                to.
              </h1>
              <p className="mt-6 max-w-xl text-base lg:text-lg text-white/70">
                Forward-deployable docking stations for autonomous launch,
                charge, and recovery. In development as the natural next
                layer beneath the swarm software running fleets today.
              </p>

              {/* Feature tiles */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
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

            {/* Right: dock product image */}
            <div className="relative -mx-5 min-h-[420px] md:-mx-8 md:min-h-[600px] lg:mx-0 lg:-mr-12 lg:min-h-[720px] xl:-mr-20 xl:min-h-[820px]">
              <Image
                src={asset("/coupled-pole-station.png")}
                alt="Coupled-Pole Station with stacked drones"
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaStrip
        eyebrow="Talk to the team"
        headline="Want a preview? Reach out."
      />

      <SiteFooter />
    </>
  );
}
