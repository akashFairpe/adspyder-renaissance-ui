
export const GoogleAdSpyGettingStarted = () => {
  const steps = [
    "Enter your competitor's domain or keywords",
    "Browse their ad creatives, keywords, and landing pages",
    "Use insights to refine your own campaign strategy"
  ];

  return (
    <section className="py-20 bg-orange-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Effortlessly Spy on Google Ads with AdSpyder
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white text-orange-600 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <p className="text-white text-lg font-medium">{step}</p>
              </div>
            ))}
          </div>
          
          <p className="text-orange-100 text-xl font-semibold">
            "AdSpyder delivers all your competitive intelligence in one place."
          </p>
        </div>
      </div>
    </section>
  );
};
