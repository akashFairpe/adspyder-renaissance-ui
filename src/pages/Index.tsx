
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogCommunitySection } from "@/components/BlogCommunitySection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#fcfdff]">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <FeaturesSection />
        <CTASection />
        <TestimonialsSection />
        <BlogCommunitySection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
