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
  Smartphone 
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "domain-overview", label: "Domain Overview", icon: Globe },
  { id: "ad-creatives", label: "Ad Creatives", icon: Image },
  { id: "messaging", label: "Messaging", icon: MessageSquare },
  { id: "performance-timeline", label: "Performance Timeline", icon: TrendingUp },
  { id: "landing-experience", label: "Landing Experience", icon: MousePointer },
  { id: "targeting-insights", label: "Targeting Insights", icon: Target },
  { id: "keywords-search", label: "Keywords & Search", icon: Search },
  { id: "engagement-metrics", label: "Engagement Metrics", icon: Heart },
  { id: "competitive-analysis", label: "Competitive Analysis", icon: Users },
  { id: "trends-reach", label: "Trends & Reach", icon: BarChart3 },
  { id: "technical-tracking", label: "Technical Tracking", icon: Code },
  { id: "distribution-devices", label: "Distribution & Devices", icon: Smartphone },
];

interface DomainSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const DomainSidebar = ({ activeSection, onSectionChange }: DomainSidebarProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onSectionChange(sectionId);
  };

  return (
    <div className="w-80 bg-card rounded-lg p-6 shadow-sm border h-fit sticky top-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">Analysis Categories</h3>
      <nav className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeSection === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => scrollToSection(category.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 hover:bg-accent/50",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">{category.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};