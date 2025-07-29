import { Button } from "@/components/ui/button";
import { Home, TrendingUp, Users } from "lucide-react";

export const AIAgentRealEstateHero = () => {
  return (
    <section className="bg-gradient-to-br from-background to-secondary/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              AI Agent for <span className="text-primary">Real Estate Marketing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Grow your listings, capture leads, and run hyper-targeted ads—all powered by AdSpyder AI. Turn properties into profits with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Home className="h-4 w-4 text-orange-600" />
                <span>Real estate focused</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-orange-600" />
                <span>Lead generation</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card border rounded-2xl p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Real Estate AI Active</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium">Lead Generation</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">+185%</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-secondary/50 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold">124</div>
                      <div className="text-xs text-muted-foreground">New Leads</div>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold">$12K</div>
                      <div className="text-xs text-muted-foreground">Ad Spend Saved</div>
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