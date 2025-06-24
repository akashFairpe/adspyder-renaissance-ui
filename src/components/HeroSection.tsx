import { Button } from "@/components/ui/button";
import { TypingAnimation } from "./TypingAnimation";
import { TrendingUp, Eye, Target, BarChart3, PieChart, Activity, Brain, Zap, Sparkles, LineChart, Users, MousePointer } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,165,0,0.1)_25%,rgba(255,165,0,0.1)_50%,transparent_50%,transparent_75%,rgba(255,165,0,0.1)_75%)] bg-[size:20px_20px]"></div>
      </div>

      {/* Enhanced Collage Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Side - Analytics & Performance */}
        <div className="absolute top-16 left-4 lg:left-8 opacity-15 rotate-3">
          <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-gray-800">Campaign Performance</span>
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Impressions</span>
                <span className="text-xs font-semibold text-blue-600">2.3M</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">CTR</span>
                <span className="text-xs font-semibold text-green-600">+34%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Analysis Card */}
        <div className="absolute top-32 left-2 lg:left-6 opacity-12 -rotate-2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg text-white shadow-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Brain className="h-4 w-4" />
              <span className="text-xs font-semibold">AI Insights</span>
            </div>
            <div className="text-xs opacity-90">
              Best performing time: 2-4 PM
            </div>
            <div className="text-xs opacity-90">
              Suggested bid: $1.23
            </div>
          </div>
        </div>

        {/* Mock Ad Copy */}
        <div className="absolute top-64 left-8 lg:left-16 opacity-15 rotate-1">
          <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200 max-w-48">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">A</span>
              </div>
              <span className="text-xs font-semibold text-gray-700">Brand Name</span>
            </div>
            <div className="text-xs text-gray-800 font-medium mb-1">
              "Get 50% Off Premium Features"
            </div>
            <div className="text-xs text-gray-600 mb-2">
              Limited time offer for new customers...
            </div>
            <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
              Shop Now
            </div>
          </div>
        </div>

        {/* Platform Statistics */}
        <div className="absolute bottom-40 left-4 lg:left-12 opacity-12 rotate-2">
          <div className="bg-white p-3 rounded-xl shadow-xl border border-gray-100">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-1">
                  <span className="text-xs font-bold text-blue-600">FB</span>
                </div>
                <div className="text-xs text-gray-600">1.2M ads</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mb-1">
                  <span className="text-xs font-bold text-red-600">YT</span>
                </div>
                <div className="text-xs text-gray-600">890K ads</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Charts & Analytics */}
        <div className="absolute top-12 right-4 lg:right-8 opacity-15 -rotate-3">
          <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-gray-800">Ad Spend Analysis</span>
              <PieChart className="h-5 w-5 text-orange-600" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Google Ads 45%</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Facebook 30%</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Others 25%</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Creative Generator */}
        <div className="absolute top-48 right-2 lg:right-6 opacity-12 rotate-1">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg text-white shadow-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-semibold">AI Creative Gen</span>
            </div>
            <div className="text-xs opacity-90">
              Generated 1,247 variations
            </div>
            <div className="flex space-x-1 mt-2">
              <div className="w-4 h-4 bg-white/20 rounded"></div>
              <div className="w-4 h-4 bg-white/20 rounded"></div>
              <div className="w-4 h-4 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>

        {/* Competitor Analysis */}
        <div className="absolute bottom-32 right-8 lg:right-16 opacity-13 -rotate-1">
          <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="h-4 w-4 text-red-500" />
              <span className="text-xs font-bold text-gray-700">Competitor Insights</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Brand A spend</span>
                <span className="text-red-600 font-medium">$45K</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Top keyword</span>
                <span className="text-blue-600 font-medium">"software"</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center - Floating Elements */}
        <div className="absolute top-20 left-1/3 opacity-8 animate-pulse">
          <div className="bg-orange-100 p-2 rounded-lg">
            <LineChart className="h-6 w-6 text-orange-600" />
          </div>
        </div>

        <div className="absolute top-72 right-1/3 opacity-10 animate-pulse delay-500">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Users className="h-6 w-6 text-purple-600" />
          </div>
        </div>

        {/* Mock Ad Creatives */}
        <div className="absolute top-80 left-1/4 opacity-12 rotate-2">
          <div className="bg-white p-2 rounded-lg shadow-md border border-gray-200 max-w-24">
            <div className="w-full h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded mb-1"></div>
            <div className="space-y-1">
              <div className="h-1 bg-gray-200 rounded w-full"></div>
              <div className="h-1 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-64 right-1/4 opacity-12 -rotate-2">
          <div className="bg-white p-2 rounded-lg shadow-md border border-gray-200 max-w-24">
            <div className="w-full h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded mb-1"></div>
            <div className="space-y-1">
              <div className="h-1 bg-gray-200 rounded w-full"></div>
              <div className="h-1 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>

        {/* Additional Floating AI Elements */}
        <div className="absolute top-96 left-16 lg:left-32 opacity-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full">
            <Zap className="h-4 w-4 text-white" />
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-8">
          <div className="bg-white p-2 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center space-x-1">
              <MousePointer className="h-3 w-3 text-blue-500" />
              <span className="text-xs text-gray-600">Click-through optimization</span>
            </div>
          </div>
        </div>

        {/* Performance Metrics Cards */}
        <div className="absolute top-40 right-24 lg:right-48 opacity-11 rotate-3">
          <div className="bg-green-50 p-2 rounded-lg border border-green-200">
            <div className="text-xs font-semibold text-green-700 mb-1">ROI Boost</div>
            <div className="text-lg font-bold text-green-600">+127%</div>
          </div>
        </div>

        <div className="absolute bottom-48 left-24 lg:left-48 opacity-11 -rotate-1">
          <div className="bg-blue-50 p-2 rounded-lg border border-blue-200">
            <div className="text-xs font-semibold text-blue-700 mb-1">Cost Saved</div>
            <div className="text-lg font-bold text-blue-600">$12.4K</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 text-sm font-medium rounded-full mb-6">
              🚀 The #1 Ad Intelligence Platform
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ad intelligence redefined
          </h1>
          
          {/* Typing Animation */}
          <div className="mb-6">
            <TypingAnimation />
          </div>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Embark on an unbeatable ad journey with the best ad spy tool. Track competitors, generate compelling ad copies, and achieve your marketing goals faster
          </p>

          {/* Email Signup Form */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 shadow-sm"
            />
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all">
              Get Started - It's Free
            </Button>
          </div>

          {/* Platform Support */}
          <p className="text-gray-600 mb-8">
            Supports 15+ digital ads Platforms, 100+ countries
          </p>

          {/* Platform Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {[
              { name: 'Google' },
              { name: 'Meta' },
              { name: 'Bing' },
              { name: 'Amazon' },
              { name: 'LinkedIn' },
              { name: 'Reddit' },
              { name: '+ more' }
            ].map((platform) => (
              <div 
                key={platform.name} 
                className="bg-gray-100 h-12 px-6 rounded-lg flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors shadow-sm"
              >
                {platform.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
