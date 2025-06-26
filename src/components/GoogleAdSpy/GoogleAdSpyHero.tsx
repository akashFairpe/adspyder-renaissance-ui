
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Target } from "lucide-react";

export const GoogleAdSpyHero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              <span>Google Ad Spy Tool</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Unveil Every Google Ad Detail <br />
              <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                with Google Ad Spy
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Step into Google Ads with clarity, seeing every element from title to landing page. See ad details and demographics with Google Ad Spy.
            </p>
          </div>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  type="email" 
                  placeholder="Enter email address..."
                  className="pl-10 h-12 text-base border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 h-12 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Started – It's Free
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              No credit card required • 7-day free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
