
import { Target, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { FooterLinks } from "./Footer/FooterLinks";
import { ChromeExtension } from "./Footer/ChromeExtension";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Chrome Extension Section */}
        <div className="mb-16">
          <ChromeExtension />
        </div>
        
        <Separator className="bg-gray-700 mb-12" />
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                AdSpyder
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The ultimate ad intelligence platform for marketers, agencies, and brands. 
              Discover, analyze, and optimize your advertising strategies with real-time data.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">support@adspyder.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <FooterLinks />
          </div>
        </div>
        
        <Separator className="bg-gray-700 mb-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 AdSpyder. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Cookie Policy
            </a>
            <a href="/refund" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Refund Policy
            </a>
            <a href="/google-api-disclosure" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Google API Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
