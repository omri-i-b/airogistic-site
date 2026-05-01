import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="relative mx-auto max-w-[1680px] px-12 pt-20 pb-14">
        <h1 className="max-w-5xl font-display text-[56px] leading-[0.98] font-bold tracking-[-0.02em] uppercase">
          Eliminate drone downtime from{" "}
          <span className="text-[#C5E86C]">configuration drift</span>,
          missed preflight steps, and untested flight parameters.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Know your fleet is flight-ready — before every mission, every
          time.
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-white px-4 py-2.5 font-mono text-[11px] tracking-[0.25em] text-black uppercase transition-colors hover:bg-white/90"
          >
            Book a demo
            <ArrowRight className="h-3 w-3" weight="bold" />
          </a>
        </div>

        <div className="mt-16 overflow-hidden border border-white/15 bg-[#0b1220] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/40 px-4 py-2.5 font-mono text-[10px] tracking-[0.2em] text-white/45 uppercase">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
            <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
            <span className="h-2 w-2 rounded-full bg-[#28C840]" />
            <span className="ml-3">app.airogistic.com &nbsp;/&nbsp; mission console</span>
          </div>
          <Image
            src={asset("/airogistic-dashboard.png")}
            alt="Airogistic mission console — flight map, fleet registry, and live test harness"
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
