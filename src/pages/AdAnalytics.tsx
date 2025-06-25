
import { useEffect } from "react";
import { AdAnalyticsHero } from "@/components/AdAnalytics/AdAnalyticsHero";
import { AdAnalyticsStats } from "@/components/AdAnalytics/AdAnalyticsStats";
import { AdAnalyticsFeatures } from "@/components/AdAnalytics/AdAnalyticsFeatures";
import { AdAnalyticsQuotes } from "@/components/AdAnalytics/AdAnalyticsQuotes";
import { AdAnalyticsKeywords } from "@/components/AdAnalytics/AdAnalyticsKeywords";
import { AdAnalyticsBenefits } from "@/components/AdAnalytics/AdAnalyticsBenefits";
import { AdAnalyticsTestimonials } from "@/components/AdAnalytics/AdAnalyticsTestimonials";
import { AdAnalyticsCTA } from "@/components/AdAnalytics/AdAnalyticsCTA";
import { AdAnalyticsFAQ } from "@/components/AdAnalytics/AdAnalyticsFAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AdAnalytics = () => {
  useEffect(() => {
    // Add comprehensive schema markup
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://adspyder.io/ad-analytics",
          "url": "https://adspyder.io/ad-analytics",
          "name": "Ad Analytics - AdSpyder | Unlock Deep Ad Insights Instantly",
          "description": "Discover active campaigns, analyse ad funnels, and track keyword performance across platforms—all with AdSpyder's comprehensive ad analysis tools.",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://adspyder.io",
            "name": "AdSpyder",
            "url": "https://adspyder.io"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://adspyder.io"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Ad Analytics",
                "item": "https://adspyder.io/ad-analytics"
              }
            ]
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaMarkup);
    script.id = 'ad-analytics-schema';
    
    // Remove existing schema if present
    const existingScript = document.getElementById('ad-analytics-schema');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);

    // Update page title and meta description
    document.title = "Ad Analytics - AdSpyder | Unlock Deep Ad Insights Instantly";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover active campaigns, analyse ad funnels, and track keyword performance across platforms—all with AdSpyder\'s comprehensive ad analysis tools.');
    }

    // Cleanup on component unmount
    return () => {
      const schemaScript = document.getElementById('ad-analytics-schema');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

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
      </main>
      <Footer />
    </div>
  );
};

export default AdAnalytics;
