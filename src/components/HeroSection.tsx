
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "./TypingAnimation";
import { TrendingUp, Eye, Target, BarChart3, PieChart, Activity, Brain, Zap, Sparkles, LineChart, Users, MousePointer } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Enhanced Animated Background Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,165,0,0.1)_25%,rgba(255,165,0,0.1)_50%,transparent_50%,transparent_75%,rgba(255,165,0,0.1)_75%)] bg-[size:20px_20px] animate-[slide_20s_linear_infinite]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(168,85,247,0.03)_45deg,transparent_90deg,rgba(34,197,94,0.03)_135deg,transparent_180deg,rgba(239,68,68,0.03)_225deg,transparent_270deg,rgba(59,130,246,0.03)_315deg,transparent_360deg)] animate-spin" style={{animationDuration: '60s'}}></div>
      </div>

      {/* Floating Geometric Shapes with Enhanced Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-20 animate-[float_3s_ease-in-out_infinite]"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-15 animation-delay-1000 animate-[float_4s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-25 animate-[float_2s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-green-400 rotate-45 animate-spin opacity-20 animation-duration-3000 animate-[float_3.5s_ease-in-out_infinite_0.5s]"></div>
        <div className="absolute bottom-32 right-32 w-1 h-1 bg-pink-400 rounded-full animate-bounce opacity-30 animation-delay-2000 animate-[float_2.5s_ease-in-out_infinite_1.5s]"></div>
        
        {/* Additional Floating Elements */}
        <div className="absolute top-24 left-1/4 w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent opacity-10 animate-[float_4s_ease-in-out_infinite] rotate-12"></div>
        <div className="absolute bottom-40 right-1/3 w-6 h-1 bg-gradient-to-r from-yellow-400 to-transparent opacity-15 animate-[float_3s_ease-in-out_infinite_1s] -rotate-12"></div>
        <div className="absolute top-1/3 left-16 w-3 h-3 border border-blue-300 rounded-full opacity-20 animate-[float_5s_ease-in-out_infinite_2s]"></div>
      </div>

      {/* Interactive Micro-animations Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 animate-[pulse_2s_ease-in-out_infinite] hover:opacity-20 hover:scale-110 transition-all duration-300"></div>
        <div className="absolute top-48 right-12 w-6 h-6 bg-gradient-to-r from-green-400 to-cyan-500 rounded-lg opacity-8 animate-[spin_8s_linear_infinite] hover:animate-[spin_2s_linear_infinite]"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-15 animate-[bounce_1.5s_ease-in-out_infinite] hover:animate-[bounce_0.5s_ease-in-out_infinite]"></div>
        <div className="absolute top-64 left-1/3 w-8 h-2 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-12 animate-[float_3s_ease-in-out_infinite] hover:opacity-25"></div>
        <div className="absolute bottom-48 right-1/4 w-3 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full opacity-10 animate-[float_4s_ease-in-out_infinite_1s] hover:scale-125"></div>
      </div>

      {/* Particle System Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-10 animate-[float_6s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Collage Background with Micro-animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Side - Analytics & Performance */}
        <div className="absolute top-16 left-4 lg:left-8 opacity-15 rotate-3 hover:rotate-2 transition-transform duration-500 hover:opacity-20 animate-[float_4s_ease-in-out_infinite]">
          <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-gray-800">Campaign Performance</span>
              <TrendingUp className="h-5 w-5 text-green-600 animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Impressions</span>
                <span className="text-xs font-semibold text-blue-600">2.3M</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-3/4 animate-[expandWidth_2s_ease-in-out_infinite]"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">CTR</span>
                <span className="text-xs font-semibold text-green-600">+34%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-2/3 animate-[expandWidth_2s_ease-in-out_infinite_1s]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Analysis Card with Enhanced Glow Effect */}
        <div className="absolute top-32 left-2 lg:left-6 opacity-12 -rotate-2 hover:rotate-0 transition-transform duration-500 animate-[float_3s_ease-in-out_infinite_0.5s]">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg text-white shadow-lg hover:shadow-purple-500/25 hover:shadow-2xl transition-all duration-300 animate-[glow_3s_ease-in-out_infinite] hover:scale-110">
            <div className="flex items-center space-x-2 mb-2">
              <Brain className="h-4 w-4 animate-pulse" />
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

        {/* Mock Ad Copy with Enhanced Hover Effect */}
        <div className="absolute top-64 left-8 lg:left-16 opacity-15 rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-[float_3.5s_ease-in-out_infinite_1s]">
          <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200 max-w-48 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
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
            <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600 transition-colors duration-200 animate-[glow_4s_ease-in-out_infinite]">
              Shop Now
            </div>
          </div>
        </div>

        {/* Platform Statistics with Enhanced Scale Animation */}
        <div className="absolute bottom-40 left-4 lg:left-12 opacity-12 rotate-2 hover:scale-110 transition-transform duration-300 animate-[float_2.5s_ease-in-out_infinite_1.5s]">
          <div className="bg-white p-3 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-1 animate-bounce animation-delay-500">
                  <span className="text-xs font-bold text-blue-600">FB</span>
                </div>
                <div className="text-xs text-gray-600">1.2M ads</div>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mb-1 animate-bounce animation-delay-1000">
                  <span className="text-xs font-bold text-red-600">YT</span>
                </div>
                <div className="text-xs text-gray-600">890K ads</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Charts & Analytics with Enhanced Rotation */}
        <div className="absolute top-12 right-4 lg:right-8 opacity-15 -rotate-3 hover:-rotate-1 transition-transform duration-500 animate-[float_4s_ease-in-out_infinite_2s]">
          <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-gray-800">Ad Spend Analysis</span>
              <PieChart className="h-5 w-5 text-orange-600 animate-spin animation-duration-4000" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600">Google Ads 45%</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse animation-delay-500"></div>
                <span className="text-xs text-gray-600">Facebook 30%</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-1000"></div>
                <span className="text-xs text-gray-600">Others 25%</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Creative Generator with Enhanced Sparkle Animation */}
        <div className="absolute top-48 right-2 lg:right-6 opacity-12 rotate-1 hover:rotate-0 transition-transform duration-300 animate-[float_3s_ease-in-out_infinite_1s]">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl transition-all duration-300 hover:scale-110">
            <div className="flex items-center space-x-2 mb-2">
              <Sparkles className="h-4 w-4 animate-spin animation-duration-2000" />
              <span className="text-xs font-semibold">AI Creative Gen</span>
            </div>
            <div className="text-xs opacity-90">
              Generated 1,247 variations
            </div>
            <div className="flex space-x-1 mt-2">
              <div className="w-4 h-4 bg-white/20 rounded animate-pulse"></div>
              <div className="w-4 h-4 bg-white/20 rounded animate-pulse animation-delay-300"></div>
              <div className="w-4 h-4 bg-white/20 rounded animate-pulse animation-delay-600"></div>
            </div>
          </div>
        </div>

        {/* Competitor Analysis with Enhanced Subtle Movement */}
        <div className="absolute bottom-32 right-8 lg:right-16 opacity-13 -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-[float_4s_ease-in-out_infinite_0.5s]">
          <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-red-200 transition-all duration-300">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="h-4 w-4 text-red-500 animate-pulse" />
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

        {/* Center - Enhanced Floating Elements with Micro-interactions */}
        <div className="absolute top-20 left-1/3 opacity-8 animate-[float_3s_ease-in-out_infinite] hover:opacity-15 hover:scale-110 transition-all duration-300">
          <div className="bg-orange-100 p-2 rounded-lg hover:bg-orange-200 hover:shadow-lg transition-all duration-300">
            <LineChart className="h-6 w-6 text-orange-600 animate-pulse" />
          </div>
        </div>

        <div className="absolute top-72 right-1/3 opacity-10 animate-[float_4s_ease-in-out_infinite_1s] hover:opacity-20 hover:scale-110 transition-all duration-300">
          <div className="bg-purple-100 p-2 rounded-lg hover:bg-purple-200 hover:shadow-lg transition-all duration-300">
            <Users className="h-6 w-6 text-purple-600 animate-bounce animation-delay-500" />
          </div>
        </div>

        {/* Mock Ad Creatives with Enhanced Gradient Animation */}
        <div className="absolute top-80 left-1/4 opacity-12 rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300 animate-[float_3s_ease-in-out_infinite_2s]">
          <div className="bg-white p-2 rounded-lg shadow-md border border-gray-200 max-w-24 hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded mb-1 animate-[gradientShift_4s_ease-in-out_infinite]"></div>
            <div className="space-y-1">
              <div className="h-1 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-1 bg-gray-200 rounded w-3/4 animate-pulse animation-delay-300"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-64 right-1/4 opacity-12 -rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300 animate-[float_3.5s_ease-in-out_infinite_1s]">
          <div className="bg-white p-2 rounded-lg shadow-md border border-gray-200 max-w-24 hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded mb-1 animate-[gradientShift_4s_ease-in-out_infinite_2s]"></div>
            <div className="space-y-1">
              <div className="h-1 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-1 bg-gray-200 rounded w-2/3 animate-pulse animation-delay-300"></div>
            </div>
          </div>
        </div>

        {/* Additional Enhanced Floating AI Elements */}
        <div className="absolute top-96 left-16 lg:left-32 opacity-10 animate-[pulse_2s_ease-in-out_infinite] hover:opacity-20 hover:scale-125 transition-all duration-300">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full hover:shadow-lg transition-shadow duration-300">
            <Zap className="h-4 w-4 text-white animate-bounce" />
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-8 hover:opacity-15 transition-opacity duration-300 animate-[float_2s_ease-in-out_infinite_1s]">
          <div className="bg-white p-2 rounded-lg shadow-md border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-1">
              <MousePointer className="h-3 w-3 text-blue-500 animate-bounce animation-delay-300" />
              <span className="text-xs text-gray-600">Click-through optimization</span>
            </div>
          </div>
        </div>

        {/* Performance Metrics Cards with Enhanced Scale Animation */}
        <div className="absolute top-40 right-24 lg:right-48 opacity-11 rotate-3 hover:rotate-1 hover:scale-110 transition-all duration-300 animate-[float_3s_ease-in-out_infinite]">
          <div className="bg-green-50 p-2 rounded-lg border border-green-200 hover:bg-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
            <div className="text-xs font-semibold text-green-700 mb-1">ROI Boost</div>
            <div className="text-lg font-bold text-green-600 animate-pulse">+127%</div>
          </div>
        </div>

        <div className="absolute bottom-48 left-24 lg:left-48 opacity-11 -rotate-1 hover:rotate-1 hover:scale-110 transition-all duration-300 animate-[float_4s_ease-in-out_infinite_1s]">
          <div className="bg-blue-50 p-2 rounded-lg border border-blue-200 hover:bg-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
            <div className="text-xs font-semibold text-blue-700 mb-1">Cost Saved</div>
            <div className="text-lg font-bold text-blue-600 animate-pulse animation-delay-1000">$12.4K</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 text-sm font-medium rounded-full mb-6 hover:bg-orange-200 hover:scale-105 transition-all duration-300 animate-[float_2s_ease-in-out_infinite]">
              🚀 The #1 Ad Intelligence Platform
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight hover:scale-105 transition-transform duration-300">
            Ad intelligence redefined
          </h1>
          
          {/* Typing Animation */}
          <div className="mb-6">
            <TypingAnimation />
          </div>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed hover:text-gray-700 transition-colors duration-300">
            Embark on an unbeatable ad journey with the best ad spy tool. Track competitors, generate compelling ad copies, and achieve your marketing goals faster
          </p>

          {/* Email Signup Form with Enhanced Interactivity */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
            />
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
              Get Started - It's Free
            </Button>
          </div>

          {/* Platform Support */}
          <p className="text-gray-600 mb-8 hover:text-gray-700 transition-colors duration-300">
            Supports 15+ digital ads Platforms, 100+ countries
          </p>

          {/* Platform Logos with Enhanced Hover Effects */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {[
              { name: 'Google' },
              { name: 'Meta' },
              { name: 'Bing' },
              { name: 'Amazon' },
              { name: 'LinkedIn' },
              { name: 'Reddit' },
              { name: '+ more' }
            ].map((platform, index) => (
              <div 
                key={platform.name} 
                className="bg-gray-100 h-12 px-6 rounded-lg flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-200 hover:shadow-lg hover:scale-110 transition-all duration-300 shadow-sm animate-[float_3s_ease-in-out_infinite]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {platform.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes expandWidth {
          0%, 100% { width: 0%; }
          50% { width: var(--tw-width); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.8), 0 0 30px rgba(168, 85, 247, 0.6); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes slide {
          0% { transform: translateX(-20px); }
          100% { transform: translateX(20px); }
        }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-1500 { animation-delay: 1500ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
        .animation-duration-2000 { animation-duration: 2000ms; }
        .animation-duration-3000 { animation-duration: 3000ms; }
        .animation-duration-4000 { animation-duration: 4000ms; }
      `}</style>
    </section>
  );
};
