import { Button } from "@/components/ui/button";
import { SearchCheck, Target, TrendingUp } from "lucide-react";

export const AIAgentGoogleAdsHero = () => {
  return (
    <section className="bg-gradient-to-br from-background to-secondary/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              AI Agent for <span className="text-primary">Google Ads</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Automate, optimize, and scale your ad campaigns with AI-driven precision. Launch better campaigns in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Try It Free
              </Button>
              <Button size="lg" variant="outline">
                Book Demo
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <SearchCheck className="h-4 w-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card border rounded-2xl p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">AI Agent Active</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Campaign Performance</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">+127% ROI</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-secondary/50 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold">42</div>
                      <div className="text-xs text-muted-foreground">Keywords Added</div>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold">-31%</div>
                      <div className="text-xs text-muted-foreground">CPC Reduced</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};