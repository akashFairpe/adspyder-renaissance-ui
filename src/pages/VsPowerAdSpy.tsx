
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VsPowerAdSpyHero } from "@/components/VsPowerAdSpy/VsPowerAdSpyHero";
import { VsPowerAdSpyStats } from "@/components/VsPowerAdSpy/VsPowerAdSpyStats";
import { VsPowerAdSpyComparison } from "@/components/VsPowerAdSpy/VsPowerAdSpyComparison";
import { VsPowerAdSpyFeatures } from "@/components/VsPowerAdSpy/VsPowerAdSpyFeatures";
import { VsPowerAdSpyWhy } from "@/components/VsPowerAdSpy/VsPowerAdSpyWhy";
import { VsPowerAdSpyTestimonials } from "@/components/VsPowerAdSpy/VsPowerAdSpyTestimonials";
import { VsPowerAdSpyPerformance } from "@/components/VsPowerAdSpy/VsPowerAdSpyPerformance";
import { VsPowerAdSpyCTA } from "@/components/VsPowerAdSpy/VsPowerAdSpyCTA";

const VsPowerAdSpy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <VsPowerAdSpyHero />
      <VsPowerAdSpyStats />
      <VsPowerAdSpyComparison />
      <VsPowerAdSpyFeatures />
      <VsPowerAdSpyWhy />
      <VsPowerAdSpyTestimonials />
      <VsPowerAdSpyPerformance />
      <VsPowerAdSpyCTA />
      <Footer />
    </div>
  );
};

export default VsPowerAdSpy;
