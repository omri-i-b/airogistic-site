import { SiteNav } from "@/components/landing/site-nav";
import { Hero } from "@/components/landing/hero";
import { Roadmap } from "@/components/landing/roadmap";
import { FeatureIntro } from "@/components/landing/feature-intro";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { ContactForm } from "@/components/landing/contact-form";
import { SiteFooter } from "@/components/landing/site-footer";

export default function LandingPage() {
  return (
    <>
      <SiteNav />
      <Hero />
      <Roadmap />
      <FeatureIntro />
      <FeatureGrid />
      <ContactForm />
      <SiteFooter />
    </>
  );
}
