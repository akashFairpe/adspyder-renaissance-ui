import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, CreditCard, Zap, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = {
  core: [
    "Full access to all AdSpyder features",
    "Ad Intelligence for all platforms",
    "Domain & keyword analysis",
    "Ad generation and optimisation tools"
  ],
  adSpy: [
    "Google Ads Intelligence",
    "Meta Ads Intelligence", 
    "LinkedIn Ads Intelligence",
    "YouTube Ads Intelligence",
    "Shopping Ads Intelligence",
    "Bing Ads Intelligence",
    "Amazon Ads Intelligence",
    "Twitter (X) Ads Intelligence",
    "TikTok Ads Intelligence"
  ],
  analysis: [
    "Domain Analysis",
    "Keyword Research",
    "Landing Page Analysis"
  ],
  generation: [
    "Text Ad Generation",
    "Image Ad Generation", 
    "Video Ad Generation"
  ],
  optimization: [
    "Ad Account Integration",
    "KPI Tracking",
    "Report Generation",
    "AI-Assisted Ad Optimisation"
  ]
};

export const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      id: "free-trial",
      name: "Free Trial",
      price: "$0",
      duration: "7 Days",
      description: "Try all features for 7 days at no cost",
      activation: "Activated via Credit Card",
      features: features.core,
      cta: "Start Free Trial",
      icon: <Star className="w-6 h-6" />,
      popular: false,
      color: "border-green-200 bg-green-50/50"
    },
    {
      id: "pay-as-use",
      name: "Pay As You Use",
      price: "Based on Usage",
      duration: "Flexible",
      description: "Perfect for low-volume or testing users",
      features: [
        ...features.core,
        ...features.adSpy,
        ...features.analysis,
        ...features.generation,
        ...features.optimization
      ],
      cta: "Get Started",
      icon: <Zap className="w-6 h-6" />,
      popular: false,
      color: "border-blue-200 bg-blue-50/50"
    },
    {
      id: "subscription",
      name: billingCycle === "monthly" ? "Monthly Plan" : "Annual Plan",
      price: billingCycle === "monthly" ? "$49" : "$499",
      duration: billingCycle === "monthly" ? "per month" : "per year",
      description: billingCycle === "annual" ? "Save 15% with annual billing" : "Full access with monthly flexibility",
      features: [
        ...features.core,
        ...features.adSpy,
        ...features.analysis,
        ...features.generation,
        ...features.optimization
      ],
      cta: billingCycle === "monthly" ? "Subscribe Monthly" : "Subscribe Annually",
      icon: <Calendar className="w-6 h-6" />,
      popular: billingCycle === "annual",
      color: "border-orange-200 bg-orange-50/50",
      savings: billingCycle === "annual" ? "Save 15%" : null
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-1 rounded-lg">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all relative ${
                billingCycle === "annual"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              {billingCycle === "annual" && (
                <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs">
                  Save 15%
                </Badge>
              )}
            </button>
          </div>
        </div>

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

        {/* Feature Comparison Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            All plans include the same comprehensive feature set. Choose based on your usage and billing preference.
          </p>
          <Button variant="link" className="text-orange-600 hover:text-orange-700">
            View detailed feature comparison →
          </Button>
        </div>
      </div>
    </section>
  );
};