import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

const links = [
  { href: "/", label: "Software" },
  { href: "/infrastructure", label: "Coupled-Pole Stations" },
  { href: "/company", label: "Company" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1680px] items-center justify-between px-12">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={asset("/airogistic-mark.png")}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
            priority
          />
          <span className="font-display text-[22px] leading-none font-bold tracking-tight">
            Airogistic
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 bg-white px-4 py-2 font-mono text-[11px] tracking-[0.25em] text-black uppercase transition-colors hover:bg-white/90"
        >
          Book a demo
          <ArrowRight className="h-3 w-3" weight="bold" />
        </Link>
      </div>
    </header>
  );
}
