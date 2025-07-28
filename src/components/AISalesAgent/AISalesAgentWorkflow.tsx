import { Button } from "@/components/ui/button";
import { ArrowRight, Cog, Database, MessageCircle, ExternalLink } from "lucide-react";

export const AISalesAgentWorkflow = () => {
  const steps = [
    {
      icon: Cog,
      title: "Built with LangChain, AutoGen, ReAct, DSPy",
      description: "Advanced AI frameworks for intelligent reasoning"
    },
    {
      icon: Database,
      title: "Connect to CRM, calendar, email, vector DB",
      description: "Seamless integration with your existing tools"
    },
    {
      icon: MessageCircle,
      title: "Perform reasoning → tool use → conversation loop",
      description: "Intelligent decision-making and automated actions"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
            How AI Sales Agents Work
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4">
                    <ArrowRight className="h-6 w-6 text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full"
              onClick={() => window.open('/blog/how-ai-sales-agents-work', '_blank')}
            >
              Read the Technical Blog
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};