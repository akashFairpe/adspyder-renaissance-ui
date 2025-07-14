import { useState } from "react";
import { FeatureCard } from "./FeatureCard";
import { Lock, Eye, BarChart, TrendingUp, Users, Calendar } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  accessLevel: "normal" | "locked" | "samples";
  icon: any;
  category: string;
  preview?: string[];
  chartData?: any[];
}

const mockFeatures: Feature[] = [
  // Domain Overview
  {
    id: "domain-url-info",
    title: "Domain Information",
    description: "Basic domain details including URL, brand name, and platform presence",
    accessLevel: "normal",
    icon: BarChart,
    category: "domain-overview",
    chartData: [
      { name: "Domain", value: "nike.com" },
      { name: "Brand", value: "Nike Inc." },
      { name: "Platforms", value: "5 Active" }
    ]
  },
  {
    id: "industry-classification",
    title: "Industry Classification",
    description: "Detailed industry categorization and market segment analysis",
    accessLevel: "locked",
    icon: TrendingUp,
    category: "domain-overview"
  },
  {
    id: "countries-active",
    title: "Active Countries",
    description: "Geographic presence and country-wise ad distribution",
    accessLevel: "samples",
    icon: Users,
    category: "domain-overview",
    preview: ["United States", "United Kingdom", "• • • • •"]
  },

  // Ad Creatives
  {
    id: "text-ads",
    title: "Text Advertisements",
    description: "Collection of text-based ad copies and messaging",
    accessLevel: "normal",
    icon: BarChart,
    category: "ad-creatives",
    chartData: [
      { name: "Total Ads", value: "1,247" },
      { name: "Active", value: "89" },
      { name: "This Month", value: "+23" }
    ]
  },
  {
    id: "image-video-ads",
    title: "Visual Creatives",
    description: "Image and video advertisements with format analysis",
    accessLevel: "samples",
    icon: Users,
    category: "ad-creatives",
    preview: ["Display Ads (45%)", "Video Ads (32%)", "• • • • •"]
  },

  // Messaging
  {
    id: "top-ctas",
    title: "Top Call-to-Actions",
    description: "Most frequently used CTAs and their performance metrics",
    accessLevel: "normal",
    icon: BarChart,
    category: "messaging",
    chartData: [
      { name: "Shop Now", value: "34%" },
      { name: "Learn More", value: "28%" },
      { name: "Get Started", value: "19%" }
    ]
  },
  {
    id: "headlines-analysis",
    title: "Headlines & Titles",
    description: "Ad headline patterns and messaging strategies",
    accessLevel: "locked",
    icon: TrendingUp,
    category: "messaging"
  },

  // Performance Timeline
  {
    id: "ad-activity",
    title: "Ad Activity Over Time",
    description: "Timeline showing ad launch patterns and campaign activity",
    accessLevel: "normal",
    icon: Calendar,
    category: "performance-timeline",
    chartData: [
      { month: "Oct", campaigns: 45 },
      { month: "Nov", campaigns: 52 },
      { month: "Dec", campaigns: 67 }
    ]
  },
  {
    id: "estimated-spend",
    title: "Estimated Ad Spend",
    description: "Projected advertising budget and spending patterns",
    accessLevel: "locked",
    icon: TrendingUp,
    category: "performance-timeline"
  },

  // Landing Experience
  {
    id: "funnel-stages",
    title: "Conversion Funnel",
    description: "User journey stages from ad click to conversion",
    accessLevel: "samples",
    icon: Users,
    category: "landing-experience",
    preview: ["Awareness Stage", "Consideration Stage", "• • • • •"]
  },
  {
    id: "top-landing-pages",
    title: "Top Landing Pages",
    description: "Most frequently used landing pages and their performance",
    accessLevel: "normal",
    icon: BarChart,
    category: "landing-experience",
    chartData: [
      { name: "/products", value: "42%" },
      { name: "/sale", value: "31%" },
      { name: "/new-arrivals", value: "27%" }
    ]
  },

  // Targeting Insights
  {
    id: "demographics",
    title: "Age & Gender Demographics",
    description: "Detailed breakdown of target audience demographics",
    accessLevel: "normal",
    icon: Users,
    category: "targeting-insights",
    chartData: [
      { name: "25-34", value: "35%" },
      { name: "35-44", value: "28%" },
      { name: "18-24", value: "22%" }
    ]
  },
  {
    id: "interest-targeting",
    title: "Interest Segments",
    description: "Target audience interests and behavioral patterns",
    accessLevel: "locked",
    icon: TrendingUp,
    category: "targeting-insights"
  },

  // Keywords & Search
  {
    id: "top-keywords",
    title: "Top Performing Keywords",
    description: "Highest performing keywords with CPC and volume data",
    accessLevel: "normal",
    icon: BarChart,
    category: "keywords-search",
    chartData: [
      { name: "running shoes", value: "$2.34 CPC" },
      { name: "nike sneakers", value: "$3.12 CPC" },
      { name: "athletic wear", value: "$1.89 CPC" }
    ]
  },
  {
    id: "search-volume",
    title: "Search Volume Analysis",
    description: "Monthly search volumes and trend analysis",
    accessLevel: "samples",
    icon: Users,
    category: "keywords-search",
    preview: ["45K monthly searches", "12% increase MoM", "• • • • •"]
  },

  // Engagement Metrics
  {
    id: "social-engagement",
    title: "Social Media Engagement",
    description: "Likes, shares, comments, and overall engagement rates",
    accessLevel: "normal",
    icon: BarChart,
    category: "engagement-metrics",
    chartData: [
      { name: "Likes", value: "12.4K" },
      { name: "Shares", value: "2.1K" },
      { name: "Comments", value: "847" }
    ]
  },
  {
    id: "engagement-rate",
    title: "Engagement Rate Analysis",
    description: "Detailed engagement performance across platforms",
    accessLevel: "locked",
    icon: TrendingUp,
    category: "engagement-metrics"
  },

  // Competitive Analysis
  {
    id: "top-competitors",
    title: "Top Competitors",
    description: "Main competitive landscape and market positioning",
    accessLevel: "normal",
    icon: BarChart,
    category: "competitive-analysis",
    chartData: [
      { name: "Adidas", value: "23% SOV" },
      { name: "Puma", value: "18% SOV" },
      { name: "Under Armour", value: "15% SOV" }
    ]
  },
  {
    id: "share-of-voice",
    title: "Share of Voice",
    description: "Market share analysis across advertising channels",
    accessLevel: "samples",
    icon: Users,
    category: "competitive-analysis",
    preview: ["Nike: 28%", "Adidas: 23%", "• • • • •"]
  },

  // Trends & Reach
  {
    id: "weekly-trends",
    title: "Week over Week Trends",
    description: "Short-term performance trends and weekly comparisons",
    accessLevel: "normal",
    icon: Calendar,
    category: "trends-reach",
    chartData: [
      { week: "W1", growth: "+12%" },
      { week: "W2", growth: "+8%" },
      { week: "W3", growth: "+15%" }
    ]
  },
  {
    id: "frequency-stats",
    title: "Frequency & Reach",
    description: "Ad frequency and audience reach metrics",
    accessLevel: "locked",
    icon: TrendingUp,
    category: "trends-reach"
  },

  // Technical Tracking
  {
    id: "ab-testing",
    title: "A/B Testing Implementation",
    description: "Testing strategies and experimental approaches",
    accessLevel: "samples",
    icon: Users,
    category: "technical-tracking",
    preview: ["5 Active Tests", "Conversion Focus", "• • • • •"]
  },
  {
    id: "utm-tracking",
    title: "UTM Parameters",
    description: "Campaign tracking and attribution analysis",
    accessLevel: "locked",
    icon: TrendingUp,
    category: "technical-tracking"
  },

  // Distribution & Devices
  {
    id: "world-coverage",
    title: "Global Distribution",
    description: "Worldwide advertising presence and geographic coverage",
    accessLevel: "normal",
    icon: BarChart,
    category: "distribution-devices",
    chartData: [
      { name: "North America", value: "45%" },
      { name: "Europe", value: "32%" },
      { name: "Asia", value: "23%" }
    ]
  },
  {
    id: "device-breakdown",
    title: "Device & Platform Analysis",
    description: "Device targeting and platform performance breakdown",
    accessLevel: "samples",
    icon: Users,
    category: "distribution-devices",
    preview: ["Mobile: 68%", "Desktop: 32%", "• • • • •"]
  }
];

interface FeaturesContentProps {
  selectedCategory: string | null;
  searchQuery: string;
}

export const FeaturesContent = ({ selectedCategory, searchQuery }: FeaturesContentProps) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredFeatures = mockFeatures.filter(feature => {
    const matchesCategory = !selectedCategory || feature.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  if (!selectedCategory && !searchQuery) {
    return (
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="text-center max-w-md">
          <Eye className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Select a Category
          </h3>
          <p className="text-muted-foreground">
            Choose a category from the sidebar to explore AdSpyder's 12 domain-level intelligence categories with detailed visualizations and competitive insights.
          </p>
        </div>
      </div>
    );
  }

  if (filteredFeatures.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="text-center max-w-md">
          <BarChart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No Features Found
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your search or selecting a different category.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8">
      <div className="max-w-6xl mx-auto">
        {selectedCategory && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {selectedCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore domain-level ad intelligence and competitive insights
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <FeatureCard
                feature={feature}
                isHovered={hoveredCard === feature.id}
              />
            </div>
          ))}
        </div>

        {searchQuery && (
          <div className="mt-8 text-center text-muted-foreground">
            Found {filteredFeatures.length} feature{filteredFeatures.length !== 1 ? 's' : ''} matching "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};