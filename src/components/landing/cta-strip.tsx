import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function CtaStrip({
  eyebrow,
  headline,
  cta = "Book a demo",
  href = "/#contact",
}: {
  eyebrow?: string;
  headline: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-[1680px] flex-col gap-6 px-5 md:px-8 lg:px-12 py-12 md:py-14 lg:py-16 md:flex-row md:items-center md:justify-between">
        <div>
          {eyebrow && (
            <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-[24px] md:text-[32px] lg:text-[40px] leading-[1] font-bold tracking-[-0.02em] uppercase">
            {headline}
          </h2>
        </div>
        <Link
          href={href}
          className="inline-flex w-fit items-center gap-1.5 bg-white px-5 py-3 font-mono text-[11px] tracking-[0.25em] text-black uppercase transition-colors hover:bg-white/90"
        >
          {cta}
          <ArrowRight className="h-3 w-3" weight="bold" />
        </Link>
      </div>
    </section>
  );
}
