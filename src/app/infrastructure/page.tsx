import type { Metadata } from "next";
import Image from "next/image";
import {
  Crosshair,
  Lightning,
  Pulse,
  Wind,
  HandPalm,
  Clock,
  GitBranch,
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

const reasons = [
  {
    icon: HandPalm,
    title: "Software can't fly a drone home",
    body: "Manual launch and recovery still caps operating tempo. Until the drone can land and redeploy itself, the program is bottlenecked on the people standing on the field.",
  },
  {
    icon: Clock,
    title: "Persistence beats presence",
    body: "Swarms get valuable when they run continuously, on schedule, not just in human-staffed windows. The dock turns drone ops from dispatch to cadence.",
  },
  {
    icon: GitBranch,
    title: "One discipline, end to end",
    body: "The hardware ships on the same parameter version control, test automation, and field-to-cloud sync the software already runs today. No second platform to learn.",
  },
];

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
              <h1 className="font-display text-[30px] md:text-[44px] lg:text-[56px] leading-[0.98] font-bold tracking-[-0.02em] uppercase">
                A dock for the{" "}
                <span className="text-[var(--color-accent)]">swarm</span> to come home
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
                      className="border border-white/10 bg-[var(--color-paper-2)] p-4"
                    >
                      <Icon
                        className="h-5 w-5 text-[var(--color-accent)]"
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

      {/* Why we're building it */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            <span className="mr-1.5 text-[var(--color-accent)]">—</span>Why we&rsquo;re building it
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[26px] md:text-[34px] lg:text-[44px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            Software alone hits a ceiling.
          </h2>
          <p className="mt-5 max-w-3xl text-base lg:text-lg leading-relaxed text-white/70">
            We&rsquo;ve spent years on the discipline that runs drone
            swarms in software, every parameter versioned, every test
            automated, every mission observable. But software can only go
            so far while every flight still needs a human to launch and
            recover. The dock removes that ceiling.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <article
                  key={r.title}
                  className="border border-white/10 bg-[var(--color-paper-2)] p-6 sm:p-8"
                >
                  <Icon className="h-6 w-6 text-[var(--color-accent)]" weight="regular" />
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight uppercase">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-white/65">
                    {r.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaStrip
        headline="Want a preview? Reach out."
      />

      <SiteFooter />
    </>
  );
}
