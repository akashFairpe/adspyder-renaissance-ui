
import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";

export const AdAnalyticsFinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Ad Strategy?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who trust AdSpyder for comprehensive ad analytics and competitive intelligence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Play className="h-5 w-5 mr-2" />
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
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
