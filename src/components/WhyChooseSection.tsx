
import { Badge } from "@/components/ui/badge";

export const WhyChooseSection = () => {
  const benefits = [
    { metric: "20X", description: "ROI", color: "bg-red-50 border-red-200" },
    { metric: "5%", description: "CTR", prefix: "Achieve upto", color: "bg-blue-50 border-blue-200" },
    { metric: "15+", description: "Platforms", prefix: "Optimize on", color: "bg-green-50 border-green-200" },
    { metric: "2X", description: "Productivity", prefix: "Achieve", color: "bg-purple-50 border-purple-200" },
    { metric: "80%", description: "Lower CPC", prefix: "Optimize for", color: "bg-yellow-50 border-yellow-200" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#fcfdff]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#111827] mb-6">
            Why Choose AdSpyder Ad Spy Tool?
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            AdSpyder solves the challenge of optimising ad campaigns. The ad spy tool provides strategic competitor insights and performance analytics. Perform AI assisted ad generation and optimisation in a single platform.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className={`text-center p-6 rounded-xl border-2 ${benefit.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="text-sm text-gray-600 mb-2">{benefit.prefix && `${benefit.prefix}`}</div>
                <div className="text-3xl lg:text-4xl font-bold text-[#e39000] mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-[#111827]">
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
