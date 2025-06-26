
export const FacebookAdSpyEducation = () => {
  const limitations = [
    "No content tone, CTA, or emotional appeal analysis",
    "Lacks targeting and demographic breakdown", 
    "No URL-level or funnel analysis"
  ];

  const benefits = [
    "Benchmark and Innovate – Compare, then build smarter campaigns",
    "Creative and Tactical Insights – Spot effective hooks and strategies",
    "Avoid Common Pitfalls – Skip what didn't work for others",
    "Audience Expansion – Discover untapped segments",
    "Promotional Timing – Learn when and how to launch"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            The Vital Role of Facebook Ad Spying with AdSpyder
          </h2>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Unlocking Competitive Strategies in Paid Advertising
          </h3>
          
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Why Facebook Ad Spying Matters:
            </h4>
            <p className="text-lg text-gray-600 mb-4">
              Reach massive audiences—but to compete, analyze competitors' strategies.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Go beyond intuition; base your ad moves on real-time data.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Facebook Ad Library: Limitations
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {limitations.map((limitation, index) => (
                <div key={index} className="flex items-start space-x-3 bg-red-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700 leading-relaxed">{limitation}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              What You Gain from Facebook Ad Spying
            </h4>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
