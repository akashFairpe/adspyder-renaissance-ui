
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { WhatIsAdSpyderSection } from "@/components/WhatIsAdSpyderSection";
import { AdvancedFeaturesSection } from "@/components/AdvancedFeaturesSection";
import { CTASection } from "@/components/CTASection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogCommunitySection } from "@/components/BlogCommunitySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#fcfdff]">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <FeaturesSection />
        <WhatIsAdSpyderSection />
        <AdvancedFeaturesSection />
        <CTASection />
        <TestimonialsSection />
        <BlogCommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
