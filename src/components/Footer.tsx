
import { Button } from "@/components/ui/button";
import { Target, Award, Search, TrendingUp, PenTool, User, Briefcase, Globe, BookOpen, DollarSign, Chrome, Download, Star } from "lucide-react";

export const Footer = () => {
  const featuresItems = [
    {
      title: "Ad Library",
      items: [
        { name: "Google Ad Spy", href: "/google-ads" },
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
      items: [
        { name: "Domain Analysis", href: "/domain-analysis" },
        { name: "Landing Page Analysis", href: "/landing-page-analysis" }
      ]
    },
    {
      title: "Ad Generation",
      items: [
        { name: "Text Ad Generation", href: "/text-ad-generation" },
        { name: "Image Ad Generation", href: "/image-ad-generation" }
      ]
    }
  ];

  const solutionsItems = [
    {
      title: "Profile",
      items: [
        { name: "Ad Agencies", href: "/ad-agencies" },
        { name: "D2C Brands", href: "/d2c-brands" },
        { name: "Freelancers", href: "/freelancers" },
        { name: "Affiliates", href: "/affiliates" }
      ]
    },
    {
      title: "Use Case",
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
      items: [
        { name: "Google Ads", href: "/google-ads-platform" },
        { name: "Meta Ads", href: "/meta-ads-platform" },
        { name: "Bing Ads", href: "/bing-ads-platform" },
        { name: "LinkedIn Ads", href: "/linkedin-ads-platform" }
      ]
    },
    {
      title: "Case Study",
      items: [
        { name: "View All Case Studies", href: "/case-studies" }
      ]
    }
  ];

  return (
    <footer className="bg-[#111827] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Brand Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Target className="h-8 w-8 text-[#e39000]" />
              <span className="text-2xl font-bold">AdSpyder</span>
            </div>
            
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The world's most comprehensive ad intelligence platform. 
              Spy on competitor ads across 15+ platforms and dominate your market 
              with data-driven advertising strategies.
            </p>
          </div>

          {/* Chrome Extension Promotion */}
          <div className="bg-gradient-to-r from-[#e39000] to-orange-600 rounded-xl p-8 mb-12 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Chrome className="h-8 w-8 text-white" />
              <h3 className="text-2xl font-bold text-white">AdSpyder Chrome Extension</h3>
            </div>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get instant domain ad analysis and competitor insights right in your browser. 
              Access powerful ad intelligence tools with just one click while browsing any website.
            </p>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-yellow-300 fill-current" />
                ))}
              </div>
              <span className="text-white/90 text-sm">Rated 4.8/5 by 10,000+ users</span>
            </div>
            <Button 
              asChild
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all"
            >
              <a 
                href="https://chromewebstore.google.com/detail/adspyder-get-domain-ad-an/dpfdbgmgkemmfbmmjgikggnljphokpij" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Add to Chrome - Free</span>
              </a>
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Features Columns */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-white mb-4 flex items-center">
                <Search className="h-4 w-4 mr-2" />
                Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuresItems.map((section) => (
                  <div key={section.title}>
                    <h5 className="text-sm font-medium text-gray-300 mb-2">{section.title}</h5>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="block text-sm text-gray-400 hover:text-[#e39000] transition-colors py-1"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions Columns */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-white mb-4 flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                Solutions
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solutionsItems.map((section) => (
                  <div key={section.title}>
                    <h5 className="text-sm font-medium text-gray-300 mb-2">{section.title}</h5>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="block text-sm text-gray-400 hover:text-[#e39000] transition-colors py-1"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="font-semibold text-white mb-4 flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Resources
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/pricing" className="hover:text-[#e39000] transition-colors flex items-center"><DollarSign className="h-3 w-3 mr-1" />Pricing</a></li>
                <li><a href="/blog" className="hover:text-[#e39000] transition-colors">Blog</a></li>
                <li><a href="/google-ads-spy" className="hover:text-[#e39000] transition-colors">Google Ads Spy</a></li>
                <li><a href="/facebook-ads-spy" className="hover:text-[#e39000] transition-colors">Facebook Ads Spy</a></li>
                <li><a href="/youtube-ads-spy" className="hover:text-[#e39000] transition-colors">Youtube Ads Spy</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/free-demo" className="hover:text-[#e39000] transition-colors">Free Demo</a></li>
                <li><a href="/contact-us" className="hover:text-[#e39000] transition-colors">Contact us</a></li>
                <li><a href="/terms-condition" className="hover:text-[#e39000] transition-colors">Terms & Condition</a></li>
                <li><a href="/privacy-policy" className="hover:text-[#e39000] transition-colors">Privacy Policy</a></li>
                <li><a href="/refund-policy" className="hover:text-[#e39000] transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © GSTECH TECHNOLOGY PRIVATE LIMITED
            </div>
            <div className="bg-white rounded-lg p-3 flex items-center space-x-2">
              <Award className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-800">Google Partner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
