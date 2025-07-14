import { Card, CardContent } from "@/components/ui/card";
import { Download, Globe, MousePointer } from "lucide-react";

const steps = [
  {
    step: "1",
    icon: Download,
    title: "Install Extension",
    description: "Add AdSpyder to Chrome from the Chrome Web Store in seconds"
  },
  {
    step: "2", 
    icon: Globe,
    title: "Visit Any Website",
    description: "Browse to any website you want to analyze for competitor ads"
  },
  {
    step: "3",
    icon: MousePointer,
    title: "Click & Analyze",
    description: "Click the AdSpyder extension icon to instantly see all ads and insights"
  }
];

export const ExtensionHowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with ad intelligence in 3 simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-border transform -translate-x-1/2 z-0"></div>
              )}
              
              <Card className="border-0 shadow-sm relative z-10">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};