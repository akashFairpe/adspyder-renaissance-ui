import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AISalesAgentHero } from "@/components/AISalesAgent/AISalesAgentHero";
import { AISalesAgentIntro } from "@/components/AISalesAgent/AISalesAgentIntro";
import { AISalesAgentBenefits } from "@/components/AISalesAgent/AISalesAgentBenefits";
import { AISalesAgentUseCases } from "@/components/AISalesAgent/AISalesAgentUseCases";
import { AISalesAgentExamples } from "@/components/AISalesAgent/AISalesAgentExamples";
import { AISalesAgentWorkflow } from "@/components/AISalesAgent/AISalesAgentWorkflow";
import { AISalesAgentComparison } from "@/components/AISalesAgent/AISalesAgentComparison";
import { AISalesAgentRelated } from "@/components/AISalesAgent/AISalesAgentRelated";
import { AISalesAgentFinalCTA } from "@/components/AISalesAgent/AISalesAgentFinalCTA";
import { useSEO } from "@/hooks/useSEO";

const AISalesAgent = () => {
  useSEO({
    title: "AI Sales Agents That Never Sleep - AdSpyder",
    description: "Revolutionize prospecting, lead qualification, and conversions with AI-powered sales automation agents. Automate your sales pipeline 24/7.",
    keywords: "AI sales agent, sales automation, lead qualification, sales pipeline, AI prospecting, sales tools"
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AISalesAgentHero />
        <AISalesAgentIntro />
        <AISalesAgentBenefits />
        <AISalesAgentUseCases />
        <AISalesAgentExamples />
        <AISalesAgentWorkflow />
        <AISalesAgentComparison />
        <AISalesAgentRelated />
        <AISalesAgentFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AISalesAgent;