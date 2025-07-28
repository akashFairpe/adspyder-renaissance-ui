export const AISalesAgentComparison = () => {
  const comparisonData = [
    {
      feature: "Response Time",
      traditional: "Minutes to hours",
      aiAgent: "Instantly"
    },
    {
      feature: "Personalization",
      traditional: "Manual templates",
      aiAgent: "AI-generated, dynamic"
    },
    {
      feature: "CRM Sync",
      traditional: "Manual",
      aiAgent: "Automatic"
    },
    {
      feature: "Availability",
      traditional: "Business hours",
      aiAgent: "24/7"
    },
    {
      feature: "Scalability",
      traditional: "Team-dependent",
      aiAgent: "1000s of leads/day"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
            Comparison Table
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-slate-900">Feature</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-900">Traditional Sales</th>
                    <th className="text-left py-4 px-6 font-semibold text-orange-600">AI Sales Agent</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-slate-100">
                      <td className="py-4 px-6 font-medium text-slate-900">{row.feature}</td>
                      <td className="py-4 px-6 text-slate-600">{row.traditional}</td>
                      <td className="py-4 px-6 text-orange-600 font-medium">{row.aiAgent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};