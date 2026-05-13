import type { Metadata } from "next";
import {
  Briefcase,
  Envelope,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "@/components/landing/site-nav";
import { SiteFooter } from "@/components/landing/site-footer";
import { CtaStrip } from "@/components/landing/cta-strip";

export const metadata: Metadata = {
  title: "Company, Airogistic",
  description:
    "Defining the infrastructure of autonomous flight. Founded 2006, Austin TX.",
};

const contactCards = [
  {
    icon: MapPin,
    label: "Address",
    body: "Austin, Texas",
  },
  {
    icon: Briefcase,
    label: "Sales & Investment",
    body: "Reach out via the contact form on the home page, we'll route directly to the right person.",
  },
  {
    icon: Envelope,
    label: "General",
    body: "Open to inquiries from drone operators, defense and aerospace teams, and partners building on UAV infrastructure.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 pt-14 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/45 uppercase">
            About Airogistic &nbsp;·&nbsp; Founded 2006
          </p>
          <h1 className="mt-5 max-w-5xl font-display text-[34px] md:text-[48px] lg:text-[64px] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
            Defining the infrastructure of{" "}
            <span className="text-[#C5E86C]">autonomous flight</span>.
          </h1>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto grid max-w-[1680px] grid-cols-1 gap-12 px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-24 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
              <span className="text-[#C5E86C]">—</span> Vision
            </p>
            <h2 className="mt-4 font-display text-[22px] md:text-[28px] lg:text-[36px] leading-[1] font-bold tracking-[-0.02em] uppercase">
              From 2D to 3D.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              Airogistic defines technologies that advance autonomy
              infrastructure, transforming how goods, people, and services
              move and how the efficiency, safety, and connectivity of
              autonomous systems improves. As the world transitions from 2D
              to 3D, we enable the combined navigation of ground, water,
              and aerial vehicles for sensing and transport applications.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
              <span className="text-[#C5E86C]">—</span> Mission
            </p>
            <h2 className="mt-4 font-display text-[22px] md:text-[28px] lg:text-[36px] leading-[1] font-bold tracking-[-0.02em] uppercase">
              Patented stations. Real flight cycles.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              Airogistic advances infrastructure through its patented
              Coupled-Pole VTOL drone stations, supporting battery
              charging, refueling, preflight testing, launching, landing,
              and AI-assisted preventive maintenance. Our capabilities
              span engineering, hardware, software, packaging, integration,
              and communications across drone fleets, stations, and
              systems, concept to production.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Investors */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1680px] px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {contactCards.map((c) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.label}
                  className="border border-white/10 bg-[#0a0a0a] p-8"
                >
                  <Icon className="h-6 w-6 text-white/85" weight="regular" />
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight uppercase">
                    {c.label}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/65">
                    {c.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaStrip
        eyebrow="Talk to the team"
        headline="Start a conversation."
      />

      <SiteFooter />
    </>
  );
}
