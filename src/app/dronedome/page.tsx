import type { Metadata } from "next";
import {
  House,
  Tent,
  ShieldCheck,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "@/components/landing/site-nav";
import { SiteFooter } from "@/components/landing/site-footer";
import { CtaStrip } from "@/components/landing/cta-strip";

export const metadata: Metadata = {
  title: "DroneDome — Airogistic",
  description:
    "Modular outdoor and indoor netted enclosures for safe drone launch, flight, testing, and landing operations.",
};

const customers = [
  "NASA",
  "Honeywell",
  "Carnegie Mellon",
  "Noda AI",
  "Airogistic",
];

const outdoorFeatures = [
  "Modular — scalable in 10×10 ft increments",
  "Temporary, movable, collapsible structure",
  "No building code permits required",
  "Retractable overhead drone launch door",
  "Personnel and vehicle access entrances",
  "Retractable poles · removable net panels",
  "Configurable height for weather risk — ice, wind, tornado",
  "Conveyor belts for payload loading",
  "Integrated comms and cameras",
  "Personnel interlock — prevents access while drones energized",
  "Integrated drone catch net for failed landings",
  "Drone Performance Harness interlock and test tracking",
];

const indoorFeatures = [
  "Safe indoor launch, fly, and land test area",
  "Modular — scalable in 10×10 ft increments",
  "Collapsible and movable — no permanent install",
  "Customizable heights with retractable poles",
  "Removable net panels for reconfiguration",
  "Personnel and vehicle access doors",
  "Personnel interlock — access blocked when energized",
  "Integrated cameras and communications",
  "Drone catch net for safe containment",
  "Preflight testing, tuning & maintenance checkout",
  "Automated testing via Drone Performance Harness",
  "Fleet operations support for multiple drones",
];

const useCases = [
  "Warehouse launch operations",
  "Delivery hubs",
  "Logistics depots",
  "Agricultural stations",
  "Mobile field deployments",
];

export default function DroneDomePage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1680px] px-12 pt-24 pb-20">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/45 uppercase">
            Built to Order &nbsp;·&nbsp; Onsite Installation
          </p>
          <h1 className="mt-5 max-w-5xl font-display text-[64px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            Outdoor &amp; indoor{" "}
            <span className="text-[#C5E86C]">netted shelters</span> for
            autonomous UAV operations.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            The Airogistic DroneDome is a modular, scalable netted
            enclosure for safe drone launch, flight, testing, and landing
            — indoors and outdoors. Integrated with the Drone Performance
            Harness for test tracking, personnel interlocks, and automated
            mission management.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-2 border-t border-white/10 pt-8 sm:grid-cols-3 lg:grid-cols-5">
            {customers.map((c) => (
              <div
                key={c}
                className="font-mono text-[11px] tracking-[0.25em] text-white/55 uppercase"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1680px] px-12 py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[2fr_3fr]">
            <div>
              <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
                DD-OUT-1
              </p>
              <Tent className="mt-6 h-10 w-10 text-[#C5E86C]" weight="regular" />
              <h2 className="mt-6 font-display text-[40px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
                Outdoor DroneDome
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65">
                Outdoor netted enclosure for autonomous launch, flight, and
                landing operations. Integrated with Coupled-Pole stations
                and DroneDome safety interlocks to protect ground personnel
                during powered drone operations.
              </p>
              <p className="mt-8 font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
                Use cases
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {useCases.map((u) => (
                  <li
                    key={u}
                    className="border border-white/15 bg-[#0a0a0a] px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-white/70 uppercase"
                  >
                    {u}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
                Key features
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {outdoorFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-white/75"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#C5E86C]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Indoor */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1680px] px-12 py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[2fr_3fr]">
            <div>
              <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
                DD-IN-1
              </p>
              <House className="mt-6 h-10 w-10 text-[#C5E86C]" weight="regular" />
              <h2 className="mt-6 font-display text-[40px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
                Indoor DroneDome
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65">
                Indoor netted flight enclosure for year-round preflight
                testing, tuning, maintenance checkout, and automated mission
                testing — fully isolated from facility personnel during
                powered operations.
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
                Key features
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {indoorFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-white/75"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#C5E86C]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service & Support */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto grid max-w-[1680px] grid-cols-1 gap-3 px-12 py-20 md:grid-cols-2">
          <article className="border border-white/10 bg-[#0a0a0a] p-8">
            <Wrench className="h-6 w-6 text-white/85" weight="regular" />
            <h3 className="mt-6 font-display text-2xl font-bold tracking-tight uppercase">
              Service &amp; Support
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Annual and quarterly maintenance contracts plus on-site field
              support for every DroneDome installation.
            </p>
          </article>
          <article className="border border-white/10 bg-[#0a0a0a] p-8">
            <ShieldCheck className="h-6 w-6 text-white/85" weight="regular" />
            <h3 className="mt-6 font-display text-2xl font-bold tracking-tight uppercase">
              Built to order
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Every DroneDome is configured to your facility footprint,
              fleet size, and operational requirements — and installed on
              site by our team.
            </p>
          </article>
        </div>
      </section>

      <CtaStrip
        eyebrow="Talk to the team"
        headline="Get a configuration quote."
      />

      <SiteFooter />
    </>
  );
}
