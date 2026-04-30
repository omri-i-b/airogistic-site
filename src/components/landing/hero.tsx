import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="relative mx-auto max-w-[1680px] px-12 pt-20 pb-14">
        <div className="mb-8 flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-white/55 uppercase">
          <Image
            src={asset("/airogistic-mark.png")}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 opacity-90"
          />
          <span>Fleet</span>
          <span className="text-white/25">·</span>
          <span>Parameters</span>
          <span className="text-white/25">·</span>
          <span>Tests</span>
          <span className="text-white/25">·</span>
          <span>Missions</span>
        </div>

        <h1 className="max-w-4xl font-display text-[72px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
          Never lose a vehicle to a{" "}
          <span className="text-[#A6B0D8]">bad parameter</span> again.
        </h1>

        <p className="mt-6 max-w-xl text-base text-white/65">
          Fleet, parameter, and test management for teams flying unmanned
          vehicles — in the field or in simulation.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-white px-4 py-2.5 font-mono text-[11px] tracking-[0.25em] text-black uppercase transition-colors hover:bg-white/90"
          >
            Book a demo
            <ArrowRight className="h-3 w-3" weight="bold" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 border border-white/25 px-4 py-2.5 font-mono text-[11px] tracking-[0.25em] text-white uppercase transition-colors hover:bg-white/5"
          >
            Start with parameters
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
            width={1707}
            height={921}
            priority
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
