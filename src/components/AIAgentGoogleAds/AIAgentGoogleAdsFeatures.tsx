import { Card, CardContent } from "@/components/ui/card";
import { Search, Brain, DollarSign, BarChart3, TestTube2, Clock } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "AI-Powered Keyword Suggestions",
    description: "Discover high-performing keywords using competitive intelligence and search volume data."
  },
  {
    icon: Brain,
    title: "Automated Ad Copy Generation", 
    description: "Generate compelling ad copy variations that convert, based on your industry and audience."
  },
  {
    icon: DollarSign,
    title: "Real-Time Budget Optimization",
    description: "Automatically adjust bids and budgets to maximize ROI across all your campaigns."
  },
  {
    icon: BarChart3,
    title: "Competitor Ad Tracking",
    description: "Monitor competitor campaigns and automatically adapt your strategy to stay ahead."
  },
  {
    icon: TestTube2,
    title: "A/B Testing Insights",
    description: "Run sophisticated tests and get actionable insights to improve performance."
  },
  {
    icon: Clock,
    title: "Campaign Scheduling with Smart Timing",
    description: "Launch campaigns at optimal times based on audience behavior and historical data."
  }
];

export const AIAgentGoogleAdsFeatures = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Smart Features to Power Your Google Ads Strategy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create, optimize, and scale successful Google Ads campaigns with AI automation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
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