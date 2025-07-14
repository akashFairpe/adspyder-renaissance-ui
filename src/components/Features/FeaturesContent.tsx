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
  {
    id: "performance-metrics",
    title: "Performance Metrics",
    description: "Comprehensive ad performance analytics including CTR, conversion rates, and engagement metrics",
    accessLevel: "normal",
    icon: BarChart,
    category: "analytics",
    chartData: [
      { name: "CTR", value: 2.3, change: "+12%" },
      { name: "CVR", value: 4.1, change: "+8%" },
      { name: "ROAS", value: 3.2, change: "+15%" }
    ]
  },
  {
    id: "audience-insights",
    title: "Audience Demographics",
    description: "Detailed audience breakdown by age, gender, location, and interests",
    accessLevel: "samples",
    icon: Users,
    category: "targeting",
    preview: ["Ages 25-34 (35%)", "Ages 35-44 (28%)", "• • • • •"]
  },
  {
    id: "trend-analysis",
    title: "Seasonal Trends",
    description: "Track ad performance across different seasons and identify peak periods",
    accessLevel: "locked",
    icon: TrendingUp,
    category: "trends"
  },
  {
    id: "campaign-timeline",
    title: "Campaign Duration Analysis",
    description: "Monitor campaign lifecycles and optimize timing strategies",
    accessLevel: "normal",
    icon: Calendar,
    category: "timeline",
    chartData: [
      { month: "Jan", campaigns: 45 },
      { month: "Feb", campaigns: 52 },
      { month: "Mar", campaigns: 38 }
    ]
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
            Choose a feature category from the sidebar to explore AdSpyder's powerful domain-level insights and analytics.
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
              {mockFeatures.find(f => f.category === selectedCategory)?.category.charAt(0).toUpperCase() + 
               mockFeatures.find(f => f.category === selectedCategory)?.category.slice(1) || "Features"}
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore advanced analytics and insights for this category
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