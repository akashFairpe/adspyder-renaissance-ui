import { Globe, Unlock, Target, FileText } from 'lucide-react';

export const SemrushWhyChoose = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Ad Intelligence",
      description: "See ads by region, platform, and industry"
    },
    {
      icon: Unlock,
      title: "No Feature Lockdowns", 
      description: "All users get access to core tools"
    },
    {
      icon: Target,
      title: "Funnel-Level Competitor Tracking",
      description: "Go beyond keyword SEO"
    },
    {
      icon: FileText,
      title: "Agency-Ready Reporting",
      description: "Export branded insights in clicks"
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need. None of What You Don't.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <feature.icon className="h-8 w-8 text-orange-600" />
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