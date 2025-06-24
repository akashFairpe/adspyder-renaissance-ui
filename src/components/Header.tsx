
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
import { Menu, Target, Search, Settings, Users, BookOpen, DollarSign } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const featuresItems = [
    { title: "Ad Library", href: "/ad-library", icon: Search },
    { title: "Ad Analysis", href: "/ad-analysis", icon: Settings },
    { title: "Ad Generation", href: "/ad-generation", icon: BookOpen },
  ];

  const solutionsItems = [
    { title: "For Agencies", href: "/agencies", icon: Users },
    { title: "For D2C Brands", href: "/d2c-brands", icon: Target },
    { title: "Case Studies", href: "/case-studies", icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-[#e39000]" />
            <span className="text-2xl font-bold text-[#111827]">AdSpyder</span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <a href="/" className="inline-flex items-center px-4 py-2 text-[#111827] hover:text-[#e39000] font-medium transition-colors rounded-md hover:bg-gray-50">
                  Home
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#111827] hover:text-[#e39000] inline-flex items-center space-x-1">
                  <Search className="h-4 w-4" />
                  <span>Features</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-6">
                    <div className="grid grid-cols-1 gap-4">
                      {featuresItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <item.icon className="h-5 w-5 text-[#e39000]" />
                          <span className="text-sm font-medium text-gray-900">{item.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#111827] hover:text-[#e39000] inline-flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>Solutions</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-6">
                    <div className="grid grid-cols-1 gap-4">
                      {solutionsItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <item.icon className="h-5 w-5 text-[#e39000]" />
                          <span className="text-sm font-medium text-gray-900">{item.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/pricing" className="inline-flex items-center space-x-1 px-4 py-2 text-[#111827] hover:text-[#e39000] font-medium transition-colors rounded-md hover:bg-gray-50">
                  <DollarSign className="h-4 w-4" />
                  <span>Pricing</span>
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/blog" className="inline-flex items-center space-x-1 px-4 py-2 text-[#111827] hover:text-[#e39000] font-medium transition-colors rounded-md hover:bg-gray-50">
                  <BookOpen className="h-4 w-4" />
                  <span>Blog</span>
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
            <SheetContent side="right" className="w-80 bg-white">
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
