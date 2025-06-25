
import { Badge } from "@/components/ui/badge";

export const WhyChooseSection = () => {
  const benefits = [
    { 
      metric: "20X", 
      description: "ROI", 
      prefix: "Get upto",
      color: "bg-white border-gray-200 hover:shadow-lg",
      metricColor: "text-orange-600"
    },
    { 
      metric: "5%", 
      description: "CTR", 
      prefix: "Achieve upto", 
      color: "bg-white border-gray-200 hover:shadow-lg",
      metricColor: "text-orange-600"
    },
    { 
      metric: "15+", 
      description: "Platforms", 
      prefix: "Optimize on", 
      color: "bg-white border-gray-200 hover:shadow-lg",
      metricColor: "text-orange-600"
    },
    { 
      metric: "2X", 
      description: "Productivity", 
      prefix: "Achieve", 
      color: "bg-white border-gray-200 hover:shadow-lg",
      metricColor: "text-orange-600"
    },
    { 
      metric: "80%", 
      description: "Lower CPC", 
      prefix: "Optimize for", 
      color: "bg-white border-gray-200 hover:shadow-lg",
      metricColor: "text-orange-600"
    },
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-full">
              ✨ Proven Results
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose AdSpyder Ad Spy Tool?
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            AdSpyder solves the challenge of optimising ad campaigns. The ad spy tool provides strategic competitor insights and performance analytics. Perform AI assisted ad generation and optimisation in a single platform.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className={`text-center p-6 rounded-xl border-2 ${benefit.color} transition-all duration-300 transform hover:-translate-y-2`}>
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
