import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, LucideIcon } from "lucide-react";

interface PricingCardProps {
  plan: {
    id: string;
    name: string;
    price: string;
    duration: string;
    description: string;
    activation?: string;
    features: string[];
    cta: string;
    icon: LucideIcon;
    popular: boolean;
    color: string;
    savings?: string;
  };
}

export const PricingCard = ({ plan }: PricingCardProps) => {
  const IconComponent = plan.icon;

  return (
    <Card 
      className={`relative transition-all duration-300 hover:shadow-lg hover:scale-105 ${plan.color} ${
        plan.popular ? "ring-2 ring-orange-500" : ""
      }`}
    >
      {plan.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="text-center pb-8">
        <div className="w-12 h-12 bg-white rounded-lg shadow-sm mx-auto mb-4 flex items-center justify-center text-orange-600">
          <IconComponent className="w-6 h-6" />
        </div>
        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-foreground">
            {plan.price}
            {plan.duration !== "Flexible" && (
              <span className="text-sm font-normal text-muted-foreground ml-1">
                {plan.duration}
              </span>
            )}
          </div>
          {plan.savings && (
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              {plan.savings}
            </Badge>
          )}
        </div>
        <CardDescription className="text-sm">{plan.description}</CardDescription>
        {plan.activation && (
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-2">
            <CreditCard className="w-4 h-4" />
            <span>{plan.activation}</span>
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <Button 
          className={`w-full ${
            plan.popular 
              ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              : ""
          }`}
          variant={plan.popular ? "default" : "outline"}
          size="lg"
        >
          {plan.cta}
        </Button>
      </CardContent>
    </Card>
  );
};