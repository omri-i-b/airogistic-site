import { SiteNav } from "@/components/landing/site-nav";
import { Hero } from "@/components/landing/hero";
import { FeatureIntro } from "@/components/landing/feature-intro";
import { FeatureCards } from "@/components/landing/feature-cards";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { Roadmap } from "@/components/landing/roadmap";
import { CtaStrip } from "@/components/landing/cta-strip";
import { SiteFooter } from "@/components/landing/site-footer";

export default function LandingPage() {
  return (
    <>
      <SiteNav />
      <Hero />
      <FeatureIntro />
      <FeatureCards />
      <FeatureGrid />
      <Roadmap />
      <CtaStrip
        eyebrow="Talk to the team"
        headline="Get on the early-access list."
      />
      <SiteFooter />
    </>
  );
}
