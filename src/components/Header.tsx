
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
import { Menu, Target, Search, Settings, Users, BookOpen, DollarSign, Zap, TrendingUp } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const featuresItems = [
    { title: "Ad Library", href: "/ad-library", icon: Search, description: "Browse millions of ads" },
    { title: "Ad Analysis", href: "/ad-analysis", icon: TrendingUp, description: "Deep performance insights" },
    { title: "Ad Generation", href: "/ad-generation", icon: Zap, description: "AI-powered ad creation" },
  ];

  const solutionsItems = [
    { title: "For Agencies", href: "/agencies", icon: Users, description: "Scale your client campaigns" },
    { title: "For D2C Brands", href: "/d2c-brands", icon: Target, description: "Direct-to-consumer growth" },
    { title: "Case Studies", href: "/case-studies", icon: BookOpen, description: "Success stories" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AdSpyder</span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <a href="/" className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-md hover:bg-blue-50">
                  <Target className="h-4 w-4 mr-2" />
                  Home
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 inline-flex items-center space-x-1 px-4 py-2 hover:bg-blue-50 rounded-md">
                  <Search className="h-4 w-4" />
                  <span>Features</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[450px] p-6">
                    <div className="grid grid-cols-1 gap-4">
                      {featuresItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all group"
                        >
                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                            <item.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600">{item.title}</div>
                            <div className="text-sm text-gray-600">{item.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 inline-flex items-center space-x-1 px-4 py-2 hover:bg-blue-50 rounded-md">
                  <Users className="h-4 w-4" />
                  <span>Solutions</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[450px] p-6">
                    <div className="grid grid-cols-1 gap-4">
                      {solutionsItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all group"
                        >
                          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
                            <item.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-green-600">{item.title}</div>
                            <div className="text-sm text-gray-600">{item.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/pricing" className="inline-flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-md hover:bg-blue-50">
                  <DollarSign className="h-4 w-4" />
                  <span>Pricing</span>
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/blog" className="inline-flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-md hover:bg-blue-50">
                  <BookOpen className="h-4 w-4" />
                  <span>Blog</span>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all">
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
                  <a href="/" className="block py-2 text-gray-700 font-medium hover:text-blue-600">Home</a>
                  <a href="/features" className="block py-2 text-gray-700 font-medium hover:text-blue-600">Features</a>
                  <a href="/solutions" className="block py-2 text-gray-700 font-medium hover:text-blue-600">Solutions</a>
                  <a href="/pricing" className="block py-2 text-gray-700 font-medium hover:text-blue-600">Pricing</a>
                  <a href="/blog" className="block py-2 text-gray-700 font-medium hover:text-blue-600">Blog</a>
                </div>
                <div className="mt-8 space-y-3">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    Login
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
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
