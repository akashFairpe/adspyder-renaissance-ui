
export const FacebookAdSpyBenefits = () => {
  const benefits = [
    "Craft More Engaging Content",
    "Optimize Ad Spend by Avoiding Trial & Error", 
    "Stay Ahead of Industry Trends & Changes"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            The Strategic Value of Facebook Ad Spying with AdSpyder
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              You'll need to log in to AdSpyder's Meta Ad Library using your Facebook credentials to begin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
