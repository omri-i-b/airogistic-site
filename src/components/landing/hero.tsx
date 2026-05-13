import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AirplaneTilt,
  GitBranch,
  CheckSquare,
  ArrowsClockwise,
} from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

const tiles = [
  {
    icon: AirplaneTilt,
    label: "Fleet management",
    body: "Vehicles, ground stations, types, all tracked.",
  },
  {
    icon: GitBranch,
    label: "Parameter version control",
    body: "Every flight pinned to a known-good config.",
  },
  {
    icon: CheckSquare,
    label: "Test automation",
    body: "Pre-, in-, and post-flight suites. Scriptable.",
  },
  {
    icon: ArrowsClockwise,
    label: "Field & cloud sync",
    body: "Local-first in the field, reconciles to cloud.",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-14 lg:pb-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          {/* Left: copy + tiles */}
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-[11px] tracking-[0.3em] text-white/45 uppercase">
                <span className="text-[#C5E86C]">—</span> The Software
              </p>
              <span className="inline-flex items-center gap-1.5 border border-[#C5E86C]/40 bg-[#C5E86C]/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-[#C5E86C] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5E86C]" />
                Available today
              </span>
            </div>

            <h1 className="mt-5 font-display text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] xl:text-[88px] leading-[0.92] font-bold tracking-[-0.025em] uppercase">
              Persistent forward infrastructure for{" "}
              <span className="text-[#C5E86C]">
                autonomous drone operations
              </span>
              .
            </h1>

            <p className="mt-6 max-w-xl text-base lg:text-lg text-white/70">
              The readiness software running drone fleets today. The
              Coupled-Pole Stations those fleets will deploy from
              tomorrow.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 bg-white px-4 py-2.5 font-mono text-[11px] tracking-[0.25em] text-black uppercase transition-colors hover:bg-white/90"
              >
                Get the software
                <ArrowRight className="h-3 w-3" weight="bold" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 border border-white/25 px-4 py-2.5 font-mono text-[11px] tracking-[0.25em] text-white uppercase transition-colors hover:bg-white/5"
              >
                Book a demo
              </Link>
            </div>

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

          {/* Right: mission console screenshot, full hero height on lg+ */}
          <div className="relative -mx-5 min-h-[300px] md:-mx-8 md:min-h-[440px] lg:mx-0 lg:-mr-12 lg:min-h-0 xl:-mr-16">
            <Image
              src={asset("/airogistic-dashboard.png")}
              alt="Airogistic mission console, flight map, fleet registry, and live test harness"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-contain object-center lg:object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
