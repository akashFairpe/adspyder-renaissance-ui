import { Card, CardContent } from "@/components/ui/card";
import { Target, DollarSign, Users, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Find high-intent buyers",
    description: "Target prospects actively searching for properties in your area with precision demographic and behavioral targeting.",
    visual: "🎯"
  },
  {
    icon: DollarSign,
    title: "Reduce marketing cost",
    description: "Eliminate wasted ad spend with AI-optimized campaigns that focus budget on the most promising leads.",
    visual: "💰"
  },
  {
    icon: Users,
    title: "Engage across channels",
    description: "Reach potential buyers through Facebook, Google, email, and direct outreach with consistent messaging.",
    visual: "📱"
  },
  {
    icon: TrendingUp,
    title: "Stay ahead of competitors",
    description: "Monitor competitor listings and pricing strategies to position your properties for maximum market appeal.",
    visual: "🚀"
  }
];

export const AIAgentRealEstateBenefits = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Transform Your Real Estate Marketing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leverage AI to work smarter, not harder, and close more deals with less effort.
          </p>
        </div>
        
        <div className="space-y-12">
          {benefits.map((benefit, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <Card className="bg-card/50 border-none shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-4">{benefit.visual}</div>
                    <div className="h-2 bg-primary/20 rounded-full">
                      <div className="h-2 bg-primary rounded-full" style={{ width: `${80 + index * 5}%` }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Real Estate Performance</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};