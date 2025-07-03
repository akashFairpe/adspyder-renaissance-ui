
export const VsAdSpyWhy = () => {
  const reasons = [
    "Access to a Larger, More Diverse Ad Library",
    "AI-Based Keyword and Competitor Intelligence",
    "Smart Search and Filtering for Faster Results",
    "Intuitive Interface Built for Speed and Efficiency",
    "Affordable Pricing with Full Feature Access",
    "AI-Enabled Ad Creation Inside the Platform"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose AdSpyder?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <p className="text-gray-700 leading-relaxed font-medium text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
