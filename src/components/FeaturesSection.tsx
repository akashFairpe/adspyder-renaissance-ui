
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Target, Globe, Eye } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Ad Library",
      description: "Have a look at any website or domain with a simple click. Learn about its visitors, how it performs, and stay ahead in the online game.",
      icon: Search,
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    },
    {
      title: "PPC Keyword",
      description: "Boost your ads with the best keywords. See what's popular and relevant. With Adspyder, make every penny count.",
      icon: Target,
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    },
    {
      title: "Domain Overview",
      description: "Check out any website or domain with a simple click. Learn about its visitors, how it performs, and stay ahead in the online game.",
      icon: Globe,
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    },
    {
      title: "Landing Page View",
      description: "Have a look at any website or domain with a simple click. Learn about its visitors, how it performs, and stay ahead in the online game.",
      icon: Eye,
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
              🎯 Core Features
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empower Your Ad Campaigns with AdSpyder
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className={`bg-gradient-to-br ${feature.bgGradient} border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}>
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-gray-900">
                  {feature.title}
                </CardTitle>
                {feature.description && (
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                )}
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
