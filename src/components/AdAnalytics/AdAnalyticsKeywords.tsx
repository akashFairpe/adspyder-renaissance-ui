
import { Search, BarChart, Users, MapPin, Clock, Target, DollarSign } from "lucide-react";

export const AdAnalyticsKeywords = () => {
  const features = [
    {
      icon: Search,
      title: "Track Keyword Campaigns",
      description: "Monitor campaigns using specific keywords"
    },
    {
      icon: BarChart,
      title: "Total Ads by Keyword",
      description: "Measure keyword usage in ads"
    },
    {
      icon: Users,
      title: "Find Similar Domains",
      description: "For shared keyword targeting"
    },
    {
      icon: MapPin,
      title: "Keyword Distribution by Country",
      description: "Regional performance insights"
    },
    {
      icon: Clock,
      title: "Day-Hour Keyword Trends",
      description: "Schedule by keyword timing"
    },
    {
      icon: Target,
      title: "Keyword Platform Distribution",
      description: "See where keywords are used"
    },
    {
      icon: DollarSign,
      title: "Search Volume + CPC",
      description: "Full keyword metric suite"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Keyword Analytics Section
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced keyword tracking and analysis across all major advertising platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all group border border-gray-100">
              <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                <feature.icon className="h-7 w-7 text-orange-600" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
