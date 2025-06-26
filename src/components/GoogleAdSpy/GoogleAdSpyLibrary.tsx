
import { BarChart3, MapPin, Clock, ArrowUpDown, Camera, Database } from "lucide-react";

export const GoogleAdSpyLibrary = () => {
  const features = [
    {
      icon: BarChart3,
      title: "SERP Analysis",
      description: "See ads as they appear to users in Google search"
    },
    {
      icon: MapPin,
      title: "Location Filter",
      description: "Filter by country to view regional ad targeting"
    },
    {
      icon: Clock,
      title: "Historical Analysis",
      description: "Use date filters to view ad trends and campaign lifecycles"
    },
    {
      icon: ArrowUpDown,
      title: "Efficient Sorting",
      description: "Sort by newest, most relevant, or oldest ads"
    },
    {
      icon: Camera,
      title: "Landing Page View",
      description: "Screenshots of landing pages give post-click insight"
    },
    {
      icon: Database,
      title: "Ad Library",
      description: "Access metadata like title, image, last seen, and more"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Dive Into Competitors' Google Ad Strategies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive analysis tools to understand your competition's Google advertising approach
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-orange-50 transition-all group-hover:shadow-lg border border-gray-100">
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors shadow-sm">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
