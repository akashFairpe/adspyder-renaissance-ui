import { Clock, Bot, Mail, TrendingUp, DollarSign } from "lucide-react";

export const AISalesAgentBenefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Sales Coverage",
      description: "Never miss a lead with round-the-clock automated sales assistance"
    },
    {
      icon: Bot,
      title: "Automated Lead Qualification",
      description: "Instantly qualify prospects and route high-value leads to your team"
    },
    {
      icon: Mail,
      title: "Hyper-Personalized Outreach",
      description: "AI-generated messages tailored to each prospect's specific needs"
    },
    {
      icon: TrendingUp,
      title: "Scalable Sales Ops",
      description: "Handle thousands of prospects simultaneously without hiring more staff"
    },
    {
      icon: DollarSign,
      title: "Lower Customer Acquisition Costs (CAC)",
      description: "Reduce sales costs while increasing conversion rates and efficiency"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
            Benefits of AI Sales Agents
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};