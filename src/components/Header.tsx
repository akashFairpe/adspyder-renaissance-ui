
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
import { Menu, Target } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const adLibraryItems = [
    { title: "Google Ad Spy", href: "/google-ads" },
    { title: "Facebook Ad Spy", href: "/facebook-ads" },
    { title: "YouTube Ad Spy", href: "/youtube-ads" },
    { title: "TikTok Ad Library", href: "/tiktok-ads" },
    { title: "LinkedIn Ad Library", href: "/linkedin-ads" },
    { title: "Shopping Ad Spy", href: "/shopping-ads" },
    { title: "Bing Ad Spy", href: "/bing-ads" },
    { title: "Amazon Ad Library", href: "/amazon-ads" },
    { title: "Twitter Ad Library", href: "/twitter-ads" },
    { title: "Display Ad Spy", href: "/display-ads" },
  ];

  const analysisItems = [
    { title: "Domain Analysis", href: "/domain-analysis" },
    { title: "Landing Page Analysis", href: "/landing-page-analysis" },
  ];

  const generationItems = [
    { title: "Text Ad Generation", href: "/text-ad-generation" },
    { title: "Image Ad Generation", href: "/image-ad-generation" },
  ];

  const profileItems = [
    { title: "Ad Agencies", href: "/ad-agencies" },
    { title: "D2C Brands", href: "/d2c-brands" },
    { title: "Freelancers", href: "/freelancers" },
    { title: "Affiliates", href: "/affiliates" },
  ];

  const useCaseItems = [
    { title: "Dental Clinic", href: "/dental-clinic" },
    { title: "Real Estate", href: "/real-estate" },
    { title: "Travel Agency", href: "/travel-agency" },
    { title: "Online Betting Sites", href: "/betting-sites" },
    { title: "Restaurants", href: "/restaurants" },
    { title: "Retail", href: "/retail" },
  ];

  const platformItems = [
    { title: "Google Ads", href: "/google-ads-platform" },
    { title: "Meta Ads", href: "/meta-ads-platform" },
    { title: "Bing Ads", href: "/bing-ads-platform" },
    { title: "LinkedIn Ads", href: "/linkedin-ads-platform" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fcfdff] border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-[#e39000]" />
            <span className="text-2xl font-bold text-[#111827]">AdSpyder</span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <a href="/" className="px-4 py-2 text-[#111827] hover:text-[#e39000] font-medium transition-colors">
                  Home
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#111827] hover:text-[#e39000]">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[700px] p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#111827] mb-3">Ad Library</h4>
                        <div className="space-y-2">
                          {adLibraryItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="block p-2 rounded hover:bg-gray-50 transition-colors text-sm text-gray-600 hover:text-[#e39000]"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#111827] mb-3">Ad Analysis</h4>
                        <div className="space-y-2">
                          {analysisItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="block p-2 rounded hover:bg-gray-50 transition-colors text-sm text-gray-600 hover:text-[#e39000]"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#111827] mb-3">Ad Generation</h4>
                        <div className="space-y-2">
                          {generationItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="block p-2 rounded hover:bg-gray-50 transition-colors text-sm text-gray-600 hover:text-[#e39000]"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#111827] hover:text-[#e39000]">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#111827] mb-3">Profile</h4>
                        <div className="space-y-2">
                          {profileItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="block p-2 rounded hover:bg-gray-50 transition-colors text-sm text-gray-600 hover:text-[#e39000]"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#111827] mb-3">Use Case</h4>
                        <div className="space-y-2">
                          {useCaseItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="block p-2 rounded hover:bg-gray-50 transition-colors text-sm text-gray-600 hover:text-[#e39000]"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#111827] mb-3">Platform</h4>
                        <div className="space-y-2">
                          {platformItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="block p-2 rounded hover:bg-gray-50 transition-colors text-sm text-gray-600 hover:text-[#e39000]"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                        <div className="mt-4">
                          <a href="/case-studies" className="block p-2 rounded hover:bg-gray-50 transition-colors text-sm font-semibold text-[#111827] hover:text-[#e39000]">
                            Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/pricing" className="px-4 py-2 text-[#111827] hover:text-[#e39000] font-medium transition-colors">
                  Pricing
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/blog" className="px-4 py-2 text-[#111827] hover:text-[#e39000] font-medium transition-colors">
                  Blog
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-[#111827] hover:text-[#e39000] hover:bg-gray-50">
              Login
            </Button>
            <Button className="bg-[#e39000] hover:bg-[#e39000]/90 text-white font-semibold">
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
            <SheetContent side="right" className="w-80 bg-[#fcfdff]">
              <div className="py-6">
                <div className="space-y-4">
                  <a href="/" className="block py-2 text-[#111827] font-medium">Home</a>
                  <a href="/features" className="block py-2 text-[#111827] font-medium">Features</a>
                  <a href="/solutions" className="block py-2 text-[#111827] font-medium">Solutions</a>
                  <a href="/pricing" className="block py-2 text-[#111827] font-medium">Pricing</a>
                  <a href="/blog" className="block py-2 text-[#111827] font-medium">Blog</a>
                </div>
                <div className="mt-8 space-y-3">
                  <Button variant="outline" className="w-full border-[#e39000] text-[#e39000] hover:bg-[#e39000] hover:text-white">
                    Login
                  </Button>
                  <Button className="w-full bg-[#e39000] hover:bg-[#e39000]/90 text-white">
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
