
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Target } from "lucide-react";

export const FacebookAdSpyHero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Target className="h-4 w-4" />
                <span>Facebook Ad Spy Tool</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Uncover Winning Strategies with the Ultimate{" "}
                <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                  Facebook Ad Spy Tool
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Explore top-performing campaigns with AdSpyder's powerful Facebook Ad Spy and Meta Ad Spy tools. 
                Track competitors' ads, creatives, and targeting to fuel your own ad success.
              </p>
            </div>
            
            <div className="max-w-md mx-auto lg:mx-0 mb-8">
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
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-orange-50 to-gray-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-10 w-10 text-orange-600" />
                  </div>
                  <p className="text-gray-600 font-medium">Product Screenshot</p>
                  <p className="text-sm text-gray-500 mt-1">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
