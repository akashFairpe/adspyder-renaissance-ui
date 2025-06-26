
import { BarChart3, MapPin, Clock, ArrowUpDown, Camera, Database } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const GoogleAdSpyLibrary = () => {
  const features = [
    {
      id: "serp-analysis",
      icon: BarChart3,
      title: "SERP Analysis",
      description: "See ads as they appear to users in Google search"
    },
    {
      id: "location-filter",
      icon: MapPin,
      title: "Location Filter",
      description: "Filter by country to view regional ad targeting"
    },
    {
      id: "historical-analysis",
      icon: Clock,
      title: "Historical Analysis",
      description: "Use date filters to view ad trends and campaign lifecycles"
    },
    {
      id: "efficient-sorting",
      icon: ArrowUpDown,
      title: "Efficient Sorting",
      description: "Sort by newest, most relevant, or oldest ads"
    },
    {
      id: "landing-page-view",
      icon: Camera,
      title: "Landing Page View",
      description: "Screenshots of landing pages give post-click insight"
    },
    {
      id: "ad-library",
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
        
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="serp-analysis" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              {features.map((feature) => (
                <TabsTrigger 
                  key={feature.id} 
                  value={feature.id}
                  className="flex flex-col items-center gap-2 p-4 h-auto"
                >
                  <feature.icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{feature.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                      <feature.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="aspect-video bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <feature.icon className="h-8 w-8 text-orange-600" />
                        </div>
                        <p className="text-gray-600 font-medium">Feature GIF</p>
                        <p className="text-sm text-gray-500 mt-1">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
