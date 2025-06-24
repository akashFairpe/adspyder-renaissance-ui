
import { Badge } from "@/components/ui/badge";

export const WhyChooseSection = () => {
  const benefits = [
    { 
      metric: "20X", 
      description: "ROI", 
      color: "bg-gradient-to-br from-red-50 to-pink-50 border-red-200 hover:from-red-100 hover:to-pink-100",
      iconColor: "text-red-600",
      metricColor: "text-red-600"
    },
    { 
      metric: "5%", 
      description: "CTR", 
      prefix: "Achieve upto", 
      color: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:from-blue-100 hover:to-indigo-100",
      iconColor: "text-blue-600",
      metricColor: "text-blue-600"
    },
    { 
      metric: "15+", 
      description: "Platforms", 
      prefix: "Optimize on", 
      color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:from-green-100 hover:to-emerald-100",
      iconColor: "text-green-600",
      metricColor: "text-green-600"
    },
    { 
      metric: "2X", 
      description: "Productivity", 
      prefix: "Achieve", 
      color: "bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 hover:from-purple-100 hover:to-violet-100",
      iconColor: "text-purple-600",
      metricColor: "text-purple-600"
    },
    { 
      metric: "80%", 
      description: "Lower CPC", 
      prefix: "Optimize for", 
      color: "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 hover:from-yellow-100 hover:to-orange-100",
      iconColor: "text-yellow-600",
      metricColor: "text-orange-600"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-medium rounded-full">
              ✨ Proven Results
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Why Choose AdSpyder Ad Spy Tool?
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            AdSpyder solves the challenge of optimising ad campaigns. The ad spy tool provides strategic competitor insights and performance analytics. Perform AI assisted ad generation and optimisation in a single platform.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className={`text-center p-6 rounded-xl border-2 ${benefit.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105`}>
                <div className="text-sm text-gray-600 mb-2">{benefit.prefix && `${benefit.prefix}`}</div>
                <div className={`text-3xl lg:text-4xl font-bold ${benefit.metricColor} mb-2`}>
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-gray-800">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
