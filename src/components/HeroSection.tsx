
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,77,255,0.1)_25%,rgba(68,77,255,0.1)_50%,transparent_50%,transparent_75%,rgba(68,77,255,0.1)_75%)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full mb-6">
              🚀 The #1 Ad Intelligence Platform
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
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
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 shadow-sm"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all">
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
              { name: 'Google', color: 'from-red-500 to-yellow-500' },
              { name: 'Meta', color: 'from-blue-600 to-blue-800' },
              { name: 'Bing', color: 'from-green-500 to-blue-500' },
              { name: 'Amazon', color: 'from-orange-400 to-yellow-600' },
              { name: 'LinkedIn', color: 'from-blue-700 to-blue-900' },
              { name: 'Reddit', color: 'from-orange-600 to-red-600' },
              { name: '+ more', color: 'from-purple-500 to-pink-500' }
            ].map((platform) => (
              <div 
                key={platform.name} 
                className={`bg-gradient-to-r ${platform.color} h-12 px-6 rounded-lg flex items-center justify-center text-sm font-medium text-white hover:scale-105 transition-transform shadow-md hover:shadow-lg`}
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
