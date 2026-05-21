import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function Roadmap() {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 py-10 md:py-14 lg:py-16">
        <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
          <span className="text-[#C5E86C]">—</span> Our Vision
        </p>

        <h2 className="mt-4 max-w-3xl font-display text-[24px] md:text-[28px] lg:text-[32px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
          A dock for the swarm to come home to.
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
          Forward-deployable docking stations for autonomous launch,
          charge, and recovery. In development. The natural next layer
          beneath the software running fleets today.
        </p>

        <Link
          href="/infrastructure"
          className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.25em] text-[#C5E86C] uppercase transition-opacity hover:opacity-80"
        >
          See where we&rsquo;re headed
          <ArrowRight className="h-3 w-3" weight="bold" />
        </Link>
      </div>
    </section>
  );
}
