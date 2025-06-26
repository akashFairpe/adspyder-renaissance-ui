
import { Search, Target, Filter, TrendingUp, Eye, BarChart } from "lucide-react";

export const FacebookAdSpyFeatures = () => {
  const features = [
    {
      icon: Search,
      title: "Advanced Search Capabilities",
      description: "Search Facebook ad copies by keywords",
      quote: "Facebook ads reach over 2.8 billion users monthly—precise search is crucial."
    },
    {
      icon: Target,
      title: "Campaign Relevance",
      description: "Ensure campaigns match target audiences",
      quote: "Personalized Facebook ads lead to a 50% higher conversion rate."
    },
    {
      icon: Filter,
      title: "Efficiency and Customization",
      description: "Filter by country, date, and relevance",
      quote: "75% of marketers say filtering helps them respond faster to trends."
    },
    {
      icon: TrendingUp,
      title: "Trend Identification",
      description: "Spot early trends and ad styles",
      quote: "Early trend detection boosts campaign performance by 25%."
    },
    {
      icon: Eye,
      title: "Holistic Ad Overview",
      description: "See display, campaign pages, and categories",
      quote: "Detailed ad views improve strategic planning for 80% of marketers."
    },
    {
      icon: BarChart,
      title: "From Visuals to Data",
      description: "Capture every creative element, CTA, and layout",
      quote: "Data-driven creative decisions increase ad performance significantly."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Dive into the Specifics of Facebook Ads
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <blockquote className="text-sm text-blue-600 italic border-l-4 border-blue-200 pl-4">
                "{feature.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
