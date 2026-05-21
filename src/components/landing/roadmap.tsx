import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function Roadmap() {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 py-10 md:py-14 lg:py-16">
        <h2 className="max-w-3xl font-display text-[24px] md:text-[28px] lg:text-[32px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
          Software is half the story.
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
          The dock is the other half. Forward-deployable stations for
          autonomous launch, charge, and recovery, all running the same
          software your swarm runs today.
        </p>

        <Link
          href="/infrastructure"
          className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.25em] text-[var(--color-accent)] uppercase transition-opacity hover:opacity-80"
        >
          See the dock
          <ArrowRight className="h-3 w-3" weight="bold" />
        </Link>
      </div>
    </section>
  );
}
