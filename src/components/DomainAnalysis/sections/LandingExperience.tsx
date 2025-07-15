import { MousePointer, ExternalLink, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface LandingExperienceProps {
  domain: string;
}

export const LandingExperience = ({ domain }: LandingExperienceProps) => {
  const landingPages = [
    {
      url: "/summer-sale",
      title: "Summer Sale Landing Page",
      traffic: 45,
      conversionHint: "High",
      adCount: 23
    },
    {
      url: "/product-demo",
      title: "Product Demo Page", 
      traffic: 32,
      conversionHint: "Medium",
      adCount: 18
    },
    {
      url: "/signup",
      title: "Sign Up Page",
      traffic: 28,
      conversionHint: "High", 
      adCount: 15
    },
    {
      url: "/free-trial",
      title: "Free Trial Landing",
      traffic: 21,
      conversionHint: "Very High",
      adCount: 12
    }
  ];

  const funnelSteps = [
    { step: "Ad Click", percentage: 100, label: "10,000 visitors" },
    { step: "Landing Page", percentage: 85, label: "8,500 visitors" },
    { step: "Engagement", percentage: 65, label: "6,500 engaged" },
    { step: "Form/Action", percentage: 45, label: "4,500 actions" },
    { step: "Conversion", percentage: 12, label: "1,200 conversions" }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <MousePointer className="w-6 h-6 text-primary" />
        Landing Experience
      </h2>
      
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Landing Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Top Landing Pages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {landingPages.map((page, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{page.title}</h4>
                      <p className="text-sm text-muted-foreground">{domain}{page.url}</p>
                    </div>
                    <Badge variant={
                      page.conversionHint === "Very High" ? "default" :
                      page.conversionHint === "High" ? "default" :
                      page.conversionHint === "Medium" ? "secondary" : "outline"
                    }>
                      {page.conversionHint}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-muted-foreground" />
                        <span>{page.traffic}% traffic</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{page.adCount} ads</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conversion Funnel */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Conversion Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {funnelSteps.map((step, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{step.step}</span>
                    <span className="text-sm text-muted-foreground">{step.percentage}%</span>
                  </div>
                  <div className="relative">
                    <div className="w-full h-3 bg-secondary rounded-full">
                      <div 
                        className="h-3 bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${step.percentage}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{step.label}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-accent/20 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">Overall Conversion Rate</p>
                  <p className="text-sm text-muted-foreground">From ad click to conversion</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">12%</p>
                  <p className="text-sm text-green-600">+2.3% vs last month</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};