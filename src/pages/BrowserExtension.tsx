import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExtensionHero } from "@/components/Extension/ExtensionHero";
import { ExtensionFeatures } from "@/components/Extension/ExtensionFeatures";
import { ExtensionHowItWorks } from "@/components/Extension/ExtensionHowItWorks";
import { ExtensionWhyAdSpyder } from "@/components/Extension/ExtensionWhyAdSpyder";
import { ExtensionTestimonials } from "@/components/Extension/ExtensionTestimonials";
import { ExtensionFAQ } from "@/components/Extension/ExtensionFAQ";
import { ExtensionFinalCTA } from "@/components/Extension/ExtensionFinalCTA";
import { useSEO } from "@/hooks/useSEO";
import { pageConfigs } from "@/config/seoConfig";

const BrowserExtension = () => {
  useSEO(pageConfigs.browserExtension);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ExtensionHero />
        <ExtensionFeatures />
        <ExtensionHowItWorks />
        <ExtensionWhyAdSpyder />
        <ExtensionTestimonials />
        <ExtensionFAQ />
        <ExtensionFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default BrowserExtension;