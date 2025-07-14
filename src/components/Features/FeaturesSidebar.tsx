import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  Target, 
  TrendingUp, 
  Globe, 
  Calendar,
  Users,
  MessageSquare,
  Eye,
  DollarSign,
  Zap,
  Shield,
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
    id: "analytics",
    name: "Ad Analytics",
    icon: BarChart3,
    features: ["Performance Metrics", "Click Rates", "Conversion Tracking", "ROI Analysis"]
  },
  {
    id: "targeting",
    name: "Audience Targeting",
    icon: Target,
    features: ["Demographics", "Geographic Targeting", "Interest Segments", "Behavioral Data"]
  },
  {
    id: "trends",
    name: "Trend Analysis",
    icon: TrendingUp,
    features: ["Seasonal Trends", "Growth Patterns", "Market Share", "Competitive Trends"]
  },
  {
    id: "networks",
    name: "Ad Networks",
    icon: Globe,
    features: ["Platform Coverage", "Network Performance", "Cross-Platform Analytics", "Channel Mix"]
  },
  {
    id: "timeline",
    name: "Campaign Timeline",
    icon: Calendar,
    features: ["Campaign Duration", "Launch Dates", "Seasonality", "Schedule Optimization"]
  },
  {
    id: "engagement",
    name: "Engagement Metrics",
    icon: Users,
    features: ["Social Shares", "Comments", "Likes", "Engagement Rate"]
  },
  {
    id: "creatives",
    name: "Creative Analysis",
    icon: MessageSquare,
    features: ["Ad Formats", "Creative Variations", "Message Testing", "Design Trends"]
  },
  {
    id: "monitoring",
    name: "Competitive Monitoring",
    icon: Eye,
    features: ["Competitor Tracking", "Market Position", "Share of Voice", "Benchmark Analysis"]
  },
  {
    id: "spend",
    name: "Ad Spend Intelligence",
    icon: DollarSign,
    features: ["Budget Allocation", "Spend Trends", "Cost Analysis", "Investment Patterns"]
  },
  {
    id: "performance",
    name: "Performance Insights",
    icon: Zap,
    features: ["Top Performers", "Success Metrics", "Optimization Tips", "Best Practices"]
  },
  {
    id: "compliance",
    name: "Compliance & Safety",
    icon: Shield,
    features: ["Policy Adherence", "Brand Safety", "Content Moderation", "Risk Assessment"]
  },
  {
    id: "tools",
    name: "Advanced Tools",
    icon: Settings,
    features: ["API Access", "Custom Reports", "Data Export", "Integration Options"]
  }
];

interface FeaturesSidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

export const FeaturesSidebar = ({ selectedCategory, onCategorySelect }: FeaturesSidebarProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
      if (selectedCategory === categoryId) {
        onCategorySelect(null);
      }
    } else {
      newExpanded.add(categoryId);
      onCategorySelect(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div className="w-80 border-r bg-background/50 backdrop-blur-sm p-6 overflow-y-auto">
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
                  isSelected && "bg-primary/10 border-primary/20"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn(
                    "h-5 w-5 transition-colors",
                    isSelected ? "text-primary" : "text-muted-foreground"
                  )} />
                  <span className={cn(
                    "font-medium transition-colors",
                    isSelected ? "text-primary" : "text-foreground"
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