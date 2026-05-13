import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="relative mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-12 lg:pb-14">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/45 uppercase">
            <span className="text-[#C5E86C]">—</span> The Software
          </p>
          <span className="inline-flex items-center gap-1.5 border border-[#C5E86C]/40 bg-[#C5E86C]/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-[#C5E86C] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5E86C]" />
            Available today
          </span>
        </div>

        <h1 className="mt-5 max-w-5xl font-display text-[30px] md:text-[44px] lg:text-[56px] leading-[0.98] font-bold tracking-[-0.02em] uppercase">
          Persistent forward infrastructure for{" "}
          <span className="text-[#C5E86C]">autonomous drone operations</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          The readiness software running drone fleets today. The
          Coupled-Pole Stations those fleets will deploy from tomorrow.
        </p>

        <div className="mt-8">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-white px-4 py-2.5 font-mono text-[11px] tracking-[0.25em] text-black uppercase transition-colors hover:bg-white/90"
          >
            Book a demo
            <ArrowRight className="h-3 w-3" weight="bold" />
          </Link>
        </div>

        <div className="mt-12 md:mt-16 overflow-hidden border border-white/15 bg-[#0a0a0a] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/40 px-4 py-2.5 font-mono text-[10px] tracking-[0.2em] text-white/45 uppercase">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
            <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
            <span className="h-2 w-2 rounded-full bg-[#28C840]" />
            <span className="ml-3">app.airogistic.com &nbsp;/&nbsp; mission console</span>
          </div>
          <Image
            src={asset("/airogistic-dashboard.png")}
            alt="Airogistic mission console, flight map, fleet registry, and live test harness"
            width={1727}
            height={911}
            priority
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
