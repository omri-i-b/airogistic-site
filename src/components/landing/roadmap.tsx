import { Lightning, ShieldCheck, Path } from "@phosphor-icons/react/dist/ssr";

const dockSpecs = [
  {
    icon: Lightning,
    label: "Autonomous charging",
    body: "Land, contact, charge, redeploy — no operator in the loop.",
  },
  {
    icon: ShieldCheck,
    label: "Weather-sealed",
    body: "Field-ready enclosure for rain, dust, and extended deployments.",
  },
  {
    icon: Path,
    label: "Lattice-aware",
    body: "Reports availability and battery state directly into your fleet view.",
  },
];

export function Roadmap() {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-[1680px] px-12 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
              03 &nbsp;/&nbsp; On the Workbench
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[44px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
              What we&rsquo;re building next.
            </h2>
          </div>
          <span className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            Roadmap &nbsp;/&nbsp; 2026
          </span>
        </div>

        <div className="mt-12">
          <article className="flex flex-col border border-white/10 bg-[#0b1220] lg:flex-row">
            <div className="relative flex aspect-[16/8] items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#0b1220] via-[#11182a] to-[#0a0f1c] lg:w-1/2 lg:border-r lg:border-b-0">
              <DockGlyph />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 border border-amber-300/40 bg-amber-300/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-amber-200 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                In Development
              </div>
            </div>
            <div className="p-8 lg:w-1/2 lg:p-10">
              <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
                Hardware &nbsp;/&nbsp; Field Infrastructure
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight uppercase">
                Airogistic Dock
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                A drone docking station for persistent operations. Land,
                charge, swap parameters, and redeploy on a schedule — all
                without rolling a truck. Built to live outdoors and report
                up to the same fleet view you already use.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
                {dockSpecs.map((spec) => {
                  const Icon = spec.icon;
                  return (
                    <div key={spec.label}>
                      <Icon className="h-5 w-5 text-white/85" weight="regular" />
                      <h4 className="mt-3 font-display text-base font-bold tracking-tight uppercase">
                        {spec.label}
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-white/55">
                        {spec.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function DockGlyph() {
  return (
    <svg
      viewBox="0 0 320 160"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern
          id="grid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="320" height="160" fill="url(#grid)" />

      {/* dock pad */}
      <ellipse
        cx="160"
        cy="120"
        rx="80"
        ry="14"
        fill="none"
        stroke="rgba(197,232,108,0.55)"
        strokeWidth="1.2"
      />
      <ellipse
        cx="160"
        cy="120"
        rx="58"
        ry="10"
        fill="none"
        stroke="rgba(197,232,108,0.4)"
        strokeWidth="1"
        strokeDasharray="3 4"
      />
      <ellipse
        cx="160"
        cy="120"
        rx="34"
        ry="6"
        fill="none"
        stroke="rgba(197,232,108,0.7)"
        strokeWidth="1.4"
      />
      <circle cx="160" cy="120" r="2.5" fill="#C5E86C" />

      {/* drone above */}
      <g transform="translate(160 60)">
        <line
          x1="-22"
          y1="0"
          x2="22"
          y2="0"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1.4"
        />
        <line
          x1="0"
          y1="-22"
          x2="0"
          y2="22"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1.4"
        />
        <circle cx="-22" cy="0" r="6" fill="rgba(255,255,255,0.92)" />
        <circle cx="22" cy="0" r="6" fill="rgba(255,255,255,0.92)" />
        <circle cx="0" cy="-22" r="6" fill="rgba(255,255,255,0.92)" />
        <circle cx="0" cy="22" r="6" fill="rgba(255,255,255,0.92)" />
        <rect
          x="-7"
          y="-7"
          width="14"
          height="14"
          fill="#0b1220"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1.2"
        />
      </g>

      {/* approach lines */}
      <line
        x1="160"
        y1="86"
        x2="160"
        y2="116"
        stroke="rgba(197,232,108,0.5)"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
    </svg>
  );
}
