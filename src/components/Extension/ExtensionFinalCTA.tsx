import { Button } from "@/components/ui/button";
import { Chrome, ArrowRight } from "lucide-react";

export const ExtensionFinalCTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-2xl p-12 border">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discover Your Competitors' Ad Secrets?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Install the AdSpyder Chrome extension now and start analyzing competitor ads in seconds. It's free to try and takes less than 30 seconds to set up.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold"
                onClick={() => window.open('https://chromewebstore.google.com/detail/adspyder-get-domain-ad-an/dpfdbgmgkemmfbmmjgikggnljphokpij?hl=en', '_blank')}
              >
                <Chrome className="w-5 h-5 mr-2" />
                Install Free Chrome Extension
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Free to try
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                30-second setup
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                No credit card required
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};