import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Calendar, BarChart } from "lucide-react";

export const AISalesAgentRelated = () => {
  const relatedPages = [
    {
      icon: Users,
      title: "Lead Qualification Agent",
      description: "Automated lead scoring and qualification",
      link: "/lead-qualification-agent"
    },
    {
      icon: Calendar,
      title: "AI Meeting Assistant",
      description: "Schedule and manage sales meetings",
      link: "/ai-meeting-assistant"
    },
    {
      icon: BarChart,
      title: "Business Intelligence Agent",
      description: "Sales analytics and insights automation",
      link: "/business-intelligence-agent"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
            Related Pages
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPages.map((page, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <page.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {page.title}
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  {page.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-blue-600 hover:text-blue-700 p-0"
                  onClick={() => window.open(page.link, '_blank')}
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};