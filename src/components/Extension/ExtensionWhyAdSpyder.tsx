import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const comparisons = [
  {
    feature: "Speed & Performance",
    adspyder: "Lightning fast",
    others: "Slow loading"
  },
  {
    feature: "Data Accuracy", 
    adspyder: "Real-time updates",
    others: "Outdated data"
  },
  {
    feature: "Platform Coverage",
    adspyder: "20+ ad networks",
    others: "Limited platforms"
  },
  {
    feature: "Ease of Use",
    adspyder: "One-click analysis",
    others: "Complex setup"
  },
  {
    feature: "Privacy",
    adspyder: "No data collection",
    others: "Invasive tracking"
  },
  {
    feature: "Pricing",
    adspyder: "Free to start",
    others: "Expensive plans"
  }
];

export const ExtensionWhyAdSpyder = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose AdSpyder Extension?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how AdSpyder outperforms other ad intelligence tools
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid gap-6">
                <div className="grid md:grid-cols-3 gap-4 items-center py-4 border-b border-border font-semibold">
                  <div>Feature</div>
                  <div className="text-center">
                    <Badge variant="default" className="bg-primary">AdSpyder</Badge>
                  </div>
                  <div className="text-center text-muted-foreground">Others</div>
                </div>
                
                {comparisons.map((item, index) => (
                  <div key={index} className="grid md:grid-cols-3 gap-4 items-center py-4 border-b border-border last:border-b-0">
                    <div className="font-medium">{item.feature}</div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-primary">
                        <CheckCircle className="w-4 h-4" />
                        <span className="font-medium">{item.adspyder}</span>
                      </div>
                    </div>
                    <div className="text-center text-muted-foreground">{item.others}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};