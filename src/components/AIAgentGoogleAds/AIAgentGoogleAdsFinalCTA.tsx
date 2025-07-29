import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

export const AIAgentGoogleAdsFinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Launch Better Google Ads Today with AI
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of marketers who've automated their Google Ads success with AdSpyder's AI agent.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Try It Free - No Credit Card
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              See Demo
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
                  "Increased our ROAS by 127% in the first month"
                </p>
                <p className="text-xs text-muted-foreground mt-2 font-medium">
                  - Sarah M., Marketing Director
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none bg-card/50">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">
                  14-day free trial
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Full access, no limitations
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none bg-card/50">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-3">5min</div>
                <p className="text-sm text-muted-foreground">
                  Setup time
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Connect and launch today
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};