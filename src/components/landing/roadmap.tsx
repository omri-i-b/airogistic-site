import Link from "next/link";
import { ArrowRight, Crosshair } from "@phosphor-icons/react/dist/ssr";

const configs = [
  {
    code: "CS-FIX-1",
    name: "FleetStand",
    tag: "Fixed Station",
    body: "Permanent or semi-permanent Coupled-Pole station for fixed-site autonomous drone operations. Single drone to full stacked swarm, with integrated safety shelters, charging, and diagnostics.",
    bullets: [
      "Fixed pad or semi-permanent frame mount",
      "Single drone or stacked swarm operations",
      "Charge, test, launch & land",
      "DroneDome safety shelter interlocks",
      "Fast-charge via pole couplers",
      "WiFi, 5G, Starlink, or custom radio",
    ],
  },
  {
    code: "CS-MOB-1",
    name: "MobiStand",
    tag: "Mobile Station",
    body: "Portable Coupled-Pole station for vehicle-mounted and field-deployed operations. Mounts on trucks, boats, ATVs, aircraft, and trailers, or deploys from carry cases for rapid field setup.",
    bullets: [
      "Vehicle mount or portable carry case",
      "Truck, boat, ATV, aircraft & trailer use",
      "Single or stacked drone launch",
      "Inertia-compensated mobile launching",
      "Scheduled and push-button operations",
      "Preflight checklist and battery charging",
    ],
  },
];

export function Roadmap() {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 py-14 md:py-18 lg:py-20">
        <div>
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            02 &nbsp;/&nbsp; The Stations &nbsp;·&nbsp; Building next
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[26px] md:text-[34px] lg:text-[44px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            One platform.{" "}
            <span className="text-[#C5E86C]">Two stations</span>.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">
            Coupled-Pole Stations are patented, application-specific,
            build-to-order docking platforms available through OEM and B2B
            agreements. The same software running our customers&rsquo;
            fleets today, on hardware purpose-built for autonomous launch,
            land, and recharge.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 lg:grid-cols-2">
          {configs.map((c) => (
            <article
              key={c.code}
              className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8 lg:p-10"
            >
              <p className="font-mono text-[10px] tracking-[0.25em] text-[#C5E86C] uppercase">
                {c.code} &nbsp;//&nbsp; {c.tag}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight uppercase">
                {c.name}
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
          US Patented. OEM, B2B, build-to-order.
        </p>

        <Link
          href="/infrastructure"
          className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.25em] text-[#C5E86C] uppercase transition-opacity hover:opacity-80"
        >
          See the stations
          <ArrowRight className="h-3 w-3" weight="bold" />
        </Link>
      </div>
    </section>
  );
}
