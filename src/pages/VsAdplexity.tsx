
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VsAdplexityHero } from "@/components/VsAdplexity/VsAdplexityHero";
import { VsAdplexityStats } from "@/components/VsAdplexity/VsAdplexityStats";
import { VsAdplexityComparison } from "@/components/VsAdplexity/VsAdplexityComparison";
import { VsAdplexityFeatures } from "@/components/VsAdplexity/VsAdplexityFeatures";
import { VsAdplexityWhy } from "@/components/VsAdplexity/VsAdplexityWhy";
import { VsAdplexityTestimonials } from "@/components/VsAdplexity/VsAdplexityTestimonials";
import { VsAdplexityPerformance } from "@/components/VsAdplexity/VsAdplexityPerformance";
import { VsAdplexityCTA } from "@/components/VsAdplexity/VsAdplexityCTA";

const VsAdplexity = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <VsAdplexityHero />
      <VsAdplexityStats />
      <VsAdplexityComparison />
      <VsAdplexityFeatures />
      <VsAdplexityWhy />
      <VsAdplexityTestimonials />
      <VsAdplexityPerformance />
      <VsAdplexityCTA />
      <Footer />
    </div>
  );
};

export default VsAdplexity;
