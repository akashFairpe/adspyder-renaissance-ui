
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VsBigSpyHero } from "@/components/VsBigSpy/VsBigSpyHero";
import { VsBigSpyStats } from "@/components/VsBigSpy/VsBigSpyStats";
import { VsBigSpyComparison } from "@/components/VsBigSpy/VsBigSpyComparison";
import { VsBigSpyFeatures } from "@/components/VsBigSpy/VsBigSpyFeatures";
import { VsBigSpyWhy } from "@/components/VsBigSpy/VsBigSpyWhy";
import { VsBigSpyTestimonials } from "@/components/VsBigSpy/VsBigSpyTestimonials";
import { VsBigSpyPerformance } from "@/components/VsBigSpy/VsBigSpyPerformance";
import { VsBigSpyCTA } from "@/components/VsBigSpy/VsBigSpyCTA";

const VsBigSpy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <VsBigSpyHero />
      <VsBigSpyStats />
      <VsBigSpyComparison />
      <VsBigSpyFeatures />
      <VsBigSpyWhy />
      <VsBigSpyTestimonials />
      <VsBigSpyPerformance />
      <VsBigSpyCTA />
      <Footer />
    </div>
  );
};

export default VsBigSpy;
