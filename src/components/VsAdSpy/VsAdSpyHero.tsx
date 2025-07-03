
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";

export const VsAdSpyHero = () => {
  const platforms = ["Google", "Meta", "Bing", "Amazon", "LinkedIn", "Reddit"];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              <span>Supports 15+ digital ad platforms, 100+ countries</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AdSpyder vs. AdSpy: <br />
              <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                The Battle for Ad Dominance
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore why AdSpyder stands out as the ultimate choice for advertisers compared to AdSpy. See how robust ad tracking, AI-powered content analysis, and a user-friendly interface make AdSpyder the superior choice for your ad strategy.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold"
            >
              Book Demo
            </Button>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-3">Supported Platforms:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((platform, index) => (
                <span 
                  key={index}
                  className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                >
                  {platform}
                </span>
              ))}
              <span className="bg-orange-100 border border-orange-200 px-4 py-2 rounded-full text-sm font-medium text-orange-700">
                + more
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
