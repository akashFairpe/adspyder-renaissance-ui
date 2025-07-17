import { ExternalLink, Users, Megaphone, Store, Building, Rocket, Factory, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const communityGroups = [
  {
    title: "AdSpyder Announcements",
    description: "Get the latest AdSpyder updates, feature drops, and offers.",
    icon: Megaphone,
    url: "https://chat.whatsapp.com/CK4JlRpo1CK792MZHp2ZCx",
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Ecom & D2C Brands – Ad Success Formula",
    description: "Join top-performing D2C brands and learn what ad strategies actually convert.",
    icon: Store,
    url: "https://chat.whatsapp.com/Cr0646hslbJ1ATCyqH0vIr",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Agencies – Manage Ads Like a Boss",
    description: "For digital agencies handling multiple clients – scale smarter, not harder.",
    icon: Building,
    url: "https://chat.whatsapp.com/EiYAjPm1serLrUPXPJ867o",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Startup Founders",
    description: "Learn how startups hack ad visibility and traction with limited budgets.",
    icon: Rocket,
    url: "https://chat.whatsapp.com/BoRz5DVwFR56pNcWGp6OKu",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Manufacturers – B2B Leads at Scale",
    description: "Crack the B2B code. Generate leads using niche ad techniques.",
    icon: Factory,
    url: "https://chat.whatsapp.com/IMJudRcmVRh3V0OTnyFCR5",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "PPC Marketers",
    description: "Deep-dive into ad copy, bidding strategies, and funnel testing.",
    icon: Target,
    url: "https://chat.whatsapp.com/DymExbAXUeTCZUEcBBuaLc",
    color: "from-red-500 to-red-600"
  },
  {
    title: "Freelancers",
    description: "Get clients, showcase your ad wins, and collaborate with others.",
    icon: Briefcase,
    url: "https://chat.whatsapp.com/FUWOkgerd0dDzFKBY2DyhO",
    color: "from-teal-500 to-teal-600"
  }
];

export const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/30">
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Join Our Community</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Join the AdSpyder <br />
              <span className="text-orange-600">WhatsApp Community</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Choose the group that matches your journey. Connect with like-minded marketers, 
              get exclusive insights, and stay ahead of the competition.
            </p>
          </div>

          {/* Community Groups */}
          <div className="space-y-6">
            {communityGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <a
                  key={index}
                  href={group.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${group.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                          {group.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          {group.description}
                        </p>
                        
                        <div className="flex items-center space-x-2 text-orange-600 text-sm font-medium">
                          <span>Join WhatsApp Group</span>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Level Up Your Ad Game?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of marketers who are already using AdSpyder to dominate their competition.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};