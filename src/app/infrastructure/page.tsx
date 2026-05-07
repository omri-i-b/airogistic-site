import type { Metadata } from "next";
import {
  AirplaneTilt,
  Lightning,
  Path,
  ShieldCheck,
  Wrench,
  ListChecks,
  Crosshair,
  Cube,
  Wind,
  ThermometerSimple,
  Atom,
  Scales,
  Compass,
  Pulse,
  Target,
  Broadcast,
} from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "@/components/landing/site-nav";
import { SiteFooter } from "@/components/landing/site-footer";
import { CtaStrip } from "@/components/landing/cta-strip";

export const metadata: Metadata = {
  title: "Infrastructure — Airogistic",
  description:
    "Patented Coupled-Pole docking technology — autonomous launch, land, recharge, and recovery infrastructure for unmanned vehicle fleets.",
};

const operationsBullets = [
  "Stacked swarm launch from dual poles",
  "Guided autonomous land and recharge — no operator",
  "Inertia-compensated launching on moving vehicle platforms",
  "Operates in wind, rain, and harsh field environments",
  "Stationary and vehicle-mounted configurations",
];

const diagnosticsBullets = [
  { icon: Pulse, text: "Sonic structural health check" },
  { icon: ThermometerSimple, text: "Temperature monitoring — motors, ESCs, battery" },
  { icon: Wind, text: "Propulsion and lift force measurement" },
  { icon: Scales, text: "Payload balance verification" },
  { icon: Compass, text: "IMU pole reference for inertial calibration" },
  { icon: Lightning, text: "Coupled battery charging and fluid/fuel refueling" },
];

const stationFeatures = [
  {
    tag: "MISSION",
    title: "Automated mission provisioning",
    body: "Parameters and mission plans are pushed to each vehicle automatically via Drone Performance Harness station software. Every flight starts from a known-good, verified configuration.",
  },
  {
    tag: "MOBILE",
    title: "Mobile platform launching",
    body: "Inertial compensation accounts for vehicle motion during launch. Drones depart cleanly from trucks, boats, and ground vehicles without manual hold or restraint.",
  },
  {
    tag: "SWARM",
    title: "Stacked swarm deployment",
    body: "Multiple drones staged on a single pole pair. Sequential or simultaneous launch sequencing controlled entirely by station software — no ground crew needed.",
  },
];

const recoveryFeatures = [
  {
    tag: "RADAR",
    title: "Radar acquisition",
    body: "Long-range radar detects the returning vehicle early, establishing initial approach vectors and handoff timing to close-range sensors.",
  },
  {
    tag: "LIDAR",
    title: "Lidar precision mapping",
    body: "3D point-cloud scan of the landing zone and vehicle attitude on final approach. Centimeter-accurate positioning regardless of ambient light.",
  },
  {
    tag: "FUSED",
    title: "Sensor fusion",
    body: "Radar, Lidar, and Camera modalities fuse into a single recovery guidance output. Failure of any one sensor does not abort recovery — the system degrades gracefully and continues.",
  },
];

const ecosystem = [
  {
    icon: Cube,
    title: "DroneDome Operations Shelter",
    body: "Modular netted enclosures for safe drone launch, flight, and landing — outdoor or indoor.",
  },
  {
    icon: Wrench,
    title: "Test Fixturing & Launch Stands",
    body: "Pre-flight test rigs and launch hardware engineered to match the Coupled-Pole interface.",
  },
  {
    icon: ListChecks,
    title: "Sentinel AI Logging",
    body: "On-station data capture and AI analysis for predictive maintenance and incident review.",
  },
  {
    icon: AirplaneTilt,
    title: "AiroKopter Reference Drones",
    body: "First-party multi-rotor reference platforms validated against every dock and recovery system.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1680px] px-12 pt-24 pb-20">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/45 uppercase">
            Patented &nbsp;·&nbsp; Austin TX &nbsp;·&nbsp; Est. 2019
          </p>
          <h1 className="mt-5 max-w-5xl font-display text-[64px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            Infrastructure that keeps drones{" "}
            <span className="text-[#C5E86C]">mission-ready</span>, around the
            clock.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Coupled-Pole Stations — autonomous launch, land, recharge, and
            recovery infrastructure. No operator required.
          </p>
        </div>
      </section>

      {/* 01 — Coupled Pole Station */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1680px] px-12 py-24">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            01 &nbsp;/&nbsp; Coupled Pole Station
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-[52px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            Launch. Land. Recharge.{" "}
            <span className="text-[#C5E86C]">Repeat</span> — automatically.
          </h2>
          <p className="mt-6 max-w-3xl text-base text-white/65">
            The Coupled Pole is a dual-mast docking station purpose-built for
            autonomous drone operations. It handles the full mission cycle
            with no human in the loop.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-12 border-t border-white/10 pt-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
                Operations
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight uppercase">
                Launch, Land &amp; Recharge
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                Precision docking on two structural poles enables stacked
                multi-drone deployment and guided recovery — in field,
                vehicle-mounted, or mobile platform configurations.
              </p>
              <ul className="mt-6 space-y-2.5">
                {operationsBullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-base text-white/80"
                  >
                    <Crosshair
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#C5E86C]"
                      weight="bold"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
                Integrated Diagnostics
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight uppercase">
                On-Dock Health &amp; Calibration
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                Every docking cycle runs a full diagnostic sweep. Problems
                are caught at the station — not discovered mid-flight.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {diagnosticsBullets.map((b) => {
                  const Icon = b.icon;
                  return (
                    <li
                      key={b.text}
                      className="flex items-start gap-2.5 text-base text-white/80"
                    >
                      <Icon
                        className="mt-0.5 h-4 w-4 shrink-0 text-white/85"
                        weight="regular"
                      />
                      <span>{b.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* MISSION / MOBILE / SWARM */}
          <div className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-3">
            {stationFeatures.map((f) => (
              <article
                key={f.tag}
                className="border border-white/10 bg-[#0a0a0a] p-8"
              >
                <p className="font-mono text-[10px] tracking-[0.25em] text-[#C5E86C] uppercase">
                  {f.tag}
                </p>
                <h4 className="mt-3 font-display text-xl font-bold tracking-tight uppercase">
                  {f.title}
                </h4>
                <p className="mt-3 text-base leading-relaxed text-white/65">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — Patented Robotic Recovery */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1680px] px-12 py-24">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            02 &nbsp;/&nbsp; Patented Robotic Recovery
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-[52px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            Radar, Lidar, and Camera —{" "}
            <span className="text-[#C5E86C]">fused</span> drone recovery.
          </h2>
          <p className="mt-6 max-w-3xl text-base text-white/65">
            A patented multi-sensor robotic system guides every vehicle back
            to the docking pole with precision, in any lighting and in
            degraded weather conditions.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-3 border-t border-white/10 pt-12 md:grid-cols-3">
            {recoveryFeatures.map((f, i) => {
              const Icon = [Broadcast, Target, Atom][i];
              return (
                <article
                  key={f.tag}
                  className="border border-white/10 bg-[#0a0a0a] p-8"
                >
                  <Icon className="h-6 w-6 text-white/85" weight="regular" />
                  <p className="mt-6 font-mono text-[10px] tracking-[0.25em] text-[#C5E86C] uppercase">
                    {f.tag}
                  </p>
                  <h4 className="mt-2 font-display text-xl font-bold tracking-tight uppercase">
                    {f.title}
                  </h4>
                  <p className="mt-3 text-base leading-relaxed text-white/65">
                    {f.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 — Ecosystem */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1680px] px-12 py-24">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            03 &nbsp;/&nbsp; The Ecosystem
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[44px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            The full infrastructure ecosystem.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((e) => {
              const Icon = e.icon;
              return (
                <article
                  key={e.title}
                  className="border border-white/10 bg-[#0a0a0a] p-6"
                >
                  <Icon className="h-6 w-6 text-white/85" weight="regular" />
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight uppercase">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-white/65">
                    {e.body}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-14 flex items-start gap-3 border border-white/10 bg-[#0a0a0a] p-6">
            <ShieldCheck className="h-6 w-6 shrink-0 text-[#C5E86C]" weight="regular" />
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight uppercase">
                Industry position
              </h3>
              <p className="mt-2 max-w-3xl text-base leading-relaxed text-white/70">
                Coupled-Pole stations lead the drone industry in
                reliability, repeatability, and safety. From stacked swarm
                launch to inertia-compensated mobile recovery, no other
                ground infrastructure system matches the operational
                envelope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip
        eyebrow="Talk to the team"
        headline="See the dock run a full cycle."
      />

      <SiteFooter />
    </>
  );
}
