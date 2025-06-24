
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Zap, Settings } from "lucide-react";

export const AdvancedFeaturesSection = () => {
  const features = [
    {
      title: "Ad Analysis",
      description: "Deep dive into competitor ad performance with advanced analytics. Get insights into CTR, engagement rates, and conversion metrics to optimize your campaigns.",
      icon: TrendingUp,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200"
    },
    {
      title: "Ad Generation",
      description: "Create high-converting ad copies using AI-powered tools. Generate multiple variations, test different approaches, and find your winning formula.",
      icon: Zap,
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      borderColor: "border-violet-200"
    },
    {
      title: "Ad Optimization",
      description: "Continuously improve your ad performance with intelligent optimization suggestions. Automate A/B testing and maximize your advertising ROI.",
      icon: Settings,
      gradient: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50",
      borderColor: "border-rose-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full">
              🚀 Advanced Tools
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
            Next-Level Ad Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take your advertising strategy to the next level with our advanced AI-powered tools designed for professional marketers and agencies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className={`bg-gradient-to-br ${feature.bgGradient} border-2 ${feature.borderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden`}>
              {/* Decorative element */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500`}></div>
              
              <CardHeader className="relative z-10">
                <div className={`w-20 h-20 mb-6 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 mb-4">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
