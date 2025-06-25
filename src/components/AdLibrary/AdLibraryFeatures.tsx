
import { Database, Zap, TrendingUp, Eye, Filter, Bookmark } from "lucide-react";

export const AdLibraryFeatures = () => {
  const features = [
    {
      icon: Database,
      title: "Vast Ad Repository",
      description: "1B+ ad copies powered by AI across all major advertising platforms"
    },
    {
      icon: Zap,
      title: "Ad Copy Insights",
      description: "Break down ads by 30+ parameters including performance metrics and targeting"
    },
    {
      icon: TrendingUp,
      title: "Stay Up to Date",
      description: "Real-time updates via tracking to monitor campaign changes instantly"
    },
    {
      icon: Eye,
      title: "Ad Inspiration",
      description: "View ads as your audience sees them with authentic ad previews"
    },
    {
      icon: Filter,
      title: "Custom Search Filters",
      description: "Advanced sorting, saving, and tracking with powerful filter options"
    },
    {
      icon: Bookmark,
      title: "Save & Organize",
      description: "Create collections of winning ads and track competitor strategies"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Product Feature Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to spy on competitors and optimize your ad campaigns
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
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
