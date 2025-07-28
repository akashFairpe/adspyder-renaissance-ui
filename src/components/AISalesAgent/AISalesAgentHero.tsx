import { Button } from "@/components/ui/button";
import { ArrowRight, Bot } from "lucide-react";

export const AISalesAgentHero = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 mb-6">
            <Bot className="h-4 w-4" />
            <span className="text-sm font-medium">AI-Powered Sales Automation</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            AI Sales Agents That{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Never Sleep
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Revolutionize prospecting, lead qualification, and conversions with AI-powered sales automation agents.
          </p>
          
          <Button 
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            onClick={() => window.open('/agents/ai-sales-agents', '_blank')}
          >
            Compare AI Sales Tools
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};