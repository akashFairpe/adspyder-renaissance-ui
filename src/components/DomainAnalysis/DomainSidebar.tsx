import { useState } from "react";
import { 
  Globe, 
  Image, 
  MessageSquare, 
  TrendingUp, 
  MousePointer, 
  Target, 
  Search, 
  Heart, 
  Users, 
  BarChart3, 
  Code, 
  Smartphone,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const categories = [
  { 
    id: "domain-overview", 
    label: "Domain Overview", 
    icon: Globe,
    features: ["Basic Info", "Platform Analysis", "Geographic Data"]
  },
  { 
    id: "ad-creatives", 
    label: "Ad Creatives", 
    icon: Image,
    features: ["Text Ads", "Display Ads", "Video Ads", "Creative Analysis"]
  },
  { 
    id: "messaging", 
    label: "Messaging", 
    icon: MessageSquare,
    features: ["Headlines", "CTAs", "Ad Copy", "Sentiment Analysis"]
  },
  { 
    id: "performance-timeline", 
    label: "Performance Timeline", 
    icon: TrendingUp,
    features: ["Activity Timeline", "Spend Estimation", "Campaign Duration"]
  },
  { 
    id: "landing-experience", 
    label: "Landing Experience", 
    icon: MousePointer,
    features: ["Landing Pages", "Conversion Funnels", "User Journey"]
  },
  { 
    id: "targeting-insights", 
    label: "Targeting Insights", 
    icon: Target,
    features: ["Demographics", "Interests", "Behaviors", "Locations"]
  },
  { 
    id: "keywords-search", 
    label: "Keywords & Search", 
    icon: Search,
    features: ["Keyword Analysis", "Search Terms", "CPC Data", "Position Tracking"]
  },
  { 
    id: "engagement-metrics", 
    label: "Engagement Metrics", 
    icon: Heart,
    features: ["Social Engagement", "Interaction Rates", "Viral Potential"]
  },
  { 
    id: "competitive-analysis", 
    label: "Competitive Analysis", 
    icon: Users,
    features: ["Competitor Insights", "Market Share", "Benchmarking"]
  },
  { 
    id: "trends-reach", 
    label: "Trends & Reach", 
    icon: BarChart3,
    features: ["Reach Analysis", "Frequency Data", "Trend Patterns"]
  },
  { 
    id: "technical-tracking", 
    label: "Technical Tracking", 
    icon: Code,
    features: ["Tracking Pixels", "UTM Parameters", "Analytics Setup"]
  },
  { 
    id: "distribution-devices", 
    label: "Distribution & Devices", 
    icon: Smartphone,
    features: ["Device Breakdown", "Publisher Networks", "Geographic Distribution"]
  },
];

interface DomainSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const DomainSidebar = ({ activeSection, onSectionChange }: DomainSidebarProps) => {
  const [openCategories, setOpenCategories] = useState<string[]>([activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onSectionChange(sectionId);
  };

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="w-full lg:w-80 bg-white rounded-lg shadow-sm border border-gray-200 lg:h-full lg:overflow-hidden lg:flex lg:flex-col">
      <div className="p-6 border-b border-gray-200 hidden lg:block lg:flex-shrink-0">
        <h3 className="text-lg font-semibold text-gray-900">Analysis Categories</h3>
      </div>
      <ScrollArea className="lg:flex-1 max-h-96 lg:max-h-none">
        <nav className="p-4 space-y-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeSection === category.id;
            const isOpen = openCategories.includes(category.id);
            
            return (
              <Collapsible
                key={category.id}
                open={isOpen}
                onOpenChange={() => toggleCategory(category.id)}
              >
                <CollapsibleTrigger asChild>
                  <button
                    className={cn(
                      "w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 hover:bg-gray-50",
                      isActive 
                        ? "bg-primary/10 text-primary border border-primary/20" 
                        : "text-gray-700 hover:text-gray-900"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium text-sm">{category.label}</span>
                    </div>
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-2">
                  <div className="ml-8 space-y-1">
                    {category.features.map((feature, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(category.id)}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/10 rounded transition-colors"
                      >
                        {feature}
                      </button>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
};