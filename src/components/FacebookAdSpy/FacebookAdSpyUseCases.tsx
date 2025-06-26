
import { Search, Target, Filter, Lightbulb, Clock, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const FacebookAdSpyUseCases = () => {
  const useCases = [
    {
      id: "market-knowledge",
      icon: Search,
      title: "Market Knowledge",
      description: "See ads from the user's perspective and understand competitor positioning."
    },
    {
      id: "ad-insights",
      icon: Target,
      title: "Ad Insights",
      description: "Uncover details like targeting country, page name, and demographics."
    },
    {
      id: "ad-exploration",
      icon: Filter,
      title: "Ad Exploration",
      description: "Use filters to quickly find and compare relevant campaigns."
    },
    {
      id: "ad-inspiration",
      icon: Lightbulb,
      title: "Ad Inspiration",
      description: "Browse creative variations to spark fresh ideas."
    },
    {
      id: "decision-making",
      icon: Clock,
      title: "Decision Making",
      description: "Sort ads by date to act on time-sensitive trends."
    },
    {
      id: "campaign-relevance",
      icon: CheckCircle,
      title: "Campaign Relevance",
      description: "Ensure your ads align with what's live in the market."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            From Market Knowledge to Decision Making—Use Facebook Ad Spy Your Way
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive analysis tools to understand your competition's Facebook advertising approach
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="market-knowledge" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              {useCases.map((useCase) => (
                <TabsTrigger 
                  key={useCase.id} 
                  value={useCase.id}
                  className="flex flex-col items-center gap-2 p-4 h-auto"
                >
                  <useCase.icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{useCase.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                      <useCase.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {useCase.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {useCase.description}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="aspect-video bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <useCase.icon className="h-8 w-8 text-orange-600" />
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
