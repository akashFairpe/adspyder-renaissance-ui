
import { Eye, BarChart3, Search, Clock, Globe } from "lucide-react";

export const AdLibraryBenefits = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Competitive Insights",
      description: "Analyze 1B+ ads across 50+ platforms and 80+ countries",
      quote: "40% of marketers say viewing rival ads boosts their creativity.",
      stats: "1B+ ads analyzed"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decision Making",
      description: "Filter by date, location, platform with advanced analytics",
      quote: "Companies using competitor analysis see up to 25% ROI boost.",
      stats: "25% ROI increase"
    },
    {
      icon: Search,
      title: "Keyword Research",
      description: "Search volume, competition, CPC metrics and insights",
      quote: "Smart keyword research can reduce CPC by 20%.",
      stats: "20% CPC reduction"
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Monitor changes in competitor campaigns instantly",
      quote: "Real-time tracking increases CTR by 30%.",
      stats: "30% CTR boost"
    },
    {
      icon: Globe,
      title: "Landing Page Optimization",
      description: "Analyze competitor landing pages and strategies",
      quote: "Better landing pages improve conversion rates by 27%.",
      stats: "27% conversion lift"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Key Benefits That Drive Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how AdSpyder's Ad Library transforms your advertising strategy with data-driven insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all group">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <benefit.icon className="h-8 w-8 text-orange-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {benefit.description}
              </p>
              
              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500 mb-4">
                <p className="text-sm text-gray-700 italic">
                  "{benefit.quote}"
                </p>
              </div>
              
              <div className="text-sm font-semibold text-orange-600">
                {benefit.stats}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
