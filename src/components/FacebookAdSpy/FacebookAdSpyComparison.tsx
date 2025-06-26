
export const FacebookAdSpyComparison = () => {
  const features = [
    {
      title: "Comprehensive Ad Insights",
      description: "See creative, spend, performance metrics—not just visuals."
    },
    {
      title: "Audience & Demographics Analysis", 
      description: "Go deeper with persona profiling data unavailable on Meta."
    },
    {
      title: "Enhanced Search Capabilities",
      description: "Search by URL, ad copy, country, and much more."
    },
    {
      title: "Landing Page & Keyword Analysis",
      description: "Discover end-to-end alignment across copy and targeting."
    }
  ];

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
            Why Choose AdSpyder's Meta Ad Library (vs. Facebook Ad Library)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
