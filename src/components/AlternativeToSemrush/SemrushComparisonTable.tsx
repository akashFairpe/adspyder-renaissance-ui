import { Button } from '@/components/ui/button';
import { Check, X, AlertTriangle, Target } from 'lucide-react';

export const SemrushComparisonTable = () => {
  const features = [
    {
      feature: "Global Ad Spy",
      semrush: { status: "not-available", text: "Not available" },
      adspyder: { status: "available", text: "100+ Countries" }
    },
    {
      feature: "Ad Creatives Preview", 
      semrush: { status: "limited", text: "Only in higher plans" },
      adspyder: { status: "available", text: "Included in all plans" }
    },
    {
      feature: "Competitor Ad Spend Insights",
      semrush: { status: "not-available", text: "Not Supported" },
      adspyder: { status: "available", text: "Included" }
    },
    {
      feature: "Agency-Friendly Reporting",
      semrush: { status: "limited", text: "Complex" },
      adspyder: { status: "available", text: "White-label ready" }
    },
    {
      feature: "Keyword + Ad Sync",
      semrush: { status: "limited", text: "Keyword Only" },
      adspyder: { status: "available", text: "Unified intelligence" }
    },
    {
      feature: "Ad Funnel Visualization",
      semrush: { status: "not-available", text: "Not Available" },
      adspyder: { status: "available", text: "End-to-end journey tracking" }
    },
    {
      feature: "Lightweight, Fast UI",
      semrush: { status: "limited", text: "Heavy & bloated" },
      adspyder: { status: "available", text: "Fast & clean interface" }
    }
  ];

  const getIcon = (status: string) => {
    switch (status) {
      case "available":
        return <Check className="h-5 w-5 text-green-600" />;
      case "limited":
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case "not-available":
        return <X className="h-5 w-5 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Feature-by-Feature: AdSpyder vs SEMrush
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AdSpyder offers more focused, ad-driven insights with better UI and transparent pricing.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card border rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-accent">
                  <tr>
                    <th className="text-left p-6 text-lg font-semibold text-foreground">Feature</th>
                    <th className="text-center p-6 text-lg font-semibold text-foreground">SEMrush</th>
                    <th className="text-center p-6 text-lg font-semibold text-primary">AdSpyder</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {features.map((row, index) => (
                    <tr key={index} className="hover:bg-accent/50 transition-colors">
                      <td className="p-6 font-medium text-foreground">{row.feature}</td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getIcon(row.semrush.status)}
                          <span className="text-sm">{row.semrush.text}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getIcon(row.adspyder.status)}
                          <span className="text-sm font-medium">{row.adspyder.text}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Target className="h-6 w-6 text-orange-600" />
              <p className="text-lg text-muted-foreground">Want better insights with less effort?</p>
            </div>
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4"
              onClick={() => window.open('https://app.adspyder.com/register', '_blank')}
            >
              Start your free trial now →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};