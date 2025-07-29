import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Facebook, Mail, Zap } from "lucide-react";

const relatedTools = [
  {
    icon: Search,
    title: "AI Agent for Keyword Research",
    description: "Discover profitable real estate keywords and location-based search terms.",
    link: "/ai-agent-for-keywords"
  },
  {
    icon: Facebook,
    title: "AI Agent for Google Ads",
    description: "Automate Google Ads campaigns specifically for property marketing.",
    link: "/ai-agent-for-google-ads"
  },
  {
    icon: Mail,
    title: "AI Agent for Email",
    description: "Create automated email sequences for lead nurturing and client retention.",
    link: "/ai-agent-for-email"
  },
  {
    icon: Zap,
    title: "AI Agent for Automation",
    description: "Connect all your real estate tools with intelligent workflow automation.",
    link: "/ai-agent-for-automation"
  }
];

export const AIAgentRealEstateRelated = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore the Tools Inside This Agent
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the individual AI agents that power your real estate marketing automation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedTools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto flex items-center justify-center">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {tool.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};