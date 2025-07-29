import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Link, Target, Bot, CheckCircle, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Link,
    title: "Connect Your Ad Account",
    description: "Securely connect your Google Ads account with one-click authorization.",
    step: "01"
  },
  {
    icon: Target,
    title: "Select Campaign Goals", 
    description: "Define your objectives: conversions, traffic, brand awareness, or leads.",
    step: "02"
  },
  {
    icon: Bot,
    title: "Let the AI Do the Work",
    description: "Our AI agent creates campaigns, selects keywords, and writes ad copy.",
    step: "03"
  },
  {
    icon: CheckCircle,
    title: "Review & Approve",
    description: "Preview and approve AI-generated campaigns before they go live.",
    step: "04"
  },
  {
    icon: BarChart3,
    title: "Monitor with Live Analytics",
    description: "Track performance and let AI make real-time optimizations.",
    step: "05"
  }
];

export const AIAgentGoogleAdsWorkflow = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From setup to optimization, our AI agent handles the complex work so you can focus on strategy.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            Step {step.step}
                          </span>
                          <h3 className="text-xl font-semibold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                      
                      {index < steps.length - 1 && (
                        <div className="flex-shrink-0">
                          <ArrowRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="w-px h-8 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};