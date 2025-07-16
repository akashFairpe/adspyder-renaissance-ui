import { Users, Building, Rocket, TrendingUp } from 'lucide-react';

export const WhoUsesAdSpyder = () => {
  const userTypes = [
    {
      icon: Users,
      title: "Marketing Teams",
      description: "Scale your competitive intelligence"
    },
    {
      icon: Building,
      title: "Agencies", 
      description: "Deliver better client insights"
    },
    {
      icon: Rocket,
      title: "Founders",
      description: "Understand your market landscape"
    },
    {
      icon: TrendingUp,
      title: "Growth Hackers",
      description: "Find winning ad strategies"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Perfect for Marketers, Agencies, and Founders
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {userTypes.map((type, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-orange-100 rounded-full group-hover:bg-orange-200 transition-colors">
                  <type.icon className="h-10 w-10 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {type.title}
              </h3>
              <p className="text-muted-foreground">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};