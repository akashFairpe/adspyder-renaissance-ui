
import { Database, Zap, Link, BarChart, Star, TrendingUp } from "lucide-react";

export const VsAdplexityFeatures = () => {
  const features = [
    {
      icon: Database,
      title: "Ad Database",
      description: "Tap into over 1 billion ad copies from 15+ platforms—giving you unmatched insight into global advertising trends."
    },
    {
      icon: Zap,
      title: "Ad Generation",
      description: "Quickly generate high-performing ads using AI-powered tools—both text and image formats included."
    },
    {
      icon: Link,
      title: "Landing Page-Ad Copy Relationship",
      description: "Visualize how landing pages align with ad copy to improve messaging and conversions."
    },
    {
      icon: BarChart,
      title: "Ad Analysis",
      description: "Perform AI-powered analysis including funnel tracking, competitor insights, and keyword analytics."
    },
    {
      icon: Star,
      title: "Ad Content Analysis",
      description: "Evaluate ad copy quality with 30+ AI metrics to ensure your messaging hits the mark."
    },
    {
      icon: TrendingUp,
      title: "Visualize Funnel Performance",
      description: "Understand the full buyer journey using intuitive, interactive funnel visualizations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            AdSpyder Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the cutting-edge features that make AdSpyder the ultimate tool for ad intelligence and campaign optimization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all group border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <feature.icon className="h-8 w-8 text-orange-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
