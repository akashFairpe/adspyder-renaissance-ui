
import { AdAnalyticsHero } from "@/components/AdAnalytics/AdAnalyticsHero";
import { AdAnalyticsStats } from "@/components/AdAnalytics/AdAnalyticsStats";
import { AdAnalyticsFeatures } from "@/components/AdAnalytics/AdAnalyticsFeatures";
import { AdAnalyticsQuotes } from "@/components/AdAnalytics/AdAnalyticsQuotes";
import { AdAnalyticsKeywords } from "@/components/AdAnalytics/AdAnalyticsKeywords";
import { AdAnalyticsBenefits } from "@/components/AdAnalytics/AdAnalyticsBenefits";
import { AdAnalyticsTestimonials } from "@/components/AdAnalytics/AdAnalyticsTestimonials";
import { AdAnalyticsCTA } from "@/components/AdAnalytics/AdAnalyticsCTA";
import { AdAnalyticsFAQ } from "@/components/AdAnalytics/AdAnalyticsFAQ";
import { AdAnalyticsSEOContent } from "@/components/AdAnalytics/AdAnalyticsSEOContent";
import { AdAnalyticsFinalCTA } from "@/components/AdAnalytics/AdAnalyticsFinalCTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { pageConfigs } from "@/config/seoConfig";

const AdAnalytics = () => {
  useSEO(pageConfigs.adAnalytics);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AdAnalyticsHero />
        <AdAnalyticsStats />
        <AdAnalyticsFeatures />
        <AdAnalyticsQuotes />
        <AdAnalyticsKeywords />
        <AdAnalyticsBenefits />
        <AdAnalyticsTestimonials />
        <AdAnalyticsCTA />
        <AdAnalyticsFAQ />
        <AdAnalyticsSEOContent />
        <AdAnalyticsFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AdAnalytics;
