import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Speed",
    manual: { value: "Hours to setup", icon: X, color: "text-red-500" },
    ai: { value: "Minutes to launch", icon: Check, color: "text-green-500" }
  },
  {
    feature: "Accuracy",
    manual: { value: "Human error prone", icon: X, color: "text-red-500" },
    ai: { value: "Data-driven precision", icon: Check, color: "text-green-500" }
  },
  {
    feature: "Effort",
    manual: { value: "High manual work", icon: X, color: "text-red-500" },
    ai: { value: "Automated optimization", icon: Check, color: "text-green-500" }
  },
  {
    feature: "ROI",
    manual: { value: "Variable results", icon: X, color: "text-red-500" },
    ai: { value: "Consistent improvement", icon: Check, color: "text-green-500" }
  },
  {
    feature: "Scaling",
    manual: { value: "Team dependent", icon: X, color: "text-red-500" },
    ai: { value: "Unlimited campaigns", icon: Check, color: "text-green-500" }
  }
];

export const AIAgentGoogleAdsComparison = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Manual vs AI-Powered Google Ads Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how AI automation transforms your advertising workflow and results.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Comparison Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                      <th className="text-center py-4 px-4 font-semibold text-foreground">Manual Management</th>
                      <th className="text-center py-4 px-4 font-semibold text-primary">AdSpyder AI Agent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className="border-b last:border-b-0 hover:bg-secondary/20">
                        <td className="py-4 px-4 font-medium text-foreground">
                          {item.feature}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <item.manual.icon className={`h-4 w-4 ${item.manual.color}`} />
                            <span className="text-muted-foreground">{item.manual.value}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <item.ai.icon className={`h-4 w-4 ${item.ai.color}`} />
                            <span className="text-foreground font-medium">{item.ai.value}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};