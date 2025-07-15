import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DomainSidebar } from "@/components/DomainAnalysis/DomainSidebar";
import { DomainContent } from "@/components/DomainAnalysis/DomainContent";
import { DomainSearchBar } from "@/components/DomainAnalysis/DomainSearchBar";

const DomainPaidAdAnalysis = () => {
  const [activeSection, setActiveSection] = useState("domain-overview");
  const [selectedDomain, setSelectedDomain] = useState("example.com");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "domain-overview",
        "ad-creatives", 
        "messaging",
        "performance-timeline",
        "landing-experience",
        "targeting-insights",
        "keywords-search",
        "engagement-metrics",
        "competitive-analysis",
        "trends-reach",
        "technical-tracking",
        "distribution-devices"
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Domain Paid Ad Analysis
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Comprehensive ad intelligence insights for any domain
          </p>
          <DomainSearchBar 
            selectedDomain={selectedDomain}
            onDomainChange={setSelectedDomain}
          />
        </div>

        <div className="flex gap-8">
          <DomainSidebar 
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
          <DomainContent selectedDomain={selectedDomain} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DomainPaidAdAnalysis;