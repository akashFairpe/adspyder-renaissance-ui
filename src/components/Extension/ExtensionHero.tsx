import { Button } from "@/components/ui/button";
import { Chrome, Play } from "lucide-react";

export const ExtensionHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Chrome className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Chrome Extension</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Instantly Discover Ads on Any Website
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Spy on competitor ads directly in your browser. Analyze ad creatives, placements, and networks from Google, Facebook, YouTube, LinkedIn and more with one click.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('https://chromewebstore.google.com/detail/adspyder-get-domain-ad-an/dpfdbgmgkemmfbmmjgikggnljphokpij?hl=en', '_blank')}
            >
              <Chrome className="w-5 h-5 mr-2" />
              Install Chrome Extension
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-card border rounded-lg shadow-2xl p-1">
              <div className="bg-gradient-to-br from-muted/50 to-muted rounded-md aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Chrome className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Extension Screenshot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};