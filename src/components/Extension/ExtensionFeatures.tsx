import { Card, CardContent } from "@/components/ui/card";
import { Eye, Zap, Shield, Target, Globe, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Spy Ads from Any Domain",
    description: "Instantly see what ads any website is running across all major platforms and networks."
  },
  {
    icon: Zap,
    title: "One-Click Analysis",
    description: "Analyze ad creatives, placements, and performance metrics with a single click."
  },
  {
    icon: Globe,
    title: "Multi-Platform Support",
    description: "Supports Google, Facebook, Instagram, YouTube, LinkedIn, Twitter, and 20+ ad networks."
  },
  {
    icon: Target,
    title: "Targeting Insights",
    description: "Discover audience targeting, demographics, and geographic data for any ad campaign."
  },
  {
    icon: BarChart3,
    title: "Performance Metrics",
    description: "Access engagement rates, spend estimates, and ad performance data in real-time."
  },
  {
    icon: Shield,
    title: "Privacy-Focused",
    description: "Lightweight, fast, and secure. No personal data collection or invasive tracking."
  }
];

export const ExtensionFeatures = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features in Your Browser
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to analyze competitor ads without leaving your browser
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};