
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VsAdSpyHero } from "@/components/VsAdSpy/VsAdSpyHero";
import { VsAdSpyStats } from "@/components/VsAdSpy/VsAdSpyStats";
import { VsAdSpyComparison } from "@/components/VsAdSpy/VsAdSpyComparison";
import { VsAdSpyFeatures } from "@/components/VsAdSpy/VsAdSpyFeatures";
import { VsAdSpyWhy } from "@/components/VsAdSpy/VsAdSpyWhy";
import { VsAdSpyTestimonials } from "@/components/VsAdSpy/VsAdSpyTestimonials";
import { VsAdSpyPerformance } from "@/components/VsAdSpy/VsAdSpyPerformance";
import { VsAdSpyCTA } from "@/components/VsAdSpy/VsAdSpyCTA";

const VsAdSpy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <VsAdSpyHero />
      <VsAdSpyStats />
      <VsAdSpyComparison />
      <VsAdSpyFeatures />
      <VsAdSpyWhy />
      <VsAdSpyTestimonials />
      <VsAdSpyPerformance />
      <VsAdSpyCTA />
      <Footer />
    </div>
  );
};

export default VsAdSpy;
