
import { useState } from "react";
import { Target, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              AdSpyder
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <Link to="/ad-library" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Ad Library
              </Link>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Ad Analysis
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Ad Generation
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Pricing
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-orange-600">
                Login
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Start Free Trial
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 text-left font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors">
                  <span>Ad Library</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-2">
                  <Link 
                    to="/ad-library" 
                    className="block py-2 px-4 text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Google Ad Spy
                  </Link>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors">
                    Facebook Ad Spy
                  </a>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors">
                    YouTube Ad Spy
                  </a>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 text-left font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors">
                  <span>Ad Analysis</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-2">
                  <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors">
                    Domain Analysis
                  </a>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors">
                    Landing Page Analysis
                  </a>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 text-left font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors">
                  <span>Ad Generation</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-2">
                  <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors">
                    Text Ad Generation
                  </a>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors">
                    Image Ad Generation
                  </a>
                </CollapsibleContent>
              </Collapsible>

              <a href="#" className="block py-2 px-4 font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors">
                Pricing
              </a>

              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-orange-600">
                  Login
                </Button>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
