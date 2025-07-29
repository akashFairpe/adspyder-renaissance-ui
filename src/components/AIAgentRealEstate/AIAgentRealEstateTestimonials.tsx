import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp } from "lucide-react";

export const AIAgentRealEstateTestimonials = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted by Real Estate Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our AI agent is transforming real estate marketing across the industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "42% increase in lead volume within the first quarter. The AI really understands our local market."
              </p>
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">42% More Leads</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-primary mb-4">200+</div>
              <p className="text-muted-foreground mb-4">
                Real estate firms using AdSpyder AI for automated marketing campaigns.
              </p>
              <p className="text-sm text-muted-foreground">
                Growing network of property professionals
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Cut our marketing costs in half while doubling our qualified leads. Game changer!"
              </p>
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">50% Cost Reduction</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};