
import { useState } from "react";
import { Target, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DesktopMenu } from "@/components/Navigation/DesktopMenu";
import { MobileMenu } from "@/components/Navigation/MobileMenu";
import { navigationConfig } from "@/config/navigation";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="hidden lg:flex items-center space-x-8">
            <DesktopMenu items={navigationConfig} />
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-orange-600">
                Login
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-orange-600">
                Sign Up
              </Button>
            </div>
          </div>

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
            <MobileMenu items={navigationConfig} onLinkClick={() => setIsMenuOpen(false)} />
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-orange-600">
                Login
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-orange-600">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
