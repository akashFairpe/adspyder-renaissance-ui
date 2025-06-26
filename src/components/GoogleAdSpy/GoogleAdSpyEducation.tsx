
export const GoogleAdSpyEducation = () => {
  const benefits = [
    "See Competitor Ads: Paid search and display insight",
    "Creative Inspiration: Headlines, copy, images, promotions",
    "Learn Best Practices & Pitfalls: What works (and what doesn't)",
    "Audience Expansion: Discover who your competitors target",
    "Channel Effectiveness: Analyze if they use Search, Display, or YouTube",
    "Engagement Strategies: Understand their communication and tone"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            The Critical Role of Google Ad Spying with AdSpyder
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            In today's paid advertising world, it's not just about writing good copy—it's about staying ahead. Google ad spying isn't optional anymore—it's strategic.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            The Secret of Google Ad Spying
          </h3>
          
          <p className="text-lg text-gray-600 mb-6">
            AdSpyder allows marketers to:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
