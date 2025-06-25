
import { useEffect } from "react";
import { AdLibraryHero } from "@/components/AdLibrary/AdLibraryHero";
import { AdLibraryStats } from "@/components/AdLibrary/AdLibraryStats";
import { AdLibraryPlatforms } from "@/components/AdLibrary/AdLibraryPlatforms";
import { AdLibraryBenefits } from "@/components/AdLibrary/AdLibraryBenefits";
import { AdLibraryFeatures } from "@/components/AdLibrary/AdLibraryFeatures";
import { AdLibraryTestimonials } from "@/components/AdLibrary/AdLibraryTestimonials";
import { AdLibraryCTA } from "@/components/AdLibrary/AdLibraryCTA";
import { AdLibraryFAQ } from "@/components/AdLibrary/AdLibraryFAQ";
import { AdLibrarySEOContent } from "@/components/AdLibrary/AdLibrarySEOContent";
import { AdLibraryFinalCTA } from "@/components/AdLibrary/AdLibraryFinalCTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AdLibrary = () => {
  useEffect(() => {
    // Add comprehensive schema markup
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://adspyder.io/ad-library",
          "url": "https://adspyder.io/ad-library",
          "name": "Ad Library - AdSpyder | Spy on Competitor Ads",
          "description": "Spy on competitor ads in real time across Google, Meta, YouTube, and more. Discover what's working and use those insights to supercharge your own campaigns.",
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
                "name": "Ad Library",
                "item": "https://adspyder.io/ad-library"
              }
            ]
          }
        },
        {
          "@type": "Organization",
          "@id": "https://adspyder.io/#organization",
          "name": "AdSpyder",
          "url": "https://adspyder.io",
          "logo": {
            "@type": "ImageObject",
            "url": "https://adspyder.io/logo.png"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "support@adspyder.com"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "addressCountry": "US"
          }
        },
        {
          "@type": "SoftwareApplication",
          "name": "AdSpyder Ad Library",
          "description": "Comprehensive ad intelligence platform for competitor ad analysis",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1500"
          }
        },
        {
          "@type": "Article",
          "headline": "Supercharge your ad campaigns with Ad Library",
          "description": "Learn how AdSpyder's Ad Library helps digital marketers analyze competitor ads and improve campaign performance",
          "author": {
            "@type": "Organization",
            "name": "AdSpyder"
          },
          "publisher": {
            "@type": "Organization",
            "name": "AdSpyder",
            "logo": {
              "@type": "ImageObject",
              "url": "https://adspyder.io/logo.png"
            }
          },
          "datePublished": "2024-01-01",
          "dateModified": "2024-01-01"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaMarkup);
    script.id = 'ad-library-schema';
    
    // Remove existing schema if present
    const existingScript = document.getElementById('ad-library-schema');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);

    // Update page title and meta description
    document.title = "Ad Library - AdSpyder | Spy on Competitor Ads";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Spy on competitor ads in real time across Google, Meta, YouTube, and more. Discover what\'s working and use those insights to supercharge your own campaigns.');
    }

    // Cleanup on component unmount
    return () => {
      const schemaScript = document.getElementById('ad-library-schema');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AdLibraryHero />
        <AdLibraryStats />
        <AdLibraryPlatforms />
        <AdLibraryBenefits />
        <AdLibraryFeatures />
        <AdLibraryTestimonials />
        <AdLibraryCTA />
        <AdLibraryFAQ />
        <AdLibrarySEOContent />
        <AdLibraryFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AdLibrary;
