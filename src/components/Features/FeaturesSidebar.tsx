import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { 
  Globe2, 
  Image, 
  MessageSquare, 
  BarChart3, 
  MousePointer,
  Target,
  Search,
  Users,
  TrendingUp,
  Cpu,
  Monitor,
  Settings
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: any;
  features: string[];
}

const categories: Category[] = [
  {
    id: "domain-overview",
    name: "Domain Overview",
    icon: Globe2,
    features: ["Domain URL", "Brand Information", "Industry Classification", "Countries Active"]
  },
  {
    id: "ad-creatives",
    name: "Ad Creatives",
    icon: Image,
    features: ["Text Ads", "Image Ads", "Video Ads", "Creative Formats"]
  },
  {
    id: "messaging",
    name: "Messaging",
    icon: MessageSquare,
    features: ["Top CTAs", "Headlines", "Ad Titles", "Message Analysis"]
  },
  {
    id: "performance-timeline",
    name: "Performance Timeline",
    icon: BarChart3,
    features: ["Ad Activity Over Time", "Estimated Spend", "Campaign Duration", "Peak Periods"]
  },
  {
    id: "landing-experience",
    name: "Landing Experience",
    icon: MousePointer,
    features: ["Funnel Stages", "Top Landing Pages", "User Journey", "Conversion Path"]
  },
  {
    id: "targeting-insights",
    name: "Targeting Insights",
    icon: Target,
    features: ["Age Demographics", "Gender Split", "Interest Targeting", "Location Heatmap"]
  },
  {
    id: "keywords-search",
    name: "Keywords & Search",
    icon: Search,
    features: ["Top Keywords", "CPC Data", "Search Volume", "Position Tracking"]
  },
  {
    id: "engagement-metrics",
    name: "Engagement Metrics",
    icon: Users,
    features: ["Likes & Shares", "Comments", "Engagement Rate", "Social Performance"]
  },
  {
    id: "competitive-analysis",
    name: "Competitive Analysis",
    icon: TrendingUp,
    features: ["Top Competitors", "Share of Voice", "Market Position", "Competitive Benchmarks"]
  },
  {
    id: "trends-reach",
    name: "Trends & Reach",
    icon: BarChart3,
    features: ["Week over Week", "Month over Month", "Frequency Stats", "Reach Analysis"]
  },
  {
    id: "technical-tracking",
    name: "Technical Tracking",
    icon: Cpu,
    features: ["A/B Testing", "UTM Parameters", "Tracking Pixels", "Technical Implementation"]
  },
  {
    id: "distribution-devices",
    name: "Distribution & Devices",
    icon: Monitor,
    features: ["World Map Coverage", "Device Breakdown", "Ad Schedule", "Publisher Presence"]
  }
];

interface FeaturesSidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

export const FeaturesSidebar = ({ selectedCategory, onCategorySelect }: FeaturesSidebarProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const headerOffset = 120; // Account for sticky header and padding
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
      scrollToCategory(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div className="w-80 border-r bg-background/50 backdrop-blur-sm p-6 overflow-y-auto sticky top-16 h-[calc(100vh-4rem)]">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-foreground mb-4">Feature Categories</h2>
        
        {categories.map((category) => {
          const isExpanded = expandedCategories.has(category.id);
          const isSelected = selectedCategory === category.id;
          const Icon = category.icon;

          return (
            <Card key={category.id} className="overflow-hidden">
              <button
                onClick={() => toggleCategory(category.id)}
                className={cn(
                  "w-full p-4 flex items-center justify-between text-left transition-colors hover:bg-muted/50",
                  selectedCategory === category.id && "bg-primary/10 border-primary/20"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn(
                    "h-5 w-5 transition-colors",
                    selectedCategory === category.id ? "text-primary" : "text-muted-foreground"
                  )} />
                  <span className={cn(
                    "font-medium transition-colors",
                    selectedCategory === category.id ? "text-primary" : "text-foreground"
                  )}>
                    {category.name}
                  </span>
                </div>
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform" />
                )}
              </button>

              {isExpanded && (
                <div className="border-t bg-muted/20 animate-accordion-down">
                  <div className="p-2 space-y-1">
                    {category.features.map((feature, index) => (
                      <button
                        key={index}
                        className="w-full text-left text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 p-2 rounded transition-colors"
                      >
                        {feature}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};