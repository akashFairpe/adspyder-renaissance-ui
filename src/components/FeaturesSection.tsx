
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Ad Library",
      description: "Have a look at any website or domain with a simple click. Learn about its visitors, how it performs, and stay ahead in the online game.",
      hasButton: false
    },
    {
      title: "PPC Keyword",
      description: "Boost your ads with the best keywords. See what's popular and relevant. With Adspyder, make every penny count.",
      hasButton: false
    },
    {
      title: "Domain Overview",
      description: "Check out any website or domain with a simple click. Learn about its visitors, how it performs, and stay ahead in the online game.",
      hasButton: false
    },
    {
      title: "Landing Page View",
      description: "Have a look at any website or domain with a simple click. Learn about its visitors, how it performs, and stay ahead in the online game.",
      hasButton: true
    },
    {
      title: "Ad Analysis",
      description: "Discover AdSpyder's Ad Analysis. It helps you understand how ads perform, so you can make smarter advertising choices. Improve your campaigns, beat the competition, and boost your advertising success. Explore the future of ad analytics with AdSpyder.",
      hasButton: true
    },
    {
      title: "Ad Research",
      description: "",
      hasButton: false
    },
    {
      title: "Ad Generation",
      description: "Unlock AdSpyder's Ad Generation. Effortlessly create stunning ads without design skills. Generate attention-grabbing ads, engage your audience, and elevate your advertising efforts. Try AdSpyder's future-ready ad creation today.",
      hasButton: true
    },
    {
      title: "Ad Optimization",
      description: "Explore AdSpyder's Ad Optimization. Elevate ad campaigns using intelligent optimization tools. Achieve better results, save resources, and stay ahead in the ad landscape. Explore the future of ad optimization with AdSpyder.",
      hasButton: true
    }
  ];

  return (
    <section className="py-20 bg-[#fcfdff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#111827] mb-6">
            Empower Your Ad Campaigns with AdSpyder
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#111827]">
                  {feature.title}
                </CardTitle>
                {feature.description && (
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                )}
              </CardHeader>
              {feature.hasButton && (
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="border-[#e39000] text-[#e39000] hover:bg-[#e39000] hover:text-white"
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
