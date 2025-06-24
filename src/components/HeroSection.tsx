
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, TrendingUp, Eye, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              🚀 #1 Ad Intelligence Platform
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Spy on Competitor 
              <span className="text-blue-600"> Ads</span> &
              <span className="text-green-600"> Dominate</span> Your Market
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Discover winning ad strategies from 100M+ ads across Google, Facebook, YouTube, TikTok & more. 
              Get instant competitor intelligence and boost your ROAS by 300%.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100M+</div>
                <div className="text-sm text-gray-600">Ads Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50K+</div>
                <div className="text-sm text-gray-600">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-gray-600">Ad Networks</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 text-lg font-semibold group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:text-blue-600" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                No Credit Card Required
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                14-Day Free Trial
              </div>
            </div>
          </div>

          {/* Right Column - Hero Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              {/* Mock Ad Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Live Ad Intelligence</h3>
                  <Badge className="bg-green-100 text-green-700">Real-time</Badge>
                </div>
                
                {/* Mock Ad Cards */}
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm font-medium text-gray-900">Competitor Ad #{i}</span>
                            <Badge variant="outline" className="text-xs">Facebook</Badge>
                          </div>
                          <div className="text-xs text-gray-600 mb-2">
                            "Get 50% off premium software..."
                          </div>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>👀 1.2M views</span>
                            <span>💰 High spend</span>
                            <span>📈 7 days</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Eye className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-600 text-white p-3 rounded-full shadow-lg animate-pulse">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
