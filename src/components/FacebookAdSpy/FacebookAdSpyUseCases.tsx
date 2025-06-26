
export const FacebookAdSpyUseCases = () => {
  const useCases = [
    {
      title: "Market Knowledge",
      description: "See ads from the user's perspective and understand competitor positioning."
    },
    {
      title: "Ad Insights",
      description: "Uncover details like targeting country, page name, and demographics."
    },
    {
      title: "Ad Exploration",
      description: "Use filters to quickly find and compare relevant campaigns."
    },
    {
      title: "Ad Inspiration",
      description: "Browse creative variations to spark fresh ideas."
    },
    {
      title: "Decision Making",
      description: "Sort ads by date to act on time-sensitive trends."
    },
    {
      title: "Campaign Relevance",
      description: "Ensure your ads align with what's live in the market."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
            From Market Knowledge to Decision Making—Use Facebook Ad Spy Your Way
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
