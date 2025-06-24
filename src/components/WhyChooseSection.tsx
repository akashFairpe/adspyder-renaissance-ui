
import { Badge } from "@/components/ui/badge";

export const WhyChooseSection = () => {
  const benefits = [
    { metric: "20X", description: "ROI" },
    { metric: "5%", description: "CTR", prefix: "Achieve upto" },
    { metric: "15+", description: "Platforms", prefix: "Optimize on" },
    { metric: "2X", description: "Productivity", prefix: "Achieve" },
    { metric: "80%", description: "Lower CPC", prefix: "Optimize for" },
  ];

  return (
    <section className="py-20 bg-white">
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
              <div key={index} className="text-center p-6 bg-[#fcfdff] rounded-xl border border-gray-100">
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
