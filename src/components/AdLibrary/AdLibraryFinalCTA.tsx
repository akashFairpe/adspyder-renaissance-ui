
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Target } from "lucide-react";

export const AdLibraryFinalCTA = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              <span>Start Your Free Trial</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Supercharge Your Ad Campaigns with Ad Library
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              No credit card required. Start your free trial today and discover what your competitors are doing.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 h-12 text-base border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 h-12 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Join 50,000+ marketers using AdSpyder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
