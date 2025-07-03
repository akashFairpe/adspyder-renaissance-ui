
import { Database, Zap, Link, BarChart, Star, Target } from "lucide-react";

export const VsPowerAdSpyFeatures = () => {
  const features = [
    {
      icon: Database,
      title: "Ad Database",
      description: "Access a vast collection of over 1 billion ad copies from 15+ platforms, giving you unparalleled insights and a comprehensive view of the advertising landscape."
    },
    {
      icon: Zap,
      title: "Ad Generation",
      description: "Utilize AI-powered tools to generate high-performing text and image ads effortlessly."
    },
    {
      icon: Link,
      title: "Landing Page-Ad Copy Relationship",
      description: "Understand how landing pages align with ad creatives for better funnel optimization."
    },
    {
      icon: BarChart,
      title: "Ad Analysis",
      description: "Leverage advanced analytics—funnel, keyword, competitor analysis—all AI-driven."
    },
    {
      icon: Star,
      title: "Ad Content Analysis",
      description: "Rank ad copies across 30+ parameters using performance and creative scoring."
    },
    {
      icon: Target,
      title: "Ad Tracking",
      description: "Monitor real-time changes to competitor campaigns, keywords, and ad copy."
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
