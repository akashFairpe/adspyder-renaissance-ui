import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, MessageSquare, Target } from "lucide-react";

export const AISalesAgentExamples = () => {
  const examples = [
    {
      icon: Target,
      name: "SellScale",
      description: "Personalized outbound automation",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Zap,
      name: "Regie.ai",
      description: "AI-generated sales sequences",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: MessageSquare,
      name: "Drift",
      description: "Live conversational lead qualification",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
            Examples of AI Sales Agents
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {examples.map((example, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${example.color}`}>
                    <example.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {example.name}
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  {example.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline" 
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-full"
            >
              See Full List of Sales Tools
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};