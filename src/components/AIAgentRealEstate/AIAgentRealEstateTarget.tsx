import { Card, CardContent } from "@/components/ui/card";
import { User, Building2, Globe, TrendingUp } from "lucide-react";

const targets = [
  {
    icon: User,
    title: "Independent Realtors",
    description: "Solo agents looking to scale their marketing and generate more qualified leads automatically."
  },
  {
    icon: Building2,
    title: "Property Agencies",
    description: "Real estate firms managing multiple agents and properties with centralized marketing campaigns."
  },
  {
    icon: Globe,
    title: "Real Estate Platforms",
    description: "Online property portals and listing websites driving traffic to property listings."
  },
  {
    icon: TrendingUp,
    title: "Marketers in Housing Sector",
    description: "Marketing professionals specializing in real estate, property development, and housing services."
  }
];

export const AIAgentRealEstateTarget = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built for:
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're selling one property or thousands, our AI scales with your real estate business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((target, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
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