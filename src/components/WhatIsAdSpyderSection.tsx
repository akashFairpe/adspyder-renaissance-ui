
import { Play } from "lucide-react";

export const WhatIsAdSpyderSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                🎯 About AdSpyder
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Is AdSpyder?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how AdSpyder helps you analyze ads across platforms, uncover competitor strategies, 
              and supercharge your marketing efforts. Watch this quick explainer to see how it works in action.
            </p>
          </div>

          {/* Video Section */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-2 shadow-2xl">
              <div className="aspect-video bg-gray-900 rounded-xl relative overflow-hidden group cursor-pointer">
                {/* Video Placeholder - Replace with actual video */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-orange-600 rounded-full flex items-center justify-center group-hover:bg-orange-700 transition-colors shadow-lg">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                    <p className="text-white text-lg font-medium">Watch AdSpyder in Action</p>
                    <p className="text-gray-300 text-sm mt-2">Click to play the explainer video</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="absolute top-4 left-10 w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="absolute top-4 left-16 w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            {/* Floating elements for visual appeal */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-orange-600 rounded-full opacity-30 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
