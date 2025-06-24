
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AdLibraryShowcase } from "@/components/AdLibraryShowcase";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingPreview } from "@/components/PricingPreview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <AdLibraryShowcase />
        <TestimonialsSection />
        <PricingPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
