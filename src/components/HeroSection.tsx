
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-[#fcfdff] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fcfdff] via-white to-[#fcfdff] opacity-50"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#e39000] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#111827] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <h1 className="text-4xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight">
            Ad intelligence redefined
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Embark on an unbeatable ad journey with the best ad spy tool. Track competitors, generate compelling ad copies, and achieve your marketing goals faster
          </p>

          {/* Email Signup Form */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e39000] focus:ring-2 focus:ring-[#e39000]/20"
            />
            <Button className="bg-[#e39000] hover:bg-[#e39000]/90 text-white px-8 py-3 font-semibold">
              Get Started - It's Free
            </Button>
          </div>

          {/* Platform Support */}
          <p className="text-gray-600 mb-8">
            Supports 15+ digital ads Platforms, 100+ countries
          </p>

          {/* Platform Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-60">
            {['Google', 'Meta', 'Bing', 'Amazon', 'LinkedIn', 'Reddit', '+ more'].map((platform) => (
              <div 
                key={platform} 
                className="bg-white h-12 px-6 rounded-lg shadow-sm flex items-center justify-center text-sm font-medium text-gray-600 hover:shadow-md transition-shadow"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
