import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2, Rocket } from "lucide-react";

const targets = [
  {
    icon: Users,
    title: "Digital Marketers",
    description: "Scale your campaigns efficiently and improve performance metrics across all accounts."
  },
  {
    icon: Building2,
    title: "Marketing Agencies",
    description: "Manage multiple client campaigns with automated optimization and detailed reporting."
  },
  {
    icon: Rocket,
    title: "Entrepreneurs & Startups",
    description: "Maximize limited ad budgets with AI-driven targeting and optimization strategies."
  }
];

export const AIAgentGoogleAdsTarget = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Designed for Marketers, Agencies, and Entrepreneurs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're managing one campaign or hundreds, our AI agent scales with your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {targets.map((target, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                    <target.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {target.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {target.description}
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