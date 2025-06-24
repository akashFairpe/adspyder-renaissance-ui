
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, TrendingUp } from "lucide-react";

export const PricingPreview = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      period: "month",
      description: "Perfect for small businesses and freelancers",
      badge: null,
      features: [
        "10,000 ad searches per month",
        "3 platforms (Google, Facebook, YouTube)",
        "Basic analytics dashboard",
        "Email support",
        "Export up to 500 ads"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "149",
      period: "month",
      description: "Ideal for growing agencies and marketing teams",
      badge: "Most Popular",
      features: [
        "100,000 ad searches per month",
        "10+ platforms included",
        "Advanced analytics & reporting",
        "Priority support",
        "Unlimited exports",
        "Team collaboration tools",
        "Custom alerts"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "499",
      period: "month",
      description: "For large organizations with advanced needs",
      badge: "Best Value",
      features: [
        "Unlimited ad searches",
        "All 15+ platforms",
        "White-label reporting",
        "Dedicated account manager",
        "API access",
        "Custom integrations",
        "Advanced team management",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700">
            Simple Pricing
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose your
            <span className="text-blue-600"> perfect plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with our 14-day free trial. No credit card required. 
            Cancel anytime. All plans include full platform access.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-gray-600">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-12 h-6 bg-gray-300 rounded-full cursor-pointer"></div>
              <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform"></div>
            </div>
            <span className="text-gray-600">
              Annual 
              <Badge className="ml-2 bg-green-100 text-green-700">Save 20%</Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 bg-white border-2 transition-all duration-300 hover:shadow-xl relative ${
                plan.popular 
                  ? 'border-blue-500 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  {plan.badge}
                </Badge>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>

                <Button 
                  className={`w-full py-3 ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                  {plan.popular && <Star className="ml-2 h-4 w-4" />}
                </Button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Elements */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">14 Days</div>
              <div className="text-gray-600">Free Trial</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 mb-2">No Setup</div>
              <div className="text-gray-600">Fees</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-2">Cancel</div>
              <div className="text-gray-600">Anytime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 50,000+ marketers already using AdSpyder to dominate their competition. 
            Start your free trial today and see the difference quality ad intelligence makes.
          </p>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
            Start Free Trial Now
            <TrendingUp className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
