
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "./TypingAnimation";
import { TrendingUp, Eye, Target, BarChart3, PieChart, Activity } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,165,0,0.1)_25%,rgba(255,165,0,0.1)_50%,transparent_50%,transparent_75%,rgba(255,165,0,0.1)_75%)] bg-[size:20px_20px]"></div>
      </div>

      {/* Floating Visual Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side floating elements */}
        <div className="absolute top-20 left-8 lg:left-16 opacity-10 animate-pulse">
          <div className="bg-orange-100 p-4 rounded-lg shadow-lg">
            <TrendingUp className="h-8 w-8 text-orange-600" />
          </div>
        </div>
        
        <div className="absolute top-40 left-4 lg:left-12 opacity-15">
          <div className="bg-white p-3 rounded-xl shadow-xl border border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">Google Ads</span>
            </div>
            <div className="mt-2 text-xs text-gray-500">2.3M ads tracked</div>
          </div>
        </div>

        <div className="absolute bottom-32 left-6 lg:left-20 opacity-12">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg text-white shadow-lg">
            <BarChart3 className="h-6 w-6" />
          </div>
        </div>

        {/* Right side floating elements */}
        <div className="absolute top-16 right-8 lg:right-16 opacity-10">
          <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-700">Ad Performance</span>
              <Eye className="h-4 w-4 text-orange-600" />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">CTR</span>
                <span className="text-green-600 font-medium">+24%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">CPC</span>
                <span className="text-blue-600 font-medium">$0.89</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-48 right-4 lg:right-12 opacity-15 animate-pulse delay-300">
          <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
            <PieChart className="h-7 w-7 text-orange-600" />
          </div>
        </div>

        <div className="absolute bottom-40 right-6 lg:right-24 opacity-12">
          <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="h-4 w-4 text-red-500" />
              <span className="text-xs font-medium text-gray-700">Facebook</span>
            </div>
            <div className="text-xs text-gray-500">1.8M creatives</div>
          </div>
        </div>

        <div className="absolute bottom-20 right-16 lg:right-32 opacity-10">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-2 rounded-lg">
            <Activity className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Center floating elements */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 opacity-8">
          <div className="bg-white p-2 rounded-lg shadow-md border border-gray-100">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Ad preview cards */}
        <div className="absolute top-72 left-12 lg:left-24 opacity-12 rotate-3">
          <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200 max-w-32">
            <div className="w-full h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded mb-2"></div>
            <div className="space-y-1">
              <div className="h-2 bg-gray-200 rounded w-full"></div>
              <div className="h-2 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-80 right-16 lg:right-28 opacity-12 -rotate-2">
          <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200 max-w-32">
            <div className="w-full h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded mb-2"></div>
            <div className="space-y-1">
              <div className="h-2 bg-gray-200 rounded w-full"></div>
              <div className="h-2 bg-gray-200 rounded w-2/3"></div>
            </div>
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
