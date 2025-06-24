
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
import { Menu, Search, Target, BarChart3, Zap, Users, Building2, Briefcase } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const adLibraryItems = [
    { title: "Google Ad Spy", href: "/google-ads", description: "Discover competitor Google advertising strategies" },
    { title: "Facebook Ad Spy", href: "/facebook-ads", description: "Analyze Meta advertising campaigns" },
    { title: "YouTube Ad Spy", href: "/youtube-ads", description: "Video advertising intelligence" },
    { title: "TikTok Ad Library", href: "/tiktok-ads", description: "Short-form video ad insights" },
    { title: "LinkedIn Ad Library", href: "/linkedin-ads", description: "B2B advertising intelligence" },
    { title: "Shopping Ad Spy", href: "/shopping-ads", description: "E-commerce advertising data" },
    { title: "Bing Ad Spy", href: "/bing-ads", description: "Microsoft advertising insights" },
    { title: "Amazon Ad Library", href: "/amazon-ads", description: "Marketplace advertising intelligence" },
    { title: "Twitter Ad Library", href: "/twitter-ads", description: "Social media advertising data" },
    { title: "Display Ad Spy", href: "/display-ads", description: "Banner and display advertising" },
  ];

  const analysisItems = [
    { title: "Ad Analysis", href: "/ad-analysis", description: "Deep dive into ad performance metrics" },
    { title: "Domain Analysis", href: "/domain-analysis", description: "Competitor website intelligence" },
    { title: "Landing Page Analysis", href: "/landing-page-analysis", description: "Conversion optimization insights" },
  ];

  const generationItems = [
    { title: "Text Ad Generation", href: "/text-ad-generation", description: "AI-powered ad copy creation" },
    { title: "Image Ad Generation", href: "/image-ad-generation", description: "Visual ad content creation" },
  ];

  const profileItems = [
    { title: "Ad Agencies", href: "/ad-agencies", description: "Solutions for advertising agencies" },
    { title: "D2C Brands", href: "/d2c-brands", description: "Direct-to-consumer brand tools" },
    { title: "Freelancers", href: "/freelancers", description: "Individual marketer solutions" },
    { title: "Affiliates", href: "/affiliates", description: "Affiliate marketing intelligence" },
  ];

  const useCaseItems = [
    { title: "Dental Clinic", href: "/dental-clinic", description: "Healthcare marketing insights" },
    { title: "Real Estate", href: "/real-estate", description: "Property marketing intelligence" },
    { title: "Travel Agency", href: "/travel-agency", description: "Tourism advertising strategies" },
    { title: "Online Betting Sites", href: "/betting-sites", description: "Gaming industry advertising" },
    { title: "Restaurants", href: "/restaurants", description: "Food service marketing" },
    { title: "Retail", href: "/retail", description: "Retail advertising intelligence" },
  ];

  const platformItems = [
    { title: "Google Ads", href: "/google-ads-platform", description: "Google advertising platform insights" },
    { title: "Meta Ads", href: "/meta-ads-platform", description: "Facebook & Instagram advertising" },
    { title: "Bing Ads", href: "/bing-ads-platform", description: "Microsoft advertising platform" },
    { title: "LinkedIn Ads", href: "/linkedin-ads-platform", description: "Professional advertising platform" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AdSpyder</span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <a href="/" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
                  Home
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                  Ad Library
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {adLibraryItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                  Analysis
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-6">
                    <div className="space-y-2">
                      {analysisItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                  Ad Generation
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[350px] p-6">
                    <div className="space-y-2">
                      {generationItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Profile</h4>
                        <div className="space-y-2">
                          {profileItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="block p-2 rounded hover:bg-gray-50 transition-colors"
                            >
                              <div className="font-medium text-gray-900 text-sm">{item.title}</div>
                              <div className="text-xs text-gray-600">{item.description}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Use Cases</h4>
                        <div className="space-y-2">
                          {useCaseItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="block p-2 rounded hover:bg-gray-50 transition-colors"
                            >
                              <div className="font-medium text-gray-900 text-sm">{item.title}</div>
                              <div className="text-xs text-gray-600">{item.description}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                  Platform
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[350px] p-6">
                    <div className="space-y-2">
                      {platformItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/case-studies" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
                  Case Studies
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/pricing" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
                  Pricing
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/blog" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
                  Blog
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="py-6">
                <div className="space-y-4">
                  <a href="/" className="block py-2 text-gray-700 font-medium">Home</a>
                  <a href="/ad-library" className="block py-2 text-gray-700 font-medium">Ad Library</a>
                  <a href="/analysis" className="block py-2 text-gray-700 font-medium">Analysis</a>
                  <a href="/generation" className="block py-2 text-gray-700 font-medium">Ad Generation</a>
                  <a href="/solutions" className="block py-2 text-gray-700 font-medium">Solutions</a>
                  <a href="/platform" className="block py-2 text-gray-700 font-medium">Platform</a>
                  <a href="/case-studies" className="block py-2 text-gray-700 font-medium">Case Studies</a>
                  <a href="/pricing" className="block py-2 text-gray-700 font-medium">Pricing</a>
                  <a href="/blog" className="block py-2 text-gray-700 font-medium">Blog</a>
                </div>
                <div className="mt-8 space-y-3">
                  <Button variant="outline" className="w-full">Login</Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
