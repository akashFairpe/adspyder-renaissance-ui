
import { Search, TrendingUp, PenTool, User, Briefcase, Globe, BookOpen } from "lucide-react";

export const FooterLinks = () => {
  const featuresItems = [
    {
      title: "Ad Library",
      icon: <Search className="h-4 w-4" />,
      items: [
        { name: "Google Ad Spy", href: "/ad-library" },
        { name: "Facebook Ad Spy", href: "/facebook-ads" },
        { name: "YouTube Ad Spy", href: "/youtube-ads" },
        { name: "TikTok Ad Library", href: "/tiktok-ads" },
        { name: "LinkedIn Ad Library", href: "/linkedin-ads" },
        { name: "Shopping Ad Spy", href: "/shopping-ads" },
        { name: "Bing Ad Spy", href: "/bing-ads" },
        { name: "Amazon Ad Library", href: "/amazon-ads" },
        { name: "Twitter Ad Library", href: "/twitter-ads" },
        { name: "Display Ad Spy", href: "/display-ads" }
      ]
    },
    {
      title: "Ad Analysis",
      icon: <TrendingUp className="h-4 w-4" />,
      items: [
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
      items: [
        { name: "Dental Clinic", href: "/dental-clinic" },
        { name: "Real Estate", href: "/real-estate" },
        { name: "Travel Agency", href: "/travel-agency" },
        { name: "Online Betting Sites", href: "/betting-sites" },
        { name: "Restaurants", href: "/restaurants" },
        { name: "Retail", href: "/retail" }
      ]
    },
    {
      title: "Platform",
      icon: <Globe className="h-4 w-4" />,
      items: [
        { name: "Google Ads", href: "/google-ads-platform" },
        { name: "Meta Ads", href: "/meta-ads-platform" },
        { name: "Bing Ads", href: "/bing-ads-platform" },
        { name: "LinkedIn Ads", href: "/linkedin-ads-platform" }
      ]
    },
    {
      title: "Case Study",
      icon: <BookOpen className="h-4 w-4" />,
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
