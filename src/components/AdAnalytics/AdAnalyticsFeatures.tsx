
import { Globe, TrendingUp, Users, MapPin, Clock, Target } from "lucide-react";

export const AdAnalyticsFeatures = () => {
  const features = [
    {
      icon: Globe,
      title: "Domain-Related Analyses",
      description: "In-depth analysis of any domain/URL"
    },
    {
      icon: TrendingUp,
      title: "Track Active Campaigns",
      description: "Real-time data for any domain"
    },
    {
      icon: Target,
      title: "Analyze Total Ads",
      description: "Discover how many ads a domain runs"
    },
    {
      icon: Users,
      title: "Discover Similar Domains",
      description: "Find related advertisers"
    },
    {
      icon: MapPin,
      title: "Ad Distribution by Country",
      description: "Geographic ad spread"
    },
    {
      icon: Clock,
      title: "Day-Hour Cohort Analysis",
      description: "Heatmap of active ad hours"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Does AdSpyder Do for You?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive domain and campaign analysis tools for data-driven marketing decisions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all group border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <feature.icon className="h-8 w-8 text-orange-600" />
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
