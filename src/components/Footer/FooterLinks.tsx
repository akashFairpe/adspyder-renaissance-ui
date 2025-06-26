import { Search, TrendingUp, PenTool, User, Briefcase, Globe, BookOpen } from "lucide-react";

export const FooterLinks = () => {
  const featuresItems = [
    {
      title: "Ad Library",
      icon: <Search className="h-4 w-4" />,
      items: [
        { name: "Google Ad Spy", href: "/google-ad-spy" },
        { name: "Facebook Ad Spy", href: "/facebook-ad-spy" },
        { name: "YouTube Ad Spy", href: "/youtube-ad-spy" },
        { name: "TikTok Ad Library", href: "/tiktok-ad-library" },
        { name: "LinkedIn Ad Library", href: "/linkedin-ad-library" },
        { name: "Shopping Ad Spy", href: "/shopping-ad-spy" },
        { name: "Bing Ad Spy", href: "/bing-ad-spy" },
        { name: "Amazon Ad Library", href: "/amazon-ad-library" },
        { name: "Twitter Ad Library", href: "/twitter-ad-library" },
        { name: "Display Ad Spy", href: "/display-ad-spy" }
      ]
    },
    {
      title: "Ad Analysis",
      icon: <TrendingUp className="h-4 w-4" />,
      items: [
        { name: "Ad Analytics", href: "/ad-analytics" },
        { name: "Domain Analysis", href: "/domain-analysis" },
        { name: "Landing Page Analysis", href: "/landing-page-analysis" }
      ]
    },
    {
      title: "Ad Generation",
      icon: <PenTool className="h-4 w-4" />,
      items: [
        { name: "Text Ad Generation", href: "/text-ad-generation" },
        { name: "Image Ad Generation", href: "/image-ad-generation" }
      ]
    }
  ];

  const solutionsItems = [
    {
      title: "Profile",
      icon: <User className="h-4 w-4" />,
      href: "/profile",
      items: [
        { name: "Ad Agencies", href: "/ad-agencies" },
        { name: "D2C Brands", href: "/d2c-brands" },
        { name: "Freelancers", href: "/freelancers" },
        { name: "Affiliates", href: "/affiliates" }
      ]
    },
    {
      title: "Use Case",
      icon: <Briefcase className="h-4 w-4" />,
      href: "/use-cases",
      items: [
        { name: "Dental Clinic", href: "/dental-clinic" },
        { name: "Real Estate", href: "/real-estate" },
        { name: "Travel Agency", href: "/travel-agency" },
        { name: "Online Betting Sites", href: "/online-betting-sites" },
        { name: "Restaurants", href: "/restaurants" },
        { name: "Retail", href: "/retail" }
      ]
    },
    {
      title: "Platform",
      icon: <Globe className="h-4 w-4" />,
      href: "/platform",
      items: [
        { name: "Google Ads", href: "/google-ads" },
        { name: "Meta Ads", href: "/meta-ads" },
        { name: "Bing Ads", href: "/bing-ads" },
        { name: "LinkedIn Ads", href: "/linkedin-ads" }
      ]
    },
    {
      title: "Case Study",
      icon: <BookOpen className="h-4 w-4" />,
      href: "/case-studies",
      items: [
        { name: "View All Case Studies", href: "/case-studies" }
      ]
    }
  ];

  const compareItems = [
    { name: "Vs Poweradspy", href: "/vs-poweradspy" },
    { name: "Vs BigSpy", href: "/vs-bigspy" },
    { name: "Vs AdSpy", href: "/vs-adspy" },
    { name: "Vs Adplexity", href: "/vs-adplexity" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {/* Features */}
      {featuresItems.map((section) => (
        <div key={section.title}>
          <h4 className="font-semibold text-white mb-4 flex items-center">
            {section.icon}
            <span className="ml-2">{section.title}</span>
          </h4>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Solutions */}
      {solutionsItems.map((section) => (
        <div key={section.title}>
          <h4 className="font-semibold text-white mb-4 flex items-center">
            {section.icon}
            <a 
              href={section.href}
              className="ml-2 hover:text-orange-400 transition-colors"
            >
              {section.title}
            </a>
          </h4>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Compare Section */}
      <div>
        <h4 className="font-semibold text-white mb-4">Compare</h4>
        <ul className="space-y-2">
          {compareItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
