import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="relative mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-12 lg:pb-14">
        <h1 className="max-w-5xl font-display text-[30px] md:text-[44px] lg:text-[56px] leading-[0.98] font-bold tracking-[-0.02em] uppercase">
          The software platform for{" "}
          <span className="text-[var(--color-accent)]">autonomous drone swarms</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Run your swarm the way your team ships software, versioned,
          tested, and observable. In production with drone operators
          today.
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

        <figure className="mx-auto mt-12 max-w-4xl md:mt-16">
          <Image
            src={asset("/airogistic-dashboard.png")}
            alt="Airogistic swarm console — flight map, fleet registry, and live test harness"
            width={1727}
            height={911}
            priority
            className="w-full border border-[var(--color-rule-strong)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          />
          <figcaption className="mt-3 font-mono text-[10px] tracking-[0.25em] text-[var(--color-ink-3)] uppercase">
            <span className="mr-1.5 text-[var(--color-accent)]">—</span>Airogistic swarm console
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
