
export const GoogleAdSpyStats = () => {
  const stats = [
    {
      number: "1B+",
      label: "Ad Copies",
      description: "Access"
    },
    {
      number: "400M+",
      label: "Keywords",
      description: "Analyze"
    },
    {
      number: "20x",
      label: "ROI",
      description: "Achieve"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wider">
                {stat.description}
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
