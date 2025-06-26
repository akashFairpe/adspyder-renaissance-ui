
import { Eye, Search, Clock, Target, Filter, Camera } from "lucide-react";

export const GoogleAdSpyBenefits = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Competitive Insights",
      description: "View ad copies exactly as seen in Google SERP",
      quote: "Marketers who leverage ad copy insights see a 20% improvement in ad relevance scores."
    },
    {
      icon: Search,
      title: "Ad Discovery",
      description: "Analyse ads using date ranges, countries, and sorting options",
      quote: "Ad relevance improves by 30% when sorting options are used to tailor content to specific audiences"
    },
    {
      icon: Clock,
      title: "Analyse Real-Time Ads",
      description: "Explore titles, images, descriptions, and display specifics instantly",
      quote: "70% of users say the quality of the ad, including title and image influences their decision to click"
    },
    {
      icon: Target,
      title: "Detailed Ad Tracking",
      description: "Track vital details of Google Search ads effortlessly",
      quote: "Campaigns with detailed tracking see a 22% higher ROI compared to those without."
    },
    {
      icon: Filter,
      title: "Ad Copy Insights",
      description: "Get ad copy insights using 30+ advanced filters",
      quote: "Companies that use comprehensive ad copy analysis report a 30% higher ad engagement rate."
    },
    {
      icon: Camera,
      title: "Landing Page Snapshots",
      description: "See the post-click experience via captured landing page views"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Experience Search Results as Your Audience Does
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get deep insights into Google ad performance with comprehensive tracking and analysis tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all group border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <benefit.icon className="h-8 w-8 text-orange-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {benefit.description}
              </p>
              
              {benefit.quote && (
                <p className="text-sm text-orange-600 font-medium italic border-l-4 border-orange-200 pl-4 bg-orange-50 p-3 rounded">
                  "{benefit.quote}"
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
