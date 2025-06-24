import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Target, Search, Settings, Users, BookOpen, DollarSign, Zap, TrendingUp, Globe, Eye, PenTool, Building, User, MapPin, Briefcase } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">AdSpyder</span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <a href="/" className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors rounded-md hover:bg-orange-50">
                  Home
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-orange-600 inline-flex items-center space-x-1 px-4 py-2 hover:bg-orange-50 rounded-md">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-6">
                    <div className="grid grid-cols-3 gap-8">
                      {featuresItems.map((section) => (
                        <div key={section.title} className={section.title === "Ad Library" ? "col-span-2" : ""}>
                          <h4 className="font-semibold text-orange-600 mb-4 flex items-center">
                            {section.title === "Ad Library" && <Search className="h-4 w-4 mr-2" />}
                            {section.title === "Ad Analysis" && <TrendingUp className="h-4 w-4 mr-2" />}
                            {section.title === "Ad Generation" && <PenTool className="h-4 w-4 mr-2" />}
                            {section.title}
                          </h4>
                          {section.title === "Ad Library" ? (
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                              {section.items.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="text-sm text-gray-600 hover:text-orange-600 transition-colors block py-1"
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          ) : (
                            <ul className="space-y-2">
                              {section.items.map((item) => (
                                <li key={item.name}>
                                  <a
                                    href={item.href}
                                    className="text-sm text-gray-600 hover:text-orange-600 transition-colors block py-1"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-orange-600 inline-flex items-center space-x-1 px-4 py-2 hover:bg-orange-50 rounded-md">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-6">
                    <div className="grid grid-cols-4 gap-6">
                      {solutionsItems.map((section) => (
                        <div key={section.title}>
                          <h4 className="font-semibold text-orange-600 mb-4 flex items-center">
                            {section.title === "Profile" && <User className="h-4 w-4 mr-2" />}
                            {section.title === "Use Case" && <Briefcase className="h-4 w-4 mr-2" />}
                            {section.title === "Platform" && <Globe className="h-4 w-4 mr-2" />}
                            {section.title === "Case Study" && <BookOpen className="h-4 w-4 mr-2" />}
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className="text-sm text-gray-600 hover:text-orange-600 transition-colors block py-1"
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
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/pricing" className="inline-flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors rounded-md hover:bg-orange-50">
                  <DollarSign className="h-4 w-4" />
                  <span>Pricing</span>
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/blog" className="inline-flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors rounded-md hover:bg-orange-50">
                  <BookOpen className="h-4 w-4" />
                  <span>Blog</span>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-orange-600 hover:bg-orange-50">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="py-6">
                <div className="space-y-4">
                  <a href="/" className="block py-2 text-gray-700 font-medium hover:text-orange-600">Home</a>
                  <a href="/features" className="block py-2 text-gray-700 font-medium hover:text-orange-600">Features</a>
                  <a href="/solutions" className="block py-2 text-gray-700 font-medium hover:text-orange-600">Solutions</a>
                  <a href="/pricing" className="block py-2 text-gray-700 font-medium hover:text-orange-600">Pricing</a>
                  <a href="/blog" className="block py-2 text-gray-700 font-medium hover:text-orange-600">Blog</a>
                </div>
                <div className="mt-8 space-y-3">
                  <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                    Login
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
