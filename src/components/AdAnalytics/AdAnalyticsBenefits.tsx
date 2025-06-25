
export const AdAnalyticsBenefits = () => {
  const domainBenefits = [
    "Competitive insights",
    "Geo-optimization",
    "Campaign timing intelligence",
    "Platform-specific strategy"
  ];

  const keywordBenefits = [
    "Real-time performance tracking",
    "Geo and time targeting",
    "Bid optimization",
    "Keyword research + targeting"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Benefits Breakdown
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize your advertising potential with domain and keyword intelligence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Domain Benefits */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Domain Benefits
            </h3>
            <ul className="space-y-4">
              {domainBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Keyword Benefits */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Keyword Benefits
            </h3>
            <ul className="space-y-4">
              {keywordBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
