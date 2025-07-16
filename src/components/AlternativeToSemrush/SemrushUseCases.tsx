import { TrendingUp, Palette, Building, Rocket } from 'lucide-react';

export const SemrushUseCases = () => {
  const useCases = [
    {
      icon: TrendingUp,
      title: "Performance Marketers",
      description: "Scale campaigns with competitive intelligence"
    },
    {
      icon: Palette,
      title: "Creative Strategists", 
      description: "Discover winning ad formats and copy"
    },
    {
      icon: Building,
      title: "Marketing Agencies",
      description: "Deliver superior client insights"
    },
    {
      icon: Rocket,
      title: "Bootstrapped Founders",
      description: "Compete with bigger budgets"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Built for More Than SEO Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're scaling ads or uncovering competitor strategies, AdSpyder adapts to your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <useCase.icon className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};