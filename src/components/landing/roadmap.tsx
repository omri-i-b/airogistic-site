import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function Roadmap() {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 py-10 md:py-14 lg:py-16">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
            <span className="text-[#C5E86C]">—</span> The Stations
          </p>
          <span className="inline-flex items-center gap-1.5 border border-amber-300/40 bg-amber-300/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-amber-200 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            In development
          </span>
        </div>

        <h2 className="mt-4 max-w-3xl font-display text-[24px] md:text-[28px] lg:text-[32px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
          The hardware we&rsquo;re building next.
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
          Patented Coupled-Pole Stations, the dual-mast docking platforms
          our software was built to run. Fixed-site and mobile
          configurations. Build-to-order, OEM and B2B.
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
