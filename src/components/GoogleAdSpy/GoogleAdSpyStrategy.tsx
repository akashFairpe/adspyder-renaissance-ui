
export const GoogleAdSpyStrategy = () => {
  const strategies = [
    "Refine Creative Strategies: Stand out with effective, proven formats",
    "Make Data-Driven Decisions: Replace guesswork with real ad data",
    "Maximize Ad Spend Efficiency: Focus your budget on what works",
    "Stay Ahead of Trends: Catch Google ad trends before they go mainstream"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Why You Can't Ignore Google Advertising in Your Strategy
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Google Ad Spying is more than a tool—it's a strategic necessity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">{strategy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
