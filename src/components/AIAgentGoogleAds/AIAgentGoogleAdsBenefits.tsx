import { Card, CardContent } from "@/components/ui/card";
import { Clock, Zap, Target, Settings } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Launch campaigns in minutes, not hours",
    description: "Skip the manual setup process. Our AI agent creates optimized campaigns from your brief in just a few clicks.",
    visual: "⚡"
  },
  {
    icon: Zap,
    title: "Reduce ad spend waste",
    description: "Eliminate underperforming keywords and placements automatically with continuous optimization.",
    visual: "💰"
  },
  {
    icon: Target,
    title: "Optimize for ROAS automatically",
    description: "Let AI adjust bids, budgets, and targeting to maximize your return on ad spend 24/7.",
    visual: "📈"
  },
  {
    icon: Settings,
    title: "Integrate with your existing tools",
    description: "Connect seamlessly with Google Ads, Analytics, CRM systems, and other marketing tools.",
    visual: "🔧"
  }
];

export const AIAgentGoogleAdsBenefits = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Use an AI Agent for Google Ads?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your advertising workflow with intelligent automation that delivers measurable results.
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
                      <div className="h-2 bg-primary rounded-full" style={{ width: `${75 + index * 5}%` }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Performance Improvement</p>
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