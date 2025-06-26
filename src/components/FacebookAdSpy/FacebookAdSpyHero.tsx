
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const FacebookAdSpyHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Uncover Winning Strategies with the Ultimate{" "}
            <span className="text-blue-200">Facebook Ad Spy Tool</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Explore top-performing campaigns with AdSpyder's powerful Facebook Ad Spy and Meta Ad Spy tools. 
            Track competitors' ads, creatives, and targeting to fuel your own ad success.
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  type="email" 
                  placeholder="Enter email address..."
                  className="pl-10 h-12 text-base bg-white border-white text-gray-900"
                />
              </div>
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
              >
                Get Started – It's Free
              </Button>
            </div>
          </div>
          
          <p className="text-blue-200 text-sm">
            No credit card required • 7-day free trial • Setup in under 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
};
