
export const VsPowerAdSpyPerformance = () => {
  const stats = [
    {
      number: "20x",
      label: "ROI"
    },
    {
      number: "5%",
      label: "CTR Achievable"
    },
    {
      number: "15+",
      label: "Platforms Supported"
    },
    {
      number: "2x",
      label: "Productivity"
    },
    {
      number: "80%",
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
