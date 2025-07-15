import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingHero } from "@/components/Pricing/PricingHero";
import { PricingPlans } from "@/components/Pricing/PricingPlans";
import { PricingFAQ } from "@/components/Pricing/PricingFAQ";
import { useSEO } from "@/hooks/useSEO";

const Pricing = () => {
  useSEO({
    title: "Pricing - AdSpyder",
    description: "Choose the perfect plan for your ad intelligence needs. Start with a free trial or select from flexible pay-as-you-use and subscription options.",
    keywords: "pricing, ad spy tool, subscription, free trial, pay as you use"
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PricingHero />
        <PricingPlans />
        <PricingFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;