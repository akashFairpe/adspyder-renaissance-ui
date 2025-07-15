import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, CreditCard, Calendar, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const allFeatures = [
  "Google Ads",
  "Meta (Facebook/Instagram) Ads", 
  "LinkedIn Ads",
  "YouTube Ads",
  "Shopping Ads",
  "Bing Ads",
  "Amazon Ads",
  "Twitter (X) Ads",
  "TikTok Ads",
  "Domain Analysis",
  "Keyword Research",
  "Landing Page Analysis", 
  "Text Ad Generation",
  "Image Ad Generation",
  "Video Ad Generation",
  "Ad Account Integration",
  "KPI Tracking",
  "Report Generation",
  "AI-Assisted Ad Optimisation"
];

export const PricingPlans = () => {
  const plans = [
    {
      id: "free-trial",
      name: "Free Trial",
      price: "$0",
      duration: "for 7 Days",
      description: "Try AdSpyder's complete feature set with full access",
      activation: "Activated via Credit Card",
      features: [...allFeatures, "Pay As You Use Option (Available after trial ends)"],
      cta: "Start Free Trial",
      icon: <Star className="w-6 h-6" />,
      popular: false,
      color: "border-green-200 bg-green-50/50"
    },
    {
      id: "monthly",
      name: "Monthly Plan", 
      price: "$49",
      duration: "/month",
      description: "Ideal for ongoing advertisers and marketers",
      features: [...allFeatures, "Includes Pay As You Use flexibility for scaling"],
      cta: "Subscribe Monthly",
      icon: <Calendar className="w-6 h-6" />,
      popular: false,
      color: "border-blue-200 bg-blue-50/50"
    },
    {
      id: "annual",
      name: "Annual Plan",
      price: "$499",
      duration: "/year",
      description: "Recommended for agencies and power users",
      features: [...allFeatures, "Pay As You Use included"],
      cta: "Subscribe Annually – Save 15%",
      icon: <Calendar className="w-6 h-6" />,
      popular: true,
      color: "border-orange-200 bg-orange-50/50",
      savings: "Save 15%"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
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
                  {plan.icon}
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
          ))}
        </div>

        {/* Contact Sales Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need a Custom Plan or Enterprise Access?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Looking for volume discounts, custom integrations, or enterprise features? 
            Our sales team is here to help you find the perfect solution.
          </p>
          <Button 
            asChild
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3"
            size="lg"
          >
            <a href="mailto:sales@adspyder.io" className="inline-flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Sales
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};