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
    <div className="min-h-screen bg-[#fcfdff]">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Domain Paid Ad Analysis
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Comprehensive ad intelligence insights for any domain
          </p>
          <div className="flex justify-center">
            <DomainSearchBar 
              selectedDomain={selectedDomain}
              onDomainChange={setSelectedDomain}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative">
          <div className="lg:hidden mb-4">
            {/* Mobile sidebar - collapsible */}
            <details className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                Analysis Categories
              </summary>
              <div className="px-6 pb-4">
                <DomainSidebar 
                  activeSection={activeSection}
                  onSectionChange={setActiveSection}
                />
              </div>
            </details>
          </div>
          
          <div className="hidden lg:block lg:fixed lg:left-4 lg:top-32 lg:bottom-4 lg:w-80 lg:z-10">
            <DomainSidebar 
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
          </div>
          
          <div className="flex-1 min-w-0 w-full lg:ml-96">
            <DomainContent selectedDomain={selectedDomain} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DomainPaidAdAnalysis;