
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const AdvancedFeaturesSection = () => {
  const advancedFeatures = [
    {
      title: "Ad Analysis",
      description: "Discover AdSpyder's Ad Analysis. It helps you understand how ads perform, so you can make smarter advertising choices. Improve your campaigns, beat the competition, and boost your advertising success. Explore the future of ad analytics with AdSpyder.",
      hasButton: true,
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Ad Generation",
      description: "Unlock AdSpyder's Ad Generation. Effortlessly create stunning ads without design skills. Generate attention-grabbing ads, engage your audience, and elevate your advertising efforts. Try AdSpyder's future-ready ad creation today.",
      hasButton: true,
      color: "from-green-50 to-green-100"
    },
    {
      title: "Ad Optimization",
      description: "Explore AdSpyder's Ad Optimization. Elevate ad campaigns using intelligent optimization tools. Achieve better results, save resources, and stay ahead in the ad landscape. Explore the future of ad optimization with AdSpyder.",
      hasButton: true,
      color: "from-purple-50 to-purple-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#fcfdff] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#111827] mb-6">
            Advanced Ad Intelligence Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take your advertising to the next level with our AI-powered tools for analysis, generation, and optimization
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advancedFeatures.map((feature, index) => (
            <Card key={index} className={`bg-gradient-to-br ${feature.color} border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-[#111827] mb-4">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-700 leading-relaxed text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              {feature.hasButton && (
                <CardContent className="text-center">
                  <Button 
                    className="bg-[#e39000] hover:bg-[#e39000]/90 text-white px-6 py-2 font-semibold"
                  >
                    Know more
                  </Button>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
