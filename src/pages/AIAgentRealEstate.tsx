import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIAgentRealEstateHero } from "@/components/AIAgentRealEstate/AIAgentRealEstateHero";
import { AIAgentRealEstateOverview } from "@/components/AIAgentRealEstate/AIAgentRealEstateOverview";
import { AIAgentRealEstateTools } from "@/components/AIAgentRealEstate/AIAgentRealEstateTools";
import { AIAgentRealEstateScenario } from "@/components/AIAgentRealEstate/AIAgentRealEstateScenario";
import { AIAgentRealEstateTarget } from "@/components/AIAgentRealEstate/AIAgentRealEstateTarget";
import { AIAgentRealEstateBenefits } from "@/components/AIAgentRealEstate/AIAgentRealEstateBenefits";
import { AIAgentRealEstateTestimonials } from "@/components/AIAgentRealEstate/AIAgentRealEstateTestimonials";
import { AIAgentRealEstateFAQ } from "@/components/AIAgentRealEstate/AIAgentRealEstateFAQ";
import { AIAgentRealEstateRelated } from "@/components/AIAgentRealEstate/AIAgentRealEstateRelated";
import { AIAgentRealEstateFinalCTA } from "@/components/AIAgentRealEstate/AIAgentRealEstateFinalCTA";
import { useSEO } from "@/hooks/useSEO";

const AIAgentRealEstate = () => {
  useSEO({
    title: "AI Agent for Real Estate Marketing - Grow Listings & Capture Leads | AdSpyder",
    description: "Grow your listings, capture leads, and run hyper-targeted ads with AI-powered real estate marketing. Automated keyword research, ad generation, and lead nurturing.",
    keywords: "AI real estate marketing, real estate AI agent, property marketing automation, real estate lead generation, AI property ads"
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AIAgentRealEstateHero />
        <AIAgentRealEstateOverview />
        <AIAgentRealEstateTools />
        <AIAgentRealEstateScenario />
        <AIAgentRealEstateTarget />
        <AIAgentRealEstateBenefits />
        <AIAgentRealEstateTestimonials />
        <AIAgentRealEstateFAQ />
        <AIAgentRealEstateRelated />
        <AIAgentRealEstateFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AIAgentRealEstate;