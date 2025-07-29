import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIAgentGoogleAdsHero } from "@/components/AIAgentGoogleAds/AIAgentGoogleAdsHero";
import { AIAgentGoogleAdsIntro } from "@/components/AIAgentGoogleAds/AIAgentGoogleAdsIntro";
import { AIAgentGoogleAdsFeatures } from "@/components/AIAgentGoogleAds/AIAgentGoogleAdsFeatures";
import { AIAgentGoogleAdsTarget } from "@/components/AIAgentGoogleAds/AIAgentGoogleAdsTarget";
import { AIAgentGoogleAdsBenefits } from "@/components/AIAgentGoogleAds/AIAgentGoogleAdsBenefits";
import { AIAgentGoogleAdsWorkflow } from "@/components/AIAgentGoogleAds/AIAgentGoogleAdsWorkflow";
import { AIAgentGoogleAdsComparison } from "@/components/AIAgentGoogleAds/AIAgentGoogleAdsComparison";
import { AIAgentGoogleAdsFAQ } from "@/components/AIAgentGoogleAds/AIAgentGoogleAdsFAQ";
import { AIAgentGoogleAdsRelated } from "@/components/AIAgentGoogleAds/AIAgentGoogleAdsRelated";
import { AIAgentGoogleAdsFinalCTA } from "@/components/AIAgentGoogleAds/AIAgentGoogleAdsFinalCTA";
import { useSEO } from "@/hooks/useSEO";

const AIAgentGoogleAds = () => {
  useSEO({
    title: "AI Agent for Google Ads - Automate & Optimize Your Ad Campaigns | AdSpyder",
    description: "Automate, optimize, and scale your Google Ads campaigns with AI-driven precision. AI-powered keyword suggestions, ad copy generation, and real-time budget optimization.",
    keywords: "AI agent Google Ads, automated Google Ads, AI advertising, Google Ads optimization, AI marketing tools"
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AIAgentGoogleAdsHero />
        <AIAgentGoogleAdsIntro />
        <AIAgentGoogleAdsFeatures />
        <AIAgentGoogleAdsTarget />
        <AIAgentGoogleAdsBenefits />
        <AIAgentGoogleAdsWorkflow />
        <AIAgentGoogleAdsComparison />
        <AIAgentGoogleAdsFAQ />
        <AIAgentGoogleAdsRelated />
        <AIAgentGoogleAdsFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AIAgentGoogleAds;