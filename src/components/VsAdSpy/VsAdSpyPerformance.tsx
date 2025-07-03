
export const VsAdSpyPerformance = () => {
  const stats = [
    {
      number: "17x",
      label: "ROI"
    },
    {
      number: "Up to 4%",
      label: "CTR"
    },
    {
      number: "12+",
      label: "Platforms Supported"
    },
    {
      number: "1x",
      label: "Productivity Boost"
    },
    {
      number: "66%",
      label: "Lower CPC"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Unlock Your Ad Campaign Potential with AdSpyder
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
