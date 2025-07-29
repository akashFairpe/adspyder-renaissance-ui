import { Card, CardContent } from "@/components/ui/card";
import { Search, PenTool, Facebook, Mail, Globe, BarChart3 } from "lucide-react";

const tools = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Find high-intent real estate keywords and location-based search terms."
  },
  {
    icon: PenTool,
    title: "Ad Copy Generation", 
    description: "Create compelling property descriptions and ad copy that converts."
  },
  {
    icon: Facebook,
    title: "Facebook & Google Ads Integration",
    description: "Launch targeted campaigns across major advertising platforms."
  },
  {
    icon: Mail,
    title: "Email Outreach",
    description: "Automated lead nurturing sequences for prospects and past clients."
  },
  {
    icon: Globe,
    title: "Landing Page Suggestions",
    description: "Optimize property pages and lead capture forms for conversions."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track leads, conversions, and ROI across all marketing channels."
  }
];

export const AIAgentRealEstateTools = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything You Need—In One Smart Agent
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete real estate marketing automation with tools designed specifically for property professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {tool.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};