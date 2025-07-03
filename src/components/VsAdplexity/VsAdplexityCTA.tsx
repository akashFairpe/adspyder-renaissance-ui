
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const VsAdplexityCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Start Free Trial
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            No credit card required
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  type="email" 
                  placeholder="Enter email address..."
                  className="pl-10 h-12 text-base bg-white border-white"
                />
              </div>
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Started – It's Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
