import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";

export const ExtensionHero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Chrome className="h-4 w-4" />
                <span>Chrome Extension</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Instantly Discover Ads <br />
                <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                  on Any Website
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Spy on competitor ads directly in your browser. Analyze ad creatives, placements, and networks from Google, Facebook, YouTube, LinkedIn and more with one click.
              </p>
            </div>
            
            <div className="max-w-md mx-auto lg:mx-0 mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 h-12 font-semibold shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open('https://chromewebstore.google.com/detail/adspyder-get-domain-ad-an/dpfdbgmgkemmfbmmjgikggnljphokpij?hl=en', '_blank')}
                >
                  <Chrome className="h-5 w-5 mr-2" />
                  Install Chrome Extension
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Free to try • 30-second setup
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-orange-50 to-gray-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Chrome className="h-10 w-10 text-orange-600" />
                  </div>
                  <p className="text-gray-600 font-medium">Extension Screenshot</p>
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