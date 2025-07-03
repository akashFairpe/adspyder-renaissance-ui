
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export const VsAdplexityComparison = () => {
  const features = [
    { feature: "Pricing", adplexity: "$149/month", adspyder: "$49/month", hasAdSpyderAdvantage: true },
    { feature: "Free Plan", adplexity: false, adspyder: "7-day free with no search limit", hasAdSpyderAdvantage: true },
    { feature: "Ad database", adplexity: "100 Million+", adspyder: "1 Billion +", hasAdSpyderAdvantage: true },
    { feature: "Domain Analytics", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Keyword Analytics", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Search Ads", adplexity: true, adspyder: true, hasAdSpyderAdvantage: false },
    { feature: "Domain Based Funnel Analysis", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Text Ad Generation", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Image Ad Generation", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Landing Page-Ad Copy Relationship", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Ad Management", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Keyword Based Funnel Analysis", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Competitor Analysis", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Ad Health", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Seasonality & Date-Time Trends", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Text Based Search", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Ad Bookmarking", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Filter by Country", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Campaign Tracking", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Ad Tracking", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true },
    { feature: "Domain Based Ad Search", adplexity: false, adspyder: true, hasAdSpyderAdvantage: true }
  ];

  const renderValue = (value: string | boolean, isAdSpyder: boolean = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-600 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-500 mx-auto" />
      );
    }
    return (
      <span className={isAdSpyder ? "font-semibold text-orange-600" : "text-gray-600"}>
        {value}
      </span>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compare AdSpyder with Adplexity
            </h2>
            <p className="text-xl text-gray-600">
              Discover how AdSpyder delivers unmatched value and performance, making it the preferred tool.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Adplexity</th>
                    <th className="text-center py-4 px-6 font-semibold text-orange-600">AdSpyder</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((item, index) => (
                    <tr key={index} className={`border-b ${item.hasAdSpyderAdvantage ? 'bg-orange-50/30' : ''}`}>
                      <td className="py-4 px-6 font-medium text-gray-900">{item.feature}</td>
                      <td className="py-4 px-6 text-center">{renderValue(item.adplexity)}</td>
                      <td className="py-4 px-6 text-center">{renderValue(item.adspyder, true)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              → Try it for free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
