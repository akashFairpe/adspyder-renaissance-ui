import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeaturesSidebar } from "@/components/Features/FeaturesSidebar";
import { FeaturesContent } from "@/components/Features/FeaturesContent";
import { SearchBar } from "@/components/Features/SearchBar";
import { useSEO } from "@/hooks/useSEO";
import { useState } from "react";

const Features = () => {
  useSEO({
    title: "AdSpyder Features - Domain-Level Ad Intelligence",
    description: "Explore comprehensive ad intelligence features across 12 categories. Analyze competitor ads, strategies, and performance metrics.",
    keywords: "ad intelligence, competitor analysis, domain insights, ad features"
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Search Bar */}
      <div className="border-b bg-background/95 backdrop-blur-sm sticky top-16 z-30">
        <div className="container mx-auto px-6 py-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-theme(spacing.16))]">
        {/* Side Panel */}
        <FeaturesSidebar 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        {/* Main Content */}
        <FeaturesContent 
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Features;