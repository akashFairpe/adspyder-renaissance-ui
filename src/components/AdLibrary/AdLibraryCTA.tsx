
import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";

export const AdLibraryCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Marketing Strategy?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who use AdSpyder to spy on competitors and optimize their campaigns
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Play className="h-5 w-5 mr-2" />
              Get Started – It's Free
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book a Demo
            </Button>
          </div>
          
          <p className="text-orange-200 text-sm mt-4">
            No credit card required • 7-day free trial • Setup in under 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
};
