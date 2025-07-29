import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Upload, Zap, Facebook, Users, Mail } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Realtor uploads listing",
    description: "Add property details, photos, and target criteria"
  },
  {
    icon: Zap,
    title: "AI generates ads",
    description: "Create compelling ad copy and targeting parameters"
  },
  {
    icon: Facebook,
    title: "Facebook campaign goes live",
    description: "Automated campaign launch with optimized budgets"
  },
  {
    icon: Users,
    title: "Leads collected",
    description: "Capture interested buyer information and preferences"
  },
  {
    icon: Mail,
    title: "Email drip started",
    description: "Automated follow-up sequences for lead nurturing"
  }
];

export const AIAgentRealEstateScenario = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works in Real Estate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From listing upload to lead conversion, see how our AI agent automates your entire marketing workflow.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6 items-center">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 translate-x-4">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};