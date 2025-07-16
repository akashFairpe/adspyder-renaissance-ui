import { Zap, Globe, DollarSign, Target } from 'lucide-react';

export const WhyChooseAdSpyder = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-Time Ad Intelligence",
      description: "Live campaigns, not stale data."
    },
    {
      icon: Globe,
      title: "Monitor 100+ Countries", 
      description: "Access global ads without premium pricing."
    },
    {
      icon: DollarSign,
      title: "Transparent, Fair Pricing",
      description: "No surprise quotes. Just honest plans."
    },
    {
      icon: Target,
      title: "Competitor Funnel Tracking",
      description: "See more than traffic — view full landing pages."
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Built for Modern Marketers, Not Just Analysts
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};