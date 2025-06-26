
import { Database, Search, Camera, Target } from "lucide-react";

export const GoogleAdSpyTools = () => {
  const tools = [
    {
      icon: Database,
      title: "Ad Library and Analysis",
      description: "Full ad previews alongside SERPs, with metrics like ad spend and CTA"
    },
    {
      icon: Search,
      title: "Domain and Keyword Analysis",
      description: "Analyze domains and keywords to uncover targeting strategies"
    },
    {
      icon: Camera,
      title: "Landing Page Insights",
      description: "Understand post-click strategy and visual cohesion"
    },
    {
      icon: Target,
      title: "Competitive Keyword Insight",
      description: "Identify competitor keyword strategies and seasonal trends"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            AdSpyder's Google Ad Spying Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive toolkit for analyzing and understanding Google advertising strategies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div key={index} className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-orange-200 transition-colors">
                <tool.icon className="h-10 w-10 text-orange-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {tool.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
