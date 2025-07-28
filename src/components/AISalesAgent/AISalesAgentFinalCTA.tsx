import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, Brain } from "lucide-react";

export const AISalesAgentFinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
          Ready to Automate Your Sales Funnel?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full"
            onClick={() => window.open('/agents/ai-sales-agents', '_blank')}
          >
            <BarChart className="mr-2 h-5 w-5" />
            Compare AI Sales Tools
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full"
            onClick={() => window.open('/blog/how-ai-sales-agents-work', '_blank')}
          >
            <Brain className="mr-2 h-5 w-5" />
            Learn How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};