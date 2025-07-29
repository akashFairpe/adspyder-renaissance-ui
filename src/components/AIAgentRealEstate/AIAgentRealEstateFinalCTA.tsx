import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Home } from "lucide-react";

export const AIAgentRealEstateFinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Transform Your Real Estate Business with AI
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of real estate professionals who've automated their marketing success with AdSpyder.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Start Free Trial - 14 Days
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="border-none bg-card/50">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  "Generated 42% more leads in our first month"
                </p>
                <p className="text-xs text-muted-foreground mt-2 font-medium">
                  - Jennifer K., Top Producer
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none bg-card/50">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">
                  Real estate focused AI
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Built for property professionals
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none bg-card/50">
              <CardContent className="p-6 text-center">
                <Home className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">
                  200+ agencies using AdSpyder
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Trusted by top performers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};