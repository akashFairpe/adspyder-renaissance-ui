
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Settings, Database, ArrowRight, CheckCircle } from "lucide-react";

export const AdvancedFeaturesSection = () => {
  const features = [
    {
      title: "Ad Library",
      description: "Access a rich archive of real-time ad creatives as seen by actual audiences, across platforms and regions.",
      icon: Database,
      popularFeatures: [
        "Multi-platform ad search",
        "Text & domain-based filtering",
        "Competitor ad tracking"
      ],
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200"
    },
    {
      title: "Ad Analysis",
      description: "Unlock detailed performance metrics for competitor ads to guide data-driven campaign strategies.",
      icon: TrendingUp,
      popularFeatures: [
        "CTR & engagement insights",
        "Conversion tracking",
        "Ad spend breakdowns"
      ],
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200"
    },
    {
      title: "Ad Generation",
      description: "Use AI-powered tools to craft compelling ad creatives that resonate and convert.",
      icon: Zap,
      popularFeatures: [
        "AI copywriting assistant",
        "Multiple copy variations",
        "Instant ad previews"
      ],
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200"
    },
    {
      title: "Ad Optimization",
      description: "Boost campaign results with smart A/B testing and automated performance recommendations.",
      icon: Settings,
      popularFeatures: [
        "Intelligent A/B testing",
        "Performance alerts",
        "ROI optimization suggestions"
      ],
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-full">
              🚀 Advanced Tools
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Next-Level Ad Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take your advertising strategy to the next level with our advanced AI-powered tools designed for professional marketers and agencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className={`bg-white border-2 ${feature.borderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden`}>
              <CardHeader className="relative z-10 pb-4">
                <div className={`w-16 h-16 mb-4 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 mb-3">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed text-base mb-6">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Popular Features</h4>
                  <ul className="space-y-2">
                    {feature.popularFeatures.map((featureName, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                        {featureName}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group/btn border-orange-200 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
