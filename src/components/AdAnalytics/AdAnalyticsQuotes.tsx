
import { Quote } from "lucide-react";

export const AdAnalyticsQuotes = () => {
  const quotes = [
    "65% of top marketers track competitor campaigns regularly.",
    "Localized ads see 25% higher engagement.",
    "Cross-platform ads result in 30% higher reach."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center border border-orange-200">
              <Quote className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                {quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
