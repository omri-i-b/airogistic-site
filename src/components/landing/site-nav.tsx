"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, List, X } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

const links = [
  { href: "/", label: "Software" },
  { href: "/infrastructure", label: "Coupled-Pole Nodes" },
  { href: "/company", label: "Company" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1680px] items-center justify-between px-5 md:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src={asset("/airogistic-mark.png")}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
            priority
          />
          <span className="font-display text-lg leading-none font-bold tracking-tight sm:text-[22px]">
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

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden items-center gap-1.5 bg-white px-4 py-2 font-mono text-[11px] tracking-[0.25em] text-black uppercase transition-colors hover:bg-white/90 sm:inline-flex"
          >
            Book a demo
            <ArrowRight className="h-3 w-3" weight="bold" />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-1 inline-flex h-10 w-10 items-center justify-center text-white md:hidden"
          >
            {open ? (
              <X className="h-6 w-6" weight="bold" />
            ) : (
              <List className="h-6 w-6" weight="bold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <nav className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-4 text-base text-white/85 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-1.5 bg-white px-4 py-3 font-mono text-[11px] tracking-[0.25em] text-black uppercase transition-colors hover:bg-white/90"
            >
              Book a demo
              <ArrowRight className="h-3 w-3" weight="bold" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
