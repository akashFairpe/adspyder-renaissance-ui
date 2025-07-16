import { Button } from '@/components/ui/button';
import { Check, X, AlertTriangle, ArrowRight } from 'lucide-react';

export const ComparisonTable = () => {
  const features = [
    {
      feature: "Ad Monitoring by Country",
      similarweb: { status: "not-available", text: "Not Available" },
      adspyder: { status: "available", text: "100+ Countries" }
    },
    {
      feature: "Competitor Landing Page Analysis", 
      similarweb: { status: "limited", text: "Enterprise only" },
      adspyder: { status: "available", text: "All plans" }
    },
    {
      feature: "Real-Time Ad Updates",
      similarweb: { status: "not-available", text: "Delayed (24–48h)" },
      adspyder: { status: "available", text: "Live data" }
    },
    {
      feature: "Price Transparency",
      similarweb: { status: "not-available", text: "Custom quotes" },
      adspyder: { status: "available", text: "Public, fair pricing" }
    },
    {
      feature: "Social Ad Spy (FB, Insta, YouTube)",
      similarweb: { status: "not-available", text: "Basic filters only" },
      adspyder: { status: "available", text: "Multi-platform ad insights" }
    },
    {
      feature: "Easy-to-Navigate UI",
      similarweb: { status: "limited", text: "Complex" },
      adspyder: { status: "available", text: "Intuitive and fast" }
    },
    {
      feature: "Exportable Reports",
      similarweb: { status: "available", text: "Available" },
      adspyder: { status: "available", text: "+ Branded templates" }
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
            Feature-by-Feature: AdSpyder vs SimilarWeb
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how AdSpyder offers deeper insights, wider reach, and more accessible pricing — without the bloat.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card border rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-accent">
                  <tr>
                    <th className="text-left p-6 text-lg font-semibold text-foreground">Feature</th>
                    <th className="text-center p-6 text-lg font-semibold text-foreground">SimilarWeb</th>
                    <th className="text-center p-6 text-lg font-semibold text-primary">AdSpyder</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {features.map((row, index) => (
                    <tr key={index} className="hover:bg-accent/50 transition-colors">
                      <td className="p-6 font-medium text-foreground">{row.feature}</td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getIcon(row.similarweb.status)}
                          <span className="text-sm">{row.similarweb.text}</span>
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
            <p className="text-lg text-muted-foreground mb-6">Ready to make the switch?</p>
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4"
              onClick={() => window.open('https://app.adspyder.com/register', '_blank')}
            >
              Start your free trial now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};